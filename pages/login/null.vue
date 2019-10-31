<template>
	<view></view>
</template>

<script>
	import service from '../../service.js';
	export default {
		onLoad:function(){
			this.time(this)
		},
		methods:{
			time(self){
				uni.setStorageSync("null", 0)
				setTimeout(function() {
					if(uni.getStorageSync("null") == 0){
						uni.showToast({
							icon: 'none',
							title: '网络未连接或网络配置错误'
						});
						self.time(self)
					}
				},10000);
				self.error();
				
			},
			error(){
				uni.request({
					url: service.api.index.friends,
					method: 'GET',
					data: {
						"token":uni.getStorageSync('token')
					},
					success: res => {
						uni.setStorageSync("null", 1)
						var res = res.data;
						if (res.code == 1) {
							uni.reLaunch({
								url: '/pages/index/index',
							});
						}else{
							uni.reLaunch({
								url: '/pages/login/login',
							});
						}
					}
				});
			}
		}
	}
</script>
