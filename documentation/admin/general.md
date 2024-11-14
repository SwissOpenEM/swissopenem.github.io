---
layout: page
title: General Information
permalink: /documentation/admin/general
---

<!-- Show the current active documentation page -->
{% include documentationStepper/stepper.html %}

## Basic infrastructure

OpenEM provides an infrastructure with which research data can be managed, catalogued and stored. The catalogue is mapped using SciCat. The Ingestor component was developed for the transfer of large EM data records and takes care of the use of the metadata extractor. The metadata is used for structured filing according to the FAIR principle.

### Responsibilities

Basically, the OpenEM infrastructure can be divided into three responsibility groups. 

The storage infrastructure and the Ingestor component are hosted at the university or research institution. The latter must ensure that the transfer server and the storage system on which raw data is stored are functional. The ingestor component, which runs on the transfer server, is the core component for data transfer. 

SciCat and the target server for file transfer are the responsibility of PSI and ETHZ. This also includes the Ingestor frontend, which is integrated into the SciCat environment.

The long-term storage is managed by CSCS or ETHZ. The data is archived there for the long term and can be requested by the user if required. The request can be made directly in SciCat, which then makes the data available for download on the cache server.

<div align="center">
    <br>
    <img src="/assets/img/documentation/admin/operation_manual_overview.png" alt="Components Overview" style="width: 60%;">
</div>

### Development

The maintenance and further development of the components is ensured by PSI and the open source community. Individual further development requests can be realised by the user due to the open source code.

<!-- Jump to next page -->
{% include documentationStepper/forwardBackward.html showBack=true showNext=true %}