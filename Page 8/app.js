let text = prompt("Harf kiriting");
function gener() {
    let i = text.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    return i;
}
document.write(gener())