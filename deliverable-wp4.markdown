---
layout: page
title: User Training, Outreach and Sustainability
permalink: /deliverable-wp4/
---

### User Training, Outreach and Sustainability ###

The User Training, Outreach and Sustainability work package contains the following tasks and components.

{% assign org_items = site.data.deliverables-wp.wp4 | where: "table", "org" %}
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

{% assign tec_items = site.data.deliverables-wp.wp4 | where: "table", "tec" %}
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

#### Education-1: User Training ####

Extend the project website so that operators and end users can set up and operate the project components. 

Plan and provide user training and content.

#### Education-2: Outreach and Dissemination ####

Promote awareness of the project and emphasise the benefits and results delivered. This includes organising and participating in workshops, publishing project documents and supporting our partners.

#### Education-3: Establishing Sustainability ####
 
Ensure sustainability in terms of maintenance, care and financing. 

#### Education-4: Project website ####

Provide a project website with the relevant content.