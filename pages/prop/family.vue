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
							<image src="../../static/index/family.png" mode="widthFix"></image>
						</view>
						<text>我的家族</text>
					</view>
					<!-- 个人数据 -->
					<view class="data_content">
						<view class="box1">
							<view class="number">
								我的直推人数：000
							</view>
						</view>
						<view class="box2">
							<view class="number">
								家族成员人数：000
							</view>
						</view>
						<view class="data_number">
							<view class="data_btn">
								上次刷新：0000-00-00 00:00:00
							</view>
							<view class="refresh">
								刷新人数
							</view>
							<view class="data_title">
								我的直推团队
							</view>
						</view>
					</view>
					<!--  -->
					<view class="scroll">
						<view class="team_list">
							<!-- 团列表 -->
							<view class="team_li">
								<view class="li_content">
									<text class="h1">qbzi001</text>
									<text class="h2">213051</text>
								</view>
								<!-- 背景图 -->
								<view class="li_pic">
									<image src="../../static/index/team.png" mode="widthFix"></image>
								</view>
							</view>
							<!--  -->
							<view class="team_li">
								<view class="li_content">
									<text class="h1">qbzi001</text>
									<text class="h2">213051</text>
								</view>
								<!-- 背景图 -->
								<view class="li_pic">
									<image src="../../static/index/team.png" mode="widthFix"></image>
								</view>
							</view>
							<!--  -->
							<view class="team_li">
								<view class="li_content">
									<text class="h1">qbzi001</text>
									<text class="h2">213051</text>
								</view>
								<!-- 背景图 -->
								<view class="li_pic">
									<image src="../../static/index/team.png" mode="widthFix"></image>
								</view>
							</view>
							<!--  -->
							<view class="team_li">
								<view class="li_content">
									<text class="h1">qbzi001</text>
									<text class="h2">213051</text>
								</view>
								<!-- 背景图 -->
								<view class="li_pic">
									<image src="../../static/index/team.png" mode="widthFix"></image>
								</view>
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
		margin: 20rpx 0;
		border-radius: 10rpx;
		background: url(../../static/index/downline.png) 10rpx center no-repeat;
		background-size: 50rpx 100%;
		background-color: #AAAAAA;
	}
	.box2{
		width: 100%;
		height: 50rpx;
		border-radius: 10rpx;
		background: url(../../static/index/members.png) 10rpx center no-repeat;
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

	.data_number {
		width: 100%;
		box-sizing: border-box;
		/* padding: 0 20rpx; */
	}

	.data_btn {
		width: 100%;
		height: 80rpx;
		color: #000000;
		font-size: 26rpx;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
		/* background: url(../../static/index/total.png) center center no-repeat; */
		background-size: 100% 100%;
	}
	.refresh{
		width: 100%;
		height: 70rpx;
		text-align: center;
		line-height: 70rpx;
		color: #c0463a;
		font-size: 24rpx;
		font-weight: bold;
		background: url(../../static/index/orange-button.png) center center no-repeat;
		background-size: 200rpx 100%;
	}
	.data_title{
		width: 100%;
		margin-top: 30rpx;
		text-align: center;
		color: #ffff;
		font-size: 28rpx;
		font-weight: bold;
	}
	/*  */
	.scroll {
		width: 100%;
		height: 600rpx;
		/* margin-top: 5rpx; */
		box-sizing: border-box;
		/* padding: 0 20rpx; */
		overflow: auto;
	}
	.team_list{
		width: 100%;
		box-sizing: border-box;
		padding: 0 0;
	}
	.team_li{
		width: 100%;
		height: 212rpx;
		margin-bottom: 20rpx;
		position: relative;
	}
	.li_pic{
		width: 100%;
		height: 212rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 102;
	}
	.li_pic image{
		width: 100%;
		height: 212rpx;
	}
	.li_content{
		width: 100%;
		height: 212rpx;
		box-sizing: border-box;
		padding-left: 200rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 105;
	}
	.h1{
		color: #000000;
		font-size: 30rpx;
		font-weight: bold;
		margin-right: 10rpx;
	}
	.h2{
		color: #ff7c00;
		font-size: 24rpx;
		font-weight: bold;
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
