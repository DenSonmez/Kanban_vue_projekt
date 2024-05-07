<template>
  <v-container class="cus-background">
    <!-- grid component -->
    <v-col cols="12"> <!-- 12 columns in the grid -->
      <h2 class="text-left">Kanban Board</h2>
    </v-col>

    <v-row class="mt-5"> <!-- to create some distance  -->
      <v-col v-for="(column, index) in arrColumns" :key="index" cols="2,5">
        <!-- creates a column for each kanban column -->
        <v-card class="p-2" :color="column.color">
          <h2 class="text-center">{{ column.title }}</h2>

          <!-- drag and drop component -->
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
                  <!-- Dropdown menu and  Add name to the tasks -->
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

          <!-- The function to add task  -->
          <div v-if="column.showInputField" class="add-button-container text-center">
            <v-text-field v-model="column.newTask.title" required placeholder="Title"></v-text-field>
            <v-text-field v-model="column.newTask.description" placeholder="Description"></v-text-field>
            <v-text-field v-model="column.newTask.assignedTo" placeholder="Assigned To"></v-text-field>
            <v-btn @click="addTask(column)" color="#381010" :disabled="!column.newTask.title.trim()">
              <v-icon>mdi-plus</v-icon> <span style="text-transform: none;">Add another Card</span>
            </v-btn>
          </div>
          <!-- The function to display the input field -->
          <div v-else class="text-center">
            <v-btn @click="column.showInputField = true" color="#381010">
              <v-icon class="ml-2">mdi-plus</v-icon>
              <span style="text-transform: none;">
                {{ column.tasks.length > 0 ? 'Add another Card' : 'Add a Card' }}
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
import { addTask, selectName, addNameToTask, removeTask, editTask, saveTask } from "./Methods";

export default {
  name: "kanban-board",
  components: {
    draggable
  },
  // data to create columns and tasks
  data() {
    return {

      arrColumns: [
        { title: "Backlog", color: "warning", tasks: [], newTask:
         { title: "", description: "", assignedTo: "" } },

        { title: "Nice To Have", color: "green", tasks: [], newTask: 
        { title: "", description: "", assignedTo: "" } },

        { title: "To Do", color: "secondary", tasks: [], newTask:
         { title: "", description: "", assignedTo: "" } },

        { title: "In Progress", color: "success", tasks: [], newTask: 
        { title: "", description: "", assignedTo: "" } },

        { title: "Done", color: "primary", tasks: [], newTask: 
        { title: "", description: "", assignedTo: "" } }
      ],
      names: ['Maria', 'Nishandan', 'Lukas ', 'Philip', 'Kevin', 'Sebastian ']
    };
  },

  // methods to add, remove, edit and save tasks
  methods: {
    addTask,
    selectName,
    addNameToTask,
    removeTask,
    editTask,
    saveTask
  }
}

</script>
