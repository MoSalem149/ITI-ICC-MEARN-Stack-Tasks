// Recieve Student Degree Then Print Grade and Level With Color related to grade

var studentGrade = prompt("Enter Student Degree:");
console.log("%c " + studentGrade, "color: white; background-color: blue; font-size: 20px;");

switch (true) {
    case (studentGrade >= 85):
        console.log("%c Excellent", "color: white; background-color: green; font-size: 20px;");
        break;
    case (studentGrade >= 75):
        console.log("%c Very Good", "color: white; background-color: yellow; font-size: 20px;");
        break;
    case (studentGrade >= 65):
        console.log("%c Good", "color: white; background-color: orange; font-size: 20px;");
        break;
    default:
        console.log("%c Fail", "color: white; background-color: red; font-size: 20px;");
}