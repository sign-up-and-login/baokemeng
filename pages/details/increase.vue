<template>
	<view class="">
		<!-- 头部 -->
		<headers></headers>
		<!-- 内容 -->
		<view class="content">
			<view class="specific">
				<!-- 返回键 -->
				<view class="back" @click="jump('/pages/prop/card')">
					<image src="../../static/index/back.png" mode="widthFix"></image>
				</view>
				<!-- 详细内容 -->
				<view class="details">
					<view class="scroll">
						<!-- 道具名 -->
						<view class="title">
							<view class="title_logo">
								<image src="../../static/index/bank.png" mode="widthFix"></image>
							</view>
							<text>添加银行卡</text>
						</view>

						<view class="log_all">
							<view class="log">
								<view class="h1">
									收款方式
								</view>
								<view class="log_input" id="drop_down">
									<input type="text" v-model="li_name" maxlength="20" placeholder="请选择收款方式" disabled="disabled" @click="drop_down()"/>
									<view class="drop_down_frame" v-show="select">
											<view class="frame_li" v-for="(li,index) in list" :class="isactive == index ? 'change' : '' " @click='onclick(index)' :key='index'>
												{{li.name}}
											</view>
										
									</view>
								</view>
							</view>
							<view class="log" v-if="type == 0">
								<view class="h1">
									银行
								</view>
								<view class="log_input">
									<input type="text" maxlength="20" placeholder="请选择银行" />
								</view>
							</view>
							<view class="log" v-if="type == 0">
								<view class="h1">
									支行
								</view>
								<view class="log_input">
									<input type="text" maxlength="20" placeholder="请填写银行支行" />
								</view>
							</view>
							<view class="log">
								<view class="h1">
									持卡人
								</view>
								<view class="log_input">
									<input type="text" maxlength="20" placeholder="请填写持卡人姓名" />
								</view>
							</view>
							<view class="log" v-if="type == 0">
								<view class="h1">
									账户
								</view>
								<view class="log_input">
									<input type="text" maxlength="20" placeholder="请填写银行账户" />
								</view>
							</view>
							<block v-else>
								<view class="log">
									<view class="h1">
										支付宝/微信收款账户
									</view>
									<view class="log_input">
										<input type="text" maxlength="20" placeholder="请填写收款账户" />
									</view>
								</view>
								<view class="log">
									<view class="h1">
										二维码
									</view>
									<view class="log_input">
										<view class="img" @click="image()">
											选择文件
										</view>
										<view class="img_title">
											<text>未选择任何文件</text>
											<text>{{imageSrc}}</text>
										</view>
									</view>
								</view>
							</block>
							<view class="log">
								<view class="h1">
									二级密码
								</view>
								<view class="log_input">
									<input type="text" maxlength="20" placeholder="请填写确定二级密码" />
								</view>
							</view>
							<!-- 按钮 -->
							<view class="btn">
								<view class="button" @click="submit()">
									<!-- '/pages/prop/card' -->
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
				user: uni.getStorageSync("user"),
				token:uni.getStorageSync('token'),
				select: false,
				type: 0,
				imageSrc: '',
				titleofaccount:'',
				account:'',
				sub_branch:'',
				ispaymentcode:'',
				list:[{name:'银行'},{name:'支付宝'},{name:'微信'}],
				isactive:0,
				li_name:''
			}

		},
		methods: {
			onclick(index) {
				this.isactive = index;
				this.li_name = this.list[index].name
				this.select = false;
			},
			jump(url) {
				uni.navigateTo({
					url: url
				})
			},
			drop_down(){
				uni.request({
					url:service.api.details.getPaymentType,
					data:{
						token:this.token
					},
					success(res) {
						console.log(res);
					}
				})
				this.select = true;
			},
			submit() {
				var that = this
				uni.uploadFile({
					url: service.api.details.submitMethod,
					filePath: that.imageSrc,
					name: 'file',
					formData: {
						token:that.token, 
						type:that.type,
						titleofaccount:that.titleofaccount,
						account:that.account,
						sub_branch:that.sub_branch,
						ispaymentcode:that.ispaymentcode
					},
					success(res){
						console.log(res)
					}
				})
			},
			image() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original'],
					sourceType: ['album'],
					success(res) {
						console.log(res)
					}
				})
			}
		},
		onShow() {
			for(let i=0; i<this.list.lenght; i++){
				this.li_name = this.list[i].name;
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

	.back {
		width: 100rpx;
		height: 100rpx;
		margin-left: ;
		position: absolute;
		top: -30rpx;
		left: 50rpx;
		z-index: 101;
	}

	.back image {
		width: 100rpx;
		height: 100rpx;
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
		height: 1110rpx;
		overflow: auto;
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

	.log_all {
		width: 100%;
		margin-top: 50rpx;
		/* display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		box-sizing: border-box; */
		/* padding: 0 100rpx; */
	}

	.log {
		width: 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		box-sizing: border-box;
	}

	.h1 {
		width: 490rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		color: #000000;
		font-size: 26rpx;
		font-weight: bold;
	}

	.log_input {
		width: 490rpx;
		height: 50rpx;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin-top: 10rpx;
		border-radius: 10rpx;
		background-color: #a8a8a8;
		background: url(../../static/index/pokemon.png) 20rpx center no-repeat;
		background-size: 36rpx 36rpx;
		background-color: #a8a8a8;
	}
	#drop_down{
		position: relative
	}
	.drop_down_frame{
		width: 300rpx;
		position: absolute;
		top: 50rpx;
		left: 100rpx;
		z-index: 200;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: column;
		background: #333333;
	}
	.frame_li{
		width: 100%;
		height: 50rpx;
		line-height: 50rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		background: #FFFFFF;
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
	}
	.change{
		background: #999999;
		color: #FFFFFF;
	}
	.log_input input {
		width: 400rpx;
		height: 100%;
		margin-left: 80rpx;
	}

	.img {
		width: 200rpx;
		height: 80%;
		margin-left: 80rpx;
		text-align: center;
		line-height: 40rpx;
		background: #EEEEEE;
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
	}

	.img_title {
		color: #FFFFFF;
		font-size: 24rpx;
		font-weight: bold;
	}

	.uni-input-placeholder {
		color: #cccccc;
		font-size: 26rpx;
		font-weight: bold;
	}

	.btn {
		width: 100%;
		margin-top: 50rpx;
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
