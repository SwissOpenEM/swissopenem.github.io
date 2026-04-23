---
layout: page
title: Metadata Standards
permalink: /deliverable-wp1/
---

### Metadata Standards

The Metadata Standards work package contains the following tasks and components.

{% include wptasks.md tasks=site.data.deliverables-wp.wp1 %}

### Tasks

#### Metadata-Standards-1: Community consensus and commitment to data collection standards

- Established the [Open Standards Community for EM](https://osc-em.github.io/)
- Workshop 22-23 Feb 2024 with participants from facilities, software developers and repository curators.
- Schema is now [available](https://osc-em.github.io/schemas/) for EM metadata. During the next milestones, metadata required for processing will be included by our collaborators and support for Material Sciences will be extended.
- Schema terms are defined with respect to existing ontologies where available: CryoEM ontology, PDBx/mmCIF dictionary, Helmholtz EM Glossary, NeXus-FAIRmat NXem format.
- Tools available for major instrument manufacturers and formats (Thermo Fisher EPU and SerialEM)
- Ontologies are coordinated with the [PREMISE](https://ord-premise.org/) project

#### Metadata-Standards-2: Ensure streamlined and automatic metadata harvesting at all ETH sites

Metadata extraction tools for [life sciences](https://github.com/osc-em/oscem-extractor-life) and [material science](https://github.com/osc-em/oscem-extractor-materials).

#### Metadata-Standards-3: SciCat Dataset Ingestor

- Web Ingestor for adding data to SciCat
  - Added page in the [SciCat frontend](https://github.com/SciCatProject/frontend/pull/2040)
  - New [Ingestor service](https://github.com/SwissOpenEM/Ingestor) runs at OpenEM facilities ([deployment system](https://github.com/SwissOpenEM/openem-deployment))
- Fast data transfer using Globus (PSI) and S3 (ETHZ) to the archiver systems is available
  - Uses the [globus Go library](https://github.com/SwissOpenEM/globus) and [scicat-globus-proxy](https://github.com/SwissOpenEM/scicat-globus-proxy)
- Web-based UI for data ingestion is supported by SciCat/ GUI application. Instrument metadata is automatically extracted while user enters sample metadata and authorship
- [SciCat CLI](https://github.com/paulscherrerinstitute/scicat-cli) was updated to a new version of SciCat backend
