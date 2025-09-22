---
layout: post
title:  OneDep depositor & February Workshop
date:   2025-03-05 12:00:00 +0100
categories: news
tags: [newsletter]
cover-img:
  - /assets/img/250213_slide_900x277.png: |-
      Sofya Laskina presents the EMDB and PDB deposition interface at the February
      workshop
thumbnail-img: /assets/img/250213_thumbnail_600x600.png
excerpt: |-
  2025 started off strong for OpenEM, and we’re excited to share our progress with you! In
  the coming months, we’ll keep you updated on the project’s status and introduce key
  components in more detail. This month’s focus: the Depositor Service!
---

Dear OpenEM members,

2025 started off strong for OpenEM, and we’re excited to share our progress with you! In
the coming months, we’ll keep you updated on the project’s status and introduce key
components in more detail. This month’s focus: the Depositor Service!

## The project status

We're in the [Milestone V](https://www.openem.ch/timeline/), which means OpenEM is now
being deployed across all participating facilities! Exciting developments are happening
within the [OSC-EM](https://github.com/osc-em) consortium. Our collaboration with
Instruct-ERIC is yielding great results—soon, we’ll release a new version of the schema
that includes a section on processing. This will be particularly beneficial for
Scipionusers, as we expect full integration with OpenEM. Stay tuned!

## All-Hands workshop

Our recent All-Hands Workshop took place on February 13, 2025, at the University of
Bern. The hybrid format allowed us to record the session for those who couldn’t attend.
You can watch the recording
[here](https://psich.zoom.us/rec/share/0ouVFIZnhm547bav5PuN71-MrHDYkTyvs-RVb43YM73YMcKdZzt4571JgEpnn8qN.1gROCU2I5PlhniB8)
(Password: .cPK005m) or read the slides on
[zenodo](https://doi.org/10.5281/zenodo.14937442). During the workshop, we:

- Demo of our alpha release
- Explained key project components
- Engaged in discussions with facility managers, operators, and user scientists.

We are actively seeking feedback on the project now. Please get in touch if you have thoughts or concerns!

## Deposition service

One of OpenEM’s core features is publishing data to international repositories, including:

- PDB (Protein Data Bank) – stores 3D models of biological samples.
- EMDB (Electron Microscopy Data Bank) – holds 3D reconstructed maps.
- EMPIAR (Electron Microscopy Public Image Archive) – archives raw 2D micrographs.

To ensure smooth data deposition, we’re collaborating with EMBL-EBI teams. PDB and EMDB share a deposition service called OneDep, while EMPIAR requires an identifier linking to an EMDB model. The OneDep integration is currently available in OpenEM, with EMPIAR planned for the near future.

We’ve integrated data deposition into the OpenEM workflow via a link from the SciCat dataset page, making the process seamless. Users can search for their dataset by ID, author or details—and since metadata is acquired by participating facilities in OSC-EM format, it’s automatically included in depositions.

Here’s how it works:

1. Data Acquisition – Metadata about the instrument and acquisition parameters are
   automatically attached to new datasets in OSC-EM format when they are added to
   SciCat.
2. Automatic Conversion – The [OSCEM-to-JSON
   converter](https://github.com/osc-em/converter-OSCEM-to-mmCIF) transforms OSC-EM
   metadata into the mmCIF/PDBx format used by OneDep. This tool maps metadata fields
   between the two standards using a name-mapping file. Since it only depends on name
   mappings, adapting to schema changes is simple—there is no need to modify the source
   code.
3. Upload models and maps – Users may upload maps and models for deposition. For
   instance, supplementary images, FSC curve(s) and maps with respective contour levels.
   Pixel Size will be extracted automatically from the metadata. If the model is
   provided in mmCIF format, metadata from SciCat will be automatically merged with the
   coordinates into one file.
4. Submit to OneDep (beta) - Provide embargo period information, read reports, and
   submit. The deposition will then continue through OneDep. If the curator requests
   changes to your deposition, edits should be done through OneDep system rather than
   OpenEM.
5. User Download Option – Until OneDep’s API is officially released (expected by EBI by
   the end of 2025) users can download and manually submit their mmCIF file through the
   OneDep website for deposition.

## EMPIAR integration

Many users have been asking about EMPIAR support and we’re happy to share that it’s coming soon!
In the current milestone, we’re working on integrating EMPIAR deposition into OpenEM. Since we already use Globus for data transfers, we’ll build on that infrastructure. The web interface will be available via SciCat, but users will need to provide publication details required by EMPIAR.

We’ll keep you updated as development progresses!

## Materials Science

For facilities working with non-biological samples, we’re expanding support to include Materials Cloud Archive. Their team is currently developing an API, and we plan to integrate it into OpenEM.
Unlike biological research, where OneDep is the standard repository, the best deposition choice for materials science isn’t always clear. If you have a preferred archive, let us know—we’re open to suggestions!

Best regards,

OpenEM Team
