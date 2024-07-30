---
layout: page
title: Metadata Standards
permalink: /deliverable-wp1/
---

### Metadata Standards ###

The Metadata Standards work package contains the following tasks and components.

#### Organisational tasks ####

<html>
    <div class="wp-bar">
        <div class="wp-header-row">
            <div class="wp-header-col">ID</div>
            <div class="wp-header-col">Description</div>
            <div class="wp-header-col">Status</div>
        </div>
        {% for item in site.data.deliverables-wp.wp1 %}
            {% if item.table == "org" %}
            <div class="wp-row">
                <div class="wp-col">{{ item.id }}</div>
                <div class="wp-col">{{ item.description }}</div>
                <div class="wp-col wp-status {{ item.status | downcase | replace: ' ', '-' }}">{{ item.status }}</div>
            </div>
            {% endif %}
        {% endfor %}
    </div>
</html>

#### Technical tasks ####

<html>
    <div class="wp-bar">
        <div class="wp-header-row">
            <div class="wp-header-col">ID</div>
            <div class="wp-header-col">Description</div>
            <div class="wp-header-col">Status</div>
        </div>
        {% for item in site.data.deliverables-wp.wp1 %}
            {% if item.table == "tec" %}
            <div class="wp-row">
                <div class="wp-col">{{ item.id }}</div>
                <div class="wp-col">{{ item.description }}</div>
                <div class="wp-col wp-status {{ item.status | downcase | replace: ' ', '-' }}">{{ item.status }}</div>
            </div>
            {% endif %}
        {% endfor %}
    </div>
</html>

### Tasks ### 

#### Metadata-Standards-1: Community consensus and commitment to data collection standards ####

Established the Open Standards Community for EM (https://github.com/osc-em)
Workshop 22-23 Feb 2024 with participants from facilities, software, and repositories
Draft schema available for EM metadata. The goal is to include metadata required for future processing and deposition.
Schema terms are defined by existing ontologies where available: CryoEM ontology, PDBx/mmCIF dictionary, Helmholz EM Glossary, NeXus-FAIRmat NXem format
Conversion tools under development for major instrument manufacturers and formats
Coordinate with PREMISE project regarding terms and ontologies

#### Metadata-Standards-2: Ensure streamlined and automatic metadata harvesting at all ETH sites ####

Metadata extraction tools for life sciences (https://github.com/SwissOpenEM/LS_Metadata_reader) and material science (https://github.com/SwissOpenEM/metadata-extractor)

#### Metadata-Standards-3: SciCat Dataset Ingestor ####

SciCat CLI: https://github.com/paulscherrerinstitute/scicat-cli
Web-based front-end planned
Fast data transfer using Globus