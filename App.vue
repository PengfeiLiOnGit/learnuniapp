<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide');
		},
		onError: function(err) {
			console.log(err)
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		background-color: #4CD964;
	}
</style>
