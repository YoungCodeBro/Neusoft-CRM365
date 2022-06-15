<template>
  <div id="app">
    <!--头部-->
    <div class="a-header">
      <div class="a-header0ne">
        <img src="../../assets/Image/timer.png" />
      </div>
      <div class="a-headertwo">
        <p class="P-text1">118号桌待门店接单</p>
        <p class="P-text2">请及时联系服务员确认一点菜信息</p>
      </div>
      <p style="position: absolute; top: 75px">
        已点菜品3份,合计:<span style="color: red; font-size: 25px">48元</span>
      </p>
    </div>
    <!--中间灰的部分-->
    <div class="Mdiv"></div>
    <!--主要内容-->
    <div class="a-text">
      <div id="DetailDiv"><h3>菜品详情:</h3></div>
      <div>
        <ul>
          <li v-for="item in list" :key="item">
            <div class="textDiv">
              <div class="textDivSmallOne">{{ item.name }}</div>
              <div class="textDivSmallTwo">
                <div >{{ item.num }}份</div>
                <div class="textDivSmallThree">{{ item.Money }}元</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      sumMoney: 12,
      MoneyOne: 12,
      list: [
        { name: "烧茄子", num: 1, Money: 12 },
        { name: "牛肉串", num: 1, Money: 12 },
        { name: "手撕菜", num: 1, Money: 12 },
      ],
    };
  },
};
</script>

<style lang="scss" >
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
body {
  border-color: #f7f7f7;
}
#app {
  padding: 0.1px;
  font-size: 18px;
  line-height: 1.8;
  font-family: "宋体";

  background: #f7f7f7;
}
.a-header {
  border-radius: 0.5rem;
  display: flex;
  position: relative;
  width: 100%;
  height: 8rem;
}
.a-headerOne {
  position: absolute;
  left: 2rem;
}
.a-header0ne img {
  position: absolute;
  top: 0.8rem;
  left: 1.3rem;
}
.a-headertwo {
  flex: 1;
  position: absolute;
  right: 70px;
  top: 10px;
}
.P-text1 {
  font-size: 22px;
  color: rgb(0, 0, 0);
}
.P-text2 {
  font-size: 15px;
  color: grey;
}
.Mdiv {
  width: 100%;
  height: 20px;
  background: rgb(240, 240, 240);
}
//////////
#DetailDiv {
  border-bottom: 2px solid #eee;
  font-family: "宋体";
  font-size: 1rem;
  font-weight: 500;
  height: 2rem;
  padding-left: 0.5rem;
}
.textDiv {
  display: flex;
  height: 3rem;
}
.textDivSmallOne {
  padding-top: 1rem;
  padding-left: 1rem;
  font-size: 0.9rem;

  text-align: center;
}
.textDivSmallTwo {
  display: flex;
  padding-top: 1rem;
  padding-left: 11rem;
  font-size: 1rem;
  height: 2.5rem;
  text-align: center;
}
.textDivSmallThree {
  padding-left: 3.8rem;
  font-size: 1rem;
  height: 2.5rem;
  text-align: center;
}
</style>>

