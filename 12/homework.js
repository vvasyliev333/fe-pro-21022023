const pizza = {
    size: "85"
}

const price = {
    size: {
        small: 50,
        mid: 75,
        big: 85
    }
}

window.addEventListener("DOMContentLoaded", () => {
    // Шукаємо розмір коржу
   document.getElementById("pizza")
       .addEventListener("click", function (ev) {
           //console.log(ev.target.id);
            //Визначаємо обраний корж і записуємо данні в обьєкт 
           switch (ev.target.id) {
               case "small": pizza.size = price.size.small;
                   break
               case "mid": pizza.size = price.size.mid;
                   break
               case "big": pizza.size = price.size.big;
                   break
           }
           show(pizza)
       })
   
       show(pizza)
       btnRun()
})

//метод для виводу інформації про продукт
function show (pizza) {
   //отримали блок ціни
   const price = document.querySelector("#price");

   price.innerText = pizza.size
}

function btnRun () {
   
   const btn = document.querySelector("#banner");
   
   btn.addEventListener("mousemove", () => {
       const coords = {
           X : Math.floor(Math.random() * document.body.clientWidth),
           Y : Math.floor(Math.random() * document.body.clientHeight)
       }
       //banner === 300px
       //document.body.clientWidth === 1000

       //999 + 300 = 1299

       //if(document.body.clientWidth - 300)
       console.log(coords.X - 300);
       console.log(document.body.clientWidth);
       if((coords.X + 350) > document.body.clientWidth){
           debugger
           return
       }
       if((coords.Y + 150) > document.body.clientHeight){
           debugger
           return
       }
   
       btn.style.top = coords.Y + "px"
       btn.style.left = coords.X + "px"
   })

}

window.onload = function () {
    //Кетчуп 
    var source = document.getElementById("sauceClassic");

    source.addEventListener('dragstart', function (evt) {
        this.style.border = "3px dotted #000"; 
        evt.dataTransfer.effectAllowed = "move";

        evt.dataTransfer.setData("Text",this.id);

    }, false);

    source.addEventListener("dragend", function (evt) {
        this.style.border = ""; 
    }, false);


    var target = document.getElementById("sauce");

    target.addEventListener("dragenter", function (evt) {
        this.style.border = "3px solid red";
    }, false);

    target.addEventListener("dragleave", function (evt) {
        this.style.border = "";
    }, false);

    target.addEventListener("dragover", function (evt) {
        if (evt.preventDefault) evt.preventDefault();
        return false;
    }, false);

    target.addEventListener("drop", function (evt) {

        if (evt.preventDefault) evt.preventDefault();
        if (evt.stopPropagation) evt.stopPropagation();

        this.style.border = "";
        var id = evt.dataTransfer.getData("Text"); 

        var elem = document.getElementById(id);

        const div = document.createElement("div");
        div.className = "ketchup"
        div.innerHTML = "Кетчуп"

        this.appendChild(div);

        return false;
    }, false);

     //BBQ
     var source = document.getElementById("sauceBBQ");

     source.addEventListener('dragstart', function (evt) {
         this.style.border = "3px dotted #000"; 
         evt.dataTransfer.effectAllowed = "move";
 
         evt.dataTransfer.setData("Text",this.id);
 
     }, false);
 
     source.addEventListener("dragend", function (evt) {
         this.style.border = ""; 
     }, false);
 
 
     var target = document.getElementById("sauce");
 
     target.addEventListener("dragenter", function (evt) {
         this.style.border = "3px solid red";
     }, false);
 
     target.addEventListener("dragleave", function (evt) {
         this.style.border = "";
     }, false);
 
     target.addEventListener("dragover", function (evt) {
         if (evt.preventDefault) evt.preventDefault();
         return false;
     }, false);
 
     target.addEventListener("drop", function (evt) {
 
         if (evt.preventDefault) evt.preventDefault();
         if (evt.stopPropagation) evt.stopPropagation();
 
         this.style.border = "";
         var id = evt.dataTransfer.getData("Text"); 
 
         var elem = document.getElementById(id);
 
         const div = document.createElement("div");
         div.className = "ketchup"
         div.innerHTML = "BBQ"
 
         this.appendChild(div);
 
         return false;
     }, false);
}

$("btnSubmit").on("click", () => {
    const patternName = /^[Є-яҐ]{2,}$/;
    const patternTel = /^\+380\d{9}$/;
    const patternMail = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}$/gi;
    if (patternName.test($("#name").value) && patternTel.test($("#tel").value) && patternMail.test($("#mail").value)) {
        document.location = "./submit-form.html";
        console.log("cancel");
    }
    else {
        if (!patternName.test($("#name").value)) { document.getElementById("name").classList.add("error") }
        if (!patternTel.test($("#tel").value)) { document.getElementById("tel").classList.add("error") }
        if (!patternMail.test($("#mail").value)) { document.getElementById("mail").classList.add("error") }
    }
})
