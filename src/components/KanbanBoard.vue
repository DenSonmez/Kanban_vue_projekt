<template>
  <v-container class="cus-background">
    <!-- gridkomponent -->
    <v-col cols="12"> <!-- 12 kolonner i gridet -->
      <h2 class="text-left">Kanban Board</h2>
    </v-col>

    <v-row class="mt-5"> <!-- for skabe lidt aftand -->
      <v-col v-for="(column, index) in arrColumns" :key="index" cols="2,5">
        <!-- opretter en kolonne til hver kanban-kolonne -->
        <v-card class="p-2" :color="column.color">
          <h2 class="text-center">{{ column.title }}</h2>

          <!-- træk og slip komponent -->
          <draggable class="list-group kanban-column" :list="column.tasks" group="tasks" itemKey="uniqueId">
            <template #item="{ element, index }">
              <v-card class="task-card">
                <v-card-text class="edit">
                  <template v-if="!element.editTitle">
                    <h4 @click="editTask('title', index, column)">{{ element.title }}</h4>
                    <v-icon class="icon" @click="editTask('title', index, column)" style="color: #887070">mdi-pencil</v-icon>
                  </template>
                  <template v-else>
                    <v-text-field v-model="element.title" @blur="saveTask('title', index, column)"></v-text-field>
                  </template>
                </v-card-text>

                <v-card-text class="edit">
                  <template v-if="!element.editDescription">
                    <p @click="editTask('description', index, column)">{{ element.description }}</p>
                    <v-icon class="icon" @click="editTask('description', index, column)" style="color: #887070">mdi-pencil</v-icon>
                  </template>

                  <template v-else>
                    <v-text-field v-model="element.description" @blur="saveTask('description', index, column)"></v-text-field>
                  </template>
                </v-card-text>

                <v-card-text class="editAssignment">
                  <template v-if="!element.editingAssignedTo">
                    <p @click="editTask('assignedTo', index, column)"> {{ element.assignedTo || 'Unassigned' }} </p>
                    <v-icon class="icon" @click="selectName(index, column)">mdi-plus</v-icon>
                  </template>

                  <template v-else>
                    <v-text-field v-model="element.assignedTo" @blur="saveTask('assignedTo', index, column)"></v-text-field>
                  </template>
                  <v-menu v-model="element.showNameListe" offset-y>
                    <v-list>
                      <v-list-item v-for="name in names" :key="name" @click="addNameToTask(name, index, column)">
                        <v-list-item-title>{{ name }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-card-text>
                <v-btn @click="removeTask(column.tasks, element)" small class="float-right">
                  <v-icon size="20">mdi-delete</v-icon>
                </v-btn>
              </v-card>
            </template>
          </draggable>

          <!-- Funktionen til tilføje task -->
          <div v-if="column.showInputField" class="add-button-container text-center">
            <v-text-field v-model="column.newTask.title" required placeholder="Title"></v-text-field>
            <v-text-field v-model="column.newTask.description" placeholder="Description"></v-text-field>
            <v-text-field v-model="column.newTask.assignedTo" placeholder="Assigned To"></v-text-field>
            <v-btn @click="addTask(column)" color="#381010" :disabled="!column.newTask.title.trim()">
              <v-icon>mdi-plus</v-icon> <span style="text-transform: none;">Add another Card</span>
            </v-btn>
          </div>
          <div v-else class="text-center">
            <v-btn @click="column.showInputField = true" color="#381010">
              <v-icon class="ml-2">mdi-plus</v-icon>
              <span style="text-transform: none;">
                {{ column.tasks.length > 0 ? 'Add another Card' : 'Add a Card' }}
                <!-- hvis der er opgaver i kolonnen, så skriv "Add another Card" ellers "Add a Card" -->
              </span>
            </v-btn>
          </div>

        </v-card>
      </v-col>
    </v-row>
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
        { title: "Backlog", color: "warning", tasks: [], newTask: { title: "", description: "", assignedTo: "" } },

        { title: "Nice To Have", color: "green", tasks: [], newTask: { title: "", description: "", assignedTo: "" } },

        { title: "To Do", color: "secondary", tasks: [], newTask: { title: "", description: "", assignedTo: "" } },

        { title: "In Progress", color: "success", tasks: [], newTask: { title: "", description: "", assignedTo: "" } },

        { title: "Done", color: "primary", tasks: [], newTask: { title: "", description: "", assignedTo: "" } }
      ],
      names: ['Maria', 'Nishandan', 'Lukas ', 'Philip', 'Kevin', 'Sebastian '], // Liste over navne
    };
  },


  //metoder til at tilføje, fjerne og redigere opgaver
  methods: {
    addTask(column) {
      const { newTask } = column;
      if (newTask.title.trim()) {
        const task = {
          title: newTask.title.trim(),
          description: newTask.description.trim() || "No description",
          assignedTo: newTask.assignedTo.trim() || "Unassigned",
          editTitle: false,
          editDescription: false,
          editAssignedTo: false,
          showNameListe: false
        };
        column.tasks.push(task);
        column.newTask = { title: "", description: "", assignedTo: "" };
        column.showInputField = false;
      }
    },

    //Funktion til at vise navne listen
    selectName(index, column) {
      column.tasks[index].showNameListe = !column.tasks[index].showNameListe;
    },
    //Funktion til at tilføje navn til opgaven
    addNameToTask(name, index, column) {
      column.tasks[index].assignedTo = name;
      column.tasks[index].showNameListe = false;
    },
    //Funktion til at fjerne opgave
    removeTask(tasks, task) {
      const index = tasks.indexOf(task);
      if (index !== -1) {
        tasks.splice(index, 1);
      }
    },

    //Funktion til at redigere opgave
    editTask(field, index, column) {
      column.tasks[index][`edit${field.charAt(0).toUpperCase() + field.slice(1)}`] = true;
    },
    saveTask(field, index, column) {
      column.tasks[index][`edit${field.charAt(0).toUpperCase() + field.slice(1)}`] = false;
    }
  }


}


</script>
