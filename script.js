

const btn = document.querySelectorAll(".main-button");
const content = document.querySelector(".overlay");
const exit =document.querySelector(".exit")

btn.forEach((item,index,array) =>{
    item.addEventListener("click", ()=>{
        content.classList.add("active")
        exit.addEventListener("click", ()=>{
            content.classList.remove("active") 
        })    
    
    })
})





