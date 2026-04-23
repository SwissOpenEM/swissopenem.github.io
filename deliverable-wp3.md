---
layout: page
title: Deposition in International Repositories
permalink: /deliverable-wp3/
---

### Deposition in International Repositories

The Deposition in International Repositories work package contains the following tasks and components.

{% include wptasks.md tasks=site.data.deliverables-wp.wp3 %}

### Tasks

#### Deposition-1: Developing automated deposition tools for cryo-EM

To deposit biological EM data, the European Bioinformatics Institute (EMBL-EBI) offers three central repositories relevant to Cryo-EM data.
OpenEM makes it easy to deposit datasets in EMDB and the PDB following data processing using the [depositor service](https://github.com/SwissOpenEM/Depositor). Add electron map and (optionally) molecular models on the SciCat website to export a single mmCIF file ready to upload to wwPDB's OneDep system, using the [OSCEM to mmCIF format converter](https://github.com/osc-em/converter-OSCEM-to-mmCIF).
EBI is also developing a method to allow services like OpenEM to automatically start depostions; this is implemented by SciCat, and will be enabled when OneDep releases the feature.

EMPIAR does not yet provide a method for automated deposition of raw images. However, SciCat allows images to be easily retrieved and prepared for deposition. Additional functionality is planned once EMPIAR releases more information about their deposition API.

#### Deposition-2: Expanding automated deposition tools for other EM disciplines

One significant repository for materials science data is [Materials Cloud](https://www.materialscloud.org/). Following consultation with materials science researchers, it became clear that relevant data from participating institutes is already collected in a FAIR manner under the [PREMISE](https://ord-premise.org/) project.
The [NOMAD project](https://nomad-lab.eu/nomad-lab/) lists data from EELS experiments and offers an API, but no labs had a requirement to deposit OpenEM datasets in NOMAD.
Therefore, this task was cancelled due to a lack of clear use cases.
