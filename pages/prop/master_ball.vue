<template>
	<view class="">
		<!-- 头部 -->
		<headers></headers>
		<!-- 内容 -->
		<view class="content">
			<view class="specific">
				<!-- 详细内容 -->
				<view class="details">
					<view class="scroll">
						<!-- 道具名 -->
						<view class="title">
							<view class="title_logo">
								<image src="../../static/index/jinka.png" mode="widthFix"></image>
							</view>
							<text>{{card_list[1].name}}</text>
						</view>
						<!-- 个人数据 -->
						<view class="data_content">
							<view class="box1">
								<view class="number">
									编码：{{user.account}}
								</view>
							</view>
							<view class="box2">
								<view class="number">
									大师球数额：{{card_list[1].balance}}
								</view>
							</view>
						</view>
						<!-- 转出 -->
						<view class="log_all">
							<view class="log">
								<view class="h1">
									收款人编码
								</view>
								<view class="log_input">
									<input type="text" v-model="account" maxlength="20" placeholder="请填写收款人编码" />
								</view>
							</view>
							<view class="log">
								<view class="h1">
									大师球数额
								</view>
								<view class="log_input">
									<input type="text" v-model="num" maxlength="20" placeholder="请填写大师球数额" />
								</view>
							</view>
							<view class="log">
								<view class="h1">
									二级密码
								</view>
								<view class="log_input">
									<input type="password" v-model="pwd2" maxlength="6" placeholder="请填写二级密码" />
								</view>
							</view>
							<!-- 按钮 -->
							<view class="btn">
								<view class="button" @click="submit(cid)">
									提交
								</view>
								<view class="record" >
									大师球记录
								</view>
							</view>
							
						</view>
						<view class="prompt">
							<view class="h2">
								获取大师球方式
							</view>
							<view class="prompt_content">
								<view  class="prompt_text"><text class="hh">●</text><text>向其他训练师购买 (自行交易)</text></view>
								<view  class="prompt_text"><text class="hh">●</text><text>宝可梦商店购买</text></view>
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
		components:{
			headers,
			tabbers
		},
		data(){
			return {
				token:uni.getStorageSync('token'),
				card_list:[],
				cid:'',
				pwd2:'',
				num:'',
				account:'',
			}
			
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
			submit(id){
				if(this.num>this.card_list[1].balance){
					uni.showToast({
						icon:'none',
						title:'请输入正确的数量'
					})
					return
				}
				uni.request({
					url:service.api.prop.transfer_accounts,
					data:{
						cate_id:this.cid,
						token:this.token,
						pwd2:this.pwd2,
						num:this.num,
						account:this.account
					},
					success(res) {
						if(res.data.code == 1){
							setTimeout(function(){
								uni.showToast({
									icon:'none',
									title:res.msg
								})
								uni.navigateTo({
									url:'/pages/index/me'
								})
							},2000)
						}
						uni.showToast({
							icon:'none',
							title:res.data.msg
						})
						// console.log(res)
					}
				})
			}
		},
		onShow() {
			var xx = uni.getStorageSync('user')
			this.user = xx;
			var card_list = [];
			for(let i=0;i<2;i++){
				this.card_list.push(xx.card[i+1])
			}
			this.cid = this.card_list[1].id;
			console.log(this.cid);
			
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
		margin-top: 120rpx;
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
	.data_content{
		width: 100%;
		margin-top: 50rpx;
		box-sizing: border-box;
		padding: 0 100rpx;
	}
	.box1{
		width: 100%;
		height: 50rpx;
		border-radius: 10rpx;
		background: url(../../static/index/id-icon.png) 10rpx center no-repeat;
		background-size: 50rpx 100%;
		background-color: #AAAAAA;
	}
	.box2{
		width: 100%;
		height: 50rpx;
		margin-top: 20rpx;
		border-radius: 10rpx;
		background: url(../../static/index/masters.png) 10rpx center no-repeat;
		background-size: 50rpx 100%;
		background-color: #AAAAAA;
	}
	.number{
		width: 100%;
		height: 50rpx;
		line-height: 50rpx;
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
		box-sizing: border-box;
		padding-left: 100rpx;
	}
	.log_all{
		width: 100%;
		margin-top: 30rpx;
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
	.record{
		color: #5968dd;
		font-size: 30rpx;
		font-weight: bold;
	}
	.prompt{
		width: 100%;
		margin: 40rpx 0 20rpx;
		box-sizing: border-box;
		padding: 0 80rpx;
	}
	.h2{
		width: 100%;
		color: #FFFFFF;
		font-size: 28rpx;
		font-weight: bold;
	}
	.prompt_content{
		width: 100%;
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
	}
	.prompt_text{
		margin: 10rpx 0;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
	}
	.hh{
		margin: 0 10rpx;
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
