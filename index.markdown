---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

## Open Electron Microscope Data

<html>
<br>
<body>

<div class="button-container">
  <a href="/about" class="button">What is OpenEM?</a>
  <a href="/deliverables" class="button">What does OpenEM do?</a>
  <a href="/roadmap" class="button">How does OpenEM do it?</a>
</div>

<br>
</body>
</html>

{% assign latest_post = site.posts | sort: 'date' | last %}

{% if latest_post %}
## Last published post: ##
### [{{ latest_post.title }}]({{ latest_post.url }}) ###
**Date:** {{ latest_post.date | date: "%Y-%m-%d" }}

{{ latest_post.excerpt }}
{% endif %}