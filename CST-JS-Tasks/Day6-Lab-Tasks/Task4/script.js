/*
var students = [
  { name: "Ali", age: 20, Crs: "CS" },
  { name: "Sara", age: 22, Crs: "Math" },
  { name: "Omar", age: 19, Crs: "Physics" },
  { name: "Laila", age: 21, Crs: "CS" },
  { name: "Hassan", age: 23, Crs: "Engineering" },
  { name: "Mona", age: 20, Crs: "Biology" },
  { name: "Kareem", age: 24, Crs: "Math" },
  { name: "Noor", age: 18, Crs: "CS" }
];

suppose you have this array write js code to get these results and print Results on Document.

1-Display all students
2-find and Search for a student by name and print their details.
3-Find how many students are in the array(count Students).
4-Get all students who are in "CS"
5-Find youngest student
6-Sort Students by age
7-Create a new array with only student names.
8-Check if all students are above age  18 and return true or false 
9-return Students Who Have the Same Crs
10-Calculate the average age of all students.
11-Sort and Find top 3 oldest students
12-Find if there are students with the same name.
13-Reverse the array without using .reverse().
14-Add a new property email for each student in the format: name.toLowerCase+"@iti.com"
*/

var students = [
    { name: "Ali", age: 20, Crs: "CS" },
    { name: "Sara", age: 22, Crs: "Math" },
    { name: "Omar", age: 19, Crs: "Physics" },
    { name: "Laila", age: 21, Crs: "CS" },
    { name: "Hassan", age: 23, Crs: "Engineering" },
    { name: "Mona", age: 20, Crs: "Biology" },
    { name: "Kareem", age: 24, Crs: "Math" },
    { name: "Noor", age: 18, Crs: "CS" }
];

document.write("<h1><font color='red'>1- Display All Students:</font></h1>");

for ( i = 0; i < students.length; i++) {
    document.write(`<p> Student Name: ${students[i].name}</p>`);
}

document.write("<h1><font color='blue'>****************************************</font></h1>");

document.write("<h1><font color='red'>2- Find and Search for a Student by Name and Print their Details:</font></h1>");

var FindBystudentName = students.find(function(s) {
    return s.name === "Sara";
});
document.write(`Nmae: ${FindBystudentName.name}, Age: ${FindBystudentName.age}, Crs: ${FindBystudentName.Crs}`);

document.write("<h1><font color='blue'>****************************************</font></h1>");

document.write("<h1><font color='red'>3- Find How Many Students are in the Array(count Students):</font></h1>");

document.write("Students Count is: ", students.length)

document.write("<h1><font color='blue'>****************************************</font></h1>");

document.write("<h1><font color='red'>4- Get All Students Who are in 'CS':</font></h1>");

for (i = 0; i < students.length; i++) {
    if (students[i].Crs === "CS") {
        document.write(`<p>Students are in CS: ${students[i].name}</p>`)
    }
}

document.write("<h1><font color='blue'>****************************************</font></h1>");

document.write("<h1><font color='red'>5- Find Youngest Student:</font></h1>");
students.sort(function (a, b) {return a.age - b.age});
document.write(`Youngest Student is: ${students[0].name}`);

document.write("<h1><font color='blue'>****************************************</font></h1>");

document.write("<h1><font color='red'>6- Sort Students by Age:</font></h1>");

students.sort(function(a, b) { return a.age - b.age });
for (i = 0; i < students.length; i++) {
    document.write(`<p> Naem: ${students[i].name} Age: ${students[i].age}</p>`)
}

document.write("<h1><font color='blue'>****************************************</font></h1>");

document.write("<h1><font color='red'>7- Create a New Array with Only Student Names:</font></h1>");

var newArr = [];
for (i = 0; i < students.length; i++) {
    newArr.push(students[i].name);
}
document.write(`New Student Array with Names: [${newArr.join(", ")}]`)

document.write("<h1><font color='blue'>****************************************</font></h1>");

document.write("<h1><font color='red'>8- Check if All Students are Above Age  18 and Return true or false:</font></h1>");

newStdAgeArr = [];
for (i = 0; i < students.length; i++) {
    if (students[i].age >= 18) {
        newStdAgeArr.push(students[i].age);
    } else {
        document.write("All Students are Above Age  18: False")
    }
}

if (newStdAgeArr.length == students.length) {
    document.write("All Students are Above Age  18: True")
}

document.write("<h1><font color='blue'>****************************************</font></h1>");

document.write("<h1><font color='red'>9- Return Students Who Have the Same Crs:</font></h1>");

var courseGroups = {};

for (var i = 0; i < students.length; i++) {
    var course = students[i].Crs;
    if (!courseGroups[course]) {
        courseGroups[course] = [];
    }
    courseGroups[course].push(students[i].name);
}

for (var course in courseGroups) {
    if (courseGroups[course].length > 1) {
        document.write(course, " : ", courseGroups[course].join(", "));
    }
}

document.write("<h1><font color='blue'>****************************************</font></h1>");

document.write("<h1><font color='red'>10- Calculate the Average Age of All Students:</font></h1>");

var totalAge = 0;
for (i = 0; i < students.length; i++) {
    totalAge += students[i].age;
}
totalAgeAvg = totalAge / students.length;
document.write("Average Age of All Students is: " + totalAgeAvg);

document.write("<h1><font color='blue'>****************************************</font></h1>");

document.write("<h1><font color='red'>11- Sort and Find Top 3 Oldest Students:</font></h1>");

students.sort(function(a, b) {
    return b.age - a.age;
})
document.write("Top 3 Oldest Students: ", students[0].name + ": " + students[0].age + ", " 
    + students[1].name + ": " + students[1].age + ", " 
    + students[2].name + ": " + students[2].age )

document.write("<h1><font color='blue'>****************************************</font></h1>");

document.write("<h1><font color='red'>12-Find if there are Students with the Same Name:</font></h1>");

var nameArr = [];
for (var i = 0; i < students.length; i++) {
    nameArr.push(students[i].name);
}

var dup = nameArr.filter(function (name, idx, arr) {
    return arr.indexOf(name) !== idx;
});

var uniqueDup = dup.filter(function (name, idx, arr) {
    return arr.indexOf(name) === idx;
});

if (uniqueDup.length === 0) {
    document.write("Duplicate names: none");
} else {
    document.write("Duplicate names: " + uniqueDup.join(", "));
}


document.write("<h1><font color='blue'>****************************************</font></h1>");

document.write("<h1><font color='red'>13- Reverse the Array without Using .reverse():</font></h1>");

var reversedNames = [];
for (i = students.length - 1; i >= 0; i--) { 
    reversedNames.push(students[i].name);
}
document.write(`[${reversedNames}]`);

document.write("<h1><font color='blue'>****************************************</font></h1>");

document.write("<h1><font color='red'>14- Add a New Property Email for each Student in the Format: name.toLowerCase+'@iti.com':</font></h1>");

students.forEach(function(student) {
    student.email = student.name.toLowerCase() + "@iti.com";
    document.write(`<p><strong>Name:</strong> ${student.name}, 
        <strong>Email:</strong> ${student.email}, 
        <strong>Age:</strong> ${student.age}, 
        <strong>Course:</strong> ${student.Crs}</p>`);
});

document.write("<h1><font color='blue'>****************************************</font></h1>");

