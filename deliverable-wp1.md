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

- Established the [Open Standards Community for EM](https://github.com/osc-em)
- Workshop 22-23 Feb 2024 with participants from facilities, software developers and repository curators.
- Schema is now [available](https://osc-em.github.io/OSCEM_Schemas/) for EM metadata. During the next milestones, metadata required for processing will be included by our collaborators and support for Material Sciences will be extended.
- Schema terms are defined with respect to existing ontologies where available: CryoEM ontology, PDBx/mmCIF dictionary, Helmholtz EM Glossary, NeXus-FAIRmat NXem format.
- Tools available for major instrument manufacturers and formats (Thermo Fisher EPU and SerialEM)
- Ontologies are also coordinated with the PREMISE project

#### Metadata-Standards-2: Ensure streamlined and automatic metadata harvesting at all ETH sites

Metadata extraction tools for life sciences ([LS-Metadata Reader](https://github.com/SwissOpenEM/LS_Metadata_reader)] and material science ([Metadata-Extractor](https://github.com/SwissOpenEM/metadata-extractor)).

#### Metadata-Standards-3: SciCat Dataset Ingestor

- Fast data transfer using Globus (PSI) and S3 (ETHZ) to the archiver systems is available
- Web-based UI for data ingestion is supported by SciCat/ GUI application. Instrument metadata is automatically extracted while user enters sample metadata and authorship
- [SciCat CLI](https://github.com/paulscherrerinstitute/scicat-cli) was updated to a new version of SciCat backend
