<template>
	<div id="app">
		<keep-alive exclude="detail">
			<router-view></router-view>
		</keep-alive>
		<TabBar>
			<TabBarItem path="/home" >
				<img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon">
				<img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
				<div slot="item-text">首页</div>
			</TabBarItem>

			<TabBarItem path="/classify" >
				<img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon">
				<img src="~assets/img/tabbar/category_active.svg" alt="" slot="item-icon-active">
				<div slot="item-text">分类</div>
			</TabBarItem>

			<TabBarItem path="/shoppingcart" >
				<img src="~assets/img/tabbar/shopcart.svg" alt="" slot="item-icon">
				<img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot="item-icon-active">
				<div slot="item-text">购物车</div>
			</TabbarItem>
			
			<TabBarItem path="/mine" >
				<img src="~assets/img/tabbar/profile.svg" alt="" slot="item-icon">
				<img src="~assets/img/tabbar/profile_active.svg" alt="" slot="item-icon-active">
				<div slot="item-text">我的</div>
			</TabBarItem>

		</TabBar>
	</div>
</template>
<script>
	import TabBar from 'components/common/tabbar/TabBar.vue'
	import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
	export default {
		name: 'app',
		components: {
			TabBar,
			TabBarItem
		}
	}
</script>


<style>
	@import "assets/css/base.css";
	 #tab-bar div {
	    flex: 1;
	    text-align: center;
	    font-size: 14px;
	  }
</style>
