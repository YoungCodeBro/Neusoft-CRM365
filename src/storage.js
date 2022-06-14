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
  addFoodToCart (name,count,price,picture,status) {
    let key = 'cart';
    let cart = JSON.parse(localStorage.getItem(key));
    if(cart==null){
      cart =[];
    }
    cart.push({name:name,count:count,price:price,picture:picture,status:status});
    console.log(cart);
    localStorage.setItem(key,JSON.stringify(cart));
    return '将'+name+'加入购物车成功';
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
