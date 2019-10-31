<template>
	<view class="">
		<!-- 头部 -->
		<headers></headers>
		<!-- 内容 -->
		<view class="content">
			<view class="specific">
				<!-- 返回键 -->
				<view class="back" @click="jump('/pages/prop/notice')">
					<image src="../../static/index/back.png" mode="widthFix"></image>
				</view>
				<!-- 通知标题 -->
				<view class="title">
					我的邮箱
				</view>
				<!-- 详细内容 -->
				<view class="details">
					<!-- 内容头部 -->
					<view class="details_top">
						<view class="details_img">
							<image src="../../static/index/msg.png" mode="widthFix"></image>
						</view>
						<view class="details_title">
							卡比兽正式上线
						</view>
						<view class="boder">
							<image class="boder_img" src="../../static/index/line3.png" mode="widthFix"></image>
						</view>
					</view>
					<!-- 通知内容 -->
					<view class="scroll">
						00000000000000000000000000
						000000000
						000000000000000000
					</view>
				</view>
				<!-- 背景底图 -->
				<view class="background">
					<image src="../../static/index/columns.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<!-- 底部按钮 -->
		<tabbers></tabbers>
		<!-- 背景图 -->
		<view class="bg">
			<image src="../../static/index/page.jpg" mode="scaleToFill"></image>
		</view>
	</view>

</template>

<script>
	import headers from '@/components/header_top.vue';
	import tabbers from '@/components/tabbers.vue';
	export default {
		components: {
			headers,
			tabbers
		},
		data() {
			return {
			}

		},
		methods: {
			jump(url) {
				uni.navigateTo({
					url: url
				})
			},
		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding-bottom: 150rpx;
		overflow: auto;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
	}

	.specific {
		width: 100%;
		height: 1210rpx;
		box-sizing: border-box;
		margin: 200rpx 0 0;
		border-radius: 20rpx;
		position: relative;
	}
	.back{
		width: 100rpx;
		height: 100rpx;
		margin-left: ;
		position: absolute;
		top: -30rpx;
		left: 50rpx;
		z-index: 105;
	}
	.back image{
		width: 100rpx;
		height: 100rpx;
	}
	.title{
		width: 100%;
		height: 60rpx;
		color: #FFFFFF;
		font-size: 32rpx;
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(../../static/index/mali_title.png) center center no-repeat;
		background-size: 280rpx 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 102;
	}
	.details {
		width: 100%;
		/* height: 1110rpx; */
		box-sizing: border-box;
		padding: 0 50rpx;
		position: absolute;
		top: 50rpx;
		left: 0rpx;
		z-index: 101;
	}
	.details_top{
		width: 100%;
		box-sizing: border-box;
		padding: 0 30rpx;
	}
	.details_img{
		width: 100%;
	}
	.details_img image{
		width: 100%;
		height: 332rpx;
		border-top-left-radius: 10rpx;
		border-top-right-radius: 10rpx;
	}
	.details_title{
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		color: #000000;
		font-size: 34rpx;
		font-weight: bold;
	}
	.boder{
		width: 100%;
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}
	.boder_img{
		width: 100%;
		height: 20rpx;
	}
	.scroll {
		width: 100%;
		height: 670rpx;
		word-break:break-all;
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
		/* margin-top: 50rpx; */
		box-sizing: border-box;
		padding: 30rpx 50rpx;
		overflow: auto;
	}
	
	/* 内容背景图 */
	.background {
		width: 100%;
		height: 1210rpx;
		box-sizing: border-box;
		padding: 0 30rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
	}

	.background image {
		width: 100%;
		height: 1210rpx;
	}

	/* 背景图 */
	.bg {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
	}

	.bg image {
		width: 100%;
		height: 100%;
	}
</style>
