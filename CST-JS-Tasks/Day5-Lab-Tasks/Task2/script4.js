// 4- Write a function that: Masks all characters * except last 4 mask("123456789012") → "********9012"

console.log("----- Mask All But Last 4 -----");

function mask(str){
    var strLength = str.length;
    if(strLength <= 4) {
        return str;
    }
    var maskedSection = '*'.repeat(strLength - 4);
    var visibleSection = str.slice(-4);
    return maskedSection + visibleSection;
}
console.log("Masked String is:", mask("123456789012"));