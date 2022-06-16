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

  addSel(selList){
    let totalSel = this.getTotalSel();
    if(totalSel==null){
      totalSel = selList;
    }else{
      for(let item in selList){
        if(totalSel[item.name]!=null){
          totalSel[item.name].count=totalSel[item.name].count+item.count;
        }else{
          totalSel[item.name]={name:item.name, count:item.count , price:item.price, picture:item.img};
        }
      }
    }
    //写入本地json文件
  },
  getTotalSel(){
    let TotalSel = require('./assets/TotalSel.json');
    return TotalSel;
  },
  addOrdered(itemList){
    let key = 'ordered';
    let orderList = JSON.parse(localStorage.getItem(key));
    if(orderList==null){
      orderList = {};
    }
    for(let item in itemList){
      if(orderList[item.name]!=null){
        orderList[item.name].count = orderList[item.name].count+item.count;;
      }else{
        orderList[item.name]={name:item.name, count:item.count , price:item.price, picture:item.img};
      }
    }
    console.log(orderList);
    localStorage.setItem(key,JSON.stringify(orderList));
    return '加入已购成功';
  },
  getOrdered(){
    let key = 'ordered';
    let ordered = JSON.parse(localStorage.getItem(key));
    if(ordered==null){
      ordered = {};
    }
    return ordered;
  },

  addFoodToCart (item,count) {
    let key = 'cart';
    let cart = JSON.parse(localStorage.getItem(key));
    if(  cart==null){
      cart = {};
    }
    if(cart[item.name]!=null){
      cart[item.name].count = cart[item.name].count+count;
    }else{
      cart[item.name]={name:item.name, count:count , price:item.price, picture:item.img , status:0};
    }

    console.log(cart);
    localStorage.setItem(key,JSON.stringify(cart));
    return '将'+item.name+'加入购物车成功';
  },
  getCart(){
    let key = 'cart';
    let cart = JSON.parse(localStorage.getItem(key));
    if(cart==null){
      cart = {};
    }
    return cart;
  },
  clearCart(){
    let key = 'cart';
    localStorage.removeItem(key);
    return '清空购物车成功';
  },
  /**修改购物车中某食品数量，若无则添加该食品,包括name，count，price，img */
  modifyCartFoodCount(item) {
    let key = 'cart';
    let cart = this.getCart();
    if(cart[item.name]!=null){
      cart[item.name].count = item.count;
    }else{
      cart[item.name]={name:item.name, count:item.count , price:item.price, picture:item.img , status:0};
    }
    localStorage.setItem(key,JSON.stringify(cart));
  },
  /**快速获取购物车中某商品数量，若无该商品则返回0 */
  getCartFoodNum(name) {
    let cart = this.getCart();
    if (cart[name] == undefined) {
      return 0;
    } else {
      return cart[name].count;
    }
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
