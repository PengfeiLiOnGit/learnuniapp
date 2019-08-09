<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<!-- 使用 -->
		<uni-rate value="2"></uni-rate>
	</view>
</template>

<script>
	// 使用组件,引入npm 安装的组件直接饮用
	import {uniRate} from "@dcloudio/uni-ui"
	
	export default {
		//  注册
		components:{
			uniRate
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			// const subVue = uni.getSubNVueById('index-popup');
			// subVue.show('slide-in-bottom',300,function(){
			// 	console.log("this is subNVUE");
			// });
			// subVue.hide("fade-out",300);
			console.log('store:>>',this.$store.state);
			console.log('store:>>',this.$store.state.token);

			// uni.showModal({
			// 	content:this.$store.state.token
			// });
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
