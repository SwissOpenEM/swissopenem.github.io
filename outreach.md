---
layout: page
title: Outreach
permalink: /outreach/
tags:
  - Presentations
  - Conferences
  - Workshops
  - Publications
  - Scientific events
  - Software
---

OpenEM shares its software, metadata standards, training materials and conference contributions openly.

## Software & repositories

The [SwissOpenEM GitHub organization](https://github.com/SwissOpenEM) hosts the OpenEM services and infrastructure. Metadata schemas, extractors and converters are maintained with the [Open Standards Community for Electron Microscopy (OSC-EM)](https://osc-em.github.io/).

### OpenEM services & infrastructure

| Repository | Purpose |
| --- | --- |
| [Ingestor](https://github.com/SwissOpenEM/Ingestor) | Facility service and application for ingesting EM datasets into SciCat. |
| [openem-deployment](https://github.com/SwissOpenEM/openem-deployment) | Docker Compose deployment of the OpenEM Ingestor stack. |
| [Depositor](https://github.com/SwissOpenEM/Depositor) | Transfer files and metadata from SciCat to the OneDep deposition system for EMDB and PDB. |
| [ScopeMArchiver](https://github.com/SwissOpenEM/ScopeMArchiver) | Archival service for ETH Zurich ScopeM. |
| [scicat-globus-proxy](https://github.com/SwissOpenEM/scicat-globus-proxy) | Request Globus transfers using SciCat authentication tokens. |
| [globus](https://github.com/SwissOpenEM/globus) | Go library for Globus transfers. |
| [keycloak-admin-helper-plugin](https://github.com/SwissOpenEM/keycloak-admin-helper-plugin) | Keycloak administration helper plugin. |
| [epu_dataset_merger](https://github.com/SwissOpenEM/epu_dataset_merger) | EPU dataset merging utility. |

### OSC-EM metadata tools

| Repository | Purpose |
| --- | --- |
| [oscem-schemas](https://github.com/osc-em/oscem-schemas) | Shared metadata schemas for electron microscopy. |
| [oscem-extractor-life](https://github.com/osc-em/oscem-extractor-life) | Extract metadata from life science acquisitions, including SerialEM, EPU and Tomo5. |
| [oscem-extractor-materials](https://github.com/osc-em/oscem-extractor-materials) | Extract metadata from materials science EM data. |
| [oscem-converter-extracted](https://github.com/osc-em/oscem-converter-extracted) | Map extracted metadata to the OSC-EM format. |
| [oscem-converter-mmcif](https://github.com/osc-em/oscem-converter-mmcif) | Convert OSC-EM metadata to mmCIF for OneDep deposition. |

### Related code & project resources

- SciCat upstream: [frontend](https://github.com/SciCatProject/frontend), [backend](https://github.com/SciCatProject/backend) and [SciCat CLI](https://github.com/paulscherrerinstitute/scicat-cli).
- Project websites: [OpenEM](https://github.com/SwissOpenEM/swissopenem.github.io) and [OSC-EM](https://github.com/osc-em/osc-em.github.io).

## Platforms & open data

- [PSI SciCat Data Catalog](https://discovery.psi.ch): archive, share and manage electron microscopy datasets.
- [Published datasets](https://doi.psi.ch/): publicly released data in the PSI Data Catalog.
- [Apoferritin example dataset](https://doi.psi.ch/detail/10.16907%2Fa2ab7849-5de7-4e7f-8286-72ec73089ca8): a public example of data shared through OpenEM.
- [OpenEM on the ETH ORD Data Portal](https://open-research-data-portal.ch/projects/open-em-data-network/): project background and programme context.

## Standards & collaborations

OpenEM is a founding member and a main schema contributor to OSC-EM. The OSC-EM schemas and [metadata mappings](https://github.com/osc-em/oscem-converter-extracted/tree/main/csv) support interoperability between instruments, processing tools and repositories. OpenEM also contributes to the [CryoET Geometry standard](https://github.com/cryo-et-standards/cryoet-geometry).

Collaborations include INSTRUCT and EMDB within OSC-EM, [PREMISE](https://ord-premise.org/), FAIRmat and the EM Glossary, and the CryoET Standards Working Group. OpenEM works with EMDB on OneDep deposition and with EMPIAR on raw-image deposition. It also follows the ETH-ORD M2 Identity Management Guidelines and coordinates with ETH-ORD M2 API projects and the ETH Zurich FAIR Research Data Board.

## Documentation & training materials

- [OpenEM documentation](https://data-catalog-services.pages.psi.ch/openem/): guides for [users](https://data-catalog-services.pages.psi.ch/openem/user/introduction/), [facility operators](https://data-catalog-services.pages.psi.ch/openem/operator/introduction/) and [developers](https://data-catalog-services.pages.psi.ch/openem/developer/overview/).
- [SciCat documentation](https://www.scicatproject.org/): background on the data catalogue used by OpenEM.

## Presentations & posters

| Event | Date | Materials & information |
| --- | --- | --- |
| CCPEM Spring Symposium 2023 | 24–26 April 2023 | [Open EM Data in Switzerland](https://doi.org/10.5281/zenodo.7845286) |
| CCP-EM Pipeliner/Doppio Workshop | 17–18 January 2024, Oxford, UK | Invited participant; [event information](https://instruct-eric.org/events/ccp-em-pipelinerdoppio-workshop-2024/). |
| Agreeing community standards for cryoET data preservation and reuse: data structure, metadata, ontologies etc. | 17–19 April 2024, EMBL-EBI, Hinxton, UK | Invited participant. |
| Machine-actionable data interoperability for the chemical sciences (MADICES 2) | 22–25 April 2024, Berlin, Germany | [Workshop materials](https://madices.github.io/docs/2024/) · [Scientific report](https://madices.github.io/docs/2024/report/) |
| ETH Domain ORD Establish project presentations | 13 June 2024, online | [The Open Data Network for Electron Microscopy (OpenEM): ETH-ORD Establish presentation 2024](https://doi.org/10.5281/zenodo.11632470) · [Report & recording][establish-report] |
| SciCatCon User Meeting | 2–4 July 2024 | [OpenEM slides](https://indico.psi.ch/event/15861/contributions/50844/attachments/28281/53804/240703%20SciCatCon%20OpenEM.pdf) |
| New Opportunities for Better User Group Software (NOBUGS) | 23–27 September 2024 | [OpenEM: Open research data infrastructure for electron microscopy in Switzerland](https://doi.org/10.5281/zenodo.13798727) |
| EnhanceR Symposium 2024 | 7 November 2024 | [OpenEM: Open research data infrastructure for electron microscopy in Switzerland (EnhanceR 2024)](https://doi.org/10.5281/zenodo.14049901) |
| Advancing Open Research Data (ORD) Practices: collaboration and innovation in the ETH Domain | 12 June 2025 | [OpenEM: FAIR data practices for electron microscopy](https://doi.org/10.5281/zenodo.15650832) |
| SciCatCon 2025 | 24–26 June 2025 | [The Open Data Network for Electron Microscopy (OpenEM): SciCatCon 2025](https://doi.org/10.5281/zenodo.15729620) |
| Scipion for Facilities Workshop 2025 | 30–31 October 2025 | [Programme](https://i2pc.es/facilities-2025/) · [FAIR data collection with the Open Science Community for Electron Microscopy (OSC-EM) metadata standard](https://doi.org/10.5281/zenodo.17484453) |
| ETH Domain Data Stewardship Community Event | 4 November 2025 | [Event information](https://www.lib4ri.ch/fall-2025-eth-domain-data-stewardship-community-event) · [FAIR Standards for Electron Microscopy Data](https://doi.org/10.5281/zenodo.17542839) |
| SciCatCon 2026 | 29 June–3 July 2026 | [Enabling interoperability between SciCat and open research data infrastructure](https://doi.org/10.5281/zenodo.21135633) |
| New Opportunities for Better User Group Software (NOBUGS) 2026 | 24 September 2026 | [Open Research Data services with the PSI Data Catalog and SciCat](https://doi.org/10.5281/zenodo.23360709) |

## Conferences & workshops

| Event | Date | Materials & information |
| --- | --- | --- |
| OSC-EM Standards Workshop at PSI | 22–23 February 2024 | [Programme](https://indico.psi.ch/e/em-standards-2024) · [Report][oscem-report] |
| OpenEM All-Hands Workshop, University of Bern | 13 February 2025 | [Event information](https://indico.psi.ch/event/16514/) · [2025-02-13 OpenEM Workshop](https://doi.org/10.5281/zenodo.14937442) · [Report & recording][all-hands-report] |
| OpenEM Workshop for PSI users | 8 April 2026 | [OpenEM Workshop: Archiving Raw EM Data with the PSI Data Catalog](https://doi.org/10.5281/zenodo.19565964) |
| OpenEM User Workshop 2026, University of Bern | 7 September 2026 | [Programme & event information](https://indico.psi.ch/e/openem2026) |

[establish-report]: <{{ '/news/2024/06/10/establish-updates.html' | relative_url }}>
[oscem-report]: <{{ '/news/2024/02/23/oscem.html' | relative_url }}>
[all-hands-report]: <{{ '/news/2025/03/05/depositor-newsletter.html' | relative_url }}>
