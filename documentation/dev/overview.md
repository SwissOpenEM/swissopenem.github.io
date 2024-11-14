---
layout: page
title: Overview
permalink: /documentation/dev/overview
---

<!-- Show the current active documentation page -->
{% include documentationStepper/stepper.html %}

## Overview

In this section of the website you will find the documentation for the development of the OpenEM components.

The projects are available open-source. You will find a list here: <a href="/outreach#opensourceprojects">List of open source projects</a>

{% assign docs = site.data.documentation-dev %}
<table>
  <thead>
    <tr>
      <th>Chapter</th>
      <th>Link</th>
    </tr>
  </thead>
  <tbody>
    {% for doc in docs %}
    <tr>
      <td>{{ doc.description }}</td>
      <td><a href="{{ doc.path }}">Click</a></td>
    </tr>
    {% endfor %}
  </tbody>
</table>

<!-- Jump to next page -->
{% include documentationStepper/forwardBackward.html showBack=false showNext=false %}