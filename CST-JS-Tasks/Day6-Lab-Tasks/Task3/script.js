// create log in form and check if username=="ali "& password=="123"then open window and write welcome ya ali on it with color red else open error window 
// search for search key in location object

var auth = {}

var usr = location.search.split("?")[1].split("&")[0].split("=")[1];
var pass = location.search.split("?")[1].split("&")[1].split("=")[1];

var obj = open("", "", "width=300,height=200");

if (usr === "ali" && pass === "123") {
    obj.document.write("<p><font color='green'>Welcome ya Ail</font></p>")
} else {
    obj.document.write("<p><font color='red'>Login Error</font></p>")
}
