function Choice(Item, Cequonveut){
}



let content = document.querySelectorAll(".content");

content.forEach(function (selectionne) {
    selectionne.addEventListener("click", function () {

        if(Array.from(content).indexOf(this) == 1){
            return
        }
        else{
            let index = Array.from(content).indexOf(this);
            for(let i = 0; i < content.length; i++){
                content[i].classList.remove("hide");
            }        
            selectionne.classList.add("hide");
            let target = document.querySelectorAll(".content")[index+1];
            target.classList.remove("hide");
        }
    })
})