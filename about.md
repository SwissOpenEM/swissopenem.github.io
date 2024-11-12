---
layout: page
title: About
permalink: /about/
tags: 
  - Open EM Data Network
  - OpenEM
  - Swiss electron microscopy
  - Open Research Data
  - FAIR data principles
  - EM data repository
  - EM metadata standardization
  - Data lifecycle
  - EM data publication
  - Scientific collaboration
---

### Summary

The Open EM Data Network (OpenEM) is a consortium of Swiss electron microscopy facilities working together to:

- Improve Open Research Data (ORD) practices in the Swiss EM community
- Provide an open and [FAIR](https://force11.org/info/the-fair-data-principles/) repository for Swiss EM data not hosted elsewhere
- Standardize EM metadata & automate collection at Swiss EM facilities
- Follow a consistent data lifecycle when collecting data at different facilities
- Streamline publication of EM data into open repositories like EMPIAR, EMDB, and the PDB

OpenEM will target both researchers producing EM data and consumers of open data for additional science. Data producers benefit from more streamlined data collection, standardized facilities, easier deposition for publication, and adherence to data management policies. The wider availability of open EM data brings numerous benefits, including reproducing results, applying new techniques to old data, training AI & other new methods, and mining data for new insights.

### Our Goal

Our primary goal is to strengthen co-operation and innovation in the field of electron microscopy. 

OpenEM enables collaboration and data exchange in specific groups by providing a platform for data exchange and streamlining data collection processes. OpenEM ensures integration with globally recognised platforms and closes gaps in functionality and application.

#### Example from Life Sciences

The experimental Data Lifecycle of biological specimens in the context of Cryo-Electron Microscopy begins with sample preparation. Researchers usually work for months to produce a sample that will be studied with the instrument. Naturally, this step creates a plethora of metadata that is important to reproduce the whole experiment at a later time point. In the next step, this sample is cryogenized and sent for a data acquisition to the microscope. Instrument settings are another source of the metadata. Depending on the method and software used, the data acquisition step creates a multitude of raw data types, such as 2D micrographs, annotated images, tomogram tilt series and others. This step is responsible for high storage requirements, as one dataset can take hundreds of gigabytes to a couple of Terabytes of space based on the resolution. In the next step, collected data will be reconstructed into three-dimensional electron microscopy (3DEM) maps, which is a very challenging. It requires sophisticated algorithms and great computing resources. Obtained maps can further be derived to atomic coordinate models. 
Problems can occur at every step of this workflow, and not every data acquisition results in the above scenario. Usually, the researcher needs to go through many cycles of sample preparation, freezing and acquisition before data can be analyzed on a level that can lead to a scientific discovery. For this reason, proper metadata tracking is of great importance in this process. 

The structural biologists community soon realized their need to share discoveries. Protein Data Bank was announced as early as 1971 and the Worldwide Protein Data Bank (wwPDB) was established in 2003. It is a database for the three-dimensional structural data of biological molecules. It accepts models created with different methods: X-ray crystallography, NMR Spectroscopy, EM, etc. Notably, the number of models based on EM is growing exponentially within the last ~10 years. The impact of PDB lists among others AlphaFold, an AI program predicting the 3D structure of proteins, was trained on PDB data.
Another database, Electron Microscopy Data Bank (EMDB), was created in 2002 and is dedicated to reconstructed maps of biological specimens created with EM. Publishing a map to this global public archive alongside publishing a scientific publication became a standard in the community. Both PDB and EMDB depositions are handled with one system called OneDep. Together with maps and/or model, a user needs to answer an extensive questionnaire to fill in metadata details. 
There is another database dedicated to EM, the Electron Microscopy Public Image Archive (EMPIAR). It is designed to store raw micrographs. Although the first deposition to EMPIAR took place in 2013, it is still not a common practice to upload their data to EMPIAR in the community. To especially promote the Reusability in FAIR EM-data management, we at OpenEM advocate for deposing raw data of the data acquisition session to EMPIAR. Given that instruments and methods today are pushing towards lower resolution ( up to sub-nanometer ), it is crucial data can be accessed by the whole community.

We decided to look at the current state with extra attention paid to Swiss data in EMDB and EMPIAR. For that, we queried all the EMDB entries, for which at least one funding organization was based in Switzerland. In total, after removing duplicates 1013 unique EMDB identifiers had a Swiss footprint. A prerequisite for EMPIAR deposition is an EMDB identifier. Accordingly, in the next step, we queried an EMPIAR database for each EMDB identifier recovered in the previous step. This way we extracted 109 entries in EMPIAR, meaning that ~10% of EMDB entries have public raw data accessible. This ratio is roughly double the international (1891 entries in EMPIAR vs 39950 entries in EMDB available as of 12.11.2024 ) but still has a lot of room for improvement. The following figure shows an annual distribution of EMDB and EMPIAR depositions and their ratio. Here we used a deposition date as a primary key. We excluded 2024 from this figure, as there is usually a time gap between deposition and publication in EMDB  and another until EMPIAR deposition.
![Swiss Depositions to EMDB and EMPIAR](/assets/img/swiss_em_data.png)

### Partners & Collaborations

All major academic electron microscopy facilities in Switzerland participate in
the network. For details see the [team page](/team/) and [partners page](/partners/).

![Project Collaborations](/assets/img/collaborations.png)

### Funding

OpenEM is a Swiss Open Research Data Grants (CHORD) project funded by
[ETH](https://ethrat.ch/en/eth-domain/open-research-data/) and
[swissuniversities](https://www.swissuniversities.ch/en/topics/digitalisation/open-research-data/swiss-open-research-data-grants/).

### Resources

For more information, see

- [OpenEM Poster](https://zenodo.org/record/7845286)
- [Github organization](https://github.com/SwissOpenEM/)
- [SciCat](https://scicatproject.github.io/)