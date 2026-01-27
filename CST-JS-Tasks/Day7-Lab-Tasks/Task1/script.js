window.load = function() {
    span = document.getElementsByClassName("span");
    // CSS Div Box 1
    clip1 = document.getElementById("clip1");
    pre1 = document.getElementById("pre1");
    clip1.addEventListener("click", function() {
        navigator.clipboard.writeText(pre1.innerText);
            setTimeout(function() {
            span[0].innerHTML = "Copied";
            setTimeout(function() {
                span[0].innerHTML = "Copy";
            }, 500);
        }, 500);
    });
    // CSS Div Box 2
    clip2 = document.getElementById("clip2");
    pre2 = document.getElementById("pre2");
    clip2.addEventListener("click", function() {
        navigator.clipboard.writeText(pre2.innerText);
        setTimeout(function() {
            span[1].innerHTML = "Copied";
            setTimeout(function() {
                span[1].innerHTML = "Copy";
            }, 500);
        }, 500);
    });
    // CSS Div Box 3
    clip3 = document.getElementById("clip3");
    pre3 = document.getElementById("pre3");
    clip3.addEventListener("click", function() {
        navigator.clipboard.writeText(pre3.innerText);
        setTimeout(function() {
                    span[2].innerHTML = "Copied";
            setTimeout(function() {
                span[2].innerHTML = "Copy";
            }, 500);
        }, 500);
    });
    // Result & Live Box
    paste = document.getElementById("paste");
    codeBox = document.getElementById("codeBox");
    resultDiv = document.getElementById("result");
    reviewDiv = resultDiv.querySelector(".review");
    // Create Style Tag Inside Head Tag
    var dynamicStyle = document.createElement("style");
    document.head.appendChild(dynamicStyle);
    // Apply CSS Style
    codeBox.addEventListener("input", function() {
        var cssCode = codeBox.value;
        dynamicStyle.textContent = cssCode;
    });
}
