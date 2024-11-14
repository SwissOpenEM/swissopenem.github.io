---
layout: page
title: Requirements & Infrastructure
permalink: /documentation/admin/req-infrastructure
---

<!-- Show the current active documentation page -->
{% include documentationStepper/stepper.html %}

## Hardware Requirements

Hardware requirements for server components

### Transfer Server

The transfer server is the central component on the part of the universities and research institutions. This is where the ingestor is installed and the metadata extractors are stored. 

| Component        | Minimum Requirements                  | Recommended Requirements                |
|------------------|---------------------------------------|-----------------------------------------|
| Memory           | 8 GB                                 | 16 GB or more                           |
| CPU              | 4 cores                               | 8 cores or more                         |
| Network          | 1 Gbps                                | 10 Gbps or more                         |
| Local Storage    | 80 GB                              | 120 GB SSD or more                        |

The transfer server must be capable of transferring large amounts of data (approximately 1-2 TB) using Globus or S3 to another server. Additionally, the server will run metadata extractors that analyze hundreds of small text files and extract their contents.

### Cache Storage

The cache memory should provide enough memory to hold several data records for at least 10 days. 

As we assume long transfer times in the background, network or direct storage can be used for the cache memory.

| Component        | Minimum Requirements                  | Recommended Requirements                |
|------------------|---------------------------------------|-----------------------------------------|
| Storage           | 50 TB                                 | 100 TB or more                           |


## Software Requirements

<i>(In Progress)</i>

Software requirements for server components

### Operating System

The software components can be compiled for different target operating systems. It is important that the operating systems are kept up to date and regularly supplied with updates.

| OS        | Minimum Requirements                  | Recommended Requirements                |
|------------------|---------------------------------------|-----------------------------------------|
| Linux-Distribution           |                               |                         |
| Windows-Server          |                               |                         |

### Additional Packages

| Package        | Minimum Requirements                  | Recommended Requirements                |
|------------------|---------------------------------------|-----------------------------------------|
|           |                               |                         |

<!-- Jump to next page -->
{% include documentationStepper/forwardBackward.html showBack=true showNext=true %}