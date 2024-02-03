//10 Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
//Знайти суму його парних дільників.

let number = parseInt(prompt("Enter a natural number"));
let allDividers = '';
let sumEvenDividers = 0;


for (divider = 1; divider <= number; divider++){
    rest = number % divider;

    if(rest === 0){
        allDividers += `${divider}, `;

        if(divider % 2 === 0){
            sumEvenDividers += divider;
        }
    }
}

allDividers = allDividers.slice(0, -2);


alert(`Dividers for natural number ${number} are: ${allDividers}. The sum of even dividers are: ${sumEvenDividers}.`);