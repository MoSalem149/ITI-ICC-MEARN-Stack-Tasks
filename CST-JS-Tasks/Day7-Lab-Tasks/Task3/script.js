window.onload = function() {
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var btnMove = document.getElementById("btnMove");
    var btnBack = document.getElementById("btnBack");
    // Paragraph Selection Function
    function paraSelect() {
        if (this.style.backgroundColor === "dodgerblue") {
            this.style.backgroundColor = "";
            this.style.color = "";
        } else {
            this.style.backgroundColor = "dodgerblue";
            this.style.color = "white";
        }
    }
    // All Paragraph Function
    var allPara = document.getElementsByTagName("p");
    for (var i = 0; i < allPara.length; i++) {
        allPara[i].onclick = paraSelect;
    }
    // Move Button Function
    btnMove.onclick = function() {
        var pTags = box1.getElementsByTagName("p");
        for (var i = pTags.length - 1; i >=0; i--) {
            var p = pTags[i];
            if (p.style.backgroundColor === "dodgerblue") {
                box2.appendChild(p);
            }
        }
    }
    // Back Button Function
    btnBack.onclick = function() {
        var pTags = box2.getElementsByTagName("p");
        for (var i = pTags.length - 1; i >=0; i--) {
            var p = pTags[i];
            if (p.style.backgroundColor === "dodgerblue") {
                box1.appendChild(p);
            }
        }
    }
}