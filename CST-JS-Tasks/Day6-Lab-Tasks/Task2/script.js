// Create Counter and display it in window document line by line with borders

var counter = 0;

function counterLoop() {
    counter++
    document.write(`<table bordercolor='red'><td>${counter}</td></table>`)
    document.title=`${counter}`
}

setInterval(counterLoop, 1000)