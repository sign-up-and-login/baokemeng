<template>
	<view class="">
		<!-- 头部 -->
		<headers></headers>
		<!-- 内容 -->
		<view class="content">
			<view class="specific">
				<!-- 详细内容 -->
				<view class="details">
					<view class="scroll">
						<!-- 道具名 -->
						<view class="title">
							<view class="title_logo">
								<image src="../../static/index/transaction.png" mode="widthFix"></image>
							</view>
							<text>交易中心</text>
						</view>
						<!-- 切换按钮 -->
						<view class="tab">
							<view :class="[show == 0?'btn':'btn1']" @click="one()">
								买入
							</view>
							<view :class="[show == 0?'btn1':'btn']" @click="two()">
								卖出
							</view>
						</view>
						<!-- 交易数据 -->
						<view class="transaction_data" v-show="show == 0">
							<!-- one -->
							<view class="record">
								<view class="record_content">
									<view class="record_pic">
										<image src="../../static/index/pikaqiu.png" mode="widthFix"></image>
									</view>
									<view class="record_data">
										<view class="record_btn">
											申述
										</view>
										<view class="li_title">100 - 3000 美金</view>
										<view class="li">数额：$254.28 (¥1,779.96)</view>
										<view class="li">买价：00/00/00 00:00:00</view>
										<view class="li">卖价：220.39 美金</view>
										<view class="li">收益：176.31 美金</view>
										<!-- 间距 -->
										<view class="li"></view>
										<view class="li_btn">
											<view class="details_btn" @click="jump('/pages/details/details')">
												详情
											</view>
											<view class="complete_show">
												完成交易
											</view>
										</view>
										
										
									</view>
								</view>
								<!-- 记录背景 -->
								<view class="record_bg">
									<image src="../../static/index/transaction-column.png" mode="scaleToFill"></image>
								</view>
							</view>
							<!-- two -->
							<view class="record">
								<view class="record_content">
									<view class="record_pic">
										<image src="../../static/index/pikaqiu.png" mode="widthFix"></image>
									</view>
									<view class="record_data">
										<view class="record_btn">
											申述
										</view>
										<view class="li_title">100 - 3000 美金</view>
										<view class="li">数额：$254.28 (¥1,779.96)</view>
										<view class="li">买价：00/00/00 00:00:00</view>
										<view class="li">卖价：220.39 美金</view>
										<view class="li">收益：176.31 美金</view>
										<!-- 间距 -->
										<view class="li"></view>
										<view class="li_btn">
											<view class="details_btn">
												详情
											</view>
											<view class="complete_show">
												完成交易
											</view>
										</view>
										
										
									</view>
								</view>
								<!-- 记录背景 -->
								<view class="record_bg">
									<image src="../../static/index/transaction-column.png" mode="scaleToFill"></image>
								</view>
							</view>
							<!-- three -->
							<view class="record">
								<view class="record_content">
									<view class="record_pic">
										<image src="../../static/index/pikaqiu.png" mode="widthFix"></image>
									</view>
									<view class="record_data">
										<view class="record_btn">
											申述
										</view>
										<view class="li_title">100 - 3000 美金</view>
										<view class="li">数额：$254.28 (¥1,779.96)</view>
										<view class="li">买价：00/00/00 00:00:00</view>
										<view class="li">卖价：220.39 美金</view>
										<view class="li">收益：176.31 美金</view>
										<!-- 间距 -->
										<view class="li"></view>
										<view class="li_btn">
											<view class="details_btn">
												详情
											</view>
											<view class="complete_show">
												完成交易
											</view>
										</view>
										
										
									</view>
								</view>
								<!-- 记录背景 -->
								<view class="record_bg">
									<image src="../../static/index/transaction-column.png" mode="scaleToFill"></image>
								</view>
							</view>
							
						</view>
						<!-- 卖出 -->
						<!-- 交易数据 -->
						<view class="transaction_data" v-show="show == 1">
							<!-- one -->
							<view class="record">
								<view class="record_content">
									<view class="record_pic">
										<image src="../../static/index/pikaqiu.png" mode="widthFix"></image>
									</view>
									<view class="record_data">
										<view class="record_btn">
											申述
										</view>
										<view class="li_title">100 - 3000 美金</view>
										<view class="li">数额：$254.28 (¥1,779.96)</view>
										<view class="li">买价：00/00/00 00:00:00</view>
										<view class="li">卖价：220.39 美金</view>
										<view class="li">收益：176.31 美金</view>
										<!-- 间距 -->
										<view class="li"></view>
										<view class="li_btn">
											<view class="details_btn">
												详情
											</view>
											<view class="complete_show">
												完成交易
											</view>
										</view>
										
										
									</view>
								</view>
								<!-- 记录背景 -->
								<view class="record_bg">
									<image src="../../static/index/transaction-column.png" mode="scaleToFill"></image>
								</view>
							</view>
							<!-- two -->
							<view class="record">
								<view class="record_content">
									<view class="record_pic">
										<image src="../../static/index/pikaqiu.png" mode="widthFix"></image>
									</view>
									<view class="record_data">
										<view class="record_btn">
											申述
										</view>
										<view class="li_title">100 - 3000 美金</view>
										<view class="li">数额：$254.28 (¥1,779.96)</view>
										<view class="li">买价：00/00/00 00:00:00</view>
										<view class="li">卖价：220.39 美金</view>
										<view class="li">收益：176.31 美金</view>
										<!-- 间距 -->
										<view class="li"></view>
										<view class="li_btn">
											<view class="details_btn">
												详情
											</view>
											<view class="complete_show">
												完成交易
											</view>
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
				show:0,
			}

		},
		methods: {
			jump(url) {
				uni.navigateTo({
					url: url
				})
			},
			one(){
				this.show = 0;
			},
			two(){
				this.show = 1;
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

	.scroll {
		width: 100%;
		/* height: 1110rpx; */
		/* overflow: auto; */
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
	/* 按钮 切换 */
	
	.tab{
		width: 100%;
		height: 150rpx;
		box-sizing: border-box;
		padding: 0 50rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.btn{
		width: 140rpx;
		height: 40rpx;
		font-size: 24rpx;
		font-weight: bold;
		color: #1d8994;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(../../static/index/group.png) center center no-repeat;
		background-size: 140rpx 100%;
	}
	.btn1{
		width: 140rpx;
		height: 40rpx;
		font-size: 24rpx;
		font-weight: bold;
		color: #666666;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(../../static/index/group1.png) center center no-repeat;
		background-size: 140rpx 100%;
	}
	/* 交易数据 */
	.transaction_data{
		width: 100%;
		height: 820rpx;
		box-sizing: border-box;
		padding-top: 50rpx;
		overflow: auto;
	}
	
	.record{
		width: 100%;
		height: 320rpx;
		box-sizing: border-box;
		margin-bottom: 70rpx;
		position: relative;
	}
	.record_content{
		width: 100%;
		height: 320rpx;
		box-sizing: border-box;
		padding: 0 50rpx;
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
		left: 40rpx;
	}
	.record_pic image{
		width: 260rpx;
		height: 244rpx;
	}
	
	.record_data{
		width: 350rpx;
		height: 100%;
		padding-right: 0rpx;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.record_btn{
		height: 80rpx;
		line-height: 70rpx;
		box-sizing: border-box;
		padding: 0 40rpx;
		color: #EEEEEE;
		font-size: 32rpx;
		font-weight: bold;
		background: url(../../static/index/dark-button.png) center center no-repeat;
		background-size: 100% 100%;
		position: absolute;
		right: 0;
		top: -40rpx;
	}
	.li_title{
		width: 320rpx;
		height: 45rpx;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		color: #e48044;
		font-size: 32rpx;
		font-weight: bold;
		box-sizing: border-box;
	}
	.li{
		width: 350rpx;
		height: 35rpx;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
		box-sizing: border-box;
		padding-left: 30rpx;
	}
	.li_btn{
		width: 100%;
		height: 80rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	.details_btn,.complete_show{
		height: 80rpx;
		line-height: 70rpx;
		box-sizing: border-box;
		padding: 0 30rpx;
		color: #EEEEEE;
		font-size: 32rpx;
		font-weight: bold;
		background: url(../../static/index/light.png) center center no-repeat;
		background-size: 100% 100%;
	}
	.complete_show{
		background: url(../../static/index/dark-button.png) center center no-repeat;
		background-size: 100% 100%;
	}
	
	/* 记录背景 */
	.record_bg{
		width: 100%;
		height: 320rpx;
		box-sizing: border-box;
		padding: 0 50rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 102;
	}
	.record_bg image{
		width: 100%;
		height: 320rpx;
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
