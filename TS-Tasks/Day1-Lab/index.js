//TODO
//? Function Add a new student (returns void)
var newStd = [];
function addStudent(std) {
    newStd.push(std);
} //*Done
//! Test
addStudent({
    id: 1,
    name: "Alice Johnson",
    isActive: true,
    grades: [85, 90, 82, 88],
});
console.log(newStd);
//TODO
//? Calculate average grade for a student (returns number)
function calcAvgGrade(std) {
    var stdGrades = std.grades;
    var sumGrades = stdGrades.reduce(function (acc, cur) {
        return cur + acc;
    }, 0);
    var gradeAvg = sumGrades / stdGrades.length;
    return gradeAvg;
} //*Done
//! Test
var aliceAvg = calcAvgGrade(newStd[0]);
console.log(aliceAvg);
//TODO
//? Get student status based on average grade (returns string)
function getStatus(std) {
    if (std >= 90) {
        return "Excellent";
    }
    else if (std >= 70) {
        return "Good";
    }
    else if (std >= 50) {
        return "Average";
    }
    else {
        return "Needs improvement";
    }
} //*Done
//! Test
var aliceStatus = getStatus(aliceAvg);
console.log(aliceStatus);
