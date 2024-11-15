---
layout: page
title: Overview
permalink: /documentation/dev/overview
---

<!-- Show the current active documentation page -->
{% include documentationStepper/stepper.html %}

## Overview

In this section of the website you will find the documentation for the development of the OpenEM components.

### External links

<table>
  <thead>
    <tr>
      <th>Source</th>
      <th>Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SwissOpenEm Projects</td>
      <td><a href="/outreach#opensourceprojects">Click</a></td>
    </tr>
    <tr>
      <td>SciCat Development Guide</td>
      <td><a href="https://scicatproject.github.io/documentation/Development/">Click</a></td>
    </tr>
  </tbody>
</table>

### Documentation

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