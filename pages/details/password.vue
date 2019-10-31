<template>
	<view class="">
		<!-- 头部 -->
		<headers></headers>
		<!-- 内容 -->
		<view class="content">
			<view class="specific">
			<!-- 返回键 -->
			<view class="back" @click="jump('/pages/prop/safety')">
				<image src="../../static/index/back.png" mode="widthFix"></image>
			</view>
				<!-- 详细内容 -->
				<view class="details">
					<view class="scroll">
						<!-- 道具名 -->
						<view class="title">
							<view class="title_logo">
								<image src="../../static/index/center.png" mode="widthFix"></image>
							</view>
							<text>修改登录密码</text>
						</view>
						
						<view class="log_all">
							<view class="log">
								<view class="h1">
									目前登录密码
								</view>
								<view class="log_input">
									<input type="text" maxlength="20" placeholder="请填写登录密码" />
								</view>
							</view>
							<view class="log">
								<view class="h1">
									登录密码
								</view>
								<view class="log_input">
									<input type="text" maxlength="20" placeholder="请填写新的登录密码" />
								</view>
							</view>
							<view class="log">
								<view class="h1">
									确定登陆密码
								</view>
								<view class="log_input">
									<input type="text" maxlength="20" placeholder="请填写确定登录密码" />
								</view>
							</view>
							<!-- 按钮 -->
							<view class="btn">
								<view class="button" @click="jump('/pages/prop/safety')">
									提交
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
		components:{
			headers,
			tabbers
		},
		data(){
			return {
				
			}
			
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
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
	.specific{
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
	.details{
		width: 100%;
		height: 1110rpx;
		box-sizing: border-box;
		padding: 0 50rpx;
		position: absolute;
		top: 50rpx;
		left: 0rpx;
		z-index: 101;
	}
	.scroll{
		width: 100%;
		height: 1110rpx;
		overflow: auto;
	}
	.title{
		width: 100%;
		height: 90rpx;
		margin-top: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(../../static/index/title1.png) center center no-repeat;
		background-size: 510rpx 100%;
	}
	.title_logo{
		width: 120rpx;
		height: 120rpx;
		margin-right: 20rpx;
	}
	.title_logo image{
		width: 120rpx;
		height: 120rpx;
	}
	.title text{
		color: #000000;
		font-size: 32rpx;
		font-weight: bold;
		text-shadow: 0 0 10rpx #FFFFFF;
	}
	.log_all{
		width: 100%;
		margin-top: 50rpx;
		/* display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		box-sizing: border-box; */
		/* padding: 0 100rpx; */
	}
	.log{
		width: 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		box-sizing: border-box;
	}
	.h1{
		width: 490rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		color: #000000;
		font-size: 26rpx;
		font-weight: bold;
	}
	.log_input{
		width: 490rpx;
		height: 50rpx;
		line-height: 50rpx;
		margin-top: 10rpx;
		border-radius: 10rpx;
		background-color: #a8a8a8;
		background: url(../../static/index/pokemon.png) 20rpx center no-repeat;
		background-size: 36rpx 36rpx;
		background-color: #a8a8a8;
	}
	.log_input input{
		width: 400rpx;
		height: 100%;
		margin-left: 80rpx;
	}
	.uni-input-placeholder{
		color: #cccccc;
		font-size: 26rpx;
		font-weight: bold;
	}
	.btn{
		width: 100%;
		margin-top: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.button{
		width: 100%;
		height: 150rpx;
		line-height: 150rpx;
		text-align: center;
		color: #FFFFFF;
		font-size: 45rpx;
		letter-spacing: 5rpx;
		font-weight: bold;
		background: url(../../static/index/login.png) center center no-repeat;
		background-size: 500rpx 100%;
	}
	
	/* 内容背景图 */
	.background{
		width: 100%;
		height: 1210rpx;
		box-sizing: border-box;
		padding: 0 30rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
	}
	.background image{
		width: 100%;
		height: 1210rpx;
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
