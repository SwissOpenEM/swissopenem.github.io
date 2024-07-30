---
layout: page
title: Deposition in International Repositories
permalink: /deliverable-wp3/
---

### Deposition in International Repositories ###

The Deposition in International Repositories work package contains the following tasks and components.

#### Organisational tasks ####

<html>
    <div class="wp-bar">
        <div class="wp-header-row">
            <div class="wp-header-col">ID</div>
            <div class="wp-header-col">Description</div>
            <div class="wp-header-col">Status</div>
        </div>
        {% for item in site.data.deliverables-wp.wp3 %}
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
        {% for item in site.data.deliverables-wp.wp3 %}
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

#### Deposition-1: Developing automated deposition tools for cryo-EM ####

Early access to wwPDB’s OneDep API, which provides a method for depositing life science datasets to EMDB and PDB.
OSC-EM to mmCIF format converter developed for metadata interoperability: https://github.com/osc-em/converter-JSON-to-mmCIF

#### Deposition-2: Expanding automated deposition tools for other EM disciplines ####

Material Science support in OSC-EM
Exploring possible repositories (NOMAD, Material Science Cloud)