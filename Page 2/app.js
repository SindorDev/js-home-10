let a = [2, 2, 3];
let b = [5, 4, 1];

function genet() {
     let countA = 1;
     let countB = 1;
     for(let i = 0; i < a.length; i++) {
          countA *= a[i];
     }
     for(let j = 0; j < b.length; j++) {
          countB *= b[j];
     }

     if(countA > countB) {
          console.log(countA - countB);
     }
     else {
          console.log(countB - countA);
     }
}
genet()