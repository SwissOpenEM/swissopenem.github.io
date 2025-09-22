---
layout: page
title: Installation
permalink: /documentation/admin/installation
---

<!-- Show the current active documentation page -->
{% include documentationStepper/stepper.html %}

{% assign docs = site.data.installation %}
<table>
  <thead>
    <tr>
      <th>Component</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    {% for doc in docs %}
    <tr>
      <td><a href="{{ doc.path }}">{{ doc.title }}</a></td>
      <td>{{ doc.description }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

<!-- Jump to next page -->
{% include documentationStepper/forwardBackward.html showBack=true showNext=true %}