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

Early access to wwPDB’s OneDep API, which provides a method for depositing life science datasets to EMDB and PDB.
<a href="https://github.com/osc-em/converter-JSON-to-mmCIF">OSC-EM to mmCIF format converter</a> developed for metadata interoperability.

#### Deposition-2: Expanding automated deposition tools for other EM disciplines ####

- Material Science support in OSC-EM
- Exploring possible repositories (NOMAD, Material Science Cloud)