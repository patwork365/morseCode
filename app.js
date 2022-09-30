const morseCode = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
 }

const outputbox=document.querySelector("#outputval");
const entrybox=document.querySelector(".inputval");
const press=document.querySelector("#add-button");
let str1="";

press.addEventListener('click', (event) => {
   //  console.log(entrybox.value);
    str1=entrybox.value;
   //  outputbox.value="";
   let convert= convertToMorse(str1);
   outputbox.value=convert;
});

const convertToMorse = (str) => {
   return str.toUpperCase().split("").map(e => {
   // console.log(str1);
   return morseCode[e] ? morseCode[e] : e;
}).join("");
};

// console.log(convertToMorse(str1));   

//    outputbox.value=convertToMorse(str1);
//    console.log(outputbox.innerHTML);
//    console.log(str1);
//  console.log(convertToMorse('hello there'));