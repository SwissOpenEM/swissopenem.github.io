{% comment %}
List all workpackage tasks. Tasks are grouped by category (organizational and technical).

Arguments:

- tasks: List of workpackage tasks (from site.data.deliverables-*)

{% endcomment %}
{%- assign org_items = include.tasks | where: "table", "org" %}
{%- assign tec_items = include.tasks | where: "table", "tec" %}
{% if org_items.size > 0 %}

#### Organisational tasks

{% include project/work-package-table.html items=org_items %}

{% endif %}
{%- if tec_items.size > 0 %}

#### Technical tasks

{% include project/work-package-table.html items=tec_items %}

{% endif %}
