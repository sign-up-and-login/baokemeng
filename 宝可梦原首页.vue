<template>
	<view class="">
		<view class="content">
			<view class="top">
				<view class="code">
					<image src="../../static/index/code.png" mode="scaleToFill"></image>
					<view class="text_img" @click="invite()">
						<image src="../../static/index/qb.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="logout">
					<image src="../../static/index/logout.png" mode="scaleToFill"></image>
					<view class="text_img" @click="jump('/pages/login/login')">
						<!--  @click="sign_out()" -->
						登出
					</view>
				</view>
			</view>
			<!-- 个人数据 -->
			<view class="per_data">
				<view class="currency">
					<view class="left">
						<image src="../../static/index/number.png" mode="widthFix"></image>
						<view class="num">
							200000
						</view>
					</view>
					<view class="right">
						<image src="../../static/index/gold.png" mode="widthFix"></image>
						<view class="num">
							200000
						</view>
					</view>
				</view>
				<view class="prop">
					<view class="left">
						<image src="../../static/index/poke.png" mode="widthFix"></image>
						<view class="num">
							1000
						</view>
					</view>
					<view class="right">
						<image src="../../static/index/master.png" mode="widthFix"></image>
						<view class="num">
							10000
						</view>
					</view>
				</view>
				<!-- logo -->
				<view class="logo">
					<image src="../../static/index/logo.png" mode="widthFix"></image>
					<view class="logo_text">
						0000000
					</view>
				</view>
			</view>
			<!-- 公告 -->
			<view class="notice">
				<view class="notice_bg">
					<image src="../../static/index/notice.png" mode="widthFix"></image>
				</view>
				<view class="uni-swiper-msg">
					<swiper :vertical="vertical" :autoplay="autoplay" :circular="circular" interval="0" previous-margin="10rpx" duration="3000">
						<swiper-item v-for="(item, index) in msg" :key="index">
							<text>{{item.detail}}</text>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<!-- 品种 -->
			<view class="variety">
				<view class="variety_first">
					<view class="variety_img">
						<image src="../../static/index/yellow.png" mode="widthFix"></image>
					</view>
					<view class="amount">
						<image src="../../static/index/top.png" mode="widthFix"></image>
						<view class="amount_text">
							100-300美金
						</view>
					</view>
					<view class="pet">
						<image src="../../static/index/Pikachu.gif" mode="widthFix"></image>
					</view>
					<view class="list" id="one">
						<view class="li">时间：14:00 - 16:00</view>
						<view class="li">天数：1 - 7天</view>
						<view class="li">收益：3 - 42%</view>
						<view class="li">金币：1</view>
					</view>
					<view class="btn">
						<image src="../../static/index/order.png" mode="widthFix"></image>
						<view class="btn_text" @click="reserve()">
							预约！
						</view>
					</view>
				</view>
				
				<!-- blue -->
				<view class="variety_second">
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
				</view>
				
				<!-- 底部按钮 -->
				<view class="tabber">
					<view class="tabber_left">
						训练馆
					</view>
					<view class="tabber_center" @click="jump('/pages/index/index')">
						<image src="../../static/index/pokemon.png" mode="widthFix"></image>
					</view>
					<view class="tabber_right" @click="jump('/pages/index/me')">
						我的
					</view>
				</view>
			</view>
		</view>
		<!-- 邀请二维码 -->
		<view class="qb" v-show="qb">+
			 <!-- v-show="qb" -->
			<view class="qrcode">
				<view class="invite_btn">
					邀请二维码
				</view>
				<image src="../../static/index/qrcode.png" mode="widthFix"></image>
				<view class="pic_text">
					<view class="qb_img">
						<image src="../../static/index/qrcode.jpg" mode="widthFix"></image>
					</view>
				</view>
				<view class="in_code">
					邀请码：123456
				</view>
			</view>
			<view class="close" @click="close()">
				<image src="../../static/index/close.png" mode="widthFix"></image>
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
					<view class="elf_ball">
						<view class="ball_btn">
							精灵球
						</view>
						<view class="ball_img">
							<image src="../../static/index/pokes.png" mode="widthFix"></image>
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
					</view>
					<view class="master_ball">
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
					</view>
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
	export default { 
		data(){
			return {
				/*公告*/
				vertical:false,
				autoplay:true,
				circular:true,
				msg : [
					{detail:'欢迎来到精灵宝可梦，一起踏上财务自由的旅程吧！'},
					{detail:'欢迎来到精灵宝可梦，一起踏上财务自由的旅程吧！'},
					{detail:''}
				],
				// 弹框
				qb:false,
				select:false
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
			reserve(){
				this.select = true;
			},
			close(){
				this.qb = false;
			},
			closes(){
				this.select = false;
			}
		}
	}
</script>

<style>
	.content{
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
	.top{
		width: 100%;
		height: 84rpx;
		margin-top: 100rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.code,.logout{
		width: 84rpx;
		height: 84rpx;
		position: relative;
	}
	.code image,.logout image{
		width: 84rpx;
		height: 84rpx;
	}
	.text_img{
		width: 84rpx;
		height: 84rpx;
		color: #FFFFFF;
		font-size: 28rpx;
		font-weight: bold;
		text-align: center;
		line-height: 84rpx;
		position: absolute;
		top: 0;
		left: 0;
	}
	.text_img image{
		width: 40rpx;
		height: 40rpx;
	}
	.per_data{
		width: 100%;
		height: 280rpx;
		margin-top: 40rpx;
		box-sizing: border-box;
		padding: 0 30rpx;
		position: relative;
		/* display: flex;
		align-items: space-between;
		justify-content: space-between;
		flex-direction: column; */
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
		bottom: 20rpx;
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
		height: 50rpx;
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
		color: #FFFFFF;
		font-size: 26rpx;
		font-weight: bold;
	}
	swiper{
		width: 120%;
		height: 100%;
	}
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
		margin-top: 100rpx;
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
		width: 404rpx;
		height: 400rpx;
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
	#one .li{
		background-color: #fae170;
	}
	#two .li{
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
	.tabber{
		width: 100%;
		height: 70rpx;
		background: rgba(255,255,255,0.5);
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 105;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	.tabber_left{
		width: 280rpx;
		height: 70rpx;
		box-sizing: border-box;
		padding-right: 150rpx;
		line-height: 70rpx;
		text-align: right;
		color: #FFFFFF;
		font-size: 30rpx;
		font-weight: bold;
		background: url(../../static/index/train.png) no-repeat;
		background-size: 250rpx 70rpx;
		background-position: bottom left;
	}
	.tabber_center{
		width: 90rpx;
		height: 90rpx;
		margin-bottom:20rpx;
	}
	.tabber_center image{
		width: 90rpx;
		height: 90rpx;
	}
	.tabber_right{
		width: 280rpx;
		height: 70rpx;
		box-sizing: border-box;
		padding-left: 150rpx;
		line-height: 70rpx;
		text-align: left;
		color: #FFFFFF;
		font-size: 30rpx;
		font-weight: bold;
		background: url(../../static/index/user.png) no-repeat;
		background-size: 250rpx 70rpx;
		background-position: bottom right;
	}
	.qb{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		background: rgba(0,0,0,.5);
	}
	.qrcode{
		width: 100%;
		margin-top: 200rpx;
		box-sizing: border-box;
		padding: 0 10rpx;
		position: relative;
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
	.qrcode image{
		width: 100%;
	}
	.pic_text{
		width: 320rpx;
		height: 320rpx;
		position: absolute;
		top: 54rpx;
		right: 80rpx;
		background: #FFFFFF;
		box-sizing: border-box;
		border-radius: 20rpx;
		padding: 50rpx;
	}
	.pic_text image{
		width: 100%;
		height: 100%;
	}
	.in_code{
		color: #000000;
		font-size: 32rpx;
		font-weight: bold;
		position: absolute;
		bottom: 100rpx;
		right: 125rpx;
	}
	.close{
		width: 100%;
		text-align: center;
	}
	.close image{
		width: 90rpx;
		height: 90rpx;
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
	.elf_ball,.master_ball{
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
</style>
