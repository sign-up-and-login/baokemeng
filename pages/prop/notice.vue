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
							<image src="../../static/images/mailboxs.png" mode="widthFix"></image>
						</view>
						<text>我的邮箱</text>
					</view>
					<!-- 通知内容 -->
					<view class="scroll">
						<view class="record" @click="jump('/pages/details/message')">
							<view class="record_pic">
								<image src="../../static/index/msg.png" mode="widthFix"></image>
							</view>
							<view class="record_title">
								可达鸭正式上线
							</view>
							<view class="record_new">
								全新！
							</view>
						</view>
						<!--  -->
						<view class="record">
							<view class="record_pic">
								<image src="../../static/index/msg.png" mode="widthFix"></image>
							</view>
							<view class="record_title">
								可达鸭正式上线
							</view>
							<view class="record_new">
								全新！
							</view>
						</view>
						<!--  -->
						<view class="record">
							<view class="record_pic">
								<image src="../../static/index/msg.png" mode="widthFix"></image>
							</view>
							<view class="record_title">
								可达鸭正式上线
							</view>
							<view class="record_new" v-if="show == 1">
								全新！
							</view>
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
		height: 1110rpx;
		box-sizing: border-box;
		padding: 0 50rpx;
		position: absolute;
		top: 50rpx;
		left: 0rpx;
		z-index: 101;
	}

	.title {
		width: 100%;
		height: 90rpx;
		margin-top: 50rpx;
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

	.scroll {
		width: 100%;
		height: 920rpx;
		margin-top: 50rpx;
		box-sizing: border-box;
		padding: 30rpx;
		overflow: auto;
	}
	.record{
		width: 100%;
		height: 285rpx;
		margin-bottom: 50rpx;
		position: relative;
		box-sizing: border-box;
		padding-top: 40rpx;
	}
	.record_pic{
		width: 100%;
		box-sizing: border-box;
		padding: 0 40rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 101;
	}
	.record_pic image{
		width: 100%;
		border-radius: 40rpx;
	}
	.record_title{
		width: calc(100% - 100rpx);
		box-sizing: border-box;
		padding: 0 20rpx;
		color: #000000;
		text-align: right;
		font-size: 28rpx;
		font-weight: bold;
		background: linear-gradient(left,rgba(0,0,0,0),#FFFFFF);
		position: absolute;
		right: 40rpx;
		bottom: 20rpx;
		z-index: 105;
	}
	.record_new{
		box-sizing: border-box;
		padding: 0 25rpx;
		height: 40rpx;
		color: #FFFFFF;
		font-size: 30rpx;
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(../../static/index/item-name.png) center center no-repeat;
		background-size: 100% 100%;
		position: absolute;
		right: 50rpx;
		top: -20rpx;
		z-index: 102;
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
