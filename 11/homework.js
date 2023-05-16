    /*- При завантаженні сторінки показати користувачеві поле введення (`input`) з написом `Price`. Це поле буде служити для введення числових значень
    - Поведінка поля має бути такою:
    - При фокусі на полі введення – у нього має з'явитися рамка зеленого кольору. При втраті фокусу вона пропадає.
    - Коли забрали фокус з поля - його значення зчитується, над полем створюється `span`, в якому має бути виведений текст: 
    . 
    Поруч із ним має бути кнопка з хрестиком (`X`). Значення всередині поля введення фарбується зеленим.
    - При натисканні на `Х` - `span` з текстом та кнопка `X` повинні бути видалені.
    - Якщо користувач ввів число менше 0 - при втраті фокусу підсвічувати поле введення червоною рамкою, 
    під полем виводити фразу - `Please enter correct price`. `span` зі значенням при цьому не створюється.
    */


    window.addEventListener('DOMContentLoaded', () => {
    
        const Container = document.querySelector('.Container');
        const span = document.createElement('span');
        const button = document.createElement('button');
        button.textContent = '❌';
        const correctPrice = document.createElement('span');
        correctPrice.classList = 'correctPrice';
        correctPrice.textContent = 'Please enter correct price';
    
        input = document.querySelector('.input');
        input.style.display = 'block';
    
        const showNone =() => {
            span.remove();
            button.remove();
        }
    
        input.addEventListener('focus', () => {
            input.classList.add('green');
        })
    
        input.addEventListener('change', () => {
            input.classList.remove('green');
    
            if(input.value < 0){
                input.classList.add('redColour');
                input.after(correctPrice);
                showNone();
            }
            else if(input.value !== ''){
                span.innerText = input.value;
                span.classList.add('changeGreen');
                Container.append(span);
                Container.append(button);
    
                if(input.classList.contains('redColour')){
                    input.classList.remove('redColour');
                    correctPrice.remove();
                }
            } 
            else if(input.value == '' &&  span.innerText !== ''){
                showNone();
            }
            input.classList.remove('green');
        })
        input.addEventListener('blur', () => {
            input.classList.remove('green');
        });
        button.addEventListener('click', () =>{
            showNone();
        })
    })