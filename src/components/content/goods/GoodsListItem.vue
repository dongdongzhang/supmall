<template>
  
  <div class="goods-item" @click="imgclick">
    <img :src="showimg" alt="" @load="imgload">
    <div class="iteminfo">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'goodslistitem',
    props: {
      type: Object,
      goodsitem: {
        default() {
          return Object
        }
      }
    },
    data() {
      return {
          
      }
    },
    computed: {
      showimg() {
        return this.goodsitem.image || this.goodsitem.show.img
      }
    },
    methods: {
      imgload(){
         this.$bus.$emit('imgloaditem')
      },
      imgclick(){
        this.$router.push('/detail/'+ this.goodsitem.iid)
      }
    }
  }
</script>


<style scoped>
  .goods-item {
    padding-bottom: 40px;
    width: 48%;
    position: relative;

  }
  .iteminfo{
    font-size: 12px;
    text-align: center;
    overflow: hidden;
    bottom: 5px;
    left: 0;
    right: 0;
    position: absolute;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-item>div>p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 3px;
    


  }
  .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .collect{
    position: relative;
  }
  .collect::before{
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    top: -1px;
    left: -15px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    
  }
</style>