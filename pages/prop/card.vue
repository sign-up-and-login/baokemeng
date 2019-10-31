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
							<image src="../../static/index/bank.png" mode="widthFix"></image>
						</view>
						<text>银行信息</text>
					</view>
					<!--  -->
					<view class="scroll">
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
				</view>
				<!-- 添加按钮 -->
				<view class="increase">
					<view class="increase_btn" @click="jump('/pages/details/increase')">
						添加
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
	import service from '../../service.js';
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
			banks(){
				service.auth(this, service.api.prop.myPaymentMethod+"?token="+this.token, {}, function(self, res) {
					if(res.code == 1){
						console.log(res)
						
					}
				});
			}
		},
		onShow() {
			this.banks();
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

	/*  */
	.scroll {
		width: 100%;
		height: 940rpx;
		margin-top: 50rpx;
		box-sizing: border-box;
		overflow: auto;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		position: relative;
		
	}
	
	.bank_list{
		width: 100%;
		/* margin-top: 30rpx; */
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
	/* 添加按钮 */
	.increase{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		bottom: 100rpx;
		left: 0;
		z-index: 105;
	}
	.increase_btn{
		width: 280rpx;
		height: 80rpx;
		color: #c0463a;
		font-size: 26rpx;
		font-weight: bold;
		text-align: center;
		line-height: 70rpx;
		background: url(../../static/index/orange-button.png) center center no-repeat;
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
