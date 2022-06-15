<template>
  <div id="food-detail">
    <button type="button" class="back" @click="backto">
      <span id="arrow">&lt;</span>
      <span>返回</span>
    </button>
    <div class="top">
        <img
        :src="require('../../assets/Image/' + fid + '.jpg')"
        alt="菜品图片"
        />
        <div id="summary">
            <h2>{{foods[fid-1].name}}</h2>
            <span>{{foods[fid-1].price}}/份</span>
        </div>
    </div>
    <div class="middle">
        <h3>商品详情</h3>
        <p>{{foods[fid-1].detail}}
        </p>
    </div>
    <div class="bottom">
        <span>数量：</span>
        <cmp-stepper :value="num" @e-change="getnum"></cmp-stepper>
        <button class="putin" @click="addfood">加入购物车</button>
    </div>
  </div>
</template>

<script>
import Stepper from './Stepper.vue'
export default {
  data() {
    return {
        foods:[
            {name:'南瓜稀饭',price:4,detail:'南瓜稀饭'},
            {name:'白菜豆腐',price:4,detail:'白菜豆腐'},
            {name:'爆炒青菜',price:4,detail:'爆炒青菜'},
            {name:'橘子汁',price:4,detail:'橘子汁'},
            {name:'包子套餐',price:4,detail:'包子套餐'},
            {name:'煎饼',price:4,detail:'煎饼'},
            {name:'红烧肉',price:4,detail:'红烧肉'},
        ],
        // 菜品数量
        num:1,
    };
  },
  computed: {
    // 菜品id
    fid() {
        return this.$route.params.fid;
    },
    //返回链接
    backlink() {
        if (this.$route.query.from) {
            return this.$route.query.from;
        } else {
            //默认返回链接
            return '/'
        }
    }
  },
  methods: {
    backto() {
        this.$router.push(this.backlink);
    },
    //从子组件发送的事件中获取份数
    getnum(num) {
        this.num = num;
    },
    //加入购物车
    addfood() {
        alert(this.num);
    }
  },
  components: {
    'cmp-stepper': Stepper,
  },
};
</script>

<style lang="css" scoped>
* {
    box-sizing: border-box;
    padding: 0px;
}
button.back {
  padding: 0;
  border: none;
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.849);
  color: white;
  font-size: 5px;
  align-content: center;
  flex-flow: row wrap;
  justify-content: center;
  position: fixed;
  top: 10px;
  left: 4%;
}
button.back span {
  line-height: 2rem;
}
#arrow {
  margin-right: 3px;
  font-size: 1.5rem;
  font-family: "宋体";
  font-weight: 500;
}

/* 页面布局 */
#food-detail {
    background: rgb(241, 238, 238);
    position: relative;
    height: 100vh;
    border-radius: 5px;
}
.top, .middle, .bottom {
    background: white;
    width: 98%;
    max-width: 500px;
    min-width: 330px;
    margin: 0 auto;
}

.top {
    height: 40%;
}
img {
    width: 100%;
    height: 250px;
}
#summary {
    padding-left: 8px;
}
#summary h2 {
    margin: 5px 2px 0 0;
}
#summary span {
    color: red;
}

.middle {
    height: 25%;
    padding-left: 8px;
}
.middle p {
    height: 70%;
    text-indent: 1em;
    overflow: auto;
}

.bottom {
    height: 6%;
    min-height: 30px;
    max-height: 50px;
    position: absolute;
    left: 1%;
    bottom: 10px;
    display: flex;
    align-items: center;
}
button.putin {
    background: orangered;
    color: white;
    padding: 8px;
    border-radius: 7px;
    border: none;
    text-shadow: 1px 1px 2px black;
    width: 30%;
}
.bottom span {
    width: 15%;
    padding-left: 5px;
}
.bottom .stepper {
    width: 50%;
}
</style>