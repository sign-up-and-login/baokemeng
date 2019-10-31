<template>
	<view class="">
		<!-- 头部 -->
		<headers></headers>
		<!-- 内容 -->
		<view class="content">
			<view class="specific">
				<!-- 返回键 -->
				<view class="back" @click="jump('/pages/prop/transaction')">
					<image src="../../static/index/back.png" mode="widthFix"></image>
				</view>
				<!-- 详细内容 -->
				<view class="details">
					<!-- 道具名 -->
					<view class="title">
						<view class="title_logo">
							<image src="../../static/index/transaction.png" mode="widthFix"></image>
						</view>
						<text>精灵宝可梦收益</text>
					</view>
					<!--  -->
					<view class="scroll">
						<!-- 订单号 -->
						<view class="data_content">
							<view class="number">
								订单号：1571897566 - 111405
							</view>
						</view>
						<view class="block">
							<!-- 分块标题 -->
							<view class="block_title">
								<view class="block_btn">
									精灵宝可梦详情
								</view>
							</view>
							<!-- 分块内容 -->
							<view class="block_list">
								<view class="block_li">
									<view>精灵价值</view>
									<text>：100.00 ~ 300.00 美金</text>
								</view>
								<view class="block_li">
									<view>等级</view>
									<text>：稀有皮卡丘</text>
								</view>
								<view class="block_li">
									<view>天数</view>
									<text>：40</text>
								</view>
								<view class="block_li">
									<view>收入</view>
									<text>：20%</text>
								</view>
								<view class="block_li">
									<view>数额</view>
									<text>：$254.28 (¥1,779.96)</text>
								</view>
							</view>
						</view>
						<!--  -->
						<view class="block">
							<!-- 分块标题 -->
							<view class="block_title">
								<view class="block_btn">
									交易状态详情
								</view>
							</view>
							<!-- 分块内容 -->
							<view class="block_tab">
								<view class="tab_li">
									<text>转账条据</text>
									<view class="tab_btn">
										已上传
									</view>
								</view>
								<view class="tab_li">
									<text>收益状态</text>
									<view class="tab_btn1">
										未收益
									</view>
								</view>
								<view class="tab_li">
									<text>申述状态</text>
									<view class="tab_btn1">
										无申诉
									</view>
								</view>
							</view>
						</view>
						<!--  -->
						<view class="block">
							<!-- 分块标题 -->
							<view class="block_title">
								<view class="block_btn">
									买家详情
								</view>
							</view>
							<!-- 分块内容 -->
							<view class="block_list">
								<view class="block_li">
									<view>付款日期</view>
									<text>：2019-10-24 21:55:08</text>
								</view>
								<view class="block_li">
									<view>买家</view>
									<text>：song</text>
								</view>
								<view class="block_li">
									<view>手机号</view>
									<text>：8615217848912</text>
								</view>
							</view>
						</view>
						<!--  -->
						<view class="block">
							<!-- 分块标题 -->
							<view class="block_title">
								<view class="block_btn">
									卖家详情
								</view>
							</view>
							<!-- 分块内容 -->
							<view class="block_list">
								<view class="block_li">
									<view>转让日期</view>
									<text>：2019-10-24 21:55:08</text>
								</view>
								<view class="block_li">
									<view>卖家</view>
									<text>：song</text>
								</view>
								<view class="block_li">
									<view>手机号</view>
									<text>：8615217848912</text>
								</view>
							</view>
							<!-- 银行卡 -->
							<view class="bank_list">
								<view class="bank_li">
									<view class="bank_pic">
										<image src="../../static/index/card.png" mode="widthFix"></image>
									</view>
									<view class="pay_data">
										<view class="pay_li">
											<view>银行卡</view>
											<text>：深圳农村商业银行</text>
										</view>
										<view class="pay_li">
											<view>持卡人</view>
											<text>：YONGKAAMING</text>
										</view>
										<view class="pay_li">
											<view>账户</view>
											<text>：6230351851043923</text>
										</view>
										<view class="pay_li">
											<view>支行</view>
											<text>：深圳西乡支行</text>
										</view>
									</view>
								</view>
								<view class="bank_li">
									<view class="bank_pic">
										<image src="../../static/index/card.png" mode="widthFix"></image>
									</view>
									<view class="pay_data">
										<view class="pay_li">
											<view>银行卡</view>
											<text>：深圳农村商业银行</text>
										</view>
										<view class="pay_li">
											<view>持卡人</view>
											<text>：YONGKAAMING</text>
										</view>
										<view class="pay_li">
											<view>账户</view>
											<text>：6230351851043923</text>
										</view>
										<view class="pay_li">
											<view>支行</view>
											<text>：深圳西乡支行</text>
										</view>
									</view>
								</view>
							</view>
						</view>
						<!--  -->
						<view class="block">
							<!-- 分块标题 -->
							<view class="block_title">
								<view class="block_btn">
									转账条据
								</view>
							</view>
							<!-- 分块内容 -->
							<view class="article">
								<image src="../../static/index/xxxxxx.jpeg" mode="widthFix"></image>
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
			back(){
				uni.navigateBack({
					delta:1
				})
			}
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
		z-index: 101;
	}
	.back image{
		width: 100rpx;
		height: 100rpx;
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

	.title text{
		text-align: left;
		color: #000000;
		font-size: 32rpx;
		font-weight: bold;
		text-shadow: 0 0 10rpx #FFFFFF;
	}

	/*  */
	.scroll {
		width: 100%;
		height: 940rpx;
		margin-top: 50rpx;
		box-sizing: border-box;
		padding-bottom: 50rpx;
		overflow: auto;
	}
	.data_content {
		width: 100%;
		box-sizing: border-box;
		padding: 0 50rpx;
	}
	.number {
		width: 100%;
		height: 50rpx;
		border-radius: 10rpx;
		text-align: center;
		line-height: 50rpx;
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
		background-color: #bfbfbf;
	}
	.block{
		width: 100%;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.block_title{
		width: 100%;
		height: 60rpx;
		margin: 40rpx 0;
		display: flex;
		justify-content: center;
		background: url(../../static/index/line1.png) center center no-repeat;
		background-size: 100% 2rpx;
	}
	.block_btn{
		width: 270rpx;
		height: 100%;
		color: #FFFFFF;
		font-size: 30rpx;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
		background: url(../../static/index/detail-title.png) center center no-repeat;
		background-size: 100% 100%;
	}
	/*  */
	.block_list{
		width: 100%;
		box-sizing: border-box;
		padding: 0 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.block_li{
		width: 100%;
		height: 40rpx;
		margin: 5rpx 0;
		border-radius: 40rpx;
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #bfbfbf;
	}
	.block_li view{
		width: 45%;
		text-align: left;
		box-sizing: border-box;
		padding-left: 10rpx;
	}
	.block_li text{
		width: 55%;
		text-align: left;
		box-sizing: border-box;
		padding-right: 10rpx;
	}
	/*  */
	.block_tab{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.tab_li{
		width: 33%;
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.tab_btn{
		width: 100%;
		height: 60rpx;
		margin-top: 10rpx;
		color: #FFFFFF;
		font-size: 28rpx;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
		background: url(../../static/index/tab_btn.png) center center no-repeat;
		background-size: 100% 100%;
	}
	.tab_btn1{
		width: 100%;
		height: 60rpx;
		margin-top: 10rpx;
		color: #FFFFFF;
		font-size: 28rpx;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
		background: url(../../static/index/tab_btn1.png) center center no-repeat;
		background-size: 100% 100%;
	}
	.bank_list{
		width: 100%;
		margin-top: 30rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.bank_li{
		width: 100%;
		height: 120rpx;
		box-sizing: border-box;
		margin: 10rpx 0;
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}
	.bank_pic,.bank_pic image{
		width: 120rpx;
		height: 120rpx;
	}
	.pay_data{
		width: calc(100% - 150rpx);
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.pay_li{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.pay_li view{
		width: 76rpx;
		text-align: left;
	}
	.pay_li text{
		text-align: left;
	}
	.article{
		width: 100%;
		height: 310rpx;
		box-sizing: border-box;
		padding: 0 50rpx;
	}
	.article image{
		width: 100%;
		height: 310rpx;
		border: 2rpx solid #000000;
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
