let info = prompt("Undovli So'z kiriting");
function generator() {
     return info.slice(0, -1);
}
document.write(generator());