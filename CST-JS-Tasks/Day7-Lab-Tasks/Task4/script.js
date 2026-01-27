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

window.onload = function() {
    var table = document.getElementById("studentTable");
    // UpdateList Function
    function updateList() {
        for (var i = 0; i < students.length; i++) {
            var newRow = table.insertRow();
            // Create Cells
            var cellName = newRow.insertCell(0);
            var cellAge = newRow.insertCell(1);
            var cellCourse = newRow.insertCell(2);
            // Fill Cells
            cellName.innerHTML = students[i].name;
            cellAge.innerHTML = students[i].age;
            cellCourse.innerHTML = students[i].Crs;
        }
    }
    updateList();
    // Search Function
    var searchInput = document.getElementById("search");
    searchInput.onkeyup = function() {
        var filter = searchInput.value.toLowerCase().trim();
        var rows = table.getElementsByTagName("tr");
        for (var i = 1; i < rows.length; i++) {
            var name = rows[i].cells[0].textContent.toLowerCase().trim();
            var course = rows[i].cells[2].textContent.toLowerCase().trim();
            if (name === filter || course === filter) {
                rows[i].style.display = "";      
            } else {
                rows[i].style.display = "none"; 
            }
        }
    }
    // Select Sort Function
    var selcSort = document.getElementById("selectSort");
    selcSort.onchange = function() {
        var sortBy = this.value;
        if (sortBy === "name") {
            students.sort(function(a, b) {
                return a.name.localeCompare(b.name);
            });
        } else if (sortBy === "age") {
            students.sort(function(a, b) {
                return a.age - b.age;
            });
        }
        // while (table.rows.length > 1) {
        //     table.deleteRow(1);
        // }
        updateList();
    };
}