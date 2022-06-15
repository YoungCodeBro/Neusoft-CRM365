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
  },
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
  },
  /**获取用餐人数，可直接使用.mealnum获取 */
  set mealnum(num) {
    sessionStorage.setItem('mealnum', num);
  },
  /**返回用餐人数，有问题时为0，可直接使用.mealnum=赋值 */
  get mealnum() {
    let num = sessionStorage.getItem('mealnum', num);
    if (num == null) {
      return 0;
    } else {
      return num;
    }
  },
}
