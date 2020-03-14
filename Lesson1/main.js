
 function tempConvert() {

    let tempCelsius  = 0;
    let tempFarenhei = 0;
    let nextTry = 1;

   
while (nextTry == 1) {
   tempCelsius = parseFloat(prompt ('Укажите температуру в градусах по Цельсию: '));

   if (isNaN(tempCelsius)) {
      alert('Мы просили ввести число, а Вы ввели какую-то кроказябру');
   }
   else {
      tempFarenhei = (9 / 5) * tempCelsius + 32;
      alert('Температура по Фаренгейту составляет: '+ tempFarenhei);
      nextTry = 0;
     
   }
   nextTry = parseFloat(prompt ('Хотите попробовать еще - нажмите 1. Надоело - нажмите любую букву'));
}  
 }           

 function changeString() {

    let admin, name;
   

    name = prompt('Как Вас зовут?');

    admin=name;
    alert('Привет '+ admin);

 }

 function check() {

   let sum;
   
   sum = 1000 + '108';
   alert('Результат: ' + sum);

}
