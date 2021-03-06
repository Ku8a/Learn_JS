
//Task 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

function countNumbers(n)
{

    let i=1;
    let simpleNumbers=[];
    let compositeNumbers=[];

    for (i;i<=n;i++) {
        if ((i%2==0) && (i!=2) || (i%3==0)&& (i!=3) || (i%5==0)&& (i!=5) || (i%7==0)&& (i!=7)) {
           compositeNumbers.push(i);
        } else {
            simpleNumbers.push(i);
        }
    }
    console.log('Список простых чисел: '+simpleNumbers);
}
countNumbers(100);

//Task 2. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
//Задачи:
//a) Организовать такой массив для хранения товаров в корзине;
//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
//* @param {array} basket - двумерный массив, хранящий информацию об id товара и его кол-ве в корзине
//* @return {number} - стоимость товаров в корзине
//*/

// items - массив с информацией о товарах, 1-ый параметр = id товара, 2-ой параметр = цена за единицу товара
let items = [
    [1,2],
    [2,4],
    [3,1],
    [4,5]
];

// basket - массив с информацией о товарах в корзине, где 1-ый параметр = id товара, 2-ой параметр = кол-во единиц товара
let basket = [
    [1,2],
    [3,1],
    [4,2]
];

function countBasketPrice(basket)
{
    let sum=0;

    for (i=0;i<basket.length;i++)
    {
        for (k=0;k<items.length;k++)
        {
            if (basket[i][0]==items[k][0]) {
                sum = sum+items[k][1]*basket[i][1];
            } 
    } 
    } 
    return sum;
}

countBasketPrice(basket);

//Task 3*. Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//for(…){// здесь пусто}

let n=9;

for (i=0; i<=n; console.log(i++)) {

}

//Task 4*.Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
//x
//xx
//xxx
//xxxx
//xxxxx

function drawPyramid(n) {

    let i=1;
    let s='x';

while (i<=n) {
    console.log(s);
    s=s+'x';
    i++;
}
return s;
}
drawPyramid(20);

// альтернативный вариант с for 
//for (i;i<=n;i++){
//    console.log(s);
//    s=s+'x';
//}

//Task 5*. Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
//* @param {string} value
//* @return {string}
//*/

function rle(value) {
    let valueLength=value.length-1;
    let repeat=1;
    let compres=value[0]; // переменная, хранящая преобразованную строку

    for (i=0;i<valueLength;i++) {
        if (value[i]==value[i+1]) {
           repeat++; 
        } else if (repeat==1) {
            compres += value[i+1];
        } else  {
            compres += repeat+value[i+1];
            repeat=1;
        }
    } 
   
    if (repeat != 1) compres += repeat;

return compres;
}

rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD');



