---
layout: page
title: Overview
permalink: /documentation/admin/overview
---

<!-- Show the current active documentation page -->
{% include documentationStepper/stepper.html %}

## Overview

In this section of the website you will find the documentation for the installation and maintenance of the university-related components. 

The instructions are aimed at the administrators of the OpenEM components that are managed within the universities. For questions and problems regarding the infrastructure outside the university, please use the corresponding support channels which can be found on the website. 

{% assign docs = site.data.documentation-op %}
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
{% include documentationStepper/forwardBackward.html showBack=false showNext=true %}