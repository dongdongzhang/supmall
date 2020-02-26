<template>
  <div class="goods">
      <GoodsListItem v-for="item in goodspop" :goodsitem="item"/>
  </div>
</template>
  
  
<script>
  import GoodsListItem from './GoodsListItem.vue'
    export default {
    name:'goodslist',
    components: {
      GoodsListItem
    },
    props: {
      type:Array,
      goodspop:{
        default() {
          return []
        }
      }
    }
  }
</script>
  
  
<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  
</style>