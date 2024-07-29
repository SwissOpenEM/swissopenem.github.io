---
layout: page
title: Scicat Metadata Catalog
permalink: /deliverable-wp2/
---

### Scicat Metadata Catalog ###

The Scicat Metadata Catalog work package contains the following tasks and components.

#### Organisational tasks ####

<html>
    <div class="wp-bar">
        <div class="wp-header-row">
            <div class="wp-header-col">ID</div>
            <div class="wp-header-col">Description</div>
            <div class="wp-header-col">Status</div>
        </div>
        {% for item in site.data.deliverables-wp.wp2 %}
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
        {% for item in site.data.deliverables-wp.wp2 %}
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

Task 2.1: Establish Open EM data hub. 

SciCat Data Catalog is hosted at PSI and provides storage, archiving, and publishing for large-scale facilities (SLS, SwissFEL, etc).
Data repository: https://discovery.psi.ch
Published datasets: https://doi.psi.ch/
(Coming) Authenticate using federated identities 

![SciCat Metadata catalog](/assets/img/scicatwp2.png)

Task 2.2: Integrate institute storage options 

ETHZ ScopeM users will archive data to the ETHZ Long-term Storage (LTS)