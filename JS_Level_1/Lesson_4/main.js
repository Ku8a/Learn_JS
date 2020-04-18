// Task 1. Написать функцию, преобразующую число в объект.
//Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
//в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
//Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
//Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function transformNumberToObjet(numb){

    let objectNumber = {
        units: 0,
        dozens: 0,
        hundreds:0
    }

    numb=String(numb);
    let numbLength = numb.length;

    switch (numbLength) {
        case 1:
            objectNumber.units = numb[0];
            break; 

        case 2:
            objectNumber.units = numb[1];
            objectNumber.dozens = numb[0]; 
            break; 
           
        case 3:
            objectNumber.units = numb[2];
            objectNumber.dozens = numb[1];
            objectNumber.hundreds = numb[0];
            break;   
          
          case 4:
            console.log('Введенное значение превышает значение 999');
            break; 
      }
    return objectNumber;
 }

 transformNumberToObjet(342);


 //Task 2.  создать функцию конструтор для фруктов Fruit (не больше 10 строчек кода)

function fruit(color, form) {
    this.color= color;
    this.form= form;
    this.showFruit= function(){
        console.log(this.color+" "+this.form);
    }
}
let apple = new fruit('зеленое', 'круглое');
let banan = new fruit('желтый', 'длинный');

banan.showFruit();
apple.showFruit();





