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

- [**User Manual**](/documentation/user/overview)
{%- for item in site.data.documentation-user %}
    1. <a href="{{ item.path }}" onclick="updateStepper('User Manual', '{{ item.title }}', '{{ item.path }}')">{{ item.description }}</a>
{%- endfor %}
- [**Operation Manual**](/documentation/admin/overview)
{%- for item in site.data.documentation-op %}
    1. <a href="{{ item.path }}" onclick="updateStepper('Operation Manual', '{{ item.title }}', '{{ item.path }}')">{{ item.description }}</a>
{%- endfor %}
- [**Development Manual**](/documentation/dev/overview)
{%- for item in site.data.documentation-dev %}
    1. <a href="{{ item.path }}" onclick="updateStepper('Development Manual', '{{ item.title }}', '{{ item.path }}')">{{ item.description }}</a>
{%- endfor %}
