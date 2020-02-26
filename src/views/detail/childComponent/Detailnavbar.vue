<template>
  <nav-bar>
    <div slot="left" class="back" @click="backclick">
      <img src="~assets/img/common/back.svg" alt="">
    </div >
    <div slot="center" class="detailnavbar">
      <div  v-for="(item,index) in titles" :key="index" 
      :class="{active: index === currentIndex}"
      @click="titleclick(index)">
        {{item}}
      </div>
    </div>
  </nav-bar>

  
</template>


<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: 'detailnavbar',
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    }
    ,
    components: {
      NavBar
    },
    methods: {
      titleclick(index){
   
        this.currentIndex=index
        this.$emit('titleclick',index)
      },
      backclick(){
        this.$router.go(-1)
      }
    }
  
  }
</script>


<style scoped>
.detailnavbar{
  display: flex;
  font-size: 13px;
}
.detailnavbar div{
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
.back img{
  margin-top: 10px;
}
</style>