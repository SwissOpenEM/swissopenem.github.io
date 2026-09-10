---
layout: page
title: Getting Started
permalink: /getting-started/
redirect_from:
  - /documentation/getting-started/
subtitle: Understand and explore OpenEM's capabilities for data ingestion and discovery
tags:
  - OpenEM documentation
  - Getting started
  - User guide
  - Data ingestion
  - Data discovery
journey:
  aria_label: OpenEM data journey
  map_label: OpenEM data journey and people
  lane_label: Data journey
  introduction: >-
    Follow microscopy data from its acquisition to long-term access and distribution.
    Select a component or use the arrows to explore the journey.
  previous_label: Previous step
  next_label: Next step
  progress_label: Step
  progress_separator: of
  steps:
    - id: acquisition
      number: "01"
      icon: microscope
      title: Electron microscope
      summary: Acquire data
      explanation_title: Acquire microscopy data
      explanation: >-
        The journey starts when an end user or data producer creates an acquisition
        with an electron microscope. This person is responsible for the source data.
    - id: ingestor
      number: "02"
      icon: cogs
      title: OpenEM Ingestor
      summary: "Extract & enrich"
      guides_label: Specific OpenEM Ingestor guides
      guides:
        - label: Sign-In
          url: https://discovery.psi.ch/login
        - label: Transfer Data
          url: https://discovery.psi.ch/ingestor?discovery=true
      explanation_title: Extract and complete metadata
      explanation: >-
        The end user starts the ingestion process. The OpenEM Ingestor then extracts
        available metadata automatically. The data producer reviews it and adds
        scientific context that cannot be derived from the files.
    - id: catalogue
      number: "03"
      icon: scicat
      title: SciCat
      summary: Catalogue data
      guides_label: Specific SciCat guides
      guides:
        - label: Browse Data
          url: https://discovery.psi.ch/datasets
        - label: Share Data
          url: https://discovery.psi.ch/publishedDatasets
      explanation_title: Transfer and catalogue
      explanation: >-
        OpenEM transfers the raw data and metadata together and creates a dataset
        record in SciCat, making the dataset findable and traceable.
    - id: storage
      number: "04"
      icon: storage
      title: Long-term storage
      summary: "Preserve & retrieve"
      guides_label: Specific long-term storage guides
      guides:
        # TODO: Replace this placeholder with the final guide-specific URL.
        - label: Receive Data
          url: https://data-catalog-services.pages.psi.ch/
      explanation_title: Preserve and retrieve
      explanation: >-
        The raw data is preserved in long-term storage (LTS). Authorised users can
        find the catalogue record and retrieve the associated files when needed.
    - id: depositor
      number: "05"
      icon: distribution
      title: Depositor
      summary: Distribute data
      guides_label: Specific Depositor guides
      guides:
        # TODO: Replace this placeholder with the final guide-specific URL.
        - label: Move Data
          url: https://data-catalog-services.pages.psi.ch/
      explanation_title: Distribute to third-party repositories
      explanation: >-
        The Depositor prepares selected data and metadata for submission to third-party
        repositories, extending access beyond the OpenEM platform.
  people:
    title: People
    hint: Click your role to learn more.
    note: Central services are provided and maintained by PSI.
    roles:
      - id: producer
        icon: user
        label: End user / Data producer
        scope: Facility-specific
        description: Acquires the microscopy data and provides its scientific context.
        action: Learn more
        url: https://data-catalog-services.pages.psi.ch/
      - id: operator
        icon: user-cog
        label: Operator
        scope: Facility-specific
        description: Operates and maintains the local OpenEM Ingestor.
        action: Learn more
        url: https://data-catalog-services.pages.psi.ch/
      - id: developer
        icon: users-cog
        label: Developer
        scope: Open Source Community
        description: Develops SciCat, storage and distribution services.
        action: Learn more
        url: https://data-catalog-services.pages.psi.ch/
---

{% include getting-started/journey.html %}
