let boxs = document.querySelectorAll(".bigbox")

boxs.forEach(function (box) {
    box.addEventListener("click", function () {
        let index = Array.from(boxs).indexOf(this);

        for(let i = 0; i < boxs.length; i++){
            boxs[i].classList.remove("selected");
        }        
        box.classList.add("selected");
        document.querySelectorAll(".group_content_active").forEach(function (onglet){
            onglet.classList.remove("group_content_active");
        })

        let target = document.querySelectorAll(".group_content")[index];
        console.log(target);
        target.classList.add("group_content_active");
    })
})