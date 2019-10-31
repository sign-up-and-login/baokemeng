<template>
	<view class="">
		<view class="content">
			<view class="back" @click="jump('/pages/login/login')">
				<image src="../../static/index/back.png" mode="widthFix"></image>
			</view>
			<view class="logo">
				<image src="../../static/index/logo_top.png" mode="widthFix"></image>
			</view>
			<view class="log_all">
				<view class="log">
					<input type="text" v-model="nickname" maxlength="6" placeholder="用户名" />
				</view>
				<view class="log">
					<input type="text" v-model="mobile" maxlength="20" placeholder="手机号" />
				</view>
				<view class="log">
					<input class="input1" v-model="verifycode" type="text" placeholder="验证码" maxlength="6"/>
					<block v-if="countdown > 61"><text class="send" @click="send()">发送</text></block>
					<block v-if="countdown == 61"><text class="send" @click="send()">重新发送</text></block>
					<block v-if="countdown < 61"><text class="send">{{countdown}}</text></block>
				</view>
				<view class="log">
					<input type="password" v-model="pwd" maxlength="20" placeholder="密码" />
				</view>
				<view class="log">
					<input type="password" v-model="repwd" maxlength="20" placeholder="确认密码" />
				</view>
				<view class="log">
					<input type="password" v-model="pwd2" placeholder="二级密码" maxlength="6"/>
				</view>
				<view class="log">
					<input type="password" v-model="repwd2" placeholder="确认二级密码" maxlength="6"/>
				</view>
				<view class="log">
					<input type="text" v-model="invitation_code " placeholder="邀请码" />
				</view>
			</view>
			<!-- 按钮 切换 -->
			<view class="btn">
				<view class="button" @click="submit()">
					提交
				</view>
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
	export default {
		data(){
			return{
				nickname:'',
				mobile:'',
				pwd:'',
				repwd:'',
				pwd2:'',
				repwd2:'',
				invitation_code:'',
				verifycode:'',
				countdown:62,
				account:''
			}
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
			send(){
				uni.request({
					url: service.api.reg.code,
					method: 'GET',
					data: {
						'mobile': this.mobile,
						'temp': 'sms_reg',
					},
					success: res => {
						var res = res.data;
						if (res.code == 1) {
							uni.showToast({
								icon: 'none',
								title: res.msg
							});
							self.codetime(self,60);
						} else {
							uni.showToast({
								icon: 'none',
								title: res.msg
							});
							return;
						}
					}
				});
				// this.codetime(this,60);
			},
			//手機驗證碼獲取倒計時
			codetime: function(obj,num) {
				if(num<10){
					obj.countdown = "0"+num;
				}else{
					obj.countdown = num;
				}
				num--;
				if(num < 0){
					obj.countdown = 61;
				}else{
					setTimeout(function(){
						obj.codetime(obj,num);
					}, 1000);
				}
			},
			submit(){
				self = this;
				if(self.verifycode.length != 6){
					uni.showToast({
						icon: 'none',
						title: '請輸入六位驗證碼'
					});
					return;
				}
				if(self.mobile.length != 11){
					uni.showToast({
						icon: 'none',
						title: '請輸入11位的手機號碼'
					});
					return;
				}
				//手機號碼正則驗證
				if(!(/^1[3-9][0-9]\d{8,11}$/.test(self.mobile))){
					uni.showToast({
						icon: 'none',
						title: '手機號碼格式不正確'
					});
					return;
				}
				if(self.nickname.length < 2){
					uni.showToast({
						icon: 'none',
						title: '請輸入至少兩位用戶名'
					});
					return;
				}
				if(self.pwd.length < 6){
					uni.showToast({
						icon: 'none',
						title: '請輸入至少六位的密碼'
					});
					return;
				}
				if(self.repwd != self.pwd){
					uni.showToast({
						icon: 'none',
						title: '確認密碼密碼與設定的密碼不一致'
					});
					return;
				}
				if(self.pwd2.length != 6){
					uni.showToast({
						icon: 'none',
						title: '請輸入六位的二級密碼'
					});
					return;
				}
				if(self.repwd2 != self.pwd2){
					uni.showToast({
						icon: 'none',
						title: '確認二級密碼密碼與設定的二級密碼不一致'
					});
					return;
				}
				uni.request({
					url: service.api.reg.register,
					method: 'POST',
					data: {
						mobile:self.mobile,
						verifycode:self.verifycode,
						nickname:self.nickname,
						pwd:self.pwd,
						invitation_code:self.invitation_code,
						repwd:self.repwd,
						pwd2:self.pwd2,
						repwd2:self.repwd2
					},
					success: res => {
						var res = res.data;
						if (res.code == 1) {
							var set = res.data.account;
							uni.setStorageSync('set',set);
							self.account = res.data.account;
							console.log(set)
							uni.showToast({
								duration: 8000,
								icon:'none',
								title: res.msg,
								content: res.msg,
								showCancel: false,
								success: function(res) {
									setTimeout(function() {
										uni.reLaunch({
											url: '/pages/login/login'
										});
									}, 10000);
								}
							});
						}else{
							uni.showModal({
								title: '註冊失敗',
								content: res.msg,
								showCancel: false,
								success: function(res) {
									// self.status = 1;
								}
							});
						}
					},
					complete: () => {
						uni.hideLoading()
					}
				}); 
			}
		}
	}
</script>

<style>
	.content{
		width: 100%;
		height: 100%;
		overflow: auto;
		box-sizing: border-box;
		padding: 30rpx;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
	}
	.back{
		width: 100rpx;
		height: 100rpx;
		position: absolute;
		top: 30rpx;
		left: 30rpx;
		z-index: 106;
	}
	.back image{
		width: 100rpx;
		height: 100rpx;
	}
	.logo{
		width: 100%;
		margin-top: 30rpx;
		box-sizing: border-box;
		padding: 0 100rpx;
		display: flex;
		justify-content: center;
	}
	.logo image{
		width: 100%;
		height: 504rpx;
	}
	.log_all{
		width: 100%;
		box-sizing: border-box;
		padding: 0 50rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.log{
		 width: 100%;
		 height: 110rpx;
		 margin: 10rpx 0;
		 box-sizing: border-box;
		 display: flex;
		 align-items: center;
		 background: url(../../static/index/input.png) center center no-repeat;
		 background-size: 100% 100%;
	}
	.log input{
		width: 60%;
		color: #000000;
		font-size: 30rpx;
		font-weight: bold;
		margin-top: 10rpx;
		margin-left: 120rpx;
	}
	.log .input1{
		width: 50%;
	}
	.send{
		width: 130rpx;
		text-align: center;
		color: #ffc500;
		font-size: 32rpx;
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
	/* 背景 */
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
