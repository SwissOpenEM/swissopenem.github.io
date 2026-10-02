---
layout: home
title: Open Electron Microscopy Data Network
full-width: true
tags:
  - OpenEM
  - Electron microscopy
  - Research data
  - Project updates
  - Scientific collaboration
share-description: |-
  The Open EM Data Network (OpenEM) is a consortium of Swiss electron microscopy facilities working together to implement FAIR and open research data.
home:
  hero:
    title: From microscopes
    emphasis: to open science.
    description: >-
      OpenEM brings data and metadata from participating Swiss electron microscopy
      facilities into the PSI-hosted SciCat catalogue, where it can be preserved,
      found and reused by researchers.
    actions_label: Learn more about OpenEM
    primary_action: Explore OpenEM data
    secondary_action: Getting Started
  journey:
    aria_label: >-
      Data and metadata flow from microscopes at participating Swiss organisations
      into the PSI-hosted SciCat catalogue, following the FAIR principles, and onward
      to archives, repositories and researchers
    facilities:
      - UNIBAS
      - PSI
      - UNIBE
    catalogue_label: "Data & metadata catalogue"
    catalogue_host: Hosted by PSI
    outputs:
      - title: Archives
        detail: CSCS · ETHZ
      - title: Repositories
        detail: EMDB · EMPIAR · PDB
      - title: Researchers
        detail: Find · access · reuse
    principles_heading: BUILT ON THE FAIR PRINCIPLES
    principles:
      - Findable
      - Accessible
      - Interoperable
      - Reusable
  about:
    label: OpenEM
    eyebrow: About the Project
    title: Making electron microscopy data open, FAIR and reusable.
    description: >-
      OpenEM connects Switzerland's electron microscopy facilities through shared
      standards, automated metadata collection and an open data infrastructure.
      Together, the participating organisations make valuable research data easier
      to preserve, discover and reuse.
    action: About the Project
  news:
    title: Latest news
    all_action: View all news
    item_action: Read story
---

{% include home/hero.html %}

{% include home/about.html %}

{% include home/news.html %}

<script src="{{ '/assets/js/home/journey.js' | relative_url }}" defer></script>
