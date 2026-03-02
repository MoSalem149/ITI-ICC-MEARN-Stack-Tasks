//TODO
//? Student Interface
interface Student {
  id: number;
  name: string;
  email?: string;
  isActive: boolean;
  grades: number[];
} //* DONE

//TODO
//? Function Add a new student (returns void)
let newStd: Student[] = [];
function addStudent(std: Student) {
  newStd.push(std);
} //* Done

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
function calcAvgGrade(std: Student): number {
  let stdGrades = std.grades;
  let sumGrades = stdGrades.reduce((acc, cur) => {
    return cur + acc;
  }, 0);
  let gradeAvg = sumGrades / stdGrades.length;
  return gradeAvg;
} //* Done

//! Test
let aliceAvg = calcAvgGrade(newStd[0]!);
console.log(aliceAvg);

//TODO
//? Get student status based on average grade (returns string)
function getStatus(std: number): string {
  if (std >= 90) {
    return "Excellent";
  } else if (std >= 70) {
    return "Good";
  } else if (std >= 50) {
    return "Average";
  } else {
    return "Needs improvement";
  }
} //* Done

//! Test
let aliceStatus = getStatus(aliceAvg);
console.log(aliceStatus);
