<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <TabControl ref="tabcontrol1" :titles="['流行','新款','组合']" 
    @tabclick="tabclick" class="tab-control"
    v-show="isTabfixed"></TabControl>
    <Scroll class="content" ref="scroll" :probe-type="3" 
      @scroll="contenscroll" :pull-up-load="true"
      @pullingUp="loadmore">
      <Swiper class="swiperDiv" :list="banners" @clickSwiper="clickSwiper" ></Swiper>
      <RecommendView :recommends="recommend" @swiperimgload="swiperimgload"></RecommendView>
      <Feature></Feature>
      <TabControl ref="tabcontrol" :titles="['流行','新款','组合']" 
        @tabclick="tabclick" ></TabControl>
      <goods-list :goodspop="goods[currentType].list" />

    </Scroll>
    <BackTop @click.native="backClick" v-show="isShow" />

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Swiper from 'components/common/swiper/Swiper'
  import Scroll from 'components/common/scroll/Scroll'

  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backtop/BackTop'


  import RecommendView from './childComps/RecommendView.vue'
  import Feature from './childComps/Feature.vue'

  import { getHomeMultidata, getHomeGoods } from 'network/home'

  export default {
    name: 'home',
    components: {
      NavBar,
      Swiper,
      RecommendView,
      Feature,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommend: [],
        goods: {
          'pop': { page: 0, list: [] },
          'new': { page: 0, list: [] },
          'sell': { page: 0, list: [] },
        },
        currentType: 'pop',
        isShow: false,
        topOffsetTop: 0,
        isTabfixed:false,
        saveY:0
      }
    },
    //dom加载后`
    mounted() {
      //1.图片加载完成的事件监听
      const refresh = this.debounce(this.$refs.scroll.refresh, 250)
      this.$bus.$on('imgloaditem', () => {
        refresh()
      })
     
    },
    destroyed () {
      console.log('111')
    },
    //进入组件时
    activated () {
      this.$refs.scroll.scrollTo(0, this.saveY, 1)
      this.$refs.scroll.refresh()
      // console.log(this.saveY)
    },
    //离开组件时
    deactivated () {
      this.saveY = this.$refs.scroll.getScrollY()
    },
    methods: {
       //2.获取tabcontrol的offsettop
       swiperimgload() {
        this.topOffsetTop = this.$refs.tabcontrol.$el.offsetTop
      },
      /**
       *降频函数,防抖函数
       *这个 debounce 函数在给定的时间间隔内只允许你提供的回调函数执行一次，以此降低它的执行频率。
       *调用:	debounce(function() {}, 250) 
       * @param {*} func回调函数
       * @param {*} delay等待时间,推荐250
       */
      debounce(func, delay) {
        let timeout = null
        return function (...args) {
          if (timeout) {
            clearTimeout(timeout)
          }
          timeout = setTimeout(() => {
            func.apply(this, args)
          }, delay)
        }
      },
      /** 
     * 事件监听的方法
     */
      clickSwiper(d) {
        window.location.href = d.link
      },
    //  监听滚动
      contenscroll(position) {
        if (position.y < -500) {
          this.isShow = true
        } else {
          this.isShow = false
        }
        //决定tabcontrol是否吸顶
        // console.log(position.y+'____'+-this.topOffsetTop)
        if(position.y < -this.topOffsetTop){
         this.isTabfixed = true
        }else{
          this.isTabfixed = false
        }
      },
      loadmore() {
        this.getHomeGoods(this.currentType)
      },
      tabclick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabcontrol.currentIndex = index
        this.$refs.tabcontrol1.currentIndex = index

      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },

      /** 
       * 网络请求的相关方法
       */
      //获取轮播图的数据
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res)
          //拿到数据库数据赋给变量
          this.banners = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      //获取tabcontrol里需要的数据
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          // console.log(res)
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1


        })
      }
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },

  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
    z-index: 1;
    /* font-size: 18px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0; */
  }

  #home {
    /* padding-top: 44px; */
    position: relative;
    height: 100vh;


  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control{
    position: relative;
    z-index: 1;
  }
</style>