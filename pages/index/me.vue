<template>
	<view class="">
		<!-- 头部 -->
		<headers></headers>
		<view class="content">
			<!-- 个人数据 -->
			<view class="me">
				<view class="information">
					<view class="avatar">
						<view class="pic">
							<image src="../../static/index/head.png" mode="widthFix"></image>
						</view>
						<view class="mailbox" @click="jump('/pages/prop/notice')">
							<!-- <image src="../../static/index/mailbox.png" mode="widthFix"></image> -->我的邮箱
						</view>
					</view>
					<view class="my">
						<view class="name">
							<view class="h1">
								{{me.nickname}}
							</view>
							<view class="h2">
								编码：{{me.account}}
							</view>
						</view>
						<view class="num">
							<view class="li" @click="jump('/pages/prop/elf_ball')">{{card_list[0].balance}}</view>
							<view class="li" @click="jump('/pages/prop/master_ball')">{{card_list[1].balance}}</view>
							<view class="li" @click="jump('/pages/prop/gold')">{{me.gold_coin}}</view>
							<view class="li" @click="jump('/pages/prop/full_income')">{{me.count_dynamic_revenue}}</view>
							<view class="li" @click="jump('/pages/prop/dynamic_income')">{{me.dynamic_revenue}}</view>
						</view>
					</view>
				</view>
				<view class="features">
					<view class="features_details">
						<view class="title">
							精灵宝可梦详情
						</view>
						<view class="features_box">
							<view class="box" @click="jump('/pages/prop/reservation')">
								<view class="img">
									<image src="../../static/index/history.png" mode="aspectFit"></image>
								</view>
								<text>预约记录</text>
							</view>
							<view class="box" @click="jump('/pages/prop/transaction')">
								<view class="img">
									<image src="../../static/index/transaction.png" mode="aspectFit"></image>
								</view>
								<text>交易中心</text>
							</view>
							<view class="box" id="box">
								<view class="img">
									
								</view>
								<text></text>
							</view>
							<!-- 边框 -->
							<view class="boder"></view>
						</view>
					</view>
					<view class="personal_details">
						<view class="title">
							培训师详情
						</view>
						<view class="features_box">
							<view class="box" @click="jump('/pages/prop/safety')">
								<view class="img">
									<image src="../../static/index/center.png" mode="aspectFit"></image>
								</view>
								<text>安全中心</text>
							</view>
							<view class="box" @click="jump('/pages/prop/store')">
								<view class="img">
									<image src="../../static/index/store.png" mode="aspectFit"></image>	
								</view>
								<text>宝可梦商店</text>
							</view>
							<view class="box" id="box" @click="jump('/pages/prop/card')">
								<view class="img">
									<image src="../../static/index/bank.png" mode="aspectFit"></image>
								</view>
								<text>银行信息</text>
							</view>
							<!-- 边框 -->
							<view class="boder"></view>
							
							<view class="box" @click="jump('/pages/prop/family')">
								<view class="img">
									<image src="../../static/index/family.png" mode="aspectFit"></image>
								</view>
								<text>我的家族</text>
							</view>
							<view class="box" @click="jump('/pages/prop/management')">
								<view class="img">
									<image src="../../static/index/switch.png" mode="aspectFit"></image>
								</view>
								<text>多开管理</text>
							</view>
							<view class="box" id="box" @click="jump('/pages/prop/mall')">
								<view class="img">
									<image src="../../static/index/shop.png" mode="aspectFit"></image>
								</view>
								<text>宝可梦商城</text>
							</view>
							<!-- 边框 -->
							<!-- <view class="boder"></view> -->
						</view>
					</view>
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
		components:{
			headers,
			tabbers
		},
		data(){
			return {
				token:uni.getStorageSync('token'),
				user:uni.getStorageSync('user'),
				card_list:[],
				me:''
			}
			
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
		},
		onShow() {
			// 用户信息
			service.auth(this, service.api.index.user+"?token="+this.token, {}, function(self, res) {
				if(res.code == 1){
					// var res = res.data;
					var user = res.data.member;
					uni.setStorageSync('user',user)
					self.me = res.data.member;
					// console.log(self.me)
					var card_list = [];
					for(let i=0;i<2;i++){
						self.card_list.push(user.card[i+1])
						console.log(self.card_list)
					}
					// console.log(self.card_list)
					
				}
			});
		}
	}
</script>

<style>
	.content{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 30rpx;
		overflow: auto;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
	}
	.me{
		width: 100%;
		box-sizing: border-box;
		padding: 20rpx;
		margin: 200rpx 0;
		background: #f2f2f2;
		border-radius: 20rpx;
	}
	.information{
		width: 100%;
		box-sizing: border-box;
		/* margin-top: 100rpx; */
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.features{
		width: 96%;
		/* height: 780rpx; */
		box-shadow: inset 0 0 10rpx #999999;
		box-sizing: border-box;
		margin: 0 2%;
		border-radius: 15rpx;
		background: #dbdcd9;
	}
	.avatar,.my{
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: space-between;
		flex-direction: column;
	}
	
	.avatar{
		/* text-align: right; */
		align-items: flex-end;
	}.my{
		text-align: left;
	}
	
	.pic{
		width: 100%;
		height: 290rpx;
		display: flex;
		justify-content: flex-end;
	}
	.pic image{
		width: 290rpx;
		height: 290rpx;
	}
	.mailbox{
		/* width: 100%; */
		width: 220rpx;
		height: 60rpx;
		text-align: right;
		box-sizing: border-box;
		color: #FFFFFF;
		font-size: 28rpx;
		font-weight: bold;
		line-height: 60rpx;
		/* padding-left: 85rpx; */
		padding-right: 20rpx;
		margin-right: 30rpx;
		background: url(../../static/index/mailbox.png) no-repeat right center;
		background-size: 220rpx 100%;
	}
	.name{
		width: 100%;
		box-sizing: border-box;
		padding: 0 20rpx;
		margin-bottom: 10rpx;
		text-align: left;
	}
	.h1{
		color: #000000;
		font-size: 28rpx;
		font-weight: bold;
	}
	.h2{
		color: #ff7c00;
		font-size: 24rpx;
		font-weight: bold;
	}
	.num{
		width: 100%;
		box-sizing: border-box;
		/* padding: 0 20rpx; */
		text-align: left;
	}
	.li{
		width: 100%;
		box-sizing: border-box;
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
		margin-bottom: 20rpx;
		padding: 5rpx 70rpx;
		border-radius: 10rpx;
		background-color: #bfc0bb;
	}
	/* 个人数据的多重定位 */
	.li:nth-of-type(1){
		background-origin: padding-box;
		background: url(../../static/index/pokes.png),url(../../static/index/enter.png); 
		background-repeat: no-repeat, no-repeat;
		background-size: 50rpx 50rpx, 30rpx 25rpx;
		background-position: 10rpx center, 95% center; 
		background-color: #bfc0bb;
	}.li:nth-of-type(2){
		background-origin: padding-box;
		background: url(../../static/index/masters.png),url(../../static/index/enter.png); 
		background-repeat: no-repeat, no-repeat;
		background-size: 50rpx 50rpx, 30rpx 25rpx;
		background-position: 10rpx center, 95% center; 
		background-color: #bfc0bb;
	}.li:nth-of-type(3){
		background-origin: padding-box;
		background: url(../../static/index/coin.png),url(../../static/index/enter.png); 
		background-repeat: no-repeat, no-repeat;
		background-size: 50rpx 50rpx, 30rpx 25rpx;
		background-position: 10rpx center, 95% center; 
		background-color: #bfc0bb;
	}.li:nth-of-type(4){
		background-origin: padding-box;
		background: url(../../static/index/balance.png),url(../../static/index/enter.png); 
		background-repeat: no-repeat, no-repeat;
		background-size: 50rpx 50rpx, 30rpx 25rpx;
		background-position: 10rpx center, 95% center; 
		background-color: #bfc0bb;
	}.li:nth-of-type(5){
		background-origin: padding-box;
		background: url(../../static/index/intro.png),url(../../static/index/enter.png); 
		background-repeat: no-repeat, no-repeat;
		background-size: 50rpx 50rpx, 30rpx 25rpx;
		background-position: 10rpx center, 95% center; 
		background-color: #bfc0bb;
	}
	/* end */
	.features_details{
		width: 100%;
	}
	.title{
		width: 100%;
		height: 120rpx;
		color: #FFFFFF;
		font-size: 32rpx;
		font-weight: bold;
		text-shadow: 0rpx 0rpx 10rpx #333333;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.features_box{
		width: 100%;
		border-top: 2rpx solid #bdbdbc;
		/* border-bottom: 2rpx solid #bdbdbc; */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	.box{
		width: 33%;
		height: 200rpx;
		box-sizing: border-box;
		padding: 20rpx 0;
		color: #000000;
		font-size: 26rpx;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		border-right: 2rpx solid #bdbdbc;
	}
	#box{
		border: 0;
	}
	.img{
		width: 100rpx;
		height: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.img image{
		width: 100rpx;
		height: 100rpx;
	}
	.boder{
		width: 100%;
		height: 2rpx;
		background: #bdbdbc;
	}
	
	/* 背景图 */
	.bg{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
	}
	.bg image{
		width: 100%;
		height: 100%;
	}
	
</style>
