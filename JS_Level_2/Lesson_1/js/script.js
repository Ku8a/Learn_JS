'use strict'

class GoodItem {
  constructor(title,price){
    this.title=title;
    this.price=price;
  }
  render (){
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price} p.</p><button class ="buy">Купить</button></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods =[];
  }
  fetchGoods(){
    this.goods =[
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
];
  }
  render(){
    let listHtml = '';
    this.goods.forEach(goods => {
      const goodItem = new GoodItem(goods.title,goods.price);
      listHtml +=goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
  getTotalPrice(){
    let total = 0;
    this.goods.forEach(goods => {
      const goodItem = new GoodItem(goods.title,goods.price);
      total +=goodItem.price;
    });
    document.querySelector('.total-price').innerHTML =`<span>${total} р.</span>`;
  }
}

//Товар в корзине
class BasketItem{
  constructor(title,price,quantity){
    this.title = title;
    this.price = price;
    this.quantity = quantity;
    this.totalPrice = this.price*this.quantity; 
  }
  render (){
    return `<div class="basket-item"><h3>${this.title}</h3><p>${this.price}</p><p>${this.quantity}</p><p>${this.totalPrice}</p></div>`;
  }

  deleteFromBasket (){
    this.quantity--;    
  }

  addToBasket (count){
    this.quantity+=count;
  }
 
}

//Список товаров в корзине
class Basket{
  constructor() {
    this.list =[];
  }
deleteAll (){
  this.list.length = 0;
}

render(){
  let listHtml = '';
  this.list.forEach(list => {
    const basketItem = new BasketItem(list.title,list.price,list.quantity,list.totalPrice);
    listHtml +=basketItem.render();
  });
  document.querySelector('.basket-list').innerHTML = listHtml;
}

getTotalPrice(){
  let total = 0;
  this.list.forEach(list => {
    const basketItem  = new BasketItem(list.title,list.price,list.quantity,list.totalPrice);
    total += basketItem.totalPrice;
  });
  document.querySelector('.total-price-cart').innerHTML =`<span>${total} р.</span>`;
}


// fetchBasket(){
//   this.list =[
//     { title: 'Shirt', price: 150,quantity:1 },
//     { title: 'Socks', price: 50,quantity:2 },
//   ]
// }
}


const goods = new GoodsList();
goods.fetchGoods();
goods.render();
goods.getTotalPrice();


// const basket = new Basket();
// basket.fetchBasket();
// basket.render();
// basket.getTotalPrice();



  
