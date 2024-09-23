---
layout: page
title: Scicat Metadata Catalog
permalink: /deliverable-wp2/
---

### Scicat Metadata Catalog ###

The Scicat Metadata Catalog work package contains the following tasks and components.

{% assign org_items = site.data.deliverables-wp.wp2 | where: "table", "org" %}
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

{% assign tec_items = site.data.deliverables-wp.wp2 | where: "table", "tec" %}
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

#### SciCat-Metadata-Catalog-1: Establish Open EM data hub ####

SciCat Data Catalog is hosted at PSI and provides storage, archiving, and publishing for large-scale facilities (SLS, SwissFEL, etc).
- <a href="https://discovery.psi.ch">Data repository</a> 
- <a href="https://doi.psi.ch/">Published datasets</a> 
- (Coming) Authenticate using federated identities 

![SciCat Metadata catalog](/assets/img/scicatwp2.png)

#### SciCat-Metadata-Catalog-2: Integrate institute storage options ####

ETHZ ScopeM users will archive data to the ETHZ Long-term Storage (LTS).