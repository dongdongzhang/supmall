<template>
  <div class="shopinfo">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>

    <div class="shop-middle">
      <div class="shop-middle-left">
        <div>
          <p>{{shop.sells}}</p>
          <p>总销量</p>
        </div>
        <div>
          <p>339</p>
          <p>全部宝贝</p>
        </div>
      </div>

      <div class="shop-middle-right">
        <table class="table">
          <tr v-for="item in shop.score">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'betters' :item.isBetter }">{{item.isBetter ? '高':'低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  
  </div>
</template>


<script>
  export default {
    name: 'detailshopinfo',
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        isscore: false,
        isbetter: false
      }
    }
  }
</script>


<style scoped>
  .shopinfo {
    padding: 20px 7px;
    border-bottom: 5px solid #f2f5f8;
  }

  .shop-top {
    position: relative;
  }

  .shop-top>span {
    position: absolute;
    top: 12px;
    margin-left: 10px;
  }

  .shop-top>img {
    width: 38.5px;
    border: 1px solid #ccc;
    border-radius: 50%;
  }

  .shop-middle {
    display: flex;
    padding-top: 10px;
    align-items: center;
  }

  .shop-middle-left {
    flex: 1;
    border-right: 1px solid #ccc;
    display: flex;
    text-align: center;
  }

  .shop-middle-left>div {
    flex: 1;
  }

  .shop-middle-left>div>p:nth-child(2) {
    font-size: 13px;
    padding-top: 5px;
  }

  .shop-middle-right {
    flex: 1;
    font-size: 12px;
    line-height: 20px;
    text-align: center;

  }

  .shop-middle-right .table {
    margin: 0 auto;
  }

  .shop-middle-right .table td {
    padding: 0px 2px;

  }

  .score {
    color: rgb(94, 167, 50);
  }

  .score-better {
    color: #f13e3a;
  }

  .better {
    background-color: rgb(94, 167, 50);
    color: #fff;
  }

  .betters {
    background-color: #f13e3a;

  }
  .shop-bottom{
    margin-top: 9px;
    text-align: center;
  }
  .shop-bottom .enter-shop{
    /* text-align: center; */
    display: inline-block;
    padding: 5px 35px;
    font-size: 13px;
    background-color: #f2f5f8;
    border-radius: 5px;
  }
</style>