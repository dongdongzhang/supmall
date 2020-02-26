<template>
  <div class="bottombar">
      <div>店铺</div>
      <div>客服</div>
      <div>收藏</div>
      <div>加入购物车</div>
      <div>购买</div>
  </div>
</template>

<script>
export default {
    name:'bottombar'
}
</script>

<style scoped>
    .bottombar{
      height: 49px;
      width: 100%;
      position: fixed;
      background: #fff;
      bottom:0 ;
      z-index: 1;
      display: flex;
      text-align:center;
      line-height: 49px
    }
    .bottombar div{
      flex: 1
    }
     .bottombar div:nth-child(4){
      flex: 2;
      background: yellow;
    }
     .bottombar div:nth-child(5){
      flex: 2;
      background: var(--color-high-text);
    }
</style>

