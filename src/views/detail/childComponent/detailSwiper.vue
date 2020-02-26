<template>
  <Swiper v-if="list.length>0" :autoPlay='autoPlay' :showIndicator='showIndicator' :interval="interval"
    :duration="duration">
    <Slide v-for="(item,index) in list" :key="index" @click="clickSwiper(item)" class="item-slide">
      <img :src="item" />
    </Slide>
  </Swiper>
</template>


<script>

  import { Swiper, Slide } from 'vue-swiper-component';
  export default {
    name: 'detailSwiper',
    props: {
      /**
       * 轮播图数据
       */
      list: Array,
      /**
       * 是否自动轮播
       */
      autoPlay: {
        type: Boolean,
        default: true
      },
      /**
       * 是否显示轮播的点
       */
      showIndicator: {
        type: Boolean,
        default: true
      },
      /**
      * 每两次隔多久滚动一次
      */
      interval: {
        type: Number,
        default: 2500
      },
      /**
      * 每次滚动一页需要多久
      */
      duration: {
        type: Number,
        default: 1000
      },
    },
    data() {
      return {

      };
    },

    components: {
      Swiper,
      Slide
    },
    methods: {
      /**
       * 轮播图点击事件
       */
      clickSwiper(data) {
        this.$emit('clickSwiper', data);
      }
    }
  }
</script>


<style scoped>
  .item-slide {
    height: 300px;
    overflow: hidden;
    /* margin-top: 44px; */
  }

  .item-slide img {
    width: 100%;
  }

  /* .wh_content{
    z-index: 0;
  } */
</style>