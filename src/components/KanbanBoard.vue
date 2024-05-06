<template>
  <v-container class="cus-background">
    <!-- gridkomponent -->
    <v-col cols="12">
      <h1 class="text-center">Kanban Board</h1>
    </v-col>

  </v-container>
</template>



<script>

export default {
  name: "kanban-board",

  components: {

  },
 // data til at oprette kolonner og opgaver
  data() {
    return {
      arrColumns: [
        { title: "Backlog", color: "warning",
        tasks: [], newTask: { title: "", description: "" }},

        { title: "Nice Yo Have", color: "green",
        tasks: [], newTask: { title: "", description: "" }},

        { title: "To Do", color: "secondary", 
        tasks: [], newTask: { title: "", description: "" }},

        { title: "In Progress", color: "success", 
        tasks: [], newTask: { title: "", description: "" }},

        { title: "Done", color: "primary", 
        tasks: [], newTask: { title: "", description: "" }}
      ]
    };
  },


  }


</script>
