---
layout: page
title: Requirements & Infrastructure
permalink: /documentation/admin/req-infrastructure
---

<!-- Show the current active documentation page -->
{% include documentationStepper/stepper.html %}


## Hardware Requirements

Hardware requirements for server components.

### Transfer Server

The transfer server is the central component on the part of the universities and
research institutions. This is where the ingestor is installed and the metadata
extractors are stored.

| Component     | Minimum Requirements | Recommended Requirements |
| ------------- | -------------------- | ------------------------ |
| Memory        | 8 GB                 | 16 GB or more            |
| CPU           | 4 cores              | 8 cores or more          |
| Network       | 1 Gbps               | 10 Gbps or more          |
| Local Storage | 80 GB                | 120 GB SSD or more       |

The transfer server must be capable of transferring large amounts of data (approximately
1-2 TB) using Globus or S3 to another server. Additionally, the server will run metadata
extractors that analyze hundreds of small text files and extract their contents. Smaller
sites may be able to use a virtual machine for this role, but sites with large data
transfer requirements will generally want a dedicated machine for good performance.

Most sites will run both the ingestor and Globus from the same machine. It is possible
to run them from separate machines, but both systems should share data storage.

### Cache Storage

OpenEM is flexible and can adapt to existing data storage systems. The most
common are either to use microscope storage directly (by mounting storage from each
detector on systems running OpenEM services) or to have a large central storage system
that data gets copied to after acquisition. Either way, you should be clear on how data
is organized and which users should have access to the data.

The cache storage should provide enough capacity to hold datasets until they can be
archived; typically a minimum of 30 days is recommended.

| Component | Minimum Requirements | Recommended Requirements |
| --------- | -------------------- | ------------------------ |
| Storage   | 50 TB                | 100 TB or more           |

## Software Requirements

Software requirements for server components

### Operating System

Linux is required for Globus Connect Server.

The ingestor software can run on either Linux or Windows.

The software components can be compiled for different target operating systems. It is
important that the operating systems are kept up to date and regularly supplied with
updates.

### Additional Packages

The [OpenEM Standard Deployment](https://github.com/SwissOpenEM/openem-deployment) uses
[docker compose](https://docs.docker.com/compose/) to run the ingestor service. Running
without docker is possible but requires the binaries and configuration to be manually
upgraded.

## Network Requirements

![Network Overview](/assets/img/documentation/admin/network_overview.drawio.png)
_**Network Traffic overview**. Bold lines indicate data movement, while thin lines show HTTPS calls._

### Firewall rules

Network isolation is important to the security of EM facilities. OpenEM has been
designed not to require any ports to be accessible from the general internet. However,
firewalls must be configured to allow traffic to and from some trusted hosts.

The following ports should be open for a standard configuration using globus to transfer
data to PSI from the same machine that runs the ingestor.

| Service  | Port            | Source                                | Destination                                                                       | Reason              |
| -------- | --------------- | ------------------------------------- | --------------------------------------------------------------------------------- | ------------------- |
| Globus   | tcp/443         | ingestor-server                       | 54.237.254.192/29                                                                 | Globus Control Out  |
| Globus   | tcp/443         | 54.237.254.192/29                     | ingestor-server                                                                   | Globus Control In   |
| Globus   | tcp/50000-51000 | ingestor-server                       | 192.33.126.53 (lx-globus-01.psi.ch)<br/>192.33.126.54 (lx-globus-02.psi.ch)       | Globus GridFTP Out  |
| Ingestor | tcp/443[^1]     | User workstations                     | ingestor-server                                                                   | Ingestor API        |
| SciCat   | tcp/443         | User workstations                     | discovery.psi.ch<br/>discovery-qa.psi.ch[^2]<br/>discovery.development.psi.ch[^2] | SciCat frontend     |
| SciCat   | tcp/443         | ingestor-server<br/>User workstations | dacat.psi.ch<br/>dacat-qa.psi.ch[^2]<br/>scicat.development.psi.ch[^2]            | SciCat backend      |
| SciCat   | tcp/443         | ingestor-server<br/>User workstations | globus-proxy.psi.ch<br/>globus-proxy.development.psi.ch[^2]                       | OpenEM globus proxy |

[^1]: Configurable
[^2]: Testing only

### Domain names

All OpenEM traffic is encrypted with HTTPS. Modern browsers will refuse session sharing
and cross-origin resource sharing without valid HTTPS certificates.

Each facility should register two domains:
1. Globus (`em-globus.facility.ch` in examples)
2. Ingestor (`em-ingestor.facility.ch` in examples)

Usually both domains should be added to your DNS server as `CNAME` records resolving to
the actual hostname of the transfer server. A reverse proxy is then used to direct
traffic to the correct service (see [installation](installation.md) chapter for
details).

See [facility overview](facilities.md) for current facility domain names.

<!-- Jump to next page -->
{% include documentationStepper/forwardBackward.html showBack=true showNext=true %}