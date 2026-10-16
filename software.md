---
layout: page
title: Software
permalink: /software/
subtitle: What we develop
tags:
  - Software development
  - Core software projects
  - Metadata standards
  - Data transfer
  - Metadata extraction
---

## Core software projects

![Components overview: data acquisition, metadata extraction and ingestion, storage, repositories, authentication and education]({{ '/assets/img/software_components.png' | relative_url }})

| Component | Description | Part of |
| --- | --- | --- |
| **Ingestor** | Software that handles the transfer between faculties and SciCat and the LTS. The end user can select the data set to be transferred via a web interface and the rest is carried out automatically in the background. | Metadata Standards |
| **Metadata Extractor** | Performs automatic metadata extraction directly on the instrument. This means that it is no longer necessary for end users to analyse and enter metadata manually. | Metadata Standards |
| **SciCat** | SciCat is the public catalogue for managing, uploading and obtaining EM data. It is open source software hosted by PSI. | Scicat Metadata Catalog |
| **Archival and Retrieval** | The infrastructure that enables the archiving and retrieval of EM data. As things stand at present, this is provided by PSI and ETHZ. | Scicat Metadata Catalog |
| **Repository Integration** | Integrates with international repositories for data deposition. | Deposition in International Repositories |
| **Authentication Infrastructure** | The authentication infrastructure enables log-in with university users. In addition, a separate role administration is planned to enable cross-faculty collaboration. | Scicat Metadata Catalog |
| **Education** | Provides user training, outreach, and sustainability efforts. | Education |

## Github projects

[List of open source projects]({{ '/outreach/#software--repositories' | relative_url }})
