<template>
  <v-container class="cus-background">
    <!-- gridkomponent -->
    <v-col cols="12">
      <h1 class="text-center">Kanban Board</h1>
    </v-col>

  </v-container>
</template>



<script>
import draggable from "vuedraggable";
export default {
  name: "kanban-board",
  components: {
    draggable
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


  //metode til at tilføje, slette og redigere opgaver
  methods: {
      addTask(column) {
      const { newTask } = column;
      if (newTask.title.trim()) {
        const task = { 
        title: newTask.title.trim(), 
        description: newTask.description.trim() || "No description",
        editingTitle: false,
        editingDescription: false
        };
        column.tasks.push(task);
        column.newTask = { title: "", description: "" };
        column.showInputField = false;
      }
    },
    removeTask(tasks, task) {
      const index = tasks.indexOf(task);
      if (index !== -1) {
        tasks.splice(index, 1);
      }
    },
    editTaks(field, index, column) {
      column.tasks[index][editing$] = true;
    },
    saveTask(field, index, column) {
      column.tasks[index][`editing$] = false;
    }
  }

  }


</script>
