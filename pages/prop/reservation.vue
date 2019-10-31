
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
							<image src="../../static/index/history.png" mode="widthFix"></image>
						</view>
						<text>动态收益</text>
					</view>
					<!--  -->
					<view class="scroll">
						<view class="record">
							<view class="record_content">
								<view class="record_pic">
									<image src="../../static/index/pikaqiu.png" mode="widthFix"></image>
								</view>
								<view class="record_data">
									<!-- 标题 -->
									<view class="record_title">
										<image src="../../static/index/data_star.png" mode="widthFix"></image>
										<image src="../../static/index/data_star.png" mode="widthFix"></image>
										<image src="../../static/index/data_star.png" mode="widthFix"></image>
									</view>
									<!-- 展示内容 -->
									<view class="record_text">
										<view class="hi"><view class="ht">价值</view>：100 - 300 美金</view>
										<view class="hi"><view class="ht">日期</view>：00/00/00 00:00:00</view>
										<view class="hi"><view class="ht">大师球</view>：33</view>
										<view class="hi"><view class="ht">状态</view>：失败</view>
									</view>
									<!-- 展示按钮 -->
									<view class="record_btn">
										稀有皮卡丘
									</view>
								</view>
							</view>
							<!-- 记录背景 -->
							<view class="record_bg">
								<image src="../../static/index/transaction-column.png" mode="scaleToFill"></image>
							</view>
						</view>
						<!--  -->
						<view class="record">
							<view class="record_content">
								<view class="record_pic">
									<image src="../../static/index/pikaqiu.png" mode="widthFix"></image>
								</view>
								<view class="record_data">
									<!-- 标题 -->
									<view class="record_title">
										<image src="../../static/index/data_star.png" mode="widthFix"></image>
										<image src="../../static/index/data_star.png" mode="widthFix"></image>
										<image src="../../static/index/data_star.png" mode="widthFix"></image>
									</view>
									<!-- 展示内容 -->
									<view class="record_text">
										<view class="hi"><view class="ht">价值</view>：100 - 300 美金</view>
										<view class="hi"><view class="ht">日期</view>：00/00/00 00:00:00</view>
										<view class="hi"><view class="ht">大师球</view>：33</view>
										<view class="hi"><view class="ht">状态</view>：失败</view>
									</view>
									<!-- 展示按钮 -->
									<view class="record_btn">
										稀有皮卡丘
									</view>
								</view>
							</view>
							<!-- 记录背景 -->
							<view class="record_bg">
								<image src="../../static/index/transaction-column.png" mode="scaleToFill"></image>
							</view>
						</view>
						<!--  -->
						<view class="record">
							<view class="record_content">
								<view class="record_pic">
									<image src="../../static/index/pikaqiu.png" mode="widthFix"></image>
								</view>
								<view class="record_data">
									<!-- 标题 -->
									<view class="record_title">
										<image src="../../static/index/data_star.png" mode="widthFix"></image>
										<image src="../../static/index/data_star.png" mode="widthFix"></image>
										<image src="../../static/index/data_star.png" mode="widthFix"></image>
									</view>
									<!-- 展示内容 -->
									<view class="record_text">
										<view class="hi"><view class="ht">价值</view>：100 - 300 美金</view>
										<view class="hi"><view class="ht">日期</view>：00/00/00 00:00:00</view>
										<view class="hi"><view class="ht">大师球</view>：33</view>
										<view class="hi"><view class="ht">状态</view>：失败</view>
									</view>
									<!-- 展示按钮 -->
									<view class="record_btn">
										稀有皮卡丘
									</view>
								</view>
							</view>
							<!-- 记录背景 -->
							<view class="record_bg">
								<image src="../../static/index/transaction-column.png" mode="scaleToFill"></image>
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
		margin-top: 120rpx;
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
		height: 850rpx;
		margin-top: 50rpx;
		box-sizing: border-box;
		padding: 0 40rpx;
		overflow: auto;
	}
	.scroll_bottom{
		width: 100%;
		height: 50rpx;
		text-align: center;
		color: #5867dd;
		font-size: 32rpx;
		font-weight: bold;
	}

	.record {
		width: 100%;
		height: 250rpx;
		/* margin: 20rpx 0; */
		margin-bottom: 50rpx;
		position: relative;
	}

	.record_content {
		width: 100%;
		height: 270rpx;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 106;
	}

	.record_pic {
		width: 220rpx;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
	}

	.record_pic image {
		width: 220rpx;
		height: 220rpx;
	}

	.record_data {
		width: 320rpx;
		height: 100%;
		padding-right: 30rpx;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	/*  */
	.record_title{
		width: 310rpx;
		height: 56rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(../../static/index/star.png) center center no-repeat;
		background-size: 310rpx 56rpx;
		position: absolute;
		top: 0;
		/* right: 0rpx; */
	}
	.record_title image{
		width: 45rpx;
		height: 45rpx;
		margin: 0 5rpx;
	}
	
	.record_text{
		width: 310rpx;
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-direction: column;
	}
	.ht{
		width: 72rpx;
	}
	.hi{
		width: 320rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: nowrap;
	}
	.record_btn{
		width: 290rpx;
		height: 60rpx;
		color: #FFFFFF;
		font-size: 32rpx;
		font-weight: bold;
		text-shadow: 0 0 10rpx #999999;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(../../static/index/rare.png) center center no-repeat;
		background-size: 290rpx 60rpx;
		position: absolute;
		bottom: 10rpx;
		left: 5rpx;
	}
	.li {
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
	.price{
		width: 100%;
		height: 100rpx;
		box-sizing: border-box;
		padding: 0 10rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #fae170;
		border-radius: 10rpx;
	}
	.price_num{
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-direction: column;
	}
	.h2{
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
	}
	.h3{
		color: #000000;
		font-size: 32rpx;
		font-weight: bold;
	}
	.price_btn{
		width: 130rpx;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #333333;
		font-size: 30rpx;
		font-weight: bold;
		background: url(../../static/index/dabaoed.png) center center no-repeat;
		background-size: 100% 130%;
	}
	/* 记录背景 */
	.record_bg {
		width: 100%;
		height: 260rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 102;
	}

	.record_bg image {
		width: 100%;
		height: 260rpx;
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
