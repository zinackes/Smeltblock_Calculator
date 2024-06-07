function Choice(Id){
    IdObjectif = Id;
    console.log(IdObjectif);
}

let content = document.querySelectorAll(".item .content");

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

let effets = document.querySelectorAll(".effets .sub_content button");

effets.forEach(function (selectionne) {
    selectionne.addEventListener("click", function () {
        let index = Array.from(effets).indexOf(this);
        selectionne.classList.toggle("selected");
        Effets[index] = EffetsNewNumber[index];
        console.log(Effets[index]);
    })
});


function InputConvertion(){
    let input = document.querySelectorAll("#reglages input");
    Inputs = [];
    for(i = 0; i < input.length; i++){
        Inputs.push(input[i].value);
    }
}

function ReturnInputs(){
    let input = document.querySelectorAll("#reglages input");
    let inputP = document.querySelectorAll("#reglages p");
    for(let i = 0; i < input.length; i++){
        input[i].value = Inputs[i];
        inputP[i].textContent = Inputs[i];
    }
}

setInterval(InputConvertion, 10000);
