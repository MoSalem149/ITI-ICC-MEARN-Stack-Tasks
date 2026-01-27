// When I open or refresh page will appear and some text will write on it letter by letter close will window small finished string of length the if note but for example this string "welcome to js'

var str = "welcome to js";
var obj = open("", "", "width=300,height=200");
var i = 0;

function writeLetterByLetter(){
    if(i < str.length){
        obj.document.write(str.charAt(i));
        i++;
        setTimeout(writeLetterByLetter, 500);
    }
}
writeLetterByLetter();

setTimeout(function(){
    obj.close();
}, str.length * 500);