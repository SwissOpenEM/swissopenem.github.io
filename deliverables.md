---
layout: page
title: Deliverables
permalink: /deliverables/
subtitle: What to expect from the project
tags: 
  - Project deliverables
  - Metadata standards
  - Metadata catalog
  - International repositories
  - Work packages
---

All delivery results of the project are described here. The schedule and dependencies are described on the <a href="/timeline">Timeline page</a>. 

Different components or organisational topics are being worked on within each work package.

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deliverables</title>
</head>
<body>

<div class="deliverable-container">
    <div class="deliverable-box" id="box-1" onclick="showContent(1, false)">
        <p class="deliverable-box-text">Metadata Standards</p>
        <img src="/assets/img/wp/WP1.svg" alt="Metadata Standards Image">
    </div>
    <div class="deliverable-box" id="box-2" onclick="showContent(2, false)">
        <p class="deliverable-box-text">Scicat Metadata Catalog</p>
        <img src="/assets/img/wp/WP2.svg" alt="Scicat Metadata Catalog Image">
    </div>
    <div class="deliverable-box" id="box-3" onclick="showContent(3, false)">
        <p class="deliverable-box-text">Deposition in International Repositories</p>
        <img src="/assets/img/wp/WP3.svg" alt="Deposition in International Repositories Image">
    </div>
    <div class="deliverable-box" id="box-4" onclick="showContent(4, false)">
        <p class="deliverable-box-text">Education</p>
        <img src="/assets/img/wp/WP4.svg" alt="User Training, Outreach and Sustainability Image">
    </div>
</div>

<div id="deliverable-content" class="deliverable-content">
    Klicken Sie auf eine Box, um den Inhalt anzuzeigen.
</div>

<script>
    function showContent(boxNumber, init) {
        const urls = {
            1: '/deliverable-wp1/',
            2: '/deliverable-wp2/',
            3: '/deliverable-wp3/',
            4: '/deliverable-wp4/',
        };

        fetch(urls[boxNumber])
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const mainContent = doc.querySelector('div[role="main"]');
                if (mainContent) {
                    const innerDiv = mainContent.querySelector('div');
                    const innerInnerDiv = innerDiv.querySelector('div');
                    if (innerInnerDiv) {
                        document.getElementById('deliverable-content').innerHTML = innerInnerDiv.innerHTML;
                    } else {
                        document.getElementById('deliverable-content').innerHTML = 'The inner content could not be found.';
                    }
                } else {
                    document.getElementById('deliverable-content').innerHTML = 'The content could not be found.';
                }

                // Highlight active box
                const boxes = document.querySelectorAll('.deliverable-box');
                boxes.forEach(box => box.classList.remove('active'));
                boxes[boxNumber - 1].classList.add('active');

                if (!init) {
                    const element = document.getElementById('deliverable-content');
                    const yOffset = -100; // Höhe des Offsets, z.B. die Höhe der Menüleiste
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
                
            })
            .catch(error => {
                document.getElementById('deliverable-content').innerHTML = 'The content could not be found.';
                console.error('Error fetching content:', error);
            });
    }

    // Automatically select Box 1 when the page loads
    document.addEventListener('DOMContentLoaded', () => {
        showContent(1, true);
    });
</script>

</body>
</html>
