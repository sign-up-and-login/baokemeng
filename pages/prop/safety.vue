<template>
	<view class="">
		<!-- 头部 -->
		<headers></headers>
		<!-- 内容 -->
		<view class="content">
			<view class="specific">
				<!-- 详细内容 -->
				<view class="details">
					<!-- 道具名 -->
					<view class="title">
						<view class="title_logo">
							<image src="../../static/index/center.png" mode="widthFix"></image>
						</view>
						<text>安全中心</text>
					</view>
					<!-- 个人数据 -->
					<view class="data_content">
						<view class="box1">
							<view class="number">
								手机号：1231212121
							</view>
						</view>
					</view>
					<!--  -->
					<view class="scroll">
						<view class="content_btn" @click="jump('/pages/details/password')">
							更改登录密码
						</view>
						<view class="content_btn" @click="jump('/pages/details/passtwo')">
							更改二级密码
						</view>
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

	.details {
		width: 100%;
		/* height: 1110rpx; */
		box-sizing: border-box;
		padding: 0 90rpx;
		position: absolute;
		top: 50rpx;
		left: 0rpx;
		z-index: 101;
	}

	.title {
		width: 100%;
		height: 90rpx;
		margin-top: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(../../static/index/title1.png) center center no-repeat;
		background-size: 510rpx 100%;
	}

	.title_logo {
		width: 120rpx;
		height: 120rpx;
		margin-right: 20rpx;
	}

	.title_logo image {
		width: 120rpx;
		height: 120rpx;
	}

	.title text {
		color: #000000;
		font-size: 32rpx;
		font-weight: bold;
		text-shadow: 0 0 10rpx #FFFFFF;
	}

	.data_content {
		width: 100%;
		margin-top: 50rpx;
		box-sizing: border-box;
		padding: 0 50rpx;
	}

	.box1 {
		width: 100%;
		height: 50rpx;
		border-radius: 10rpx;
		background: url(../../static/index/id-icon.png) 10rpx center no-repeat;
		background-size: 50rpx 100%;
		background-color: #AAAAAA;
	}

	.number {
		width: 100%;
		height: 50rpx;
		line-height: 50rpx;
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
		box-sizing: border-box;
		padding-left: 100rpx;
	}
	/*  */
	.scroll {
		width: 100%;
		margin-top: 5rpx;
		box-sizing: border-box;
		overflow: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.content_btn{
		width: 330rpx;
		height: 80rpx;
		margin-top: 50rpx;
		color: #1d8994;
		font-size: 26rpx;
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(../../static/index/group.png) center center no-repeat;
		background-size: 100% 100%;
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
