---
layout: page
title: Team
permalink: /team/
subtitle: Who is OpenEM?
---

### Participating Institutes

<style>
    .content-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .content-container img {
        max-width: 45%; /* Maximale Breite des Bildes */
        height: auto; /* Beibehaltung des Seitenverhältnisses */
    }
    .institutes-container {
        max-width: 45%; /* Maximale Breite der Liste */
        list-style-type: none; /* Entfernt die Bulletpoints */
        padding: 0;
    }
    .institutes-container li {
        margin: 10px 0; /* Abstand zwischen den Listenelementen */
    }
</style>

<div class="content-container">
    <img src="/assets/img/opem_map.svg" alt="Map of participating institutions">
    <ul class="institutes-container">
        <li><a href="https://www.psi.ch">Paul Scherrer Institute (PSI)</a></li>
        <li><a href="https://www.epfl.ch">Swiss Federal Institute of Technology Lausanne (EPFL)</a></li>
        <li><a href="https://ethz.ch">Swiss Federal Institute of Technology in Zürich (ETHZ)</a></li>
        <li><a href="https://www.empa.ch/">Swiss Federal Laboratories for Materials Science and Technology (EMPA)</a></li>
        <li><a href="https://www.unibas.ch">University of Basel (UniBas)</a></li>
        <li><a href="https://www.unibe.ch/">University of Bern (UniBe)</a></li>
        <li><a href="https://unige.ch/">University of Geneva (UniGe)</a></li>
        <li><a href="#">University of Lausanne (UNIL)</a></li>
        <li><a href="https://www.uzh.ch/">University of Zurich (UZH)</a></li>
        <li><a href="https://www.dubochetcenter.ch/">Dubochet Center for Imaging (DCI)</a></li>
    </ul>
</div>

### Teams

<style>
    .team {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }
    .team li {
        flex: 1 1 50%;
        box-sizing: border-box;
        padding: 10px;
    }
    .round-image img {
        width: 150px; /* Einheitliche Breite */
        height: 150px; /* Einheitliche Höhe */
        border-radius: 10px;
        object-fit: cover; /* Stellt sicher, dass das Bild innerhalb der Grenzen bleibt */
    }
</style>

<div class="text-center">
    {% for team in site.data.team %}
        <h2>{{ team.name }}</h2>
        <div class="subtitle">
            <div>{{ team.description.role }}</div>
            <div>{{ team.description.responsibility }}</div>
            <div>{{ team.description.affiliation }}</div>
        </div>
        <ul class="team">
            {% for person in team.members %}
                <li>
                    <div class="round-image">
                        <img
                            src="/assets/img/team/{{ person.image }}"
                            alt="{{ person.name }}"
                        />
                    </div>
                    <div class="name">
                        <a href="{{ person.page }}">{{ person.name }}</a>
                    </div>
                    <div class="position">{{ person.position }}</div>
                    <div class="position">{{ person.affiliation }}</div>
                </li>
            {% endfor %}
        </ul>
    {% endfor %}
</div>
