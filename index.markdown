---
layout: home
title: Open Electron Microscopy Data Network
tags: 
  - OpenEM
  - Electron microscopy
  - Research data
  - Project updates
  - Scientific collaboration
---


Welcome to the OpenEM project website. Our goal is to simplify the work with electron microscopy data and to support research. Here you will find current information on the project and its progress. Technical documentation and information on project participation will also be made available here in the future.

If you are interested or have any feedback, please contact us. 

<html>
<br>
<body>

<div class="button-container">
  <a href="/about" class="button">What is OpenEM?</a>
  <a href="/deliverables" class="button">What does OpenEM deliver?</a>
  <a href="/roadmap" class="button">How does OpenEM do it?</a>
</div>

<br>
</body>
</html>

### For whom is OpenEM? ### 
<br>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bilder mit Flexbox</title>
    <style>
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }
        .image {
            width: 200px; /* Grundgröße der Bilder */
            transition: transform 0.3s ease;
            position: relative;
            z-index: 1; /* Sicherstellen, dass die Bilder übereinander liegen */
        }
        .image:hover {
            transform: scale(1.1); /* Bild vergrößern beim Hover */
        }
        .middle {
            width: 133px; /* Mittleres Bild um 1/3 kleiner */
            margin-left: -30px; /* Überlappung nach links */
            margin-right: -30px; /* Überlappung nach rechts */
            z-index: 2; /* Sicherstellen, dass das mittlere Bild oben ist */
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="assets/img/dataproducer.png" alt="Linkes Bild" class="image">
        <img src="assets/img/data.png" alt="Mittleres Bild" class="image middle">
        <img src="assets/img/dataconsumer.png" alt="Rechtes Bild" class="image">
    </div>
</body>
</html>
<br>

### Project News ###
News and posts about the project can be found <a href="/news/">here</a>.