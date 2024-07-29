---
layout: page
title: Roadmap
permalink: /roadmap/
subtitle: The time schedule for our project
---

You can find a complete overview of everything this project delivers on the Deliverables page. Sub-goals have been defined in the roadmap in order to visualise the course of the project over time.

The description of the individual components and their function can be found here.

### Timeline ###

<html>
  <head>
    <title>Gantt Chart</title>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['gantt']});
      google.charts.setOnLoadCallback(drawChart);

      function loadYMLData() {
        {% assign roadmap = site.data.roadmap %}
        var rows = [];

        {% for task in roadmap %}
          rows.push([
            '{{ task.task_id }}',
            '{{ task.task_name }}',
            '{{ task.resource }}',
            new Date({{ task.start_date | date: '%Y, %m, %d' }}),
            new Date({{ task.end_date | date: '%Y, %m, %d' }}),
            null,
            {{ task.percent_complete }},
            {% if task.dependencies %}'{{ task.dependencies }}'{% else %}null{% endif %}
          ]);
        {% endfor %}

        return rows;
      }

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Task ID');
        data.addColumn('string', 'Task Name');
        data.addColumn('string', 'Resource');
        data.addColumn('date', 'Start Date');
        data.addColumn('date', 'End Date');
        data.addColumn('number', 'Duration');
        data.addColumn('number', 'Percent Complete');
        data.addColumn('string', 'Dependencies');

        var rows = loadYMLData();
        data.addRows(rows);

        var options = {
          height: 400,
          gantt: {
            criticalPathEnabled: false,
            arrow: {
              angle: 100,
              width: 5,
              color: 'green',
              radius: 0
            }
          }
        };

        var chart = new google.visualization.Gantt(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
    </script>
  </head>
  <body>
    <div id="chart_div"></div>
  </body>
</html>

### Initialization ###

The project was initiated and the recruitment process started. Dependencies were identified and contact was made with dependent projects and organisations. Project organisational issues are being clarified.

A workshop on EM standards was held as part of this process. With the founding of the OSC-EM "Open Standards Community for EM", a working group for the standardisation of metadata was set up. Within the working group, requirements are collected and defined to which the OpenEM project is orientated.

Inspections were carried out at the participating faculties.

### Planning and Preparation ###

The project methodology and project tools were defined. Furthermore, all administrative issues were clarified so that the implementation of the project could begin. The task packages were assigned to the team and responsibilities were clarified.

### Concept & Realisation ###

#### Milestone I ####

| Component                | Goal                                                                                      |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| Metadata Extractor      | Generate a metadata.json file from EM device data for ingestion using a script.                                       |
| Authentication Infrastructure | Implement Globus authentication, requiring separate manual with a service user login to access.                                   |
| Ingestor                | Provision of a minimal user interface for editing metadata and support for basic ingestion functionalities. The ingestor creates a dataset and transfers the data using Globus or s3.               |
| Education - Website     | Finalize project description and site goals with collected content.                                     |
| Repository Integration   | Produce mmCIF files for PDB/EMDB.     |
| Archival and Retrieval   | A dataset can be reliably archived and retrieved from ETHZs long term storage. PSI already supports this.             |
| SciCat                  | Deploy SciCat V4 at PSI with configuration to integrate with the archival system (RedML).                |

#### Milestone II (beta-Release) ####

| Component      | Goal       |
| ------------- | -------------- |
| Ingestor    | Enable visualisation and easier editing of metadata, especially standard fields in the frontend. The backend provides information on file selection.     |
| Education - Website    | Own domain and first relevant user instructions.      |
| Repository Integration   | Increase EMDB compatibility and provide a tool for model refinement.     |
| Archival and Retrieval   | PSI archiver can fully access Globus.     |
| SciCat   | SciCat V4 is in production. Sustainability model is discussed by steering committee.     |

#### Milestone III (Development completed) ####

| Component      | Goal       |
| ------------- | -------------- |
| Metadata Extractor    | Material science use cases are completed (TEM, STEM, EELS, HD) and minimum one microscope at each facility is supported.     |
| Authentication Infrastructure    | Datasets are owned and managed by end users.     |
| Ingestor    | Dynamic frontend generated by selected schema and individual ingestor backend are possible. The backend provides an administrative interface and can call different metadata extractors.      |
| Education - Website    | Operator manual is finished.     |
| Repository Integration   | Interface for uploading processed files and downloading annotated mmCIF.    |
| Archival and Retrieval   | ETHZ archiver system hardware is completed.    |
| SciCat   | Integrate both PSI and ETHZ archiver systems. Provide schema validation.    |

### Introduction ###

#### Milestone IV (Roll-out completed) ####

| Component      | Goal       |
| ------------- | -------------- |
| Ingestor    | Include user feedback in the design and provide a plugin based system for metadata extractors.  |
| Education - Website    | User manual is finished.     |
| Repository Integration   | Enable upload to EMPIAR.    |

#### Milestone V (Reworks ETH) ####

| Component      | Goal       |
| ------------- | -------------- |
| Repository Integration   | Deal with datasets using different version schema.     |
| SciCat   | Easier authorization and user management.     |