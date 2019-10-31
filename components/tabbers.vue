<template>
	<view class="tabber">
		<view class="tabber_left" @click="jump('/pages/index/training')">
			训练馆
		</view>
		<view class="tabber_center" @click="jump('/pages/index/index')">
			<image src="/static/index/pokemon.png" mode="widthFix"></image>
		</view>
		<view class="tabber_right" @click="jump('/pages/index/me')">
			我的
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
		}
	}
</script>

<style>
	.tabber{
		width: 100%;
		height: 70rpx;
		background: rgba(255,255,255,0.5);
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 105;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	.tabber_left{
		width: 280rpx;
		height: 70rpx;
		box-sizing: border-box;
		padding-right: 150rpx;
		line-height: 70rpx;
		text-align: right;
		color: #FFFFFF;
		font-size: 30rpx;
		font-weight: bold;
		background: url(../static/index/train.png) no-repeat;
		background-size: 250rpx 70rpx;
		background-position: bottom left;
	}
	.tabber_center{
		width: 90rpx;
		height: 90rpx;
		margin-bottom:20rpx;
	}
	.tabber_center image{
		width: 90rpx;
		height: 90rpx;
	}
	.tabber_right{
		width: 280rpx;
		height: 70rpx;
		box-sizing: border-box;
		padding-left: 150rpx;
		line-height: 70rpx;
		text-align: left;
		color: #FFFFFF;
		font-size: 30rpx;
		font-weight: bold;
		background: url(../static/index/user.png) no-repeat;
		background-size: 250rpx 70rpx;
		background-position: bottom right;
	}
</style>
