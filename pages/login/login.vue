<template>
	<view class="">
		<view class="content">
			<view class="box">
				<view class="detail">
					<!-- logo -->
					<view class="logo">
						<image src="../../static/index/logo_log.png" mode="widthFix"></image>
					</view>
					<!-- 操作 -->
					<view class="log">
						<view class="account ">
							<input v-model="account" type="text" maxlength="20" />
						</view>
						<view class="password">
							<input v-model="password" type="password" maxlength="20" />
						</view>
						<view class="operating">
							<text @click="jump('/pages/reg/reg')">注册</text>
							<text @click="control()">忘记密码？</text>
						</view>
					</view>
					<!-- 按钮 -->
					<view class="btn">
						<view class="button" @click="submit()">
							开始旅程
						</view>
						<!-- <view class="switch">
							<view class="en">
								<image src="../../static/index/en-us.png" mode="widthFix"></image>
							</view>
							<view class="ch">
								<image src="../../static/index/ch-en.png" mode="widthFix"></image>
							</view>
						</view> -->
					</view>
				</view>
			</view>
		</view>
		<!-- 弹窗 -->
		<view class="boxs" v-show="box" @click="aa()">
			<!-- v-show = 'box' -->
			<view class="forget" @click.stop>
				<view class="forget_bg">
					<image src="../../static/images/forget_bg.jpg" mode="scaleToFill"></image>
				</view>
				<view class="forget_log">
					<view class="account">
						<input v-model="account" type="text" placeholder="用户名" />
					</view>
					<view class="password">
						<input v-model="mobile" type="text" placeholder="手机号" />
					</view>
					<view class="btn1">
						<view class="button1" @click="submit1()">
							提交
						</view>
					</view>
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
		data() {
			return {
				account: '',
				password:'',
				mobile:'',
				box: false
			}
		},
		methods: {
			jump(url) {
				uni.navigateTo({
					url: url
				})
			},
			control() {
				this.box = true;
			},
			submit() {
				// this.box = false;
				let self = this;
				console.log(!self.account);
				if (!self.account) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 1 个字符'
					});

					return;
				}
				if (self.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				uni.request({
					url: service.api.login.login,
					method: 'POST',
					data: {
						'account': self.account,
						'password': self.password
					},
					success: res => {
						var res = res.data;
						if (res.code == 1) {
							uni.setStorageSync('token', res.data.token)
							uni.setStorageSync('pop', 0);
							uni.setStorageSync('css', 0);
							uni.setStorageSync("shack", 1);
							if (self.checked == true) {
								service.User_paw(self.account, self.password)

								service.Memory(self.checked)
							} else if (self.checked == false) {
								service.Memory(self.checked)
								service.User_paw(self.account, '')

							}
							uni.reLaunch({
								url: '/pages/index/index',
							});
						} else {
							self.password = '';
							self.account = '';
							uni.showToast({
								icon: 'none',
								title: res.msg
							});
							return;
						}
					},
					error: res => {
						uni.showToast({
							icon: 'none',
							title: "请求站点错误"
						});
						return;
					}
				});

			},
			submit1(){
				self  = this
				if (self.account == '') {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 1 个字符'
					});
				
					return;
				}
				if (self.mobile.length != 11) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				uni.request({
					url: service.api.login.forget,
					method: 'POST',
					data: {
						'account': self.account,
						'mobile': self.mobile,
					},
					success: res => {
						var res = res.data;
						if (res.code == 1) {
							uni.showModal({
								title: '修改成功',
								content: res.msg,
								showCancel: false,
								success: function(res) {
									self.box = false;
								}
							});
						}else{
							uni.showModal({
								title: '修改失敗',
								content: res.msg,
								showCancel: false,
								success: function(res) {
									
								}
							});
						}
					},
					complete: () => {
						uni.hideLoading()
					}
				});
			},
			aa() {
				this.box = false;
			}
		},
		onShow() {
			var ss = uni.getStorageSync('set');
			this.account = ss;
			uni.setStorageSync('set','');
			// console.log(ss);
		}
	}
</script>

<style>
	.content {
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

	.box {
		width: 100%;
		box-sizing: border-box;
		padding: 50rpx 30rpx;
	}

	.detail {
		width: 100%;
		box-sizing: border-box;
	}

	.logo {
		width: 100%;
		height: 650rpx;
	}

	.logo image {
		width: 100%;
		height: 650rpx;
	}

	.log,
	.forget_log {
		width: 100%;
		box-sizing: border-box;
	}

	.account,
	.password {
		width: 100%;
		height: 110rpx;
		margin: 10rpx 0;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		background: url(../../static/index/input.png) center center no-repeat;
		background-size: 100% 100%;
	}

	.account input,
	.password input {
		width: 70%;
		color: #000000;
		font-size: 30rpx;
		font-weight: bold;
		margin-top: 10rpx;
		margin-left: 120rpx;
	}

	.operating {
		width: 100%;
		box-sizing: border-box;
		padding: 0 40rpx;
		color: #000000;
		font-size: 32rpx;
		font-weight: bold;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.btn {
		width: 100%;
		margin-top: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.button {
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

	.button1 {
		width: 100%;
		height: 120rpx;
		line-height: 120rpx;
		text-align: center;
		color: #FFFFFF;
		font-size: 40rpx;
		letter-spacing: 5rpx;
		font-weight: bold;
		background: url(../../static/index/login.png) center center no-repeat;
		background-size: 300rpx 100%;
	}

	.switch {
		width: 100%;
		margin-top: 50rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.en,
	.ch {
		width: 60rpx;
		height: 60rpx;
		margin: 0 10rpx;
	}

	.en image,
	.ch image {
		width: 60rpx;
		height: 60rpx;
	}

	/* 弹窗 */
	.boxs {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 106;
	}

	.forget {
		width: 100%;
		height: 500rpx;
		margin-top: 30rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		position: relative;
	}

	.forget_bg {
		width: 100%;
		height: 500rpx;
		box-sizing: border-box;
	}

	.forget_bg image {
		width: 100%;
		height: 500rpx;
		border-radius: 20rpx;
	}

	.forget_log {
		margin-top: 30rpx;
		padding: 0 50rpx;
		position: absolute;
		top: 0;
		left: 0;
	}

	.btn1 {
		width: 100%;
		margin-top: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	/* 背景 */
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
