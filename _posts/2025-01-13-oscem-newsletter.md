---
layout: post
title:  Updates for the OSC-EM community
author: Spencer Bliven
date:   2025-01-13 12:00:00 +0100
categories: news
tags: [newsletter]
cover-img:
  - https://raw.githubusercontent.com/osc-em/.github/refs/heads/main/profile/assets/img/conversion.png: |-
      OSC-EM workflow
thumbnail-img: https://raw.githubusercontent.com/osc-em/.github/refs/heads/main/profile/assets/img/oscem_logo_236x300.png
---

_OpenEM is happy to be a contributor to the Open Science Community for Electron Microscopy (OSC-EM). The following newsletter was sent out to OSC-EM members, but I wanted to reshare it with the OpenEM community and invited interested parties to join us._

Dear OSC-EM members,

Happy 2025! It has now been nearly a year since the EM standards workshop established the _Open Science Community for Electron Microscopy_ (OSC-EM). This mailing list has been fairly quiet in that year, but the technical group has been hard at work. One of my new year’s resolutions is to provide more regular updates to all of you on our progress, as well as invite more people to review and contribute to the burgeoning standard.

As a first step, the technical group will hold regular monthly meetings. These are currently planned for the first Monday of the month online, and are open to everyone. The next meeting will be Monday, 3 Feb 2025, at 16:00 CET/15:00 GMT/10:00 EST. More information is available [here](https://indico.psi.ch/e/oscem-2025).

Work on the project is organized through our [osc-em github organization](https://github.com/osc-em). Yves Tittes, Lola Sánchez de Lara, Sofya Laskina, and others have contributed to [schemas](https://github.com/osc-em/OSCEM_Schemas) for a number of methods, including single particle cryoEM, tomography, and processing. The schemas are authored using the [LinkML](https://linkml.io) schema language, from which we automatically generate JSON Schema, JSON-LD contexts, OWL, and other formats required for validation and semantic reasoning.

A [metadata extraction tool](https://github.com/SwissOpenEM/LS_Metadata_reader) is now available for collecting OSC-EM metadata during acquisitions using SerialEM, Thermo Fisher EPU, and TOMO5. See the example [apoferritin dataset](https://discovery.psi.ch/datasets/20.500.11935%2Fe9958228-11b9-42ea-a099-813150c3ccea) collected at the University of Basel. An [OSC-EM to mmCIF converter](https://github.com/osc-em/converter-OSCEM-to-mmCIF) is also available to provide interoperability with [EM Data Bank](https://www.ebi.ac.uk/emdb) and the [Protein Data Bank](https://www.wwpdb.org).

In 2025, we will continue to refine the schema and expand support for additional methods, ensuring broader applicability across various electron microscopy workflows. Collaborations with other EM standards initiatives will remain a key focus, alongside efforts to add formal connections to relevant ontologies. Additionally, we will advance the integration of OSC-EM support into acquisition workflows, processing tools, and data repositories. These developments hold exciting potential for the community, and we warmly invite you to join us in shaping the future of open science in electron microscopy.

Sincerely,

Spencer & the OSC-EM Team
