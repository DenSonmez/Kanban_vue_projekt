// Methods to add, remove and edit tasks
export function addTask(column) {
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
  }
  // metod to show the input field
  export function selectName(index, column) {
    column.tasks[index].showNameListe = !column.tasks[index].showNameListe;
  }
  // metod to add the name to the task
  export function addNameToTask(name, index, column) {
    column.tasks[index].assignedTo = name;
    column.tasks[index].showNameListe = false;
  }
  
  export function removeTask(tasks, task) {
    const index = tasks.indexOf(task);
    if (index !== -1) {
      tasks.splice(index, 1);
    }
  }
  
  export function editTask(field, index, column) {
    column.tasks[index][`edit${field.charAt(0).toUpperCase() + field.slice(1)}`] = true;
  }
  
  export function saveTask(field, index, column) {
    column.tasks[index][`edit${field.charAt(0).toUpperCase() + field.slice(1)}`] = false;
  }
  