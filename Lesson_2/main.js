// Задание 1
// Ответ:

// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           //  Возвращает 2 потому, что инкримент срабатывает до присвоения, т.е. сначала а = a+1, и только потом с =a =2
// d = b++; alert(d);           // Возвращает 1 потому что сначала срабатывает присвоение d=b=1 и только потом инкримент b=b+1
// c = (2+ ++a); alert(c);      // Возвращает 5 потому что 2 +(2 +1)
// d = (2+ b++); alert(d);      // Возвращает 4 потому что 2+ 2  (b после выполнения строки стало равным 3)
// alert(a);                    // Возвращает 3 потому что на 4-ой строке кода значение a было инкементировано 2+1=3
// alert(b);                //  Возвращает 3 потому что на 5-ой строке кода значение b было инкементировано 2+1 =3

// Задание 2
// Ответ:
// undefined, не может в строке с var быть двух и более =.  Чтобы код заработал его нужно переписать следующим образом:
// var a = 2;
// var x;
// x= 1 + (a *= 2);
// Тогда x будет равно 5

// Задание 3
// Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
//Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

function compareNumbers() {

   let a = parseInt(prompt('Число a'));
   let  b = parseInt(prompt('Число b'));

    if (a>0 && b>0) {
      let  diff=a-b;
        console.log('Оба числа положительные. Их разность равна: '+ diff);
    } else if (a<0 && b<0) {
      let  multi = a*b;
        console.log('Оба числа отрицательные. Их произведение равно: '+ multi);
    } else {
     let   sum=a+b;
        console.log('Числа разных знаков. Их сумма равна: '+ sum);
    }
    }

// Задание 4. 
//Присвоить переменной а значение в промежутке [0..15].
//С помощью оператора switch организовать вывод чисел от a до 15 (подсказка: break не используем)

function getSequence(){

    let a = parseInt(prompt('Введите любое целое число от 0 до 15'));

    switch (a) {     
        
        case (0):
            console.log ('0')
            
        case (1):
            console.log ('1')
            
        case (2):
            console.log ('2')
    
        case (3):
            console.log ('3')

        case (4):
            console.log ('4')
    
        case (5):
            console.log ('5')
    
        case (6):
            console.log ('6')
    
        case (7):
            console.log ('7') 
    
        case (8):
            console.log ('8')   
            
        case (9):
            console.log ('9') 
            
        case (10):
            console.log ('10')   
            
        case (11):
            console.log ('11')    

        case (12):
            console.log ('12')
    
        case (13):
            console.log ('13')

        case (14):
            console.log ('14')

        case (15):
            console.log ('15')
    } 
}


//Задание 5.
// Реализовать основные 4 арифметические операции в виде функций 
//с двумя параметрами. Обязательно использовать оператор return

function mathSum(arg1,arg2) {
    return arg1+arg2;
}

function mathDiff(arg1,arg2) {
    return arg1-arg2;
}

function mathMulti(arg1,arg2) {
    return arg1*arg2;
}

function mathDiv(arg1,arg2) {
    return arg1/arg2;
}

// Задание 6.Реализовать функцию с тремя параметрами: 
//function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, 
//operation – строка с названием операции. 
//В зависимости от переданного значения операции выполнить одну из арифметических 
//операций (использовать функции из пункта 3) и вернуть полученное значение 
//(использовать switch).


function mathOperation (arg1, arg2, operation) {

    switch (operation) {     
        
        case ('+'):
          return mathSum(arg1,arg2)

        case ('-'):
           return mathDiff(arg1,arg2)
        
        case ('*'):
           return mathMulti(arg1,arg2)

        case ('/'):
            return mathDiv(arg1,arg2)

        default:
            return(false);
    }
}

do  {

let arg1 = parseInt(prompt('Введите первое число'));
let arg2 = parseInt(prompt('Введите второе число'));
let operation = prompt('Выберите операцию: + - * /');


alert(arg1+operation+arg2+' = '+ mathOperation(arg1, arg2, operation));


var nextTry = parseInt(prompt('Хотите сыграть еще раз - нажмите 1. Хотите завершить игру - нажмите любую другую клавишу'));
}

while (nextTry==1);
  
  //let btn = document.getElementById('btn');
  //btn.addEventListener('click', function () {
   // alert(document.operationForm.arg1+document.operationForm.operationType+document.operationForm.arg2+' = '+ mathOperation(document.operationForm.arg1,document.operationForm.arg2, document.operationForm.operationType));;
  //});

//console.log(mathOperation(arg1, arg2, operation));
