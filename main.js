const divhandeler = document.getElementById ("the_div")

divhandeler.addEventListener("click", function() {
    let randomcolor ="#"+Math.floor(Math.random()*16777215).toString(16);
    
    divhandeler.style.backgroundColor =randomcolor;
})

