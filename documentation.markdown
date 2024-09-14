---
layout: page
title: Technical Documentation
permalink: /documentation/
subtitle: Operation and development
tags: 
  - Technical documentation
  - Operation
  - Development
  - User guides
  - API references
---

<div align="center">
    <img src="/assets/img/work.svg" alt="Documentation">
</div>

<style>
  .menu {
    position: fixed;
    left: 0;
    width: 200px;
    background-color: #f9f9f9;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 10px;
  }
  .menu a {
    display: block;
    padding: 8px;
    text-decoration: none;
    color: #333;
  }
  .menu a:hover {
    background-color: #f1f1f1;
  }
  .content {
    margin-left: 220px;
    padding: 20px;
  }
</style>

<div class="menu">
  <h3>Menu</h3>
  <a href="#section1">Introduction</a>
  <a href="#section2">Installation</a>
  <a href="#section3">Usage</a>
  <a href="#section4">API Reference</a>
  <a href="#section5">FAQ</a>
</div>

<div class="content">
  <h2 id="section1">Introduction</h2>
  <p>Welcome to the technical documentation. Here you will find all the information you need to get started.</p>

  <h2 id="section2">Installation</h2>
  <p>Follow these steps to install the software...</p>

  <h2 id="section3">Usage</h2>
  <p>Here is how you use the software...</p>

  <h2 id="section4">API Reference</h2>
  <p>Detailed API documentation can be found here...</p>

  <h2 id="section5">FAQ</h2>
  <p>Frequently asked questions...</p>
</div>

<script>
  function adjustMenuPosition() {
    const navElement = document.querySelector('nav');
    const menuElement = document.querySelector('.menu');
    if (navElement && menuElement) {
      const navHeight = navElement.getBoundingClientRect().height;
      menuElement.style.top = `${navHeight}px`;
    }
  }

  // Execute the function once on page load
  window.onload = adjustMenuPosition;

  // Re-adjust the menu position on window resize
  window.onresize = adjustMenuPosition;

  // Use requestAnimationFrame to adjust the menu position dynamically with a 100 ms delay
  function updateMenuPosition() {
    setTimeout(() => {
      adjustMenuPosition();
      requestAnimationFrame(updateMenuPosition);
    }, 50);
  }

  // Start the continuous update
  requestAnimationFrame(updateMenuPosition);
</script>