<template>
  <div ref="wrapper" class="wrapper" >
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>


<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'scroll',
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        //probeType监听滚动
        probeType: this.probeType,
        //上拉加载
        pullUpLoad: this.pullUpLoad

      })
      //1.监听滚动位置
      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
      })
      //2.监听上拉加载
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
        //上拉加载后只能执行一次，用此函数后可以进行下一次下拉加载
        this.scroll.finishPullUp()
        // console.log('上拉')
      })

    },
    methods: {
      scrollTo(x, y, time = 300) {
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
      },
      refresh(){
       this.scroll && this.scroll.refresh()
      },
      getScrollY(){
         return this.scroll ? this.scroll.y : 0
      }
    }
  }

</script>


<style scoped>

</style>