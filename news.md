---
layout: page
title: News
permalink: /news/
tags:
  - Project updates
  - Announcements
  - Events
  - Research news
  - Community news
---

{% assign posts = site.posts | sort: "date" | reverse %}

<html>
  <ul class="timeline">
      {% for post in posts %}
        <li class="timeline-item right">
          <div class="timeline-content">
           {% include news_item.html post=post %}
          </div>
        </li>
      {% endfor %}
  </ul>
</html>
