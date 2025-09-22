---
layout: page
title: Globus Installation
permalink: /documentation/admin/installation/globus
share-description: Instructions for installing the globus
---

## Introduction

Globus is the preferred method for transferring data from your facility
to PSI. If you are not transferring data (eg for ETHZ, who use the
[ScopeMArchiver](https://github.com/SwissOpenEM/ScopeMArchiver)), then this step can be
skipped.

In this step you will install [Globus Connect
Server](https://docs.globus.org/globus-connect-server/v5/) (GCS) on a system with access to
your facility data. This can be a transfer server or a VM which mounts the facility
data. It should have a good network connection, ideally a 10Gbps connection to both the
facility and the SWITCH internet backbone.

## Network

Most facilities configure their globus endpoint to only be accessible from PSI. Thus, we
recommend a more restricted network configuration from that suggested in the [GCP
docs](https://docs.globus.org/globus-connect-server/v5/).

The following TCP ports should be opened in the firewall (see all [firewall rules](/documentation/admin/req-infrastructure#firewall-rules)):

| Port | Direction | IP range | Reason |
|---|---|---|---|
|tcp/443| bidirectional | 54.237.254.192/29 | Globus Control |
|tcp/50000-51000| outgoing | 192.33.126.53 (lx-globus-01.psi.ch)<br/>192.33.126.54 (lx-globus-02.psi.ch) | Globus GridFTP Out |

You should assign a domain name for the server (`em-globus.facility.ch` in examples) an
provision SSL certificates; see [requirements](/documentation/admin/req-infrastructure#domain-names)

## Installation

Follow the [Globus Connect Server installation
guide](https://docs.globus.org/globus-connect-server/v5/). This will install the Apache
web server and the globus.

No subscription features are used by OpenEM. Set up a single Mapped Collection for your
data.

### Identity Mapping

Usually the globus server should be accessible only by facility operators and a service
user that manages transfers. End users should not have access (otherwise they would be
able to see other users' data through globus.org website and APIs).

First, create a local service user with access to the data. We use `svcusr-globus` here
as an example. Make sure that the user can read all datasets. (For instance, you can
mount data using the `svcusr-globus` UID and GID.)

Save the following as `identity_mapping.json`. It maps globus users to local unix
usernames. Customize the list to include all admins that should have access. See the
Globus [Identity Mapping
Guide](https://docs.globus.org/globus-connect-server/v5/identity-mapping-guide/) for
details.

```json
{
  "DATA_TYPE": "expression_identity_mapping#1.0.0",
  "mappings": [
    {
      "source": "{username}",
      "match": "ce4c22b8-90e8-40e0-90fd-205583835178@clients\\.auth\\.globus\\.org",
      "output": "svcusr-globus"
    },
    {
      "source": "{username}",
      "match": "(admin1|admin2|...)@facility\\.ch",
      "output": "{0}"
    }
  ]
}
```

Now restart GCS with the new identity mapping. You should include the
`clients.auth.globus.org` domain to ensure the service user has access.

```sh
globus-connect-server storage-gateway update posix <id> \
  --identity-mapping file:identity_mapping.json \
  --domain <facility.ch> \
  --domain clients.auth.globus.org
```

### Registration

The PSI globus proxy requires the endpoint to be registered before it will be available
for use. Please send the following information to
[scicat-help@l.psi.ch](mailto:scicat-help@l.psi.ch) to register the new endpoint with
OpenEM:

- domain name
- Globus endpoint ID
- facility name

The PSI admins will reply with the correct ingestor configuration for data transfer.
