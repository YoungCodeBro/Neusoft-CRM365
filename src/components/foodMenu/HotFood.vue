<template>
  <div id="hotFood">
      <h2 :id="header" >{{header}}</h2>
      <van-row>
        <div>
          <van-col span="24" v-for="(item,index) in attr" :key="index"  @click="toDetail(item)">
            <van-badge :content="0" >
              <div class="col-item">
                <img :src="require('../../assets/kfcfood/'+itemList[item].picture)" alt="">
                <div class="item-attr">
                  <span class="name">{{itemList[item].name}}</span>
                  <span class="rank">本店销量第{{index+1}}</span>
                  <span class="sel">月售{{itemList[item].count}}</span>
                  <div>
                    <span class="symbol">￥</span>
                    <span class="price-num">{{itemList[item].price}}</span>
                    <van-icon id="icon"  name="add" size="2rem" color="darkgray" @click="addFoodToCart(itemList[item])"/>
                  </div>
                </div>
              </div>
            </van-badge>
          </van-col>
        </div>
        <nav-button></nav-button>
      </van-row>
  </div>
</template>

<script>
import {local} from "../../storage"
import {Notify} from 'vant'
import NavButton from '../nav/NavButton'

export default {
  name: 'Main',
  data(){
    return{
      header:'本店热销榜',
      attr:[],
      itemList:{},
    }
  },
  methods:{
    toDetail(name){
      let item = this.itemList[name];
      let objStr = JSON.stringify(item);
      this.$router.push({
        name:'Detail',
        params:{
          'item':objStr,
        }
      });
    },
    buy(name){
      console.log('您购买了'+name);
    },
    sortSel(){
      let sortArray = local.getTotalItem('totalSel');
      this.itemList = sortArray;
      //拿到的是一个属性数组
      let attr = Object.keys(sortArray);

      let len = attr.length;

      for(let i = 0; i < len-1; i++){
        for(let j = 0; j < len-1-i; j++){
          if(sortArray[attr[j]].count<sortArray[attr[j+1]].count){
            let temp =attr[j];
            attr[j]=attr[j+1];
            attr[j+1]=temp;
          }
        }
      }
      this.attr = attr;
    },
    addFoodToCart(item){
      let msg = local.addFoodToCart(item,1);
      console.log(msg);
      this.notify('加入成功！');
    },
    notify(msg){
      Notify({ type: 'success', message: msg , duration:500});
    }
  },
  mounted () {
    local.addItem({"tom":{name:"tom",count:1,picture:"100012808__ALL__S__20210906162856917.jpg",price:3,detail:"123"},"jerry":{name:"jerry",count:1,picture:"100012808__ALL__S__20210906162856917.jpg",price:3,detail:"123"}},'totalSel');
    this.sortSel();
  },
  components:{
    'nav-button':NavButton,
  }
}
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
h2{
  text-align: center;
  font-size: 1rem;
}
#hotFood{
  background-color: #f0f0f0;
  height: 100vh;
}
.van-col{
}
.van-col{
  padding: 1rem;
  display: flex;
  justify-content: center;
  .col-item{
    display: flex;
    flex:1;
    background-color: #f7f8f8;
    border-radius: 10px;
    text-align: center;
    height:10rem;
    width: 20rem
  }
  img{
    flex: 1;
    border-bottom-left-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }
  .item-attr{
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-around;
    padding: 1rem 1rem 1rem;
    .name{
      font:normal bold 1.2rem arial,sans-serif;
    }
    .rank{
      font:normal bold 0.5rem arial,sans-serif;
      color: darkorange;
    }
    .sel{
      font:normal bold 0.5rem arial,sans-serif;
      color: darkgray;
    }
    .price-num{
      color: red;
      font: normal bold 2rem Arial,sans-serif;
    }
    .symbol{
      color: red;
      font: 1rem bold normal Arial,sans-serif;
    }
    #icon{
      float: right;
      margin-top: 0.1rem;
    }

  }
}
#hotFood /deep/.van-badge{
  opacity: 0;
}

</style>
