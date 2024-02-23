let generateButton=document.querySelector(".dice").addEventListener("click",()=>{
  let quote=document.querySelector(".quote");
  let adviceId=document.querySelector(".advice-id");
  
  let url="https://api.adviceslip.com/advice";
  
  fetch(url)
  .then((data)=>data.json())
  .then((item)=>{
    adviceId.textContent=item.slip.id;
    quote.textContent=item.slip.advice
  });


})

