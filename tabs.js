let btns = document.querySelectorAll(".buttons");
let boardText = document.querySelectorAll(".board");
let infoContainer = document.querySelector(".about");

infoContainer.addEventListener("click", function(e){
    let id = e.target.dataset.id;
    
    
    //switch on click the background color for buttons
    if(id){
        
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active")
        })
        // remove the text from the board
        boardText.forEach(function(board){
            board.classList.remove("active");

            // add the text for the board
        const element = document.getElementById(id);
        element.classList.add("active");
        })
       
    }
})
