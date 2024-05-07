<template>
    <v-app-bar app color="#fff9f3" dark class="navbar">
      
          <v-toolbar-title>
            <img src="//images.squarespace-cdn.com/content/v1/644a289cd8c0b42f41a8474f/d48644be-e0bd-4a3f-97e2-f9e4e7e5466e/fysiofresh-logo-text.png?format=1500w" alt="Fysiofresh" width="300" @click="homePage" style="cursor: pointer;">
          </v-toolbar-title>
    

          <v-row class="justify-center">
        <v-col cols="auto">
          <v-toolbar-items>
            <v-btn text @click="servicePage">Service</v-btn>
            <v-btn text @click="practicalPage">Praktisk</v-btn>
            <v-btn text @click="aboutPage">Om</v-btn>
          </v-toolbar-items>
        </v-col>
        </v-row>
    </v-app-bar>
  </template>
  
  
  
  <script>
  export default {
    methods: {
      homePage() {
        window.location.href = 'https://www.fysiofresh.dk/';
      },
      servicePage() {
        window.location.href = 'https://www.fysiofresh.dk/';
      },
      practicalPage() {
        window.location.href = 'https://www.fysiofresh.dk/spoergsmaal-og-svar';
      },
      aboutPage() {
        window.location.href = 'https://www.fysiofresh.dk/om-fysiofresh';
      }
    }
  };
  </script>
  
