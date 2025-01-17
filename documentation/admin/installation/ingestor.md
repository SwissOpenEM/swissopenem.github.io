---
layout: page
title: Ingestor Installation
permalink: /documentation/admin/installation/ingestor
share-description: Instructions for installing the ingestor for OpenEM
---

## Download and build the ingestor

{: .box-note}
**Note:** This section will be replaced by a Docker based method.

1. Install go
2. Create a VM or setup a bare-metal server for the ingestor. You can also run it on your own computer.
3. `git clone git@github.com:SwissOpenEM/Ingestor.git`
4. `cd [REPO_DIR]/cmd/openem-ingestor-service`
5. `go build . -o build/ingestor`

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
  AccessToken: "scicat_access_token"
...
```

{: .box-note}
**Note:** The access token option *will* be removed as it's a temporary solution.

### Transfer (Globus)

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
    SourceCollection: "uuid-of-source-collection"
    SourcePrefixPath: "/insert/optional/path/here"
    DestinationCollection: "uuid-of-destination-collection"
    DestinationPrefixPath: "/insert/optional/path/here"
    RefreshToken: "insert-globus-refresh-token"
...
```

{: .box-note}
**Note:** The refresh token option *will* be removed as it's a temporary solution.

Important options to customize:
 - **Transfer.Globus.ClientID**: this should be set to the same client-id as the one you'll use in the next paragraph. You need to create a new client on `app.globus.org`, please check out the [following page]() for more information
 - **Transfer.Globus.RefreshToken**: this a refresh token that you get from Globus by requesting offline access.
 It is a temporary solution. You can use the tool [here](https://github.com/SwissOpenEM/globus) to obtain one.
 First compile the go application under `cmd/` by running `go build . -o globus`, then use the following command:
 ```bash
 ./globus getRefreshToken --client-id "client-id-here" --auth-code-grant=true --redirect-url="https://auth.globus.org/v2/web/auth-code" --src-endpoint "(optional) source-collection-id" --dest-endpoint "(optional) dest-collection-id"
 ```
When prompted, login with a trusted account. **Never share your refresh token publically.** Copy the gotten refresh token into the config.

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
- **WebServer.Auth.RBAC.[X]Role**: this is where you set your expected roles. It's a way to customize role names, but you can leave them as is. If facilities use shared OAuth2 client-id's (shouldn't be the case) then these roles should contain the name of each facility to make. You should also customize these if your IdP of choice can't separate what roles to map to users based on clientid.

{: .box-note}
**Note:** If your IdP isn't keycloak you have to make sure that the roles are mapped to OAuth2 claims in the same way as Keycloak: `[access_token_jwt].resource_access[(client_id)].roles`

### Paths

```yaml
...
WebServer:
  Paths:
    CollectionLocation: "/location/of/datasets"
    ExtractorOutputLocation: "(optional)/location/to/output/temp/files"
...
```
 - It's important configure `CollectionLocation` as that is where the ingestor will look for to find datasets.
 - The ExtractorOutputLocation sets a custom path for the temporary extractor files. Normally they're outputted to /tmp.

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
      - Name: Cellular Tomography
        Schema: oscem_cellular_tomo.json
      - Name: Tomography
        Schema: oscem_tomo.json
      - Name: EnvironmentalTomography
        Schema: oscem_env_tomo.json
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

### Metadata Extractor Jobs
This section is for configuring the metadata extractor job system. It is a system to process extraction requests in parallel and in order of requests.
```yaml
WebServer:
  MetadataExtJobs:
    NoWorkers: 4
    QueueSize: 200
```
Where the **NoWorkers** is the max. number of extractions to be executed in parallel, and **QueueSize** is the max queue size which has FIFO order.
If there are more pending requests than **QueueSize** then those requests will be processed randomly.

## Adding the Ingestor to Keycloak

{: .box-note}
**Note:** This section assumes you're running the Ingestor locally.
Replace all instances of `http://localhost:8888/` if you've deployed it in some other way.

### Keycloak Setup

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

{: .box-note}
**Note:** In most cases you will be using some external source of users in Keycloak, in which case, you need to map some claim of the incoming user to the roles that were setup in Step 4. This is not covered in this Install guide as it is highly specific to your own setup. If by any chance you're setting up users directly in Keycloak, you can assign them the roles directly within the Keycloak admin menu.

The next section is useful for developers only.

### Testing authentication (Developers only)

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