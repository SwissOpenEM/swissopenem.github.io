---
layout: page
title: Overview
permalink: /documentation/user/overview
---

<!-- Show the current active documentation page -->
{% include documentationStepper/stepper.html %}

## Overview

In this section of the website you will find the documentation for use by an end user. 

The instructions are aimed at users who wish to transfer or download data within the framework of OpenEM. If you have any questions or problems, please get in touch with the contact person at your university.

{% assign docs = site.data.documentation-user %}
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

{% include documentationStepper/forwardBackward.html showBack=false showNext=true %}