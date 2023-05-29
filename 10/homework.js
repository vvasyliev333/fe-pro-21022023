/*
* У папці calculator дана верстка макета калькулятора. 
Потрібно зробити цей калькулятор робочим.
* При натисканні на клавіші з цифрами - набір введених цифр має бути показаний на табло калькулятора.
* При натисканні на знаки операторів (`*`, `/`, `+`, `-`) на табло нічого не відбувається - програма чекає введення другого числа для виконання операції.
* Якщо користувач ввів одне число, вибрав оператор і ввів друге число, то при натисканні як кнопки `=`, так і будь-якого з операторів, в табло повинен з'явитися результат виконання попереднього виразу.
* При натисканні клавіш `M+` або `M-` у лівій частині табло необхідно показати маленьку букву `m` - це означає, що в пам'яті зберігається число. Натискання на MRC покаже число з пам'яті на екрані. Повторне натискання `MRC` має очищати пам'ять.
*/
const get = selector => document.querySelector(selector);
const displayToMemory = get('.display'),
display = get('.display > input'),
buttons = get('.keys'),
output = get('#eq');
let first_num = '', second_num = '', sign = '', result = '', memory = '', memory_plus = false, finish = false;

const updateDisplay = () => {
    first_num = '';
    second_num = '';
    sign = '';
    result = '';
    display.value = '';
    finish = false;
}
//  function calc
function calc (sign) {
    switch(sign){
        case '-':
            result = first_num - second_num;
            break;
        case '+':
            result = (+first_num) + (+second_num);
            break;
        case '*':
            result = first_num * second_num;
            break;
        case '/':
            if(second_num == '0'){
                display.value = 'error';
                return;
            }
            result = first_num / second_num;
            break;
    };
}
//  memory
const mPlus = () => {
    if(display.value === ''){return;}
    memory = display.value;
    displayToMemory.classList.add('mmr');
    memory_plus = true;
}
const mMinus = () => {
    memory = 0;
    displayToMemory.classList.remove('mmr');
    memory_plus = false;
};
const mrc = () => {
    if(memory_plus){
        if(first_num === ''){
            first_num = memory;
            display.value = first_num;
        }
        else{
            second_num = memory;
            display.value = second_num;
        }
        memory_plus = false;
    }
    else{
        memory = '';
        displayToMemory.classList.remove('mmr');
    }
}

buttons.addEventListener('click', (event) => { 

    const btnValue = event.target.value;
    if(!event.target.classList.contains('button')) return;  
    if(btnValue === 'C'){updateDisplay(); return};
    if(btnValue === 'm+'){mPlus();return}
    if(btnValue === 'm-'){mMinus();return}
    if(btnValue === 'mrc'){mrc();return}
    
    //  button 0-9 .
    if(/[0-9.]/.test(btnValue) && display.value.length < 12){

        //  first number      
        if(sign === '' && second_num === ''){  
            //  button .
            if(btnValue == '.'  && first_num === '') {
                first_num = '0.';
                display.value = first_num;
                return;
            }
            else if(btnValue == '.' && first_num.includes('.')) {
                display.value = first_num;
                return
            };
            //  buttom 0
            if(btnValue == '0'  && first_num === '0'){
                first_num = '0';
                display.value = first_num;
                return;
            }
            else if(/[0-9]/.test(btnValue) && first_num === '0'){
                first_num = btnValue;
                display.value = first_num;
                return;
            }
            first_num += btnValue;
            display.value = first_num; 
        }
        else if(first_num !== '' && second_num !== '' && finish == false){
            second_num += btnValue;
            display.value = second_num;
        }
        //  second number
        else{
            //  button .
            if(btnValue == '.'  && second_num === '') {
                second_num = '0.'
                display.value = second_num;
                return;
            }
            else if(btnValue == '.' && second_num.includes('.')) {
                display.value = second_num;
                return
            };
            //  buttom 0   
            if(btnValue == '0'  && second_num === '0'){
                second_num = '0';
                display.value = second_num;
                return;
            }
            else if(/[0-9]/.test(btnValue) && second_num === '0'){
                second_num = btnValue;
                display.value = second_num;
                return;
            }
            second_num += btnValue;
            display.value = second_num; 
        }
        return;   
    }

    // sign / + - *
    if(btnValue === '+'|| btnValue === '-'|| btnValue === '/'|| btnValue === '*'){
        if(finish == true){
            calc(sign);
            let resPoint = String(result).split('.');
            if(/[.]/.test(result) && resPoint[1].length > 4){ 
                first_num = Number(result).toFixed(4);
            } 
            else{first_num = result;};
            second_num = '';
            sign = btnValue;
            display.value = first_num;
        }
        else{
            sign = btnValue;
            output.removeAttribute('disabled');
            finish = true;
        }
        return;   
    };
    
    //  sign =
    if(btnValue === '='){
        if(second_num === '') second_num = first_num;
        calc(sign);
        let resPoint = String(result).split('.');
            if(/[.]/.test(result) && resPoint[1].length > 4){ 
                first_num = Number(result).toFixed(4);
            }  
        else{first_num = result;};
        display.value = first_num;
        finish = true;
    }
});

