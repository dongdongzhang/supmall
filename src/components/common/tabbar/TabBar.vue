<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'tabbar'
  }
</script>


<style scoped>
  #tab-bar {
    display: flex;
    /* flex-direction:row */
    position: fixed;
    background-color: #f6f6f6;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -2px 2px;
    height: 49px;
  }

  
</style>