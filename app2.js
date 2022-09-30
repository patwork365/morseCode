//DOM Configuration
const outputbox=document.querySelector("#outputval");
const entrybox=document.querySelector(".inputval");
const press=document.querySelector("#add-button");
let str="";

press.addEventListener('click', (event) => {
    console.log(entrybox.value);
    entrybox.value=str;
});
console.log (str);

// press.forEach((string) => {
//     string.addEventListener("click",(event)=>{
//         console.log(newWord.value);
//         newWord.value=str;
    
//     })
// })    
