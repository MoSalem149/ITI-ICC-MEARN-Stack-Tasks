/*
3- Create constant project anonymouse object after takeing properties names 
and values from user (using object literals )
Note: names are projectId , projectName ,duration and printData which 
console.log all project data
Finally: try all lecture code
*/

const projectId = prompt("Enter Project ID:");
const projectName = prompt("Enter Project Name:");
const duration = prompt("Enter Project Duration:");

const project = {
    projectId,
    projectName,
    duration,
    printData: function() {
        console.log(`Project ID: ${this.projectId}`);
        console.log(`Project Name: ${this.projectName}`);
        console.log(`Duration: ${this.duration}`);
    }
}

project.printData();