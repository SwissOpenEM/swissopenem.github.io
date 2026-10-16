---
layout: page
title: Deliverables
permalink: /deliverables/
subtitle: What to expect from the project
tags:
  - Project deliverables
  - Metadata standards
  - Metadata catalog
  - International repositories
  - Work packages
work_packages:
  - number: 1
    title: Metadata Standards
  - number: 2
    title: SciCat Metadata Catalog
  - number: 3
    title: Deposition in International Repositories
  - number: 4
    title: Education
---

All delivery results of the project are described here. The schedule and dependencies are described on the [Timeline page]({{ '/timeline' | relative_url }}).

Different components or organisational topics are being worked on within each work package.

<section class="deliverables" aria-label="Work packages and tasks" data-deliverables>
  <p class="deliverable-hint" id="deliverable-hint">Select a work package to view its tasks and progress below.</p>
  <div class="deliverable-container" role="group" aria-describedby="deliverable-hint" aria-label="Select a work package">
    {% for wp in page.work_packages %}
      {% capture wp_url %}/deliverable-wp{{ wp.number }}/{% endcapture %}
      <button class="deliverable-box{% if forloop.first %} active{% endif %}" type="button" data-wp="{{ wp.number }}" data-url="{{ wp_url | relative_url }}" aria-controls="deliverable-content" aria-pressed="{% if forloop.first %}true{% else %}false{% endif %}">
        <span class="deliverable-box-number">WP {{ wp.number }}</span>
        <img src="{{ '/assets/img/wp/WP' | append: wp.number | append: '.svg' | relative_url }}" alt="" width="40" height="40">
        <span class="deliverable-box-text">{{ wp.title }}</span>
        <span class="deliverable-box-action" aria-hidden="true"><span class="deliverable-box-view">View tasks</span><span class="deliverable-box-selected">Selected</span> <span>↓</span></span>
      </button>
    {% endfor %}
  </div>
  <div class="deliverable-results">
    <p class="deliverable-results-label" data-wp-label aria-live="polite">Tasks &amp; progress · WP 1</p>
    <div id="deliverable-content" class="deliverable-content" role="region" aria-label="Selected work package tasks" aria-busy="true">
      <p>Loading tasks…</p>
    </div>
  </div>
  <noscript><p>View the tasks on the individual work package pages:</p><ul>{% for wp in page.work_packages %}{% capture wp_url %}/deliverable-wp{{ wp.number }}/{% endcapture %}<li><a href="{{ wp_url | relative_url }}">WP {{ wp.number }}: {{ wp.title }}</a></li>{% endfor %}</ul></noscript>
</section>

<script src="{{ '/assets/js/project/deliverables.js' | relative_url }}" defer></script>
