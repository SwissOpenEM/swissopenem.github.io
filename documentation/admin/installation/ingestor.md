---
layout: page
title: Ingestor Installation
permalink: /documentation/admin/installation/ingestor
share-description: Instructions for installing the ingestor for OpenEM
---
<!-- Show the current active documentation page -->
{% include documentationStepper/stepper.html %}

## Installing the ingestor

{: .box-warning}
**Prerequisites:** `docker` and `docker compose` installed on target machine; familiarity with `docker` and `docker compose`, see <https://docs.docker.com/compose/>

### Basic Setup and Configuration

#### 1. Checkout the deployment repository at <https://github.com/SwissOpenEM/openem-deployment>

```bash
git clone https://github.com/SwissOpenEM/openem-deployment
```

#### 2. Modify the `.env.example` and save it as `.env`

The `.env.example` file contains configuration values; some are specific to the PSI endpoints and some are facility specific values which need to be adapted.

| Parameter                                 | Example Value                   | Description                                                                                             | Facility Specific |
|-------------------------------------------|---------------------------------|---------------------------------------------------------------------------------------------------------|-------------------|
| `FACILITY`                                | `myfacility`                    | Facility name; used in some naming conventions                                                          | Yes               |
| `INGESTOR_VERSION`                        | `v1.0.0 or latest`              | Version of the Ingstor                                                                                  | Yes               |
| `INGESTOR_DOMAIN`                         | `https://ingestor.facility.com` | URL to the facility's ingestor                                                                          | Yes               |
| `HOST_COLLECTION_PATH`                    | `/server/data`                  | Path to the directory on the host system to the data                                                    | Yes               |
| `HOST_COLLECTION_NAME`                    | `DataServer`                    | Name of the data directory that will appear in the UI                                                   | Yes               |
| `GLOBUS_SOURCE_FACILITY`                  | `DCIL`                          | Globus source facility tag, one of DCIL, UNIBAS, UNIGE, UNIBE                                           | Yes               |
| `GLOBUS_COLLECTION_ROOT_PATH`             | `/server/data`                  | Path of the collection passed to Globus, needs to match HOST_COLLECTION_PATH                            | yes               |
| `KEYCLOAK_CLIENT_ID`                      | `openem-ingestor-DCIL`          | Keycloak client for this facility's ingestor, one of openem-ingestor-DCIL, openem-ingestor-UNIBAS, etc. | Yes               |
| `LIFESCIENCE_EXTRACTOR_ADDITIONAL_PARAMS` | `--cs 2.7`                      | Optional, additional parameters for the life scienece metadata extractor                                | yes               |
| `GLOBUS_DESTINATION_FACILITY`             | `PSI`                           | Destination facility for Globus, one of PSI, PSI_QA, PS_DEV                                             | No                |
| `SCICAT_BACKEND_URL`                      | `https://dacat.psi.ch`          | URL of Scicat's backend                                                                                 | No                |
| `SCICAT_FRONTEND_URL`                     | `https://discovery.psi.ch`      | URL of Scicat's frontend                                                                                | No                |
| `GLOBUS_TRANSFER_PROXY_URL`               | `https://globus-proxy..psi.ch`  | URL to the Globus Proxy                                                                                 | No                |
| `KEYCLOAK_URL`                            | `https://kc.psi.ch`             | URL to the Keycloak instance                                                                            | No                |
| `KEYCLOAK_REALM`                          | `awi`                           | URL to the Keycloak realm                                                                               | No                |

The complete configuration of the ingestor can be found in the docker-compose file of the ingestor, see <https://raw.githubusercontent.com/SwissOpenEM/openem-deployment/refs/heads/main/services/ingestor/compose.yaml>.

{: .box-warning}
It is not generally necessary to modify the configuration except for updating the Metadata Extractor, see section *Advanced Configuration*.

#### 3. Start the service and verify that it is running without errors

Start in detached mode

```bash
docker compose up -d
```

This will start a container with the name `openem-ingestor`
and check its logs

```bash
docker logs openem-ingestor
```

{: box-warning}
There should be no messages with an `ERROR` tag in the logs

Verify that the container is reachable by opening

```bash
https://<INGESTOR_DOMAIN>/version
```

in a browser.

### Advanced Configuration

{: .box-note}
Detailed information about the configuration of the ingestor can be found in its repo <https://github.com/SwissOpenEM/Ingestor>

#### Caddy Reverse Proxy

{: .box-note}
Installing an additional reverse proxy is not needed in general if Globus Connect Server is installed alongside.

#### Metadata Extractors

Updating an extractor requires to change its version and the checksum in the configuration within the `docker-compose.yml`. Both can be found
in the respective release pages of the extractor, e.g. <https://github.com/osc-em/oscem-extractor-life/releases>

See <https://github.com/SwissOpenEM/Ingestor> for a more detailed description.

Updating schemas can be done by restarting the ingestor if the schema URLs are pointing to `latest` and not a specific version. Otherwise, the ingestor
needs to be stopped, the URL adapted and the ingestor started again.

#### User Indentity

In case the ingestor needs to run using as a specific user, add the following variables to th `.env` file

| Parameter | Example Value | Description | Facility Specific |
|-----------|---------------|-------------|-------------------|
| UID       | 1001          | User id     | yes               |
| GID       | 1001          | Group id    | yes               |

{% include documentationStepper/forwardBackward.html showBack=true showNext=true %}
