function calculator(price, qqs) {
     let i = 1 + qqs / 100;
 
     let b = price / i;
 
     b = Math.round(b * 100) / 100;
 
     return b;
 }

 let price = 230.00;
 let qqs = 15;
 console.log(calculator(price, qqs)); 