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
              <strong class="post-date">{{ post.date | date: "%B %d, %Y" }}</strong>
              <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
              <div class="post-excerpt">
                {{ post.excerpt | markdownify }} <!-- Ändere die Anzahl der Wörter nach Bedarf -->
              </div>
          </div>
        </li>
      {% endfor %}
  </ul>
</html>