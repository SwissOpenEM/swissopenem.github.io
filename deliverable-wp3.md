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

To deposit biological specimen data, the European Bioinformatics Institute (EMBL-EBI) offers three central repositories relevant to Cryo-EM data. Early access to the testing version of OneDep API provides a method of depositing datasets to EMDB and PDB. [OSCEM to mmCIF format converter](https://github.com/osc-em/converter-OSCEM-to-mmCIF) is developed for metadata interoperability between OSCEM and OneDep PDBx/mmCIF syntax. A Web-based UI on top of SciCat allows for the upload of processed files to create OneDep depositions. Additional functionality will be added to the [depositor](https://github.com/SwissOpenEM/Depositor) to create depositions of raw datasets in EMPIAR.

#### Deposition-2: Expanding automated deposition tools for other EM disciplines

Compared to task 1 of this deliverable, there are no central repositories as those offered by EBI. We are exploring possible repositories for depositions and considering the following projects:

- The [NOMAD project](https://nomad-lab.eu/nomad-lab/) lists data from EELS experiments and offers an API to interact with
- [Material Science Cloud](https://www.materialscloud.org/home) offers an archiving solution in any format and enables integration with other services, such as built-in visualizations and workflow managers.
During the next milestones, we will work on integrating deposition from SciCat to these repositories.
