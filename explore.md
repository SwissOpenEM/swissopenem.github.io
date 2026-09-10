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
  summary_label: Dataset summary
  singular: dataset
  plural: datasets
  availability: available
  card_action: View in the PSI Data Catalog
  empty_message: No OpenEM datasets are currently listed.
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
  <a href="{{ site.data.openem_datasets.searchUrl }}" target="_blank" rel="noopener noreferrer">
    Open the live OpenEM search at PSI
  </a>.
</p>
</section>
