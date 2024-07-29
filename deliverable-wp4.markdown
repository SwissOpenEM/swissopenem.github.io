---
layout: page
title: User Training, Outreach and Sustainability
permalink: /deliverable-wp4/
---

### User Training, Outreach and Sustainability ###

The User Training, Outreach and Sustainability work package contains the following tasks and components.

#### Organisational tasks ####

<html>
    <div class="wp-bar">
        <div class="wp-header-row">
            <div class="wp-header-col">ID</div>
            <div class="wp-header-col">Description</div>
            <div class="wp-header-col">Status</div>
        </div>
        {% for item in site.data.deliverables-wp.wp4 %}
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
        {% for item in site.data.deliverables-wp.wp4 %}
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

Task 4.1: User Training

Task 4.2: Outreach and Dissemination

Task 4.3: Establishing Sustainability

Organized OSC-EM workshop
Participation in 6 conferences & workshops
Website (https://swissopenem.github.io), with more content coming soon
