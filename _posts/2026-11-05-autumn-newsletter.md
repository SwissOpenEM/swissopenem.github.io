---
layout: post
title: "Fall 2026 Newsletter: using OpenEM at your next microscope session"
date:   2026-11-05 09:00:00 +0100
categories: news
tags:
  - newsletter
  - production
  - release
thumbnail-img: /assets/img/OpenEM-poster-thumbnail.png
excerpt: |-
  At the end of September, OpenEM reached a milestone: the funded project wrapped up, and
  what began as a research collaboration is now a live service. Data from participating
  microscopes can go straight into long-term storage, with metadata captured
  automatically, and come out the other side as a published dataset with a DOI. Around 70
  researchers already have accounts.

  In this issue: how to log in, a first look at the next release (including direct
  deposition to EMDB), and how you can help OpenEM grow.
---

Dear OpenEM community,

At the end of September, OpenEM reached a milestone: the funded project wrapped up, and
what began as a research collaboration is now a live service. Data from participating
microscopes can go straight into long-term storage, with metadata captured
automatically, and come out the other side as a published dataset with a DOI. Around 70
researchers already have accounts.

In this issue: how to log in, a first look at the next release (including direct
deposition to EMDB), and how you can help OpenEM grow.

## OpenEM is available in production

OpenEM is now part of the production PSI Data Catalog at
[discovery.psi.ch](https://discovery.psi.ch/). Microscope users at participating
facilities can archive their data with automatically extracted metadata, keep it in
long-term storage, and publish it with a DOI.

Interested in using OpenEM at your microscope? **Contact your facility operator** to get
started. You can find the operators for each facility on the
[facility contacts page](TODO-facility-contacts-url).

## Share the OpenEM video

Need to explain OpenEM to colleagues? Our short introductory video explains how data travels from the
microscope to the catalogue and on to public repositories.

<video controls playsinline preload="metadata" width="100%"
       poster="{{ '/assets/videos/OpenEM_poster.jpg' | relative_url }}"
       aria-label="Introduction to the OpenEM project">
  <source src="{{ '/assets/videos/OpenEM_compressed.mp4' | relative_url }}" type="video/mp4">
  <a href="{{ '/assets/videos/OpenEM_compressed.mp4' | relative_url }}">Download the OpenEM project video</a>
</video>

The video is viewable on the [OpenEM homepage](https://www.openem.ch/) and is archived on Zenodo
([10.5281/zenodo.23340591](https://doi.org/10.5281/zenodo.23340591)), together with an
introduction to the [PSI Data Catalog](https://doi.org/10.5281/zenodo.23340375). These videos were produced with
support from the ETH-ORD Open Educational Resources programme (Measure 3).

## Getting started

The [openem.ch]({{ '/' | relative_url }}) website has been redesigned to better fit the needs of
researchers:

- [Getting Started]({{ '/getting-started/' | relative_url }}) walks through the data
  journey from microscope to repository and points you to the right guide for your role.
- [Explore]({{ '/explore/' | relative_url }}) lists public OpenEM datasets.

The documentation has moved to the PSI Data Catalog documentation portal at
[data-catalog-services.pages.psi.ch](https://data-catalog-services.pages.psi.ch/openem/openem-start/),
which is also linked directly from SciCat. The best place to begin is the
[**quickstart guide**](TODO-quickstart-url).

Accounts have been created for **around 70 users** so far.

1. Go to [discovery.psi.ch](https://discovery.psi.ch/login) and log in with your
   institutional account via **eduGAIN**.
2. Open **Settings** and check your list of groups.
3. If you don't see your lab, contact your facility operator so they can add you.

## Coming in the next release

Based on your feedback from usability testing and our user workshops, the following
features have been developed and will be available with the next SciCat release:

- **Autocompletion** of user and facility information, so you type less and make fewer
  mistakes.
- **Tooltips with field definitions**: hover over a metadata field to see its OSC-EM
  description.
- **Transfer task list**: follow the progress of recent data transfers.
- **Deposition in EMDB/PDB**: the OneDep deposition API was released by EMBL-EBI in
  August, and the OpenEM Depositor has been updated to submit depositions directly from
  SciCat.

**EMPIAR:** Automated deposition of raw images to EMPIAR is not yet possible pending
additional features from EMBL-EBI. Until it does, EMPIAR depositions have to be
made manually. You can retrieve your data together with its OSC-EM metadata
from SciCat; a guide on exporting data from SciCat to EMPIAR will follow.

## Poster for printing and sharing

<a class="d-block w-50 mx-auto mb-3 float-md-right ml-md-4 w-md-25" href="{{ '/assets/img/OpenEM-poster.pdf' | relative_url }}">
  <img class="img-fluid img-thumbnail" src="{{ '/assets/img/OpenEM-poster-400x565.png' | relative_url }}"
       alt="OpenEM poster explaining what OpenEM is, why it is needed, how data flows from the microscope to public repositories, its core components, benefits, and partners"
       width="400" height="565">
</a>

An OpenEM poster is available for your facility, lab or department.
Download it as a [PDF for printing]({{ '/assets/img/OpenEM-poster.pdf' | relative_url }})
or as a [PNG image]({{ '/assets/img/OpenEM-poster-725x1025.png' | relative_url }}), and
share it with colleagues who might benefit from OpenEM.

## OSC-EM: better metadata definitions

The [Open Standards Community for Electron Microscopy (OSC-EM)](https://osc-em.github.io/)
is improving the descriptions of terms in the metadata schema and adding links to the
[EM Glossary](https://emglossary.helmholtz-metadaten.de/) and the
[PDBx/mmCIF dictionary](https://mmcif.wwpdb.org/). These definitions appear directly in
SciCat as tooltips, so every improvement helps users enter better metadata.

## How you can help

- **Add more datasets.** The more data that flows through OpenEM, the more valuable it
  becomes. Talk to your facility operator about ingesting your next session.
- **Publish your datasets.** Most of the roughly 40 datasets in OpenEM are still under
  embargo. Once your data is published, it shows up in the public
  [OpenEM search]({{ '/explore/' | relative_url }}) and gets a citable DOI.
- **Contribute to OSC-EM.** Join the
  [OSC-EM discussions](https://github.com/orgs/osc-em/discussions) or the
  [mailing list](https://listas.csic.es/cnb/wws/info/oscem) and help us refine the
  metadata definitions.
- **Report bugs and request features** through your facility operator, the
  [OpenEM support mailing list](https://psilists.ethz.ch/sympa/info/openem-help)
  (`openem-help@lists.psi.ch`), GitHub, or
  [Slack](https://join.slack.com/t/openem/shared_invite/zt-2zol5byg0-hQPsS3xb_CPsNk7QsbY8tw).
- **Spread the word.** Forward this newsletter to colleagues and invite them to join the
  [OpenEM members mailing list](https://psilists.ethz.ch/sympa/info/openem-members).

Thank you to everyone who has tested, ingested, and given feedback so far!

Best regards,

The OpenEM Team
