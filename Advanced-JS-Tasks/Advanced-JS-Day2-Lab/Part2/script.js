/*
artTwo: 
- Consider You  have Array Of Employees   
-- use this Array To:  
Q1: Create a function that returns another function that Take Emp and Return it’s Name e  
Q2: Create a counter function that increases every time it’s called.  
Q3: Create a function that tracks how many times a button is clicked each Time Clicked To change Body Background.  
Q4: Create a closure that adds a fixed number to any number.  
Q5: Create a closure that keeps track of how many employees have been added. 
Q6: Create a closure that Takea Bonus percentage and applies it To Emp Salary.  
Q7: Create a closure that remembers a department name and returns a Greeting. 
Q8: Use map to get an array of employee names. 
Q9: Use filter to get only employees who earn more than 4500. 
Q10: Use reduce to calculate the total Salaries. 
Q11: Create a pure function that increases an employee salary by 10%. 
Q12: Add a new employee to EmpArray immutably(without changing  the original use map). 
Q13: Write a higher-order function applyBonus(fn). 
Q14: Filter employees by department using a reusable curried function. 
Q15: Use map to update salaries (+5%) without modifying the original.
*/

// - Consider You  have Array Of Employees
var employees = [
    { id: 1, name: "Ahmed", salary: 4000, department: "IT" },
    { id: 2, name: "Sara", salary: 5000, department: "HR" },
]

// Q1: Create a function that returns another function that Take Emp and Return it’s Name e
function getEmployeeName(employeesArr) {
    return function() {
        return employeesArr.map(
        function(employee) {
            return employee.name;
        });
    }
}
console.log("Q1:", getEmployeeName(employees)());


// Q2: Create a counter function that increases every time it’s called.
function counterFun() {
    var count = 0;
    return function() {
        count++;
        return count;
    }
}
var counter = counterFun();
console.log("Q2:", counter());
console.log("Q2:", counter());
console.log("Q2:", counter());

// Q3: Create a function that tracks how many times a button is clicked each Time Clicked To change Body Background.
var btn = document.createElement("button");
btn.innerText = "Click Me";
document.body.appendChild(btn);
function btnClickCount() {
    var clickCount = 0;
    return function() {
        clickCount++;
        document.body.style.backgroundColor = clickCount % 2 === 0 ? "lightblue" : "lightgreen";
        console.log("Q3: Button clicked", clickCount, "times");
    }
}
var btnClick = btnClickCount();
btn.addEventListener("click", btnClick);

// Q4: Create a closure that adds a fixed number to any number.
function addFixedNum(fixedNum) {
    return function(num) {
        return num + fixedNum;
    }
}
var addNum = addFixedNum(5);
console.log("Q4:", addNum(10));
console.log("Q4:", addNum(20));

// Q5: Create a closure that keeps track of how many employees have been added.
function employeeTrack() {
    var empCount = 0;
    return function() {
        empCount++;
        return empCount;
    }
}
var trackEmp = employeeTrack();
console.log("Q5:", trackEmp());
console.log("Q5:", trackEmp());
console.log("Q5:", trackEmp());

// Q6: Create a closure that Takea Bonus percentage and applies it To Emp Salary.
function applyBonusPerc(bounsPerc) {
    return function(salary) {
        return salary + (salary * bounsPerc / 100);
    }
}
var bouns = applyBonusPerc(20);
console.log("Q6:", bouns(4000));
console.log("Q6:", bouns(5000));

// Q7: Create a closure that remembers a department name and returns a Greeting.
function departGreeting(depart) {
    return function() {
        return "Welcome to " + depart + " Department!";
    }
}
var greetIT = departGreeting("IT");
console.log("Q7:", greetIT());

// Q8: Use map to get an array of employee names.
var empNames = employees.map(function(emp) {
    return emp.name;
})
console.log("Q8:", empNames);

// Q9: Use filter to get only employees who earn more than 4500.
var earnMoreThan4500 = employees.filter(function(emp) {
    return emp.salary > 4500;
})
console.log("Q9:", earnMoreThan4500);

// Q10: Use reduce to calculate the total Salaries.
var totalSalaries = employees.reduce(function(total, emp) {
    return total + emp.salary;
}, 0);
console.log("Q10:", totalSalaries);

// Q11: Create a pure function that increases an employee salary by 10%.
function incSalaryBy10(emp) {
    return Object.assign({}, emp, { salary: emp.salary * 1.1 });
}
var updatedEmp = incSalaryBy10(employees[0]);
console.log("Q11:", updatedEmp);
console.log("Q11 Original:", employees[0]);

// Q12: Add a new employee to EmpArray immutably(without changing  the original use map).
function addNewEmp(empArr, newEmp) {
    return empArr.concat([newEmp]);
}
var newEmployee = { id: 3, name: "Lina", salary: 6000, department: "Finance" };
var newEmpArr = addNewEmp(employees, newEmployee);
console.log("Q12:", newEmpArr);
console.log("Q12 Original:", employees);

// Q13: Write a higher-order function applyBonus(fn).
function applyBonus(fn) {
    return function(emp) {
        return fn(emp.salary);
    }
}
var bonusFunc = applyBonus(function(salary) {
    return salary + (salary * 0.15);
});
console.log("Q13:", bonusFunc(employees[0]));

// Q14: Filter employees by department using a reusable curried function.
function filterByDepart(depart) {
    return function(empArr) {
        return empArr.filter(function(emp) {
            return emp.department === depart;
        })
    }
}
var filterIT = filterByDepart("IT");
console.log("Q14:", filterIT(employees));

// Q15: Use map to update salaries (+5%) without modifying the original.
var updatedSalary = employees.map(function(emp) {
    return {
        ...emp,
        salary: emp.salary * 1.05
    }
})
console.log("Q15:", updatedSalary);