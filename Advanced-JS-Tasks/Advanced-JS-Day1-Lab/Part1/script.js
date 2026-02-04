/*
PartOne: 
1-Build a todoList object: Create an object todoList that manages a list of tasks. It should 
have: 
• A property tasks (an array, initially empty) to hold the task names. 
• A method addTask(task) that adds a new task to the list. 
• A method removeTask(task) that removes a task by name. 
• A method listTasks() that logs all tasks to the console (one per line).
*/

var todoList = {
    tasks: [],
    addTask: function(task) {
        this.tasks.push(task);
    },
    removeTask: function (task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
    },
    listTasks: function() {
        console.log(this.tasks);
    }
}

todoList.addTask("HTML");
todoList.addTask("CSS");
todoList.addTask("JS");
todoList.addTask("React");
todoList.removeTask("React");
todoList.listTasks();