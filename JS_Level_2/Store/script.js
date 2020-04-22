// 3. *Некая сеть фастфуда предлагает несколько видов гамбургеров:
// ### Маленький (50 рублей, 20 калорий).
// ### Большой (100 рублей, 40 калорий). 
//### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
// ### С сыром (+10 рублей, +20 калорий).
// ### С салатом (+20 рублей, +5 калорий).
// ### С картофелем (+15 рублей, +10 калорий). 
// ### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и 
// полить майонезом (+20 рублей, +5 калорий).
//  ### Напишите программу, рассчитывающую стоимость и калорийность гамбургера.

class Hamburger {
    constructor(price,calorificValue,ingredients) {
        this.price = price;
        this.calorificValue = calorificValue;
        this.ingredients =[];
    }
     
    addSauce (sauce){
        this.ingredients.push(sauce);
    } 
    
    addFilling (filling){
        this.ingredients.push(filling);
    }

    chooseSize(size){
        this.price+=size.price;
        this.calorificValue+=size.calorificValue;
    }

    getPrice (){
        this.ingredients.forEach (ingredients => {
            this.price += ingredients.price;
        }
            )
        console.log('Total price is: '+this.price+' rub');
    }

    getCalorificValue (){
        this.ingredients.forEach (ingredients => {
            this.calorificValue += ingredients.calorificValue;
        }
            )
        console.log('Total calorific value is: '+this.calorificValue);
    }

    getIngredients(){
        console.log(this.ingredients);
    }
}

class Fillings {
    constructor() {
        this.list =[];
    }
    getFilling(){
        this.list = [
            {name:'cheese',price:10,calorificValue:20},
            {name:'salad',price:20,calorificValue:5},
            {name:'potatos',price:15,calorificValue:10}
        ]
    }
}

class Sauce {
    constructor() {
        this.list =[];
    }
    getSauce(){
        this.list = [
            {name:'mayonnaise',price:20,calorificValue:5},
            {name:'spices',price:15,calorificValue:0}
        ]
    }
}

class Size {
    constructor(name,price,calorificValue) {
        this.name = name,
        this.calorificValue = calorificValue,
        this.price = price
    }
}

const size1 = new Size('small',50,20);
const size2 = new Size('big',100,40);


const fillings = new Fillings();
fillings.getFilling();

const sauces = new Sauce();
sauces.getSauce();

const hamburger = new Hamburger(0,0);

//Формируем гамбургер
hamburger.chooseSize(size1);
hamburger.addFilling(fillings.list[2]);
hamburger.addFilling(fillings.list[0]);
hamburger.addSauce(sauces.list[0]);


//Выводим ифно о гамбурге
hamburger.getPrice();
hamburger.getCalorificValue();
hamburger.getIngredients();

