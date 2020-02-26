<template>
  <div id="detail">
    <Detailnavbar class="deta-nav" @titleclick="titleclick"></Detailnavbar>
    <Scroll class="deta-conter" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detailSwiper :list="topImages" @clickSwiper="clickSwiper" ref="detaswiper"></detailSwiper>
      <detail-base-info :goods="goods" />
      <DetailshopInfo :shop="shop"></DetailshopInfo>
      <DetailGoodsInfo :detainfo="detainfo" :params="params" :rate="rate" @imageLoad="imageLoad" @refinfo="refinfo" />
      <!-- 热门推荐 -->
      <GoodsList :goodspop="recommends" ref="goodsinfo" class="tuijian"></GoodsList>
    </Scroll>
    <BottomBar></BottomBar>
  </div>
</template>


<script>
  import Detailnavbar from './childComponent/Detailnavbar'
  import detailSwiper from './childComponent/detailSwiper'
  import DetailBaseInfo from './childComponent/DetailBaseInfo'
  import DetailshopInfo from './childComponent/DetailshopInfo'
  import DetailGoodsInfo from './childComponent/DetailGoodsInfo.vue'
  import GoodsList from 'components/content/goods/GoodsList'
  import BottomBar from './childComponent/BottomBar.vue'

  import Scroll from 'components/common/scroll/Scroll'
  import { getDetail, Goods, Shop, Params, getRecommend } from 'network/detail'

  export default {
    name: 'detail',
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detainfo: {},
        params: {},
        rate: {},
        recommends: [],
        themeTopYs: [],

      }
    },
    components: {
      Detailnavbar,
      detailSwiper,
      DetailBaseInfo,
      DetailshopInfo,
      DetailGoodsInfo,
      Scroll,
      GoodsList,
      BottomBar
    },
    created() {
      this.iid = this.$route.params.iid
      getDetail(this.iid).then(res => {
        const data = res.result;
        //1获取顶部轮播图
        this.topImages = data.itemInfo.topImages;
        //2获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
        // console.log(this.goods)
        //3创建店铺信息
        this.shop = new Shop(data.shopInfo);
        //4获取商品详细信息
        this.detainfo = data.detailInfo;
        //5获取商品参数
        this.params = new Params(data.itemParams.info, data.itemParams.rule)
        //6获取商品评价
        this.rate = data.rate.list[0]


      })

      getRecommend().then(res => {
        this.recommends = res.data.list
        //console.log(this.recommends)
      })
    },
    methods: {
      clickSwiper() {
      },
      imageLoad() {
        this.$refs.scroll.refresh()

      },
      titleclick(index) {
        this.$refs.scroll.scrollTo(0, this.themeTopYs[index], 700)
      },

      refinfo(i) {

        this.themeTopYs.push(0)
        this.themeTopYs.push(-i[0])
        this.themeTopYs.push(-i[1])
        this.themeTopYs.push(-this.$refs.goodsinfo.$el.offsetTop)
        // console.log(this.themeTopYs)
      },
      contentScroll(position) {
        const positoinY = -position.y
      

        let length = this.themeTopYs.length
        for (let i = 0; i < length; i++) {
          if ((i < length - 1 && positoinY > this.themeTopYs[i] && positoinY < this.themeTopYs[i + 1]) || (i === length - 1 && positoinY > this.themeTopYs[i])) {
            //  console.log(positoinY)
             console.log(i)
          }
        }
      }
    },
    mounted() {

    },
    updated() {
      this.themeTopYs = []
    }
  }
</script>


<style scoped>
  .nav-bar {
    position: relative;
    background-color: #fff;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
  }

  .deta-nav {
    position: relative;
  }


  .deta-conter {
    height: 100vh;
    /* height: calc(100% - 44px); */
    position: relative;
    z-index: 1;
    background-color: #fff;
    top: 1px;
    bottom: 100px;
   
  }
  
</style>