<template>
  <div v-if="Object.keys(detainfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{detainfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detainfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detainfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad" alt="">
    </div>
    <!-- 参数相关 -->
    <div class="params-info" ref="paramsinfo">
      <table class="table">
        <tr v-for="(item,index) in params.rule.tables[0]" :key="index">
          <td>{{item[0]}}</td>
          <td>{{item[1]}}</td>
          <td>{{item[2]}}</td>
          <td>{{item[3]}}</td>
        </tr>
      </table>
      <table class="table1">
        <tr v-for="(item,index) in params.info.set" :key="index">
          <td>{{item.key}}</td>
          <td class="param-value">{{item.value}}</td>
        </tr>
      </table>
    </div>
    <!-- 用户评价 -->
    <div class="rate-info" ref="rateinfo">
      <div class="eval">
        <span>用户评价</span>
        <span>更多</span>
      </div>
      <div class="eval-i">
        <div>
          <img :src="rate.user.avatar" alt="">
          <span>{{rate.user.uname}}</span>
        </div>
        <p>{{rate.content}}</p>
        <p>{{parseInt(rate.created) | newtime}} {{rate.style}}</p>
         <!-- 评论图片 -->
         <span v-if="Object.keys(rate.images).length !==0"  v-for="(item,index) in rate.images" :key="index">
           <img :src="item">
         </span>
      </div>
     
    </div>
  </div>
</template>

<script>

  export default {
    name: "DetailGoodsInfo",
    components: {
    },
    props: {
      detainfo: {
        type: Object,
        default() {
          return {}
        }
      },
      params: {
        type: Object,
        default() {
          return {}
        }
      },
      rate: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    updated () {
    },
    data() {
      return {
        counter: 0,
        imagesLength: 0,
      }
    },
    methods: {
      imgLoad() {
        //所有图片全部加载完毕进行一次回调
        if (++this.counter === this.imagesLength) {
          this.$emit('imageLoad')
          this.$emit('refinfo', [this.$refs.paramsinfo.offsetTop,this.$refs.rateinfo.offsetTop])
        }

      }
    },
    watch: {
      detainfo() {
        //获取图片的个数
        this.imagesLength = this.detainfo.detailImage[0].list.length
      },
    },
    filters: {
      newtime(i){
            var date = new Date(i*1000)
          //获取当前年月日星期几几点几分几秒并打印
            var week = ['星期日', '星期一', '星期二', '星期三', '星	期四', '星期五', '星期六']
            var year = date.getFullYear()
            var month = date.getMonth() + 1
            var datee = date.getDate()
            var day = date.getDay()
            var time = year + '年' + month + '月' + datee + '日 	' + week[day]
            function getTimerr() {
              var time = new Date()
              var hour = time.getHours()
              hour = hour < 10 ? '0' + hour : hour
              var minute = time.getMinutes()
              minute = minute < 10 ? '0' + minute : minute
              var second = time.getSeconds()
              second = second < 10 ? '0' + second : second
              return hour + ':' + minute + ':' + second
            }
            return time + ' ' + getTimerr()
         
      }
    }
  }
</script>

<style scoped>
  .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-desc {
    padding: 0 15px;
  }

  .info-desc .start,
  .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start::before,
  .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .info-list {
    border-bottom: 3px solid #ccc;
  }

  .info-list img {
    width: 100%;
  }

  .params-info {
    padding: 18px 12px;
  }

  .table {
    width: 100%;
    border-collapse: collapse;

  }

  .table td {
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    box-sizing: border-box;
    height: 30px;
    font-size: 12px;

  }

  .table1 {
    width: 100%;
    border-collapse: collapse;

  }

  .table1 td {
    font-size: 12px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    box-sizing: border-box;
    font-size: 12px;
    /* line-height: 30px; */
    height: 30px;
  }

  .table td:nth-child(1) {
    width: 95px;

  }

  .table1 td:nth-child(1) {
    width: 95px;
  }

  .param-value {
    color: #eb4868;
  }

  .rate-info {
    padding: 5px 12px;

  }

  .eval {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
  }

  .eval span:nth-child(1) {
    float: left;
  }

  .eval span:nth-child(2) {
    float: right;
  }

  .eval-i >div img {
    width: 40px;
    border-radius: 50%;
  }

  .eval-i span:nth-child(2) {
    position: relative;
    top: -10px;
    left: 5px;
    font-size: 13px;
  }
  .eval-i>div{
    padding: 10px 0;
  }
  .eval-i > p:nth-child(2) {
    font-size: 12px;
    line-height: initial;
    margin-bottom: 5px;
  }
  .eval-i > p:nth-child(3) {

    color: #ccc;
    font-size: 12px;
  }
  .eval-i >span {
    padding: 5px;
  }
  .eval-i >span img {
    width: 50px;
  }

</style>