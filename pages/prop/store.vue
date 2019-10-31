<template>
	<view class="">
		<!-- 头部 -->
		<headers></headers>
		<!-- 内容 -->
		<view class="content">
			<view class="specific">
				<!-- 详细内容 -->
				<view class="details">
					<!-- 道具名 -->
					<view class="title">
						<view class="title_logo">
							<image src="../../static/index/store.png" mode="widthFix"></image>
						</view>
						<text>宝可梦商店</text>
					</view>
					<!--  -->
					<view class="scroll">
						<view class="record">
							<view class="record_content">
								<view class="record_pic">
									<image src="../../static/index/history.png" mode="widthFix"></image>
								</view>
								<view class="data_title">
									精灵球
								</view>
								<view class="record_data">
									<view class="li"><text class="nhn">名称：</text>精灵球</view>
									<view class="li">
										<text class="nhn">价钱：</text>20 金币/4 精灵球<br>
										1 动态收益/5 精灵球
									</view>
									<view class="li"><text class="nhn">详情：</text>适用于捕抓精灵宝可梦</view>
								</view>
								<view class="record_buy" @click="buy()">
									购买
								</view>
							</view>
							<!-- 记录背景 -->
							<view class="record_bg">
								<image src="../../static/index/pack-pink.png" mode="scaleToFill"></image>
							</view>
						</view>
						<!--  -->
						<view class="record">
							<view class="record_content">
								<view class="record_pic">
									<image src="../../static/index/jinka.png" mode="widthFix"></image>
								</view>
								<view class="data_title">
									大师球
								</view>
								<view class="record_data">
									<view class="li"><text class="nhn">名称：</text>大师球</view>
									<view class="li">
										<text class="nhn">价钱：</text>20 金币/4 大师球<br>
										<!-- 1 动态收益/5 大师球 -->
									</view>
									<view class="li"><text class="nhn">详情：</text>适用于捕抓精灵宝可梦</view>
								</view>
								<view class="record_buy">
									购买
								</view>
							</view>
							<!-- 记录背景 -->
							<view class="record_bg">
								<image src="../../static/index/pack-pink.png" mode="scaleToFill"></image>
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
		<!-- 购买 -->
		<!-- 弹窗 -->
		<view class="conversion" v-show="xs">
			<!-- v-show = "xs" -->
			<view class="conversion_content">
				<view class="conversion_bg">
					<image src="../../static/index/pack-pink.png" mode="scaleToFill"></image>
				</view>
				<view class="pop_pic">
					<view class="pop_img">
						<image class="ll" src="../../static/index/history.png" mode="widthFix"></image>
						<image class="ii" src="../../static/index/item-shadow.png" mode="widthFix"></image>
					</view>
					<view class="pop_title">
						精灵球
					</view>
				</view>
				<view class="pop_log">
					<view class="h1">支付方式</view>
					<view class="pop_input">
						<input type="text" placeholder="请选择支付方式" />
					</view>
					<!--  -->
					<view class="h1">数量</view>
					<view class="pop_input">
						<input type="text" placeholder="请填写购买数量" />
					</view>
					<!--  -->
					<view class="h1">二级密码</view>
					<view class="pop_input">
						<input type="text" placeholder="请填写二级密码" />
					</view>
					<view class="pop_btn">
						购买
					</view>
				</view>
			</view>

			<view class="close" @click="close()">
				<image src="/static/index/close.png" mode="widthFix"></image>
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
		components: {
			headers,
			tabbers
		},
		data() {
			return {
				xs: false
			}

		},
		methods: {
			jump(url) {
				uni.navigateTo({
					url: url
				})
			},
			buy() {
				this.xs = true;
			},
			close() {
				this.xs = false;
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

	.details {
		width: 100%;
		/* height: 1110rpx; */
		box-sizing: border-box;
		padding: 0 50rpx;
		position: absolute;
		top: 50rpx;
		left: 0rpx;
		z-index: 101;
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

	/*  */
	.scroll {
		width: 100%;
		height: 920rpx;
		margin-top: 50rpx;
		box-sizing: border-box;
		padding: 0 60rpx;
		overflow: auto;
	}

	.record {
		width: 100%;
		height: 290rpx;
		margin: 50rpx 0;
		box-sizing: border-box;
		/* padding: 0 30rpx; */
		position: relative;
	}

	.record_content {
		width: 100%;
		height: 290rpx;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 106;
	}

	.record_pic {
		width: 180rpx;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
	}

	.record_pic image {
		width: 180rpx;
		height: 180rpx;
	}

	.record_data {
		width: 320rpx;
		padding-right: 30rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.li {
		width: 320rpx;
		/* height: 45rpx; */
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
		box-sizing: border-box;
		margin: 5rpx 0;
	}

	.nhn {
		width: 80rpx;
	}

	.data_title {
		width: 290rpx;
		height: 70rpx;
		color: #FFFFFF;
		font-size: 32rpx;
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: -30rpx;
		right: 0;
		background: url(../../static/index/item-name.png) center center no-repeat;
		background-size: 100% 100%;
	}

	.record_buy {
		width: 120rpx;
		height: 70rpx;
		color: #c0463a;
		font-size: 24rpx;
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(../../static/index/orange-button.png) center center no-repeat;
		background-size: 100% 100%;
		position: absolute;
		bottom: 0;
		right: 30rpx;
	}

	/* 记录背景 */
	.record_bg {
		width: 100%;
		height: 290rpx;
		box-sizing: border-box;
		/* padding: 0 30rpx; */
		position: absolute;
		top: 0;
		left: 0;
		z-index: 102;
	}

	.record_bg image {
		width: 100%;
		height: 290rpx;
		border-radius: 30rpx;
		box-shadow: 0 0 20rpx #999999;
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

	/* 弹窗 */
	.conversion {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background: rgba(0, 0, 0, .5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 106;
	}

	.conversion_content {
		width: 100%;
		height: 740rpx;
		position: relative;
	}

	.conversion_bg {
		width: 100%;
		height: 740rpx;
		box-sizing: border-box;
		padding: 0 10rpx;
	}

	.conversion_bg image {
		width: 100%;
		height: 740rpx;
		border-radius: 80rpx;
	}

	.pop_pic {
		width: 100%;
		position: absolute;
		top: 20rpx;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.pop_img {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.pop_img .ll {
		width: 160rpx;
		height: 180rpx;
	}

	.pop_img .ii {
		width: 240rpx;
		height: 40rpx;
	}

	.pop_title {
		width: 100%;
		height: 70rpx;
		margin-top: 30rpx;
		text-align: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #FFFFFF;
		line-height: 70rpx;
		background: url(../../static/index/item-name.png) center center no-repeat;
		background-size: 290rpx 100%;
	}

	.pop_log {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: absolute;
		bottom: -50rpx;
		left: 0;
		box-sizing: border-box;
		padding: 0 100rpx;
	}

	.h1 {
		width: 490rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		color: #000000;
		font-size: 26rpx;
		font-weight: bold;
	}

	.pop_input {
		width: 490rpx;
		height: 50rpx;
		line-height: 50rpx;
		margin-top: 10rpx;
		border-radius: 15rpx;
		background-color: #a8a8a8;
		background: url(../../static/index/pokemon.png) 20rpx center no-repeat;
		background-size: 36rpx 36rpx;
		background-color: #a8a8a8;
	}

	.pop_input input {
		width: 400rpx;
		height: 80%;
		margin-left: 80rpx;
	}

	.uni-input-placeholder {
		color: #dddddd;
		font-size: 24rpx;
		font-weight: bold;
	}

	.pop_btn {
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

	.close {
		width: 100%;
		margin-top: 100rpx;
		text-align: center;
	}

	.close image {
		width: 90rpx;
		height: 90rpx;
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
