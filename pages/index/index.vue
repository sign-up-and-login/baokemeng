<template>
	<view class="">
		<view class="content">
			<headers></headers>
			<!-- 个人数据 -->
			<view class="per_data">
				<view class="currency">
					<view class="left">
						<image src="../../static/index/number.png" mode="widthFix"></image>
						<view class="num">
							{{me.invitation_code}}
						</view>
					</view>
					<view class="right" @click="jump('/pages/prop/gold')">
						<image src="../../static/index/gold.png" mode="widthFix"></image>
						<view class="num">
							{{me.gold_coin}}
						</view>
					</view>
				</view>
				<view class="prop">
					<view class="left" @click="jump('/pages/prop/elf_ball')">
						<image src="../../static/index/poke.png" mode="widthFix"></image>
						<view class="num">
							{{card_list[0].balance}}
						</view>
					</view>
					<view class="right" @click="jump('/pages/prop/master_ball')">
						<image src="../../static/index/master.png" mode="widthFix"></image>
						<view class="num">
							{{card_list[1].balance}}
						</view>
					</view>
				</view>
				<!-- logo -->
				<view class="logo">
					<image src="../../static/index/logo.png" mode="widthFix"></image>
					<view class="logo_text">
						{{me.nickname}}
					</view>
				</view>
			</view>
			<!-- 公告 -->
			<view class="notice">
				<view class="notice_bg">
					<image src="../../static/index/notice.png" mode="widthFix"></image>
				</view>
				<!--<view class="uni-swiper-msg">
					 <swiper :vertical="vertical" :autoplay="autoplay" :circular="circular" interval="2000" previous-margin="10rpx" duration="5000" easing-function="linear">
						<swiper-item v-for="(item, index) in msg" :key="index">
							<text>{{item.detail}}</text>
						</swiper-item>
					</swiper> 
				</view>-->
				<view class="notice_title">
					<view class="notice_list">
						<view class="notice_text" v-for="(item, index) in msg" :key="index">
							{{item.detail}}
						</view>
					</view>
				</view>
				
			</view>
			<!-- 品种 -->
			<view class="variety">
					<view class="variety_second" v-for="(li, index) in list" :key="li.id">
						<view class="variety_img">
							<!-- ../../static/index/yellow.png -->
							<image :src="li.ii" mode="widthFix"></image>
						</view>
						<view class="amount">
							<image src="../../static/index/top.png" mode="widthFix"></image>
							<view class="amount_text">
								<!-- 100-300美金 -->
								{{li.product_price_min}}~{{li.product_price_max}}
							</view>
						</view>
						<view class="pet">
							<image :src="li.product_thumb" mode="widthFix"></image>
						</view>
						<view class="list">
							<view class="li">时间：{{li.product_time}}</view>
							<view class="li">天数：{{li.cycle_section}}天</view>
							<view class="li">收益：{{li.profit_section}}%</view>
							<view class="li">金币：{{li.product_obtain_price}}</view>
						</view>
						<block v-if="li.is_appointment == 1">
							<view class="btn">
								<image src="../../static/index/order.png" mode="widthFix"></image>
								<view class="btn_text" @click="reserve(li.id)">
									预约！
								</view>
							</view>
						</block>
						<block v-if="li.is_appointment == 0">
							<view class="btn">
								<image src="../../static/index/breed.png" mode="widthFix"></image>
								<view class="btn_text1">
									已预约
								</view>
							</view>
						</block>
						
					</view>
				
				
				<!-- blue -->
				<!-- <view class="variety_second">
					<view class="variety_img">
						<image src="../../static/index/blue.png" mode="widthFix"></image>
					</view>
					<view class="amount">
						<image src="../../static/index/top.png" mode="widthFix"></image>
						<view class="amount_text">
							100-300美金
						</view>
					</view>
					<view class="pet">
						<image src="../../static/index/Psyduck.gif" mode="widthFix"></image>
					</view>
					<view class="list" id="two">
						<view class="li">时间：14:00 - 16:00</view>
						<view class="li">天数：1 - 7天</view>
						<view class="li">收益：3 - 42%</view>
						<view class="li">金币：1</view>
					</view>
					<view class="btn">
						<image src="../../static/index/order.png" mode="widthFix"></image>
						<view class="btn_text">
							预约！
						</view>
					</view>
				</view> -->
				
				<!-- 底部按钮 -->
				<tabbers></tabbers>
			</view>
		</view>
		<!-- 预约页面 -->
		<view class="reserve" v-show="select">
			 <!--  -->
			<view class="res_box">
				<view class="invite_btn">
					选择精灵球
				</view>
				<image src="../../static/index/reserve.png" mode="widthFix"></image>
				<view class="prop_ball">
					<block v-for="(cli,index) in reserves" :key="index">
						<view class="ball">
							<view class="ball_btn">
								{{cli.card_type.name}}
							</view>
							<view class="ball_img">
								<image :src="cli.card_type.thumb" mode="widthFix"></image>
							</view>
							<view class="ball_num">
								<view class="text1">
									需要：{{cli.payment_num}}
								</view>
								<view class="text2">
									余额：{{cli.balance}}
								</view>
							</view>
							<view class="select_ball" @click="closesion(cid,cli.card_type.id)">
								选择
							</view>
						</view>
					</block>
					
					<!-- <view class="ball">
						<view class="ball_btn">
							大师球
						</view>
						<view class="ball_img">
							<image src="../../static/index/masters.png" mode="widthFix"></image>
						</view>
						<view class="ball_num">
							<view class="text1">
								需要：12
							</view>
							<view class="text2">
								余额：22222
							</view>
						</view>
						<view class="select_ball" @click="closes()">
							选择
						</view>
					</view> -->
				</view>
			</view>
			<view class="close" @click="closes()">
				 
				<image src="../../static/index/close.png" mode="widthFix"></image>
			</view>
		</view>
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
				img_pic:[
					{ii:'../../static/index/yellow.png'},
					{ii:'../../static/index/blue.png'}
				],
				/*公告*/
				vertical:false,
				autoplay:true,
				circular:true,
				msg : [
					{detail:'欢迎来到精灵宝可梦，一起踏上财务自由的旅程吧！'},
					{detail:'欢迎来到精灵宝可梦，一起踏上财务自由的旅程吧！'}
				],
				// 弹框
				qb:false,
				select:false,
				token:uni.getStorageSync('token'),
				// 产品信息
				list:[],
				me:'',
				card_list:[],
				reserves:[],
				cid:''
				
			}
			
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
			invite(){
				this.qb = true;
			},
			reserve(id){
				service.auth(this, service.api.index.appointmentCate+"?cate_id="+id, {}, function(self, res) {
					if(res.code == 1){
						// var res = res.data;
						self.cid = res.data.cate_id
						self.reserves = res.data.list;
						console.log(self.reserves)
						
					}
				});
				this.select = true;
			},
			closesion(cid,id){
				// this.qb = false;
				service.auth(this, service.api.index.appointment+"?cate_id="+cid+"&appointment_payment_type="+id, {
					// appointment_payment_type:id
				}, function(self, res) {
					if(res.code == 1){
						// var res = res.data;
						// self.reserves = res.data.list;
						// console.log(self.reserves)
						
					}
				});
			},
			closes(){
				this.select = false;
			},
			obtain(){
				self = this;
				// 产品信息
				uni.request({
					url:service.api.index.index,
					data:{
						'token':self.token
					},
					success(res) {
						var res = res.data;
						self.list = res.data.data;
						for(let i=0;i<self.list.length;i++){
							self.list[i].product_price_max = parseInt(self.list[i].product_price_max);
							self.list[i].product_price_min = parseInt(self.list[i].product_price_min);
							self.list[i] = {...self.list[i],...self.img_pic[i]}
						}
						// console.log(self.list)
					}
				});
				
			}
		},
		onShow() {
			this.obtain();
			// 用户信息
			service.auth(this, service.api.index.user+"?token="+this.token, {}, function(self, res) {
				if(res.code == 1){
					// var res = res.data;
					var user = res.data.member;
					uni.setStorageSync('user',user)
					self.me = res.data.member;
					console.log(self.me)
					for(let i=0;i<2;i++){
						var card_list = [];
						card_list[i] = res.data.member.card[i+1];
						self.card_list[i] = card_list[i]
					}
					console.log(self.card_list)
					
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
		padding-bottom: 50rpx;
		overflow: auto;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
	}
	.per_data{
		width: 100%;
		height: 280rpx;
		margin-top: 200rpx;
		box-sizing: border-box;
		padding: 0 30rpx;
		position: relative;
	}
	.currency,.prop{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.prop{
		margin-top: 30rpx;
	}
	.logo{
		width: 280rpx;
		height: 272rpx;
		position: absolute;
		left: calc(50% - 140rpx);
		/* bottom: -40rpx; */
		top: -40rpx;
	}
	.logo image{
		width: 280rpx;
		height: 272rpx;
	}
	.logo_text{
		width: 272rpx;
		text-align: center;
		color: #FFFFFF;
		font-size: 30rpx;
		font-weight: bold;
		position: absolute;
		bottom: 8rpx;
		text-align: center;
	}
	.left,.right{
		width: 50%;
		height: 84rpx;
		position: relative;
	}
	.right{
		text-align: right;
	}
	.left image,.right image{
		width: 350rpx;
		height: 84rpx;
	}
	.num{
		width: 100%;
		height: 84rpx;
		box-sizing: border-box;
		color: #FFFFFF;
		font-size: 28rpx;
		font-weight: bold;
		line-height: 70rpx;
		position: absolute;
		top: 0;
		left: 0;
	}
	.left .num{
		padding-left: 90rpx;
		text-align: left;
	}
	.right .num{
		padding-right: 90rpx;
		text-align: right;
	}
	.notice{
		width: 100%;
		height: 100rpx;
		box-sizing: border-box;
		/* padding: 0 20rpx; */
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.notice_bg{
		width: 100%;
		height: 100rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 102;
	}
	.notice_bg image{
		width: 100%;
		height: 100rpx;
	}
	.uni-swiper-msg{
		width: 80%;
		height: 70%;
		overflow: hidden;
		/* box-sizing: border-box;
		padding: 0 60rpx; */
		position: absolute;
		top: 0;
		left: 10%;
		z-index: 105;
		color: #FFFFFF;
		font-size: 26rpx;
		font-weight: bold;
	}
	.notice_title{
		width: 80%;
		height: 70rpx;
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 10%;
		z-index: 105;
		color: #FFFFFF;
		font-size: 26rpx;
		font-weight: bold;
	}
	.notice_list{
		width: 360%;
		height: 70rpx;
		line-height: 70rpx;
		font-size: 26rpx;
		display: flex;
		flex-direction: row;
	}
	.notice_text{
		width: 100%;
		height: 70rpx;
		line-height: 70rpx;
		/* color: #000000; */
		animation: xx 20s linear infinite;
	}
	@keyframes xx{
		0%{transform: translateX(80%);}
		100%{transform: translateX(-160%);}
	}
/* 	swiper{
		width: 120%;
		height: 100%;
	} */
	.variety{
		width: 100%;
		box-sizing: border-box;
		margin-top: 30rpx;
	}
	.variety_first{
		width: 100%;
		height: 300rpx;
		position: relative;
	}
	.variety_second{
		width: 100%;
		height: 300rpx;
		margin-bottom: 100rpx;
		position: relative;
	}
	.variety_img{
		width: 100%;
		height: 300rpx;
		box-sizing: border-box;
		padding: 0 30rpx;
	}
	.variety_img image{
		width: 100%;
		height: 300rpx;
	}
	.amount{
		width: 290rpx;
		height: 70rpx;
		position: absolute;
		right: 60rpx;
		top: -16rpx;
		z-index: 100;
	}
	.amount image{
		width: 290rpx;
		height: 70rpx;
	}
	.pet{
		width: 404rpx;
		height: 400rpx;
		display: flex;
		align-items: flex-end;
		position: absolute;
		left: 0;
		/* top: 0; */
		bottom: 0;
		z-index: 103;
	}
	.pet image{
		width: 350rpx;
		height: 350rpx;
	}
	.list{
		width: 320rpx;
		position: absolute;
		right: 90rpx;
		top: 55rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.li{
		width: 300rpx;
		height: 40rpx;
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
	}
	.variety_second:nth-of-type(1) .li{
		background-color: #fae170;
	}
	.variety_second:nth-of-type(2) .li{
		background-color: #72e6fa;
	}
	.li:nth-of-type(2){
		margin-right: 30rpx;
	}.li:nth-of-type(3){
		margin-right: 60rpx;
	}.li:nth-of-type(4){
		margin-right: 90rpx;
	}
	
	.btn{
		width: 240rpx;
		height: 100rpx;
		position: absolute;
		right: 80rpx;
		bottom: -40rpx;
		z-index: 100;
	}
	.btn image{
		width: 240rpx;
		height: 100rpx;
	}
	.btn_text{
		width: 240rpx;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
		color: #FFFFFF;
		font-size: 30rpx;
		font-weight: bold;
		position: absolute;
		top: 0;
		left: 0;
	}
	.btn_text1{
		width: 240rpx;
		height: 100rpx;
		text-align: center;
		line-height: 80rpx;
		color: #FFFFFF;
		font-size: 30rpx;
		font-weight: bold;
		position: absolute;
		top: 0;
		left: 0;
	}
	.amount_text{
		width: 290rpx;
		height: 70rpx;
		text-align: center;
		line-height: 65rpx;
		color: #FFFFFF;
		font-size: 30rpx;
		font-weight: bold;
		position: absolute;
		top: 0;
		left: 0;
	}
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
	/*  */
	.reserve{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		background: rgba(0,0,0,.5);
	}
	.res_box{
		width: 100%;
		margin-top: 200rpx;
		box-sizing: border-box;
		padding: 0 10rpx;
		position: relative;
	}
	.res_box image{
		width: 100%;
		height: 540rpx;
	}
	.invite_btn{
		width: 100%;
		height: 72rpx;
		line-height: 72rpx;
		color: #FFFFFF;
		font-size: 32rpx;
		font-weight: bold;
		text-align: center;
		position: absolute;
		top: -30rpx;
		left: 0;
		z-index: 1000;
		background: url(../../static/index/invite_btn.png) center center no-repeat;
		background-size: 400rpx 100%
	}
	.prop_ball{
		width: 100%;
		box-sizing: border-box;
		padding: 0 40rpx;
		position: absolute;
		top: 85rpx;
		left: 0;
		display: flex;
		justify-content: space-between;
		/* space-around */
		align-items: center;
	}
	.ball{
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.ball_btn{
		width: 100%;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		color: #FFFFFF;
		font-size: 30rpx;
		font-weight: bold;
		background: url(../../static/index/invite_btn.png) center center no-repeat;
		background-size: 200rpx 100%;
	}
	.ball_img{
		width: 180rpx;
		height: 180rpx;
	}
	.ball_img image{
		width: 180rpx;
		height: 180rpx;
	}
	.ball_num{
		width: 300rpx;
		box-sizing: border-box;
		padding: 0 10rpx;
	}
	.text1,.text2{
		width: 100%;
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
		text-align: left;
		box-sizing: border-box;
		padding: 5rpx 40rpx;
		margin-bottom: 8rpx;
		border-radius: 10rpx;
		background-color: #fbcb43;
	}
	.select_ball{
		width: 100%;
		height: 60rpx;
		line-height: 60rpx;
		margin-top: 10rpx;
		color: #FFFFFF;
		font-size: 30rpx;
		font-weight: bold;
		text-align: center;
		background: url(../../static/index/choose-button.png) center center no-repeat;
		background-size: 200rpx 100%;
	}
	.close{
		width: 100%;
		text-align: center;
	}
	.close image{
		width: 90rpx;
		height: 90rpx;
	}
</style>
