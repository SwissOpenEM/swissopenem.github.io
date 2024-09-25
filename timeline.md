---
layout: page
title: Current Timeline
permalink: /timeline/
redirect_from:
  - /roadmap/
subtitle: The time schedule for our project
tags:
  - Project timeline
  - Time schedule
  - Project timeline
  - Project details
  - Project milestones
---

The [deliverables]({{ "/deliverables/" | relative_url }}) page describes all the products produced
by the OpenEM project. Progress towards these goals has been divided up into milestones,
as described below. Milestones have been chosen to span multiple deliverables and
highlight the overall progress of the project towards our envisioned FAIR and open
EM infrastructure.

More details regarding the the software components and their integration into the OpenEM
ecosystem can be found [here]({{ "/software/" | relative_url }}).

### Timeline ###

{% include gantt.html data=site.data.timeline %}

### Initialization ###

The project started in June 2023 and the recruitment process began. During this phase,
PSI communicated their experience using the SciCat Data Catalog for archiving and
publication of EM datasets to the other partners. A project plan was created with
details of how to extend the service to all ETH domain and swissuniversities facilities
in line with the planned [work packages]({{ "/deliverables/" | relative_url }}). Regular project meetings began,
as well as setting up other organizational tools for coordinating within the distributed
OpenEM team.

Site visits were also carried out at all participating OpenEM faculties. Project
requirements were updated based on use cases from each facility, as well as estimates of
data volumes and local infrastructure.

### Planning and Prototyping ###

#### Milestone I (Metadata Standards) ####

**Completed: Feb 2024**

Standardizing EM metadata was identified as a critical dependency for many OpenEM
components. Rather than developing standards independently, existing EM standards and
ontologies were thoroughly investigated and collaborations initiated with the
international EM community. As the first major OpenEM milestone, a workshop on EM
standards was held on 22-23 February 2024 at PSI to discuss EM metadata standards. The meeting
included participants from EM facilities, developers of processing software, and
representatives from major EM repositories and data bases. The workshop resulted in the
the founding of the **Open Science Community for EM (OSC-EM)** to develop tools for
interoperable EM metadata.

| Component                     | Goal                                                                              |
| ----------------------------- | --------------------------------------------------------------------------------- |
| Metadata Extractor            | Consult the EM community on metadata standards, requirements, and best practices. |
| Authentication Infrastructure | Authenticate using PSI accounts                                                   |
| Ingestor                      | Ingest data using existing PSI command-line tool                                  |
| Education - Website           | Create basic website and github repositories                                      |
| Repository Integration        | Discuss OneDep integration with EMDB                                              |
| Archival and Retrieval        | Storage on [CSCS](https://cscs.ch) through the PSI SciCat Data Catalog            |
| SciCat                        | SciCat v3 in operation, with development of v4 underway.                          |

#### Milestone II (Conceptual Plan) ####

**Completed: May 2024**

OpenEM integrates many existing services from the ETH domain and Swiss universities:
SciCat, the PSI archive system, SWITCH authentication services, the CSCS Petabyte
archive, the ETHZ Long-term Storage, not to mention the seven participating facilities.
With the completion of this milestone, OpenEM finalized the overall architecture for
integrating these services as well as prototypes of new microservices needed for
interoperability.


| Component                     | Goal                                                                                                                                  |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Metadata Extractor            | Early draft of OSC-EM schema. Prototype parsers for cryoEM and EELS metadata.                                                         |
| Authentication Infrastructure | Registration with eduGAIN identity federation. Prototype of OIDC authentication.                                                      |
| Ingestor                      | Initial refactoring of ingestor tool. Architecture with a facility-based ingestor daemon with a central web-based interface accepted. |
| Education - Website           | Github repositories established for all components                                                                                    |
| Repository Integration        | Prototype for interoperability with OneDep API (EMDB and PDB deposition)                                                              |
| Archival and Retrieval        | Architecture planned the ETHZ Archive System, as well as prototypes for integrating ETHZ LTS                                          |
| SciCat                        | New Jobs customization system started in SciCat v4. Plan for multi-facility support.                                                  |

### Concept & Realization ###

#### Milestone III (Proof of Concept) ####

**Completed: September 2024**

This milestone included basic functionality from all components. This allowed the collection and publication of the first dataset using the complete OpenEM ecosystem. The cryoEM dataset of  was collected at UNIBAS with metadata according to the OSC-EM schema. The dataset was transferred to the PSI SciCat instance from the facility and published under a new DOI.

| Component                     | Goal                                                                                                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Metadata Extractor            | OSC-EM metadata generated at the instrument using a script.                                                                                             |
| Authentication Infrastructure | Support Globus authentication (CILogon federation) via manual login workflow                                                                            |
| Ingestor                      | Minimal web interface for editing metadata and basic ingestion functionality. The ingestor creates a dataset and transfers the data using Globus or s3. |
| Education - Website           | Website refresh with detailed project descriptions and new content.                                                                                     |
| Repository Integration        | Produce mmCIF files to initiate deposition to EMDB/PDB using the OneDep API                                                                             |
| Archival and Retrieval        | Reliably archive and retrieve datasets from ETHZ Long Term Storage (PSI archive and retrieval previously established)                                   |
| SciCat                        | Deploy SciCat V4 with new features (ie new customizable job API)                                                                                        |

#### Milestone IV (Alpha Release) ####

**Planned: November 2024**

This milestone begins the roll-out process of OpenEM software, starting at one facility.
The ingestion of datasets becomes more automated and routine use. Users have the
opportunity to test the software and provide feedback.

| Component              | Goal                                                                                                                  |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Ingestor               | Enable visualization and easier editing of metadata via the frontend. Facility-based file browser to start ingestion. |
| Authentication Infrastructure | Users authenticate using federated logon                                                                       |
| Education - Website    | Add operator and user documentation sections                                                                          |
| Repository Integration | Increase EMDB compatibility and provide a tool for adding electron density maps and other derived data                |
| Archival and Retrieval | Integrate Globus into PSI archiver system                                                                             |
| SciCat                 | SciCat V4 is in production                                                                                            |

#### Milestone V (Beta Release) ####

**Planned: March 2025**

During this phase software will be rolled out to all facilities.


| Component                     | Goal                                                                                                                                                                                     |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Metadata Extractor            | Material science use cases are completed (TEM, STEM, EELS, HD) and at least one microscope at each facility is supported.                                                                |
| Authentication Infrastructure | Datasets are owned and managed by end users.                                                                                                                                             |
| Ingestor                      | Dynamic frontend generated by selected schema and individual ingestor backend are possible. The backend provides an administrative interface and can call different metadata extractors. |
| Education - Website           | Operator manual is finished.                                                                                                                                                             |
| Repository Integration        | Interface for uploading processed files and downloading annotated mmCIF.                                                                                                                 |
| Archival and Retrieval        | ETHZ archiver system hardware is completed.                                                                                                                                              |
| SciCat                        | Integrate both PSI and ETHZ archiver systems. Provide schema validation.                                                                                                                 |


### Introduction ###

#### Milestone VI (Official Release) ####

By this point the software is considered fully in production. Datasets will be collected
from all facilities routinely. Features for easily deploying updates and easy
maintenance of the services will also be implemented.

**Planned: May 2025**

| Component              | Goal                                                                                           |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| Ingestor               | Include user feedback in the design and provide a plugin based system for metadata extractors. |
| Education - Website    | User manual is finished.                                                                       |
| Repository Integration | Enable upload to EMPIAR.                                                                       |


#### Milestone VII (Handover to Facilities) ####

**Planned: December 2025**

The final milestone hands over operation and maintenance roles to facilities, preparing
for the end of the current funding cycle.

| Component              | Goal                                               |
| ---------------------- | -------------------------------------------------- |
| Repository Integration | Deal with datasets using different version schema. |
| SciCat                 | Easier authorization and user management.          |
| Education - Website    | User training workshops and materials              |
