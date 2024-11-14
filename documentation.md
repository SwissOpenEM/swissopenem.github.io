---
layout: page
title: Technical Documentation
permalink: /documentation/
subtitle: Operation and development
tags: 
  - Technical documentation
  - Operation
  - Development
  - User guides
  - API references
---

<!-- Show the current active documentation page -->
{% include documentationStepper/stepper.html %}

### Documentation

Here you will find a table of contents of the available documentation. 

Click directly on a chapter to jump to it.

<ul>
  <li><strong>User Manual</strong>
    <ul>
      {% for item in site.data.documentation-user %}
        <li><a href="{{ item.path }}" onclick="updateStepper('User Manual', '{{ item.title }}', '{{ item.path }}')">{{ item.description }}</a></li>
      {% endfor %}
    </ul>
  </li>
  <li><strong>Operation Manual</strong>
    <ul>
      {% for item in site.data.documentation-op %}
        <li><a href="{{ item.path }}" onclick="updateStepper('Operation Manual', '{{ item.title }}', '{{ item.path }}')">{{ item.description }}</a></li>
      {% endfor %}
    </ul>
  </li>
    <li><strong>Development Manual</strong>
    <ul>
      {% for item in site.data.documentation-dev %}
        <li><a href="{{ item.path }}" onclick="updateStepper('Development Manual', '{{ item.title }}', '{{ item.path }}')">{{ item.description }}</a></li>
      {% endfor %}
    </ul>
  </li>
</ul>