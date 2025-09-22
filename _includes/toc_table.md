{% comment %}
Table-of-contents styled as a table.
Used in overview pages

Arguments:
- docs: list of documents
{% endcomment %}

|---|
{%- for doc in include.docs %}
{%- if doc.path == page.permalink %}
| {{ forloop.index }}. {{ doc.description }} |
{%- else %}
| [{{ forloop.index }}. {{ doc.description }}]({{ doc.path }}) |
{%- endif %}
{%- endfor %}
