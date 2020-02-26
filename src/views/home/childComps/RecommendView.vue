<template>
  <div class="recommend">
    <div v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="" @load.once="imgload">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'recommendview',
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return{
        isload:false
      }
    },
    methods: {
        imgload(){
          if(!this.isload){
            this.$emit('swiperimgload')
            this.isload =true
          }
      }
  
    
    }
   
  }
</script>
<style scoped>
.recommend{
  display: flex;

}
.recommend>div {
  flex: 1;
  text-align: center;
  font-size: 12px;
  padding: 12px 0 25px;
  border-bottom: 8px solid #eee;
}
.recommend>div>a>img{
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
</style>