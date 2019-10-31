<template>
	<view class="contents">
		<view class="top">
		<view class="code">
			<image src="/static/index/code.png" mode="scaleToFill"></image>
			<view class="text_img" @click="invite()">
				<image src="/static/index/qb.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="logout">
			<image src="/static/index/logout.png" mode="scaleToFill"></image>
			<view class="text_img" @click="jump('/pages/login/login')">
				<!--  @click="sign_out()" -->
				登出
			</view>
		</view>
	</view>
	<!--  -->
	<view class="qb" v-show="qb">
		 <!-- v-show="qb" -->
		<view class="qrcode">
			<view class="invite_btn">
				邀请二维码
			</view>
			<image src="/static/index/qrcode.png" mode="widthFix"></image>
			<view class="pic_text">
				<view class="qb_img">
					<image src="/static/index/qrcode.jpg" mode="widthFix"></image>
				</view>
			</view>
			<view class="in_code">
				邀请码：123456
			</view>
		</view>
		<view class="close" @click="close()">
			<image src="/static/index/close.png" mode="widthFix"></image>
		</view>
	</view>
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
				qb:false,
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
			close(){
				this.qb = false;
			}
		}
	}
</script>

<style>
	.contents{
		width: 100%;
		box-sizing: border-box;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 105;
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
		height: 70rpx;
	}
	.text_img{
		width: 84rpx;
		height: 70rpx;
		color: #FFFFFF;
		font-size: 28rpx;
		font-weight: bold;
		text-align: center;
		line-height: 70rpx;
		position: absolute;
		top: 0;
		left: 0;
	}
	.text_img image{
		width: 40rpx;
		height: 40rpx;
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
		background: url(../static/index/invite_btn.png) center center no-repeat;
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
</style>
