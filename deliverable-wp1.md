---
layout: page
title: Metadata Standards
permalink: /deliverable-wp1/
---

### Metadata Standards ###

The Metadata Standards work package contains the following tasks and components.

{% assign org_items = site.data.deliverables-wp.wp1 | where: "table", "org" %}
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

{% assign tec_items = site.data.deliverables-wp.wp1 | where: "table", "tec" %}
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

#### Metadata-Standards-1: Community consensus and commitment to data collection standards ####

- Established the <a href="https://github.com/osc-em">Open Standards Community for EM</a>
- Workshop 22-23 Feb 2024 with participants from facilities, software developers and repositories curators.
- Schema is now <a href="https://osc-em.github.io/OSCEM_Schemas/">available</a> for EM metadata. During next milestones, metadata required for processing will be included by our collaborators and support for Material Sciences will be extended. 
- Schema terms are defined with respect to existing ontologies where available: CryoEM ontology, PDBx/mmCIF dictionary, Helmholz EM Glossary, NeXus-FAIRmat NXem format.
- Tools available for or major instrument manufacturers and formats (Thermo Fisher EPU and SerialEM)
- Ontologies are also coordinated with the PREMISE project 

#### Metadata-Standards-2: Ensure streamlined and automatic metadata harvesting at all ETH sites ####

Metadata extraction tools for life sciences <a href="https://github.com/SwissOpenEM/LS_Metadata_reader">(LS-Metadata Reader)</a> and material science <a href="https://github.com/SwissOpenEM/metadata-extractor">(Metadata-Extractor)</a>

#### Metadata-Standards-3: SciCat Dataset Ingestor ####

- Fast data transfer using Globus (PSI) and S3 (ETHZ) to the arvhiver systems is available 
- Web-based front-end for data ingestion is supported by SciCat/ GUI application. Instrument metadata is automatically extracted while user enters sample metadata and authorship
- <a href="https://github.com/paulscherrerinstitute/scicat-cli">SciCat CLI</a> was updated to a new version of SciCat backend
