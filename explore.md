---
layout: page
title: Explore
permalink: /explore/
tags:
  - OpenEM datasets
  - Electron microscopy
  - Open research data
share-description: >-
  Discover public electron microscopy datasets shared through OpenEM and open their
  full metadata and data access options in the PSI Data Catalog.
dataset:
  api_endpoint: https://dacat.psi.ch/api/v3/datasets
  search_url: >-
    https://discovery.psi.ch/datasets?args=%7B%22skip%22:0,%22limit%22:25%7D&searchQuery=%7B%22keywords%22:%5B%22OpenEM%22%5D%7D
  summary_label: Dataset summary
  singular: dataset
  plural: datasets
  availability: available
  card_action: View in the PSI Data Catalog
  loading_message: Loading OpenEM datasets from the PSI Data Catalog…
  empty_message: No OpenEM datasets are currently listed.
  error_message: The OpenEM datasets could not be loaded. Check your connection and refresh the list.
  error_details_label: Show technical error
  retry_action: Refresh
---

<section class="dataset-showcase" aria-labelledby="openem-datasets-title">
<div class="dataset-showcase__intro" markdown="1">

## Explore public datasets from the OpenEM community {#openem-datasets-title}

Discover public electron microscopy datasets shared through OpenEM. The catalogue
entries below come from the PSI Data Catalog and link directly to the full metadata
and data access options.

</div>

{% include explore/dataset-cards.html %}

<p class="dataset-showcase__source">
  Looking for filters, complete metadata or download options?
  <a href="{{ page.dataset.search_url }}" target="_blank" rel="noopener noreferrer">
    Open the live OpenEM search at PSI
  </a>.
</p>
</section>
