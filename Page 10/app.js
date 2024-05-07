let text = prompt("Soz kiriting");

function generator() {
     let count = 1;
     for(let i = 1; i < text.length; i++) {
          count++;
     }
     return count
}

let result = generator();

console.log(result)