<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" @click="itemClick(index)">
      <span :class="{active:index === currentIndex}">{{item}}</span>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'tabcontrol',
    props: {
      type: Array,
      titles: {
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index
        this.$emit('tabclick',index)
      }
    }
  }
</script>


<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }

  .tab-control > div {
    flex: 1;
  }

  .tab-control>div>span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-tint);
    transition: border 0.5s ease;
  }
</style>