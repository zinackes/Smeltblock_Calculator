let boxs = document.querySelectorAll(".bigbox");

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
        target.classList.add("group_content_active");
    })
})


let group_boxs = document.querySelectorAll(".group_content .box")

group_boxs.forEach(function (box) {
    box.addEventListener("click", function () {
        let index = Array.from(group_boxs).indexOf(this);

        for(let i = 0; i < boxs.length; i++){
            group_boxs[i].classList.remove("selected");
        }        
        box.classList.add("selected");
        document.querySelectorAll(".window_active").forEach(function (onglet){
            onglet.classList.remove("window_active");
        })

        let target = document.querySelectorAll(".window")[index];
        target.classList.add("window_active");
    })
})