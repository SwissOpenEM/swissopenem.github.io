---
layout: page
title: Development Manual
permalink: /documentation/dev/overview
---

<!-- Show the current active documentation page -->
{% include documentationStepper/stepper.html %}

## High-level Overview

The following diagram shows the components involved in OpenEM and a (simplified) view of typical interactions between them.

![OpenEM Components](/assets/img/documentation/dev/components.drawio.png)
_**Green**: Newly developed components; **Blue**: Modified existing components; **Grey**: Newly deployed third-party components; **Orange**: External components_

{: .box-note}
For simplicity, interactions regarding authentication flow are omitted. Please refer to the [Ingestor](https://github.com/SwissOpenEM/Ingestor) for a detailed description.

{: .box-note}
For a detailed view of the situation at ETHZ, please refer to the documentation of the [ETHZ Archiving Service](https://www.openem.ch/ScopeMArchiver/).

## Open Source Projects

For detailed instructions and documentation of the individual components, refer to the respective repositories.

| Project                                 | Link                                                                                                             |
|-----------------------------------------|------------------------------------------------------------------------------------------------------------------|
| Ingestor                                | [https://github.com/SwissOpenEM/Ingestor](https://github.com/SwissOpenEM/Ingestor)                               |
| Depositor                               | [https://github.com/SwissOpenEM/Depositor](https://github.com/SwissOpenEM/Depositor)                             |
| SciCat Frontend                         | [https://github.com/SwissOpenEM/scicat-frontend](https://github.com/SwissOpenEM/scicat-frontend)                 |
| SciCat Backend                          | [https://github.com/SciCatProject/scicat-backend-next](https://github.com/SciCatProject/scicat-backend-next)     |
| SciCat CLI                              | [https://github.com/paulscherrerinstitute/scicat-cli](https://github.com/paulscherrerinstitute/scicat-cli)       |
| ETHZ Archiving Services                 | [https://github.com/SwissOpenEM/ScopeMArchiver](https://github.com/SwissOpenEM/ScopeMArchiver)                   |
| Golang Globus transfer library          | [https://github.com/SwissOpenEM/globus-transfer-request](https://github.com/SwissOpenEM/globus-transfer-request) |
| Metadata Extraction - Life Sciences     | [https://github.com/SwissOpenEM/LS_Metadata_reader](https://github.com/SwissOpenEM/LS_Metadata_reader)           |
| Metadata Extraction - Material Sciences | [https://github.com/SwissOpenEM/MS_Metadata_reader](https://github.com/SwissOpenEM/MS_Metadata_reader)           |
| OSC-EM format converters                | [https://github.com/osc-em/converter-JSON-to-mmCIF](https://github.com/osc-em/converter-JSON-to-mmCIF)           |
| OSC-EM Schema                           | [https://github.com/osc-em/OSCEM_Schemas](https://github.com/osc-em/OSCEM_Schemas)                               |

### External links

- [SciCat Development Guide](https://scicatproject.github.io/documentation/Development/)

<!-- Jump to next page -->
{% include documentationStepper/forwardBackward.html showBack=false showNext=false %}
