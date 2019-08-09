<template>
	<view class="top">
		
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			console.log("load");
			
		},
		onShow() {
			// 条件搬到
			// #ifdef H5
			// alert("this is h5")
			// #endif
			// uni.showModal({
			// 	cancelText: "this is APP"
			// });
			
			// 运行时编译
			switch (uni.getSystemInfoSync().platform) {
				case 'android':
					console.log('运行Android上');
					break;
				case 'ios':
					console.log('运行iOS上')
					break;
				default:
					console.log('运行在开发者工具上')
					break;
			}
		},
		onUnload() {
			console.log("unload");
			
		},
		methods: {

		}
	}
</script>

<style>
	page{
		background-color:aqua;
	}
	
	.top{
		height: 480rpx;
		background-image: url('~@/static/480.9.png');
	}
</style>
