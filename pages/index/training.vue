<template>
	<view class="">
		<!-- 头部 -->
		<headers></headers>
		<!-- 内容 -->
		<view class="content">
			<view class="title">
				<text>训练馆</text>
			</view>
			<view class="box">
				<!-- 内容 -->
				<view class="record">
					<view class="tab">
						<view :class="[type == 1?'btn':'btn1']" @click="one()">
							培训中
						</view>
						<view :class="[type == 1?'btn1':'btn']" @click="two()">
							已完成
						</view>
					</view>
					<view class="side"><view class="line"></view></view>
					<!-- 培训中 -->
					<!-- show == 0 -->
					<view class="details" v-show="type == 1">
						<block v-for="(li,index) in list" :key="li.id">
							<view class="details_box">
								<view class="shop">
									<view class="shop_bg">
										<image src="../../static/index/booth.png" mode="widthFix"></image>
									</view>
									<view class="shop_pic">
										<image :src="li.product_cate_thumb" mode="widthFix"></image>
									</view>
								</view>
								<view class="shop_data">
									<view class="data_content">
										<view class="data_logo">
											<image src="../../static/index/data_star.png" mode="widthFix"></image>
											<image src="../../static/index/data_star.png" mode="widthFix"></image>
											<image src="../../static/index/data_star.png" mode="widthFix"></image>
										</view>
										<view class="data_num">
											<view class="data_li">
												价值：{{li.price}}
											</view>
											<view class="data_li">
												天数：{{li.cycle}}天
											</view>
											<view class="data_li">
												收益：{{li.profit_proportion}}%
											</view>
											<view class="data_li">
												开始：{{li.createtime_parse}}
											</view>
											<view class="data_li">
												完成：<count-down :timer="num" type='2'></count-down>
											</view>
										</view>
										<!-- <view class="data_btn" @click="choose()">
											转换能量
										</view> -->
									</view>
									<view class="data_bg">
										<image src="../../static/index/column.png" mode="widthFix"></image>
										<view class="grade">
											稀有皮卡丘
										</view>
									</view>
								</view>
							</view>
						</block>
						
					</view>
					<!-- 已完成 -->
					<!-- show == 1 -->
					<view class="details" v-show="type == 2">
						<!-- one -->
						<block v-for="(li,index) in list" :key="li.id">
							<view class="details_box">
								<view class="shop">
									<view class="shop_bg">
										<image src="../../static/index/booth.png" mode="widthFix"></image>
									</view>
									<view class="shop_pic">
										<image :src="li.product_cate_thumb" mode="widthFix"></image>
									</view>
								</view>
								<view class="shop_data">
									<view class="data_content">
										<view class="data_logo">
											<image src="../../static/index/data_star.png" mode="widthFix"></image>
											<image src="../../static/index/data_star.png" mode="widthFix"></image>
											<image src="../../static/index/data_star.png" mode="widthFix"></image>
										</view>
										<view class="data_num">
											<view class="data_li">
												价值：{{li.price}}
											</view>
											<view class="data_li">
												天数：{{li.cycle}}天
											</view>
											<view class="data_li">
												收益：{{li.profit_proportion}}%
											</view>
											<view class="data_li">
												开始：{{li.createtime_parse}}
											</view>
											<view class="data_li">
												完成：<count-down :timer="num" type='2'></count-down>
											</view>
										</view>
										<!-- <view class="data_btn">
											转换能量
										</view> -->
									</view>
									<view class="data_bg">
										<image src="../../static/index/column.png" mode="widthFix"></image>
										<view class="grade">
											稀有皮卡丘
										</view>
									</view>
								</view>
							</view>
						</block>
						
					</view>
				</view>
				<!-- 背景图 -->
				<view class="img">
					<image src="../../static/index/list.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<!-- 弹窗 -->
		<!-- <view class="conversion" v-show = "xs">
			v-show = "xs"
			<view class="conversion_content">
				<view class="conversion_bg">
					<image src="../../static/index/pack-pink.png" mode="scaleToFill"></image>
				</view>
				<view class="pop_pic">
					<view class="pop_img">
						<image class="ll" src="../../static/index/energy.png" mode="widthFix"></image>
						<image class="ii" src="../../static/index/item-shadow.png" mode="widthFix"></image>
					</view>
					<view class="pop_title">
						是否确定转换能量，此操作不可撤回
					</view>
				</view>
				<view class="pop_log">
					<view class="h1">二级密码</view>
					<view class="pop_input">
						<input type="text" placeholder="请输入二级密码" />
					</view>
					<view class="pop_btn">
						转换能量
					</view>
				</view>
			</view>
			
			<view class="close" @click="close()">
				<image src="/static/index/close.png" mode="widthFix"></image>
			</view>
		</view> -->
		<!-- 底部 -->
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
	import countDown from '../../components/uni-countdown.vue';
	export default {
		components:{
			headers,
			tabbers,
			countDown
		},
		data(){
			return{
				xs:false,
				type:1,
				list:'',
				num:''
			}
		},
		methods:{
			one(){
				this.type = 1;
				this.ask();
			},
			two(){
				this.type = 2;
				this.ask();
			},
			choose(){
				this.xs = true;
			},
			close(){
				this.xs = false;
			},
			ask(){
				// +"?token="+this.token
				service.auth(this, service.api.index.my_product, {
					type:this.type
				}, function(self, res) {
					self.list = res.data.data;
					console.log(self.list);
					for(let i=0;i<self.list.length;i++){
						var mon = self.list[i].count_down_time * 1000;
						var non = self.list[i].createtime * 1000;
						var now = new Date(self.list[i].count_down_time_parse).getTime();
						var num = now - non;
						self.num = num;
						if(num <0){
							num = 0;
						}
						console.log(mon,non,num,now)
					}
				});
			}
		},
		onShow() {
			this.ask();
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
	.title{
		width: 100%;
		height: 120rpx;
		font-size: 32rpx;
		font-weight: bold;
		color: #000000;
		text-align: center;
		line-height: 100rpx;
		margin-top: 200rpx;
		background: url(../../static/index/title.png) center center no-repeat;
		background-size: 510rpx 100%;
	}
	.title text{
		text-shadow: 0 0 10rpx #FFFFFF;
		margin-left: 30rpx;
	}
	.box{
		width: 100%;
		height: 1010rpx;
		margin: 20rpx 0 100rpx;
		box-sizing: border-box;
		position: relative;
		/* padding: 0 20rpx; */
	}
	.record{
		width: 100%;
		height: 1010rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 101;
	}
	.tab{
		width: 100%;
		height: 120rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.btn{
		width: 140rpx;
		height: 40rpx;
		font-size: 24rpx;
		font-weight: bold;
		color: #1d8994;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(../../static/index/group.png) center center no-repeat;
		background-size: 140rpx 100%;
	}
	.btn1{
		width: 140rpx;
		height: 40rpx;
		font-size: 24rpx;
		font-weight: bold;
		color: #666666;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(../../static/index/group1.png) center center no-repeat;
		background-size: 140rpx 100%;
	}
	.side{
		width: 100%;
		height: 5rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
	}
	.line{
		width: 100%;
		height: 5rpx;
		background: #a3e4e6;
		border-radius: 50%;
	}
	.details{
		width: 100%;
		height: 850rpx;
		overflow: auto;
		margin-top: 10rpx;
	}
	.details_box{
		width: 100%;
		margin-bottom: 50rpx;
	}
	.shop{
		width: 100%;
		height: 330rpx;
		position: relative;
	}
	.shop_pic{
		width: 100%;
		height: 300rpx;
		display: flex;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 102;
	}
	.shop_pic image{
		width: 320rpx;
		height: 304rpx;
	}
	.shop_bg{
		width: 100%;
		height: 80rpx;
		box-sizing: border-box;
		padding: 0 100rpx;
		position: absolute;
		left: 0;
		bottom: 0rpx;
		z-index: 101;
	}
	.shop_bg image{
		width: 100%;
		height: 80rpx;
	}
	.shop_data{
		width: 100%;
		height: 380rpx;
		position: relative;
	}
	.data_content{
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 102;
		box-sizing: border-box;
		padding: 0 100rpx;
	}
	.data_logo{
		width: 100%;
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.data_logo image{
		width: 50rpx;
		height: 50rpx;
		margin: 0 5rpx;
	}
	.data_num{
		width: 100%;
		box-sizing: border-box;
		/* display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column; */
	}
	.data_li{
		width: 400rpx;
		margin-top: 15rpx;
		margin-left: 80rpx;
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
		display: flex;
	}
	.data_btn{
		width: 160rpx;
		height: 70rpx;
		text-align: center;
		line-height: 70rpx;
		color: #c0463a;
		font-weight: bold;
		font-size: 26rpx;
		background: url(../../static/index/orange-button.png) center center no-repeat;
		background-size: 160rpx 100%;
		position: absolute;
		top: 90rpx;
		right: 100rpx;
		z-index: 102;
	}
	.grade{
		width: 100%;
		height: 60rpx;
		color: #FFFFFF;
		font-size: 32rpx;
		font-weight: bold;
		text-align: center;
		line-height: 60rpx;
		background: url(../../static/index/rare.png) center center no-repeat;
		background-size: 340rpx 100%;
		position: absolute;
		bottom: -30rpx;
		left: 0;
		z-index: 102;
	}
	.data_bg{
		width: 100%;
		height: 380rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 101;
		box-sizing: border-box;
		padding: 0 100rpx;
	}
	.data_bg image{
		width: 100%;
		height: 380rpx;
		border-radius: 50rpx;
		box-shadow: 0 0 20rpx #999999;
	}
	.img{
		width: 100%;
		height: 1010rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
	}
	.img image{
		width: 100%;
		height: 1010rpx;
	}
	/* 弹窗 */
	.conversion{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background: rgba(0,0,0,.5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 106;
	}
	.conversion_content{
		width: 100%;
		height: 740rpx;
		position: relative;
	}
	.conversion_bg{
		width: 100%;
		height: 740rpx;
		box-sizing: border-box;
		padding: 0 10rpx;
	}
	.conversion_bg image{
		width: 100%;
		height: 740rpx;
		border-radius: 80rpx;
	}
	.pop_pic{
		width: 100%;
		position: absolute;
		top: 20rpx;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.pop_img{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.pop_img .ll{
		width: 160rpx;
		height: 180rpx;
	}
	.pop_img .ii{
		width: 240rpx;
		height: 40rpx;
	}
	.pop_title{
		width: 100%;
		height: 70rpx;
		margin-top: 20rpx;
		text-align: center;
		font-size: 24rpx;
		font-weight: bold;
		color: #FFFFFF;
		line-height: 70rpx;
		background: url(../../static/index/item-name.png) center center no-repeat; 
		background-size: 430rpx 100%;
	}
	.pop_log{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: absolute;
		bottom: 150rpx;
		left: 0;
		box-sizing: border-box;
		padding: 0 100rpx;
	}
	.h1{
		width: 490rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		color: #000000;
		font-size: 26rpx;
		font-weight: bold;
	}
	.pop_input{
		width: 490rpx;
		height: 50rpx;
		line-height: 50rpx;
		margin-top: 10rpx;
		border-radius: 20rpx;
		background-color: #a8a8a8;
		background: url(../../static/index/pokemon.png) 20rpx center no-repeat;
		background-size: 36rpx 36rpx;
		background-color: #a8a8a8;
	}
	.pop_input input{
		width: 400rpx;
		height: 80%;
		margin-left: 80rpx;
	}
	.pop_btn{
		width: 310rpx;
		height: 100rpx;
		margin-top: 50rpx;
		color: #c0463a;
		font-size: 30rpx;
		font-weight: bold;
		text-align: center;
		line-height: 100rpx;
		background: url(../../static/index/activate-account-button.png) center center no-repeat;
		background-size: 310rpx 100%;
	}
	.close{
		width: 100%;
		margin-top: 50rpx;
		text-align: center;
	}
	.close image{
		width: 90rpx;
		height: 90rpx;
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
