---
layout: home
title: Open Electron Microscopy Data Network
tags:
  - OpenEM
  - Electron microscopy
  - Research data
  - Project updates
  - Scientific collaboration
---


Welcome to the OpenEM project website. Our goal is to simplify the work with electron microscopy data and to support research. Here you will find current information on the project and its progress. Technical documentation and information on project participation will also be made available here in the future.

If you are interested or have any feedback, please contact us.

<html>
<br>
<body>

<div class="button-container">
  <a href="/about" class="button">What is OpenEM?</a>
  <a href="/deliverables" class="button">What does OpenEM deliver?</a>
  <a href="/timeline" class="button">How does OpenEM do it?</a>
</div>

<br>
</body>
</html>

### Latest News ###

{% assign posts = site.posts | sort: "date" | reverse -%}
<ul class="timeline">
  {% for post in posts limit: 1 -%}
  <li class="xtimeline-item right">
    <div class="timeline-content">
      {% include news_item.html post=post %}
    </div>
  </li>
{%- endfor %}
</ul>

<i class="fas fa-caret-right" aria-hidden="true"></i> <a href="/news">More project news</a>
