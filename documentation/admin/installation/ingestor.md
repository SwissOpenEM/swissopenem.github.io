---
layout: page
title: Ingestor Installation
permalink: /documentation/admin/installation/ingestor
share-description: Instructions for installing the ingestor for OpenEM
---

## Installing the ingestor

{: .box-note}
**Note:** This is just an example of installing and running the service. You should adapt this method to your facility's needs.

### Running throuhg docker
1. Make sure that docker is up and running
2. Check that you have docker compose
3. Modify the config in the `docker-compose.yaml` file under the `configs.openem-ingestor-config.yaml` section according to your needs (see below).
4. Modify the environment variables according to your needs (remove service user parameters if you are using `ExtGlobus`).
5. Run `docker compose up` when you're done.

### Running without docker containerization
1. Install go
2. Create a VM or setup a bare-metal server for the ingestor. You can also run it on your own computer.
3. `git clone git@github.com:SwissOpenEM/Ingestor.git`
4. `cd [REPO_DIR]/cmd/openem-ingestor-service`
5. `go build -o build/ingestor .`
6. setup a config under `build/openem-ingestor-config.yaml` or `~/.config/openem-ingestor/openem-ingestor-config.yaml`
7. set environment variables, if necessary, here
8. `./build/ingestor` launches the ingestor.

## Create a base configuration for the ingestor

{: .box-note}
**Note:** Additional information can be found [here](https://github.com/SwissOpenEM/Ingestor/blob/main/configs/ReadMe.md)

Run the following command:

```bash
cp [REPO_DIR]/configs/openem-ingestor-config.yaml [REPO_DIR]/cmd/openem-ingestor-service/build/openem-ingestor-config.yaml
```

## Configuring the ingestor
### SciCat

The relevant section of the config for Scicat is:
```yaml
...
Scicat:
  Host: "https://scicat.backend/api/v3/"
...
```

### Transfer: PSI Globus Transfer Request Service - Recommended

```yaml
Transfer:
  Method: ExtGlobus
  ExtGlobus:
    TransferServiceUrl: "https://url.at.psi/globus/service"
    SrcFacility: "EXAMPLE-FACILITY-1" # "FAC-1" if you're using the default scicatlive setup 
    DstFacility: "EXAMPLE-FACILITY-2" # "FAC-2" if you're using the default scicatlive setup
    CollectionRootPath: "/some/path" # the path at which the Source Globus Collection is mounted (eg. '/home')
```

{: .box-note}
**Disable service account check**: using this mode, the `webserver.other.DisableServiceAccountCheck` should be set to `true`, as there's no need for any service account in the Ingestor in this mode.

### Transfer: Direct Globus Requests - Back-Up Option, not recommended

```yaml
...
Transfer:
  Method: Globus
  Globus:
    ClientID: "globus-auth-client-id"
    ClientSecret: "globus-auth-client-secret[optional]"
    RedirectURL: "[insert ingestor frontend url]"
    Scopes:
      - scope1
      - scope2
      ...
    SourceCollectionID: "uuid-of-source-collection"
    CollectionRootPath: "/insert/path/here"
    DestinationCollectionID: "uuid-of-destination-collection"
    DestinationTemplate: "/nacsa/{{ .Username }}/{{ replace .Pid \".\" \"_\" }}/{{ .DatasetFolder }}"
...
```

{: .box-note}
**Transfer.Globus.ClientID**: this should be set to the same client-id as the one you'll use in the next paragraph. You need to create a new client on `app.globus.org`, please check out the [following page]() for more information

{: .box-note}
**Scopes**: These will include scopes for accessing the Globus Connect Server endpoints you want to interact with in the name of the user. Usually, you're only required to specify the following scope for each endpoint: `"urn:globus:auth:scope:transfer.api.globus.org:all[*https://auth.globus.org/scopes/[ENDPOINT ID HERE]/data_access]"` where you replace `[ENDPOINT ID HERE]` with the endpoint's UUID.

{: .box-warning}
**Warning:** The source and destination endpoint scopes are only intended for Globus Connect Server endpoints. For Globus Connect Personal (GCP), just skip specifying the scope made from its `collection-id`. You have to make sure that the GCP collection is owned by the token's user.

{: .box-note}
**Service account**: using this mode, the `webserver.other.DisableServiceAccountCheck` should be set to `false`, and a service account must be set using the `INGESTOR_SERVICE_USER_NAME` and `INGESTOR_SERVICE_USER_PASS` environment variables. These are the credentials for an internal SciCat user, which has the right to update any dataset. It is needed in order to safely mark any dataset as archivable in this mode.

### Auth

The following section in the config file describes the necessary setup for authentication. Only OIDC is supported for SSO, and we don't provide any internal user login system.

```yaml
...
WebServer:
  Auth:
    ...
    FrontendUrl: "http://frontend.url" # optional value to set a redirect to a frontend.
    OAuth2:
      ClientID: "ingestor"
      RedirectURL: "http://localhost:8888/callback"
      Scopes:
        - email
    OIDC:
      IssuerURL: "http://oidc.provider/"
    JWT:
      UseJWKS: true
      JwksURL: "http://[OIDC_URL]/.../certs"
      JwksSignatureMethods:
        - RS256
    RBAC:
      AdminRole: "ingestor-admin"
      CreateModifyTasksRole: "ingestor-write"
      ViewTasksRole: "ingestor-read"
...
```
Please make sure the following fields are properly set:
- **WebServer.Auth.ClientID**: this is the client id of the ingestor. It should be added to the IdP that you want to use with the ingestor. This id shouldn't be shared with other ingestor instances. Look up your IdP's docs for adding a new client.
- **WebServer.Auth.OAuth2.RedirectURL**: The url at which the ingestor would be deployed. This should be known by you.
- **WebServer.Auth.OIDC.IssuerURL**: the url to the OIDC provider. It should conform to the Discovery spec. In case of Keycloak, it usually looks like `http://[KEYCLOAK_URL]/realms/[REALM_NAME]`.
- **WebServer.Auth.JWT.JwksURL**: It is the JwksURL of the OIDC provider. It is used to provide the client with the current set of public keys. It should have the same base url, but the rest of the path depends on the OIDC provider. In case of Keycloak, it should have the following format: `http://[KEYCLOAK_URL]/realms/[REALM_NAME]/protocol/openid-connect/certs`. If your provider does not support Jwks, then you can set the keys manually as follows:
```yaml
...
    JWT:
      UseJWKS: false
      Key: "[insert public key here]"
      KeySignMethod: "[set the key signature method here]"
...
```
- **WebServer.Auth.RBAC.[X]Role**: this is where you set your expected role names. It's a way to customize role names, but you can leave them as is. If facilities use shared OAuth2 client-id's (shouldn't be the case) then these roles should contain the name of each facility to make. You should also customize these if your IdP of choice can't separate what roles to map to users based on clientid. These roles specifically give permission to interact with the ingestor endpoints, and nothing else. Accessing datasets is determined by the `AccessGroups` of the user on SciCat.

{: .box-note}
If you're using the supplied example scicatlive config for testing, the roles are named `FAC_ingestor_[function]` where `[function]` can be "admin", "write" or "read".

{: .box-note}
**Note:** If your IdP isn't keycloak you have to make sure that the roles are mapped to OAuth2 claims in the same way as Keycloak: `[access_token_jwt].resource_access[(client_id)].roles`

### Paths

```yaml
...
WebServer:
  Paths:
    CollectionLocations: 
      location1: "/some/path/location1"
      Projects: "/some/other/path/location2"
    ExtractorOutputLocation: "(optional)/location/to/output/temp/files"
...
```
 - It's important configure `CollectionLocation` as that is where the ingestor will look for to find datasets.
 - The ExtractorOutputLocation sets a custom path for the temporary extractor files. Normally they're outputted to /tmp.
 - Due to the way the config library works, all location keys will be lowercased.

### Metadata Extractors
Example config:

```yaml
...
MetadataExtractors:
  InstallationPath: ./extractors/
  SchemasLocation: ./schemas/
  DownloadMissingExtractors: true
  Timeout: 2m
  Extractors:
  - Name: LS
    GithubOrg: SwissOpenEM
    GithubProject: LS_Metadata_reader
    Version: v0.2.8
    Executable: LS_Metadata_reader
    Checksum: e8a2abc7a0d8759edf4559e27879b7977000a868a2f7d39b7804ff5e5c0d1559
    ChecksumAlg: sha256
    {% raw -%}CommandLineTemplate: "-i '{{.SourceFolder}}' -o '{{.OutputFile}}'"{% endraw %}
    Methods:
      - Name: Single Particle
        Schema: oscem_schemas.schema.json
        Url: "http://some.url/"
      - Name: Cellular Tomography
        Schema: oscem_cellular_tomo.json
        Url: "http://some.url/"
      - Name: Tomography
        Schema: oscem_tomo.json
        Url: "http://some.url/"
      - Name: EnvironmentalTomography
        Schema: oscem_env_tomo.json
        Url: "http://some.url/"
...
```

 - **InstallationPath** determines where the extractors should be downloaded/installed.
 - **SchemasLocation** determines where the schemas for extractors reside.
 - **DownloadMissingExtractors** sets whether to download extractors automatically from github
 - **Timeout** sets the maximal time any extractor should run before timing out
 - **Extractors** is the list of extractors.
   - if using github for downloading, the following link is used: `https://github.com/[GithubOrg]/[GithubProject].git`
   - **Version`** is the *release tag* that will be attempted to be used.
   - **Executable** is the file that will be executed.
   - **Checksum** is used to verify the integrity of the executable
   - **ChecksumAlg** is to define the algorithm used for the checksum (only sha256 is used)
   - **CommandLineTemplate** is the command template to use with the executable, it appends a formatted list of paramters.
   - **Methods** is where you can define a list of methods that can be used with a particular extractor.
     - **Name** is the name of the method
     - **Schema** is the metadata schema to use for this method (must exist in **SchemasLocation**)
     - **Url** is the url for the schema, it will be used when the schema is not found locally to download it.

### Metadata Extractor Jobs
This section is for configuring the metadata extractor job system. It is a system to process extraction requests in parallel and in order of requests.
```yaml
WebServer:
  MetadataExtJobs:
    ConcurrencyLimit: 4
    QueueSize: 200
```
Where the **ConcurrencyLimit** is the max. number of extractions to be executed in parallel, and **QueueSize** is the max queue size which has FIFO order.
If there are more pending requests than **QueueSize** then those requests will be processed randomly.

## Adding the Ingestor to Keycloak

{: .box-note}
**Note:** This section assumes you're running the Ingestor locally.
Replace all instances of `http://localhost:8888/` if you've deployed it in some other way.

### Keycloak Setup

You can use the patch file [here](/assets/files/ext_transfer.patch) on the `scicatlive` project's main branch ([this commit](https://github.com/SciCatProject/scicatlive/tree/296eb79e548b0345a6516e6e95f2b144b5a408e6), if the patch became incompatible with the up-to-date main branch), which will do the following steps automatically with default values.

1. Setup keycloak, preferably with Docker
2. [OPTIONAL] Add another realm where you'll have your ingestor client added.
  - ![adding a realm](/assets/img/documentation/admin/installation/ingestor/img0.png){: style="margin-top: 2em; margin-bottom: 2em;"}
3. Add a new client with the following parameters
    <table>
      <caption>
        <center>Client creation steps</center>
      </caption>
      <tbody>
        <tr>
          <td><img src="/assets/img/documentation/admin/installation/ingestor/img1.png"  alt="1" width = 550em ></td>
          <td><img src="/assets/img/documentation/admin/installation/ingestor/img2.png"  alt="1" width = 550em ></td>
        </tr>
        <tr>
          <td colspan="2"><center><img src="/assets/img/documentation/admin/installation/ingestor/img3.png"  alt="1" width = 550em ></center></td>
        </tr>
      </tbody>
    </table>
4. Edit your client and add client-specific roles that match the ones from your Ingestor config
![adding client roles](/assets/img/documentation/admin/installation/ingestor/img5.png){: style="margin-top: 2em; margin-bottom: 2em;"}
5. Under the client's "Client Scopes" tab, click on `ingestor-dedicated`
6. `Add mapper` button -> "By configuration" -> Group Membership
7. The `token claim name` should be "accessGroups" and `Full group path` should be *turned off*

{: .box-note}
**Note:** In most cases you will be using some external source of users in Keycloak, in which case, you need to map some claim of the incoming user to the roles that were setup in Step 4. This is not covered in this Install guide as it is highly specific to your own setup. If by any chance you're setting up users directly in Keycloak, you can assign them the roles directly within the Keycloak admin menu.

The next section is useful for developers only.

### Testing with authentication enabled locally (Developers only)

1. Add a new test user. Don't forget to set a password.
    <table>
      <caption>
        <center>User creation steps</center>
      </caption>
      <tbody>
        <tr>
          <td><img src="/assets/img/documentation/admin/installation/ingestor/img6.png"  alt="1" width = 550em ></td>
          <td><img src="/assets/img/documentation/admin/installation/ingestor/img7.png"  alt="1" width = 550em ></td>
        </tr>
        <tr>
          <td><img src="/assets/img/documentation/admin/installation/ingestor/img8.png"  alt="1" width = 550em ></td>
          <td><img src="/assets/img/documentation/admin/installation/ingestor/img9.png"  alt="1" width = 550em ></td>
        </tr>
      </tbody>
    </table>
2. Assign the read and write roles of the ingestor to this user.
    <table>
      <caption>
        <center>assigning roles</center>
      </caption>
      <tbody>
        <tr>
          <td><img src="/assets/img/documentation/admin/installation/ingestor/img10.png"  alt="1" width = 550em ></td>
          <td><img src="/assets/img/documentation/admin/installation/ingestor/img11.png"  alt="1" width = 550em ></td>
        </tr>
      </tbody>
    </table>
3. Go to [http://localhost:8888/login](http://localhost:8888/login)
4. This will open up the keycloak login page. Use your test user for logging in.
![login page](/assets/img/documentation/admin/installation/ingestor/img12.png)
5. If everything went well, you should be redirected to `RedirectURL`, and you should see a "user" cookie associated to the `localhost` domain in your browser's debugger. If you also have a valid `FrontendUrl` your browser will get redirected to your Ingestor frontend, where you should be able to interact with the ingestor backend using the cookie.
![browser debugger with cookie](/assets/img/documentation/admin/installation/ingestor/img13.png)
6. [OPTIONAL] To test the ingestor's auth directly, copy the cookie value from the browser, then you can use the following curl command:
```bash
curl -v --cookie "user=[INSERT COOKIE VALUE HERE]" "localhost:8888/transfer?page=1"
```
If the auth is successful, you should get an empty list as a reply.