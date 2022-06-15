export const local={
  set(key,value){
    localStorage.setItem(key,JSON.stringify(value));
  },
  get(key){
    return JSON.parse(localStorage.getItem(key));
  },
  remove(key){
    localStorage.removeItem(key);
  },
  addFoodToCart (item,count) {
    let key = 'cart';
    let cart = JSON.parse(localStorage.getItem(key));
    if(  cart==null){
      cart = {};
    }
    if(cart[item.name]!=null){
      cart[item.name].count = cart[item.name].count+1;
    }else{
      cart[item.name]={name:item.name, count:count , price:item.price, picture:item.img , status:0};
    }

    console.log(cart);
    localStorage.setItem(key,JSON.stringify(cart));
    return '将'+item.name+'加入购物车成功';
  },
  getCart(){
    let key = 'cart';
    return JSON.parse(localStorage.getItem(key));
  },
  clearCart(){
    let key = 'cart';
    localStorage.removeItem(key);
    return '清空购物车成功';
  }

}
export const session={
  set(key,value){
    sessionStorage.setItem(key,JSON.stringify(value));
  },
  get(key){
    return JSON.parse(sessionStorage.getItem(key));
  },
  remove(key){
    sessionStorage.removeItem(key);
  }
}
