---
layout: page
title: Deposition in International Repositories
permalink: /deliverable-wp3/
---

### Deposition in International Repositories ###

The Deposition in International Repositories work package contains the following tasks and components.

{% assign org_items = site.data.deliverables-wp.wp3 | where: "table", "org" %}
{% if org_items.size > 0 %}

#### Organisational tasks ####

<html>
    <div class="wp-bar">
        <div class="wp-header-row">
            <div class="wp-header-col">ID</div>
            <div class="wp-header-col">Description</div>
            <div class="wp-header-col">Status</div>
        </div>
        {% for item in org_items %}
            <div class="wp-row">
                <div class="wp-col">{{ item.id }}</div>
                <div class="wp-col">{{ item.description }}</div>
                <div class="wp-col wp-status {{ item.status | downcase | replace: ' ', '-' }}">{{ item.status }}</div>
            </div>
        {% endfor %}
    </div>
</html>
{% endif %}

{% assign tec_items = site.data.deliverables-wp.wp3 | where: "table", "tec" %}
{% if tec_items.size > 0 %}

#### Technical tasks ####

<html>
    <div class="wp-bar">
        <div class="wp-header-row">
            <div class="wp-header-col">ID</div>
            <div class="wp-header-col">Description</div>
            <div class="wp-header-col">Status</div>
        </div>
        {% for item in tec_items %}
            <div class="wp-row">
                <div class="wp-col">{{ item.id }}</div>
                <div class="wp-col">{{ item.description }}</div>
                <div class="wp-col wp-status {{ item.status | downcase | replace: ' ', '-' }}">{{ item.status }}</div>
            </div>
        {% endfor %}
    </div>
</html>
{% endif %}

### Tasks ###

#### Deposition-1: Developing automated deposition tools for cryo-EM ####

To deposit biological specimen data, the European Bioinformatics Institute (EMBL-EBI) offers three central repositories relevant to Cryo-EM data. Early access to the testing version of OneDep API provides a method of depositing datasets to EMDB and PDB. <a href="https://github.com/osc-em/converter-OSCEM-to-mmCIF">OSCEM to mmCIF format converter</a> is developed for metadata interoperability between OSCEM and OneDep PDBx/mmCIF syntax. A Web-based UI on top of SciCat allows for the upload of processed files to create OneDep depositions. Additional functionality will be added to the <a href="https://github.com/SwissOpenEM/Depositor">depositor</a> to create depositions of raw datasets in EMPIAR.

#### Deposition-2: Expanding automated deposition tools for other EM disciplines ####

Compared to task 1 of this deliverable, there are no central repositories as those offered by EBI. We are exploring possible repositories for depositions and considering the following projects:

- The <a href="https://nomad-lab.eu/nomad-lab/">NOMAD project</a> lists data from EELS experiments and offers an API to interact with
- <a href="https://www.materialscloud.org/home">Material Science Cloud</a> offers an archiving solution in any format and enables integration with other services, such as built-in visualizations and workflow managers.  
During the next milestones, we will work on integrating deposition from SciCat to these repositories.
