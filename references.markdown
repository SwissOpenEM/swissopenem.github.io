---
layout: page
title: References
permalink: /references/
---

<div class="image-grid">
  {% for reference in site.data.references %}
    <div class="grid-item">
      <a href="{{ reference.link }}">
        <img src="{{ reference.image }}" alt="{{ reference.title }}">
        <h3>{{ reference.title }}</h3>
      </a>
    </div>
  {% endfor %}
</div>