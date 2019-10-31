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
							<image src="../../static/index/lufei.png" mode="widthFix"></image>
						</view>
						<text>精灵宝可梦收益</text>
					</view>
					<!-- 个人数据 -->
					<view class="data_content">
						<view class="box1">
							<view class="number">
								编码：1231212121
							</view>
						</view>
						<view class="data_title">
							总收入
						</view>
						<view class="data_number">
							<view class="data_btn">
								351.822222美金
							</view>
						</view>
					</view>
					<!--  -->
					<view class="scroll">
						<view class="record">
							<view class="record_content">
								<view class="record_pic">
									<image src="../../static/index/pikaqiu.png" mode="widthFix"></image>
								</view>
								<view class="record_data">
									<view class="li">买：24/10/19 15:06</view>
									<view class="li">卖：24/10/19 15:06</view>
									<view class="li">买价：176.31 美金</view>
									<view class="li">卖价：220.39 美金</view>
									<view class="li">收益：176.31 美金</view>
									<view class="li">宝可梦收益 : 25%</view>
								</view>
							</view>
							<!-- 记录背景 -->
							<view class="record_bg">
								<image src="../../static/index/pack-yellow.png" mode="scaleToFill"></image>
							</view>
						</view>
						<!--  -->
						<view class="record">
							<view class="record_content">
								<view class="record_pic">
									<image src="../../static/index/pikaqiu.png" mode="widthFix"></image>
								</view>
								<view class="record_data">
									<view class="li">买：24/10/19 15:06</view>
									<view class="li">卖：24/10/19 15:06</view>
									<view class="li">买价：176.31 美金</view>
									<view class="li">卖价：220.39 美金</view>
									<view class="li">收益：176.31 美金</view>
									<view class="li">宝可梦收益 : 25%</view>
								</view>
							</view>
							<!-- 记录背景 -->
							<view class="record_bg">
								<image src="../../static/index/pack-yellow.png" mode="scaleToFill"></image>
							</view>
						</view>
						<!--  -->
						<view class="record">
							<view class="record_content">
								<view class="record_pic">
									<image src="../../static/index/pikaqiu.png" mode="widthFix"></image>
								</view>
								<view class="record_data">
									<view class="li">买：24/10/19 15:06</view>
									<view class="li">卖：24/10/19 15:06</view>
									<view class="li">买价：176.31 美金</view>
									<view class="li">卖价：220.39 美金</view>
									<view class="li">收益：176.31 美金</view>
									<view class="li">宝可梦收益 : 25%</view>
								</view>
							</view>
							<!-- 记录背景 -->
							<view class="record_bg">
								<image src="../../static/index/pack-yellow.png" mode="scaleToFill"></image>
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
		padding: 0 100rpx;
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

	.data_title {
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
	}

	.data_number {
		width: 100%;
		box-sizing: border-box;
		padding: 0 20rpx;
	}

	.data_btn {
		width: 100%;
		height: 80rpx;
		color: #FFFFFF;
		font-size: 28rpx;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
		background: url(../../static/index/total.png) center center no-repeat;
		background-size: 100% 100%;
	}
	/*  */
	.scroll {
		width: 100%;
		height: 720rpx;
		margin-top: 5rpx;
		box-sizing: border-box;
		/* padding: 0 20rpx; */
		overflow: auto;
	}
	
	.record{
		width: 100%;
		height: 370rpx;
		margin: 5rpx 0;
		position: relative;
	}
	.record_content{
		width: 100%;
		height: 370rpx;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 106;
	}
	.record_pic{
		width: 260rpx;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
	}
	.record_pic image{
		width: 260rpx;
		height: 244rpx;
	}
	.record_data{
		width: 320rpx;
		padding-right: 30rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.li{
		width: 320rpx;
		height: 45rpx;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
		box-sizing: border-box;
		padding-left: 50rpx;
		border-radius: 10rpx;
		margin: 5rpx 0;
		background: url(../../static/index/pokemon.png) no-repeat;
		background-size: 30rpx 30rpx;
		background-position: 10rpx center;
		background-color: #fae170;
	}
	/* 记录背景 */
	.record_bg{
		width: 100%;
		height: 370rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 102;
	}
	.record_bg image{
		width: 100%;
		height: 370rpx;
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
