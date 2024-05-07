let info = prompt("So'z kiriting");
function generator(str) {
     let newStr = str.substring(1, str.length -1)
     return newStr
}
let result = generator(info);
document.write(result);