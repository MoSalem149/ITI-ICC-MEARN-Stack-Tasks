students = [
    { fname:"Ahmed", lname:"Ali", crs:"JavaScript", phone:"01011111111", email:"ahmed@mail.com", grade:"A" },
    { fname:"Sara", lname:"Hassan", crs:"React", phone:"01122222222", email:"sara@mail.com", grade:"B+" },
    { fname:"Omar", lname:"Mostafa", crs:"Node.js", phone:"01233333333", email:"omar@mail.com", grade:"A-" },
    { fname:"Laila", lname:"Yousef", crs:"Python", phone:"01044444444", email:"laila@mail.com", grade:"A" },
    { fname:"Yassin", lname:"Mahmoud", crs:"MongoDB", phone:"01155555555", email:"yassin@mail.com", grade:"B" }
];

window.onload = function() {
    var selectElement = document.getElementsByTagName("select")[0];
    var detailsDiv = document.getElementById("stdDetiles");
    detailsDiv.style.display = "none";
    // UpdateList Function
    function updateList() {
        selectElement.innerHTML = '<option value="default">— Choose Student —</option>';
        for (var i = 0; i < students.length; i++) {
            var option = document.createElement("option");
            option.text = students[i].fname + " " + students[i].lname;
            option.value = i;
            selectElement.appendChild(option);
        }
    }
    updateList();
    // OnChange Function
    selectElement.onchange = function() {
        var index = selectElement.value;
        if (index !== "default") {
            detailsDiv.style.display = "inline-block";
            var std = students[index];
            document.getElementById("fname").value = std.fname;
            document.getElementById("lname").value = std.lname;
            document.getElementById("crs").value = std.crs; 
            document.getElementById("grade").value = std.grade;
            document.getElementById("phone").value = std.phone;
            document.getElementById("email").value = std.email;
        } else {
            var inputs = document.querySelectorAll("input");
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].value = "";
            }
        }
    }
    // Save Button
    document.getElementById("btnSave").onclick = function() {
        var index = selectElement.value;
        if (index !== "default") {
            students[index].fname = document.getElementById("fname").value;
            students[index].lname = document.getElementById("lname").value;
            students[index].crs   = document.getElementById("crs").value;
            students[index].grade = document.getElementById("grade").value;
            students[index].phone = document.getElementById("phone").value;
            students[index].email = document.getElementById("email").value;
            updateList();
            selectElement.value = index;
            alert("Student updated successfully ✅");
        }
    }
    // Delete Button
    document.getElementById("btnDelete").onclick = function() {
        var index = selectElement.value;
        if (index !== "default") {
            students.splice(index, 1); 
            updateList();              
            var inputs = document.querySelectorAll("input");
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].value = "";
            }    
            confirm("Are you sure you want to delete this student?");
        }
    }
}
