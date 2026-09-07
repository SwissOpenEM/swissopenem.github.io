---
layout: page
title: User Workshop 2026
---

<!-- Show the current active documentation page -->
{% include documentationStepper/stepper.html %}

# User Workshop 2026

## Getting support

During the workshop:

- Join the [OpenEM Slack](https://join.slack.com/t/openem/shared_invite/zt-2zol5byg0-hQPsS3xb_CPsNk7QsbY8tw) and ask questions on the `#workshop` channel
- Make notes & add feedback to the google doc

After the workshop:

- Subscribe to [openem-members@lists.psi.ch](https://psilists.ethz.ch/sympa/subscribe/openem-members)
- Ask your facility contact
- Email [openem-help@lists.psi.ch](mailto:openem-help@lists.psi.ch) for cross-facility requests

### Facility Contact Information

| Facility | Contact person               | Contact email                                                                                                      | Additional Documentation                                                  |
| -------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| DCI-L    | Florent Wenger               |                                                                                                                    |                                                                           |
| LBEM     | Julika Radecke, Gaël Cartier |                                                                                                                    |                                                                           |
| Empa     | Despina Adamopoulou          | [despoina.adamopoulou@empa.ch](mailto:despoina.adamopoulou@empa.ch)                                                |                                                                           |
| ETHZ     | Philipp Wissmann             |                                                                                                                    |                                                                           |
| PSI      | Spencer Bliven               | [scicat-help@lists.psi.ch](mailto:scicat-help@lists.psi.ch)                                                        | [Data Catalog documentation](https://data-catalog-services.pages.psi.ch/) |
| UNIBAS   | Imre Gonda, Moritz Hunkeler  | [imre.gonda@unibas.ch](mailto:imre.gonda@unibas.ch), [moritz.hunkeler@unibas.ch](mailto:moritz.hunkeler@unibas.ch) |                                                                           |
| UNIBE    | David Kalbermatter           | [david.kalbermatter@unibe.ch](mailto:david.kalbermatter@unibe.ch)                                                  | Available on the transfer server                                          |
| UNIGE    | Andy Howe                    | [andrew.howe@unige.ch](mailto:andrew.howe@unige.ch)                                                                |                                                                           |

## Connect to your Facility

We recommend first trying the demo.

<!-- markdownlint-disable MD034 MD055 MD056 -->

| Facility | Ingestor URL | Network |
| -------- | ------------ | ------- |
| Demo | {% include inline_button.html contents="Open" href="https://discovery-qa.psi.ch/ingestor?backendUrl=https:%2F%2Fingestor.qa.psi.ch" %} `https://ingestor.qa.psi.ch/` {% include copyButton.html text="https://ingestor.qa.psi.ch/" %} | {% include inline_button.html contents="Test" href="https://ingestor.qa.psi.ch/docs/index.html" %} Internet |
{% for facility in site.data.facilities -%}
{%- assign qa_encoded = facility.ingestor_urls.qa | url_encode -%}
{%- assign connect_url = "https://discovery-qa.psi.ch/ingestor?backendUrl=" | append: qa_encoded -%}
{%- assign test_url = facility.ingestor_urls.qa | append: "/docs/index.html" -%}
| {{ facility.abbreviation }} | {% include inline_button.html contents="Open" href=connect_url %} `{{ facility.ingestor_urls.qa }}` {% include copyButton.html text=facility.ingestor_urls.qa %} | {% include inline_button.html contents="Test" href=test_url %} {{ facility.network }} |
{% endfor %}

<!-- markdownlint-enable MD034 MD055 MD056 -->

## Troubleshooting

### I don't belong to any SciCat groups

Groups should show up in the SciCat user profile (click on your name after logging in). If you are missing a group, contact Spencer Bliven or Carlo Minotti to be added.

### I logged in to the ingestor, but it still prompts me to log in again

First try refreshing the ingestor page.

If the button still says 'Login' rather than showing your name, try disabling 'Enhanced Tracking Protection' (Firefox) or 'Enhanced Security' (Chrome) for this site only.

![Enhanced Tracking Protection](/assets/img/documentation/user/strict_checking.png)

This step should be unnecessary in the future.

### I have both a PSI account and eduGAIN

We recommend logging in with your PSI account. P-groups can only be updated if you log in through PSI directly.
However, adding an eduGAIN account such as SWITCH eduId can be useful to maintain access if you ever change institutes. You can link a second login method with this link:

{% capture buttons %}
[Account management](https://kc.psi.ch/realms/awi/account/account-security/linked-accounts")
{% endcapture -%}
{% include button_row.html content=buttons %}

Go to `Account Security` > `Linked Accounts` and link any additional accounts wanted.

{% include documentationStepper/forwardBackward.html showBack=true showNext=true %}
