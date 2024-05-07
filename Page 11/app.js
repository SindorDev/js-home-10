function hashtagGenerator(input) {
     
     let words = input.split(" ");
     let result = "#";
     for (let i = 0; i < words.length; i++) {
         let capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
         result += capitalizedWord;
     }
   if (input === "" || input.length === 0) {
         return false;
     }
     else if(result.length > 140) {
          return false
     }
 
     return result;
 }
 
 let inputString = prompt("So'z kiriting");
 document.write(hashtagGenerator(inputString)); 