---
layout: page
title: Partners
permalink: /partners/
---

<div class="image-grid">
  {% for partner in site.data.partners %}
    <div class="grid-item">
      <a href="{{ partner.link }}">
        <img src="{{ partner.image }}" alt="{{ partner.title }}">
        <h3>{{ partner.title }}</h3>
      </a>
    </div>
  {% endfor %}
</div>