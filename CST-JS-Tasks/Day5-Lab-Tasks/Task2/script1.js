// 1- Receive String From User and do all possible validations Then write code to calculate this

console.log("----- String Validation -----");

function validateStringInput(str) {
    if (typeof str !== 'string') {
        return "Invalid input: not a string";
    }
    if (str.trim() === '') {
        return "Invalid input: empty string";
    }
    return "Valid string input";
}