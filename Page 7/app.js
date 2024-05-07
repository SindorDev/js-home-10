let text = prompt("So'z kiriting");
let harf = prompt("Harfni kiriting");
function generator() {
     let count = 0;
     for(let i = 0; i <= text.length; i++) {
          if(text[i] === harf) {
               count++;
          }
     }
     return count;
}

document.write(generator())