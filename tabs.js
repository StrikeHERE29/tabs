let btns = document.querySelectorAll(".buttons");
let boardText = document.querySelectorAll(".board");
let infoContainer = document.querySelector(".about");

infoContainer.addEventListener("click", function(e){
    let id = e.target.dataset.id;
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active")
        })
        
       
    }
})
