---
layout: page
title: Facility Information
permalink: /documentation/user/facilities
description: Information about OpenEM participating facilities
---


{% for facility in site.data.facilities %}
## {{ facility.name }}
{% include facility_table.md facility=facility %}

{% endfor %}
