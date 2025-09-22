{% comment %}
Infobox for a facility.

Arguments:
- facility: JSON with facility info; see facilities.yml for contents

{% endcomment %}

{% assign f = include.facility %}
|---|---|
| Facility Name | {{f.name}} ({{f.abbreviation}})|
| Facility Institute | {{f.institute}} |
| Links |
{%- for link in f.urls %} [{{link.name}}]({{ link.url }})
{%- endfor -%}|
{% if f.contacts -%}
| Contacts |
{%- for contact in f.contacts -%}
    {%- if contact.email -%}
        [{{ contact.name}}](mailto:{{ contact.email }})
    {%- else -%}
        {{ contact.name}}
    {%- endif -%}
    {%- unless forloop.last %}, {% endunless -%}
{%- endfor %}|
{% endif -%}
| Storage Location | {{ f.storageLocation | default: PSI }} |
| Ingestor URL | [{{ f.facilityBackend }}](https://discovery.development.psi.ch/ingestor?backendUrl={{ f.facilityBackend | url_encode }}) |
