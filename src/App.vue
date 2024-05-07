
<template>
  <v-app>
    <v-main>
      <KanbanBoard />
      <Navbar />
      <Fotter />
    </v-main>
  </v-app>
</template>

<script setup>
import KanbanBoard from './components/KanbanBoard.vue';
import Navbar from './components/Navbar.vue';
import Fotter from './components/Footer.vue';
import './styles.css'; 



</script>
