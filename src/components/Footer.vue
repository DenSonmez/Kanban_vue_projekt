<template>
    <footer class="footer">
      <div class="footer-content">
        <v-toolbar-title>
          <img src="//images.squarespace-cdn.com/content/v1/644a289cd8c0b42f41a8474f/d48644be-e0bd-4a3f-97e2-f9e4e7e5466e/fysiofresh-logo-text.png?format=1500w" alt="Fysiofresh" width="300" @click="homePage" style="cursor: pointer;">
        </v-toolbar-title>
  
        
  
        <p style="color: #fff9f3;">Fysiofresh ApS</p>
        <p style="color: #fff9f3;">CVR 39269724</p>
        <p><a href="mailto:hello@fysiofresh.dk" style="color: #fff9f3;">hello@fysiofresh.dk</a></p>
        <p><a href="tel:+4550805081" style="color: #fff9f3;">+45 50 80 50 81</a></p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    methods: {
      homePage() {
        window.location.href = 'https://www.fysiofresh.dk/';
      },
    
    }
  };
  </script>
  
  <style>
  .footer {
    background-color: #4d1616;
    padding: 10px;
    text-align: center;
  }
  
  .footer-content {
    color: #fff9f3;
  }
  
  .footer-content img {
    cursor: pointer;
  }
  </style>
  