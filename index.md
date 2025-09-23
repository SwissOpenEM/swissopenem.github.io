---
layout: home
title: Open Electron Microscopy Data Network
tags:
  - OpenEM
  - Electron microscopy
  - Research data
  - Project updates
  - Scientific collaboration
share-description: |-
  The Open EM Data Network (OpenEM) is a consortium of Swiss electron microscopy facilities working together to implement FAIR and open research data.
---


Welcome to the OpenEM project website. Our goal is to simplify the work with electron microscopy data and to support research. Here you will find current information on the project and its progress. Technical documentation and information on project participation will also be made available here in the future.

If you are interested or have any feedback, please contact us.

{% capture buttons %}
[What is OpenEM?](/about)
[What does OpenEM deliver?](/deliverables)
[How does OpenEM do it?](/timeline)
{% endcapture -%}
{% include button_row.html content=buttons %}

## Latest News

{% assign posts = site.posts | sort: "date" | reverse | slice: 0, 1 -%}

{% include news_timeline.html posts=posts %}

{% include fa.html icon="caret-right" %} [More project news](news)
