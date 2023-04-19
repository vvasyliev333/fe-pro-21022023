var name = prompt("Введіть ім'я");
var surname = prompt("Введіть прізвище");
var rate = prompt(parseInt("Введіть ставку"));
var days = prompt(parseInt("Введіть кількість днів"));


function Worker(name, surname, rate, days){
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days
    }

Worker.prototype.getSalary = function(salary){
    document.write(`Зарплата працівника ${rate*days}`)
}

