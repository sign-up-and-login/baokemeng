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
								<image src="../../static/index/coin_gold.png" mode="widthFix"></image>
							</view>
							<text>金币记录</text>
						</view>
						<!-- 表格 -->
						<view class="form">
							<!-- 表单标题 -->
							<view class="form_top">
								<view class="form_title">
									详情
								</view>
								<view class="form_title">
									价值
								</view>
								<view class="form_title">
									日期
								</view>
							</view>
							<!-- 表格 -->
							<view class="form_box" v-for="(li,index) in list" :key="index">
								<view class="form_tr">
									<view class="form_content">
										{{li.recomment}}
									</view>
									<view class="form_content">
										{{li.money}}
									</view>
									<view class="form_content">
										<text>{{li.createtime_parse_y}}</text>
										<text>{{li.createtime_parse_h}}</text>
									</view>
								</view>
							</view>

						</view>
						<!-- 记录 -->
						<view class="notes">
							第 {{limit}} 页显示 {{limit}} / {{page_count}} 记录。
						</view>
						<!-- 页码 -->
						<view class="page_num">
							<view class="first" @click="upon()">
								上一页
							</view>
							<view class="number">
								{{limit}}
							</view>
							<view class="end" @click="down()">
								下一页
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
				list: [],
				token:uni.getStorageSync('token'),
				user:uni.getStorageSync('user'),
				type:2,
				cid:0,
				limit:1,
				page_count:''
			}

		},
		methods: {
			jump(url) {
				uni.navigateTo({
					url: url
				})
			},
			upon(){
				this.limit = this.limit-1;
				if(this.limit< 1){
					this.limit = 1
				}
				this.load();
			},
			down(){
				this.limit = this.limit+1;
				if(this.limit > this.page_count){
					this.limit = this.page_count
				}
				this.load();
			},
			reques(cid){
				that = this
				uni.request({
					url:service.api.details.my_profit,
					data:{
						token:that.token,
						type:that.type,
						cate_id :cid ,
						limit:that.limit
					},
					success(res) {
						console.log(res)
					}
				})
			},
			load(id){
				var that = this
				if(that.type==3){
					that.reques(that.cid)
					
				}else{
					uni.request({
						url:service.api.details.my_profit,
						data:{
							token:that.token,
							type:that.type,
							limit:that.limit
						},
						success(res) {
							console.log(res)
							that.list = res.data.data.list;
							that.limit = res.data.data.limit;
							that.page_count = res.data.data.page_count;
						}
					})
				}
			}
		},
		onShow() {
			this.load();
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
		margin-top: 120rpx;
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

	.form {
		width: 100%;
		margin-top: 50rpx;
		padding: 0 32rpx;
		box-sizing: border-box;
	}

	.form_top,
	.form_tr {
		width: 100%;
		height: 90rpx;
		border-top: 2rpx solid #EEEEEE;
		/* border-left: 2rpx solid #999999; */
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.form_title {
		width: 33%;
		height: 90rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		font-size: 24rpx;
		font-weight: bold;
		color: #eee;
		background: #a9a9a9;
		border-right: 1rpx solid #EEEEEE;
		border-bottom: 2rpx solid #EEEEEE;
	}

	.form_content {
		width: 33%;
		height: 90rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		font-size: 24rpx;
		font-weight: bold;
		color: #527921;
		border-right: 1rpx solid #666666;
		border-bottom: 2rpx solid #666666;
	}

	.form_tr .form_content:nth-of-type(3),
	.form_top .form_title:nth-of-type(3) {
		border-right: 0;
	}

	.notes {
		width: 100%;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
	}

	.page_num {
		width: 100%;
		height: 100rpx;
		margin-top: 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.first,
	.end {
		color: #999999;
		font-size: 30rpx;
		font-weight: bold;
	}

	.number {
		width: 70rpx;
		height: 70rpx;
		margin: 0 50rpx;
		text-align: center;
		line-height: 70rpx;
		color: #666666;
		font-size: 28rpx;
		font-weight: bold;
		border: 1rpx solid #999999;
		background: #EEEEEE;
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
