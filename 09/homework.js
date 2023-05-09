/* Завдання 1 */

let sec_counter = 0, intervalHandlersec;
let min_counter = 0, intervalHandlermin;
let hour_counter = 0, intervalHandlerh;

const seconds = () => {
    sec_counter++;
    if (sec_counter === 60) {
        sec_counter = `00`
    }
    else if (sec_counter < 10 || sec_counter === 0) {
        sec_counter = `0${sec_counter}`;
    }
    document.querySelector(".seconds").textContent = sec_counter;
}

const minutes = () => {
    min_counter++;
    if (min_counter === 60) {
        min_counter = `00`
    }
    else if (min_counter < 10 || min_counter === 0) {
        min_counter = `0${min_counter}`;
    }
    document.querySelector(".minutes").textContent = min_counter;
}

const hours = () => {
    if (hour_counter === 24) {
        hour_counter = `00`
    }
    else if (hour_counter < 10 || hour_counter === 0) {
        hour_counter = `0${hour_counter}`;
    }
    document.querySelector(".hours").textContent = hour_counter;
}

function $(switcher) {
    return document.querySelector(switcher);
}

$(".start").onclick = () => {
    intervalHandlersec = setInterval(seconds, 1000);
    intervalHandlermin = setInterval(minutes, 60000);
    intervalHandlerh = setInterval(hours, 3600000);

    $("#display").classList.remove("stopwatch-display");
    $("#display").classList.remove("red");
    $("#display").classList.remove("silver");
    $("#display").classList.add("green");
}


$(".stop").onclick = () => {

    clearInterval(intervalHandlersec);
    clearInterval(intervalHandlermin);
    clearInterval(intervalHandlerh);

    $("#display").classList.remove("stopwatch-display");
    $("#display").classList.remove("green");
    $("#display").classList.remove("silver");
    $("#display").classList.add("red");
}

$(".reset").onclick = () => {
    clearInterval(intervalHandlersec);
    clearInterval(intervalHandlermin);
    clearInterval(intervalHandlerh);
    $(".seconds").textContent = "00"
    $(".minutes").textContent = "00"
    $(".hours").textContent = "00"
    sec_counter = 0;
    min_counter = 0;
    hour_counter = 0;

    $("#display").classList.remove("stopwatch-display");
    $("#display").classList.remove("green");
    $("#display").classList.remove("red");
    $("#display").classList.add("silver");
}

/* Завдання 2 */
const pattern = /0\d\d-\d\d\d-\d\d-\d\d/;
const input_number = document.createElement("input");
input_number.id = "phone";
input_number.placeholder = "0ХХ-ХХХ-ХХ-ХХ";
input_number.type = "mobile";
input_number.maxLength = 13;
box.after(input_number);

const save_number = document.createElement("input");
save_number.id = "save-number";
save_number.value = "save";
save_number.type = "button";
input_number.after(save_number);

$("#save-number").onclick = () => {
    if (pattern.test($("#phone").value)) {
        $("#phone").classList.add("green");
        const change_location = () => {
            document.location = "https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg";
        }
        setTimeout(change_location, 3000);
    }
    else {
        const show_error = document.createElement("div");
        show_error.innerText = "Номеру телефону не відповідає шаблону";
        show_error.classList.add("red");
        box.after(show_error);
    }
}
