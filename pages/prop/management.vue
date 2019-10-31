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
							<image src="../../static/index/switch.png" mode="widthFix"></image>
						</view>
						<text>多开管理</text>
					</view>
					<!-- 个人数据 -->
					<view class="data_content">
						<view class="box1">
							<view class="number">
								手机号：15217848912
							</view>
						</view>
						<view class="box2">
							<view class="number">
								账户数量：20 / 20 （已满）
							</view>
						</view>
					</view>
					<!-- tab栏 -->
					<view class="data_number">
						<view class="tab">
							<view :class="[show == 0?'btn':'btn1']" @click="one()">
								培训中
							</view>
							<view :class="[show == 1?'btn':'btn1']" @click="two()">
								培训中
							</view>
							<view :class="[show == 2?'btn':'btn1']" @click="three()">
								已完成
							</view>
						</view>
					</view>
					<!--  -->
					<view class="scroll">
						<view class="Account_list" v-if="show == 0">
							<!-- 团列表 -->
							<view class="Account_li">
								<view class="li_content">
									<view class="li_name">
										<view class="name">
											<text class="h1">qbzi001</text>
											<text class="h2">213051</text>
										</view>
										<view class="li_right">
											<view class="training">
												培训中：000
											</view>
											<view class="switch">
												切换
												<image class="switch_font" src="../../static/index/front.png" mode="widthFix"></image>
											</view>
										</view>
									</view>
									<view class="action">
										<view class="action_left">
											<view class="h3">预约</view>
											<view class="action_btn">匹配失败</view>
										</view>
										<view class="action_right">
											<view class="h3">付款</view>
											<view class="action_btn">未打款</view>
										</view>
									</view>
									<view class="action">
										<view class="action_left">
											<view class="h3">预约</view>
											<view class="action_btn">匹配失败</view>
										</view>
										<view class="action_right">
											<view class="h3">付款</view>
											<view class="action_btn">未打款</view>
										</view>
									</view>
								</view>
								<!-- 背景图 -->
								<view class="li_pic">
									<image src="../../static/index/pack-yellow.png" mode="scaleToFill"></image>
								</view>
							</view>
							<!-- 团列表 -->
							<view class="Account_li">
								<view class="li_content">
									<view class="li_name">
										<view class="name">
											<text class="h1">qbzi001</text>
											<text class="h2">213051</text>
										</view>
										<view class="li_right">
											<view class="training">
												培训中：000
											</view>
											<view class="switch">
												切换
												<image class="switch_font" src="../../static/index/front.png" mode="widthFix"></image>
											</view>
										</view>
									</view>
									<view class="action">
										<view class="action_left">
											<view class="h3">预约</view>
											<view class="action_btn">匹配失败</view>
										</view>
										<view class="action_right">
											<view class="h3">付款</view>
											<view class="action_btn">未打款</view>
										</view>
									</view>
									<view class="action">
										<view class="action_left">
											<view class="h3">预约</view>
											<view class="action_btn">匹配失败</view>
										</view>
										<view class="action_right">
											<view class="h3">付款</view>
											<view class="action_btn">未打款</view>
										</view>
									</view>
								</view>
								<!-- 背景图 -->
								<view class="li_pic">
									<image src="../../static/index/pack-yellow.png" mode="scaleToFill"></image>
								</view>
							</view>
							<!-- 团列表 -->
							<view class="Account_li">
								<view class="li_content">
									<view class="li_name">
										<view class="name">
											<text class="h1">qbzi001</text>
											<text class="h2">213051</text>
										</view>
										<view class="li_right">
											<view class="training">
												培训中：000
											</view>
											<view class="switch">
												切换
												<image class="switch_font" src="../../static/index/front.png" mode="widthFix"></image>
											</view>
										</view>
									</view>
									<view class="action">
										<view class="action_left">
											<view class="h3">预约</view>
											<view class="action_btn">匹配失败</view>
										</view>
										<view class="action_right">
											<view class="h3">付款</view>
											<view class="action_btn">未打款</view>
										</view>
									</view>
									<view class="action">
										<view class="action_left">
											<view class="h3">预约</view>
											<view class="action_btn">匹配失败</view>
										</view>
										<view class="action_right">
											<view class="h3">付款</view>
											<view class="action_btn">未打款</view>
										</view>
									</view>
								</view>
								<!-- 背景图 -->
								<view class="li_pic">
									<image src="../../static/index/pack-yellow.png" mode="scaleToFill"></image>
								</view>
							</view>
						</view>
						<!--  -->
						<view class="Account_list" v-if="show == 1">
							<!-- 团列表 -->
							<view class="Account_li">
								<view class="li_content">
									<view class="li_name">
										<view class="name">
											<text class="h1">qbzi001</text>
											<text class="h2">213051</text>
										</view>
										<view class="li_right">
											<view class="training">
												培训中：000
											</view>
											<view class="switch">
												切换
												<image class="switch_font" src="../../static/index/front.png" mode="widthFix"></image>
											</view>
										</view>
									</view>
									<view class="action">
										<view class="action_left">
											<view class="h3">预约</view>
											<view class="action_btn">匹配失败</view>
										</view>
										<view class="action_right">
											<view class="h3">付款</view>
											<view class="action_btn">未打款</view>
										</view>
									</view>
									<view class="action">
										<view class="action_left">
											<view class="h3">预约</view>
											<view class="action_btn">匹配失败</view>
										</view>
										<view class="action_right">
											<view class="h3">付款</view>
											<view class="action_btn">未打款</view>
										</view>
									</view>
								</view>
								<!-- 背景图 -->
								<view class="li_pic">
									<image src="../../static/index/pack-yellow.png" mode="scaleToFill"></image>
								</view>
							</view>
							<!-- 团列表 -->
							<view class="Account_li">
								<view class="li_content">
									<view class="li_name">
										<view class="name">
											<text class="h1">qbzi001</text>
											<text class="h2">213051</text>
										</view>
										<view class="li_right">
											<view class="training">
												培训中：000
											</view>
											<view class="switch">
												切换
												<image class="switch_font" src="../../static/index/front.png" mode="widthFix"></image>
											</view>
										</view>
									</view>
									<view class="action">
										<view class="action_left">
											<view class="h3">预约</view>
											<view class="action_btn">匹配失败</view>
										</view>
										<view class="action_right">
											<view class="h3">付款</view>
											<view class="action_btn">未打款</view>
										</view>
									</view>
									<view class="action">
										<view class="action_left">
											<view class="h3">预约</view>
											<view class="action_btn">匹配失败</view>
										</view>
										<view class="action_right">
											<view class="h3">付款</view>
											<view class="action_btn">未打款</view>
										</view>
									</view>
								</view>
								<!-- 背景图 -->
								<view class="li_pic">
									<image src="../../static/index/pack-yellow.png" mode="scaleToFill"></image>
								</view>
							</view>
						</view>
						<!--  -->
						<view class="Account_list" v-if="show == 2">
							<!-- 团列表 -->
							<view class="Account_li">
								<view class="li_content">
									<view class="li_name">
										<view class="name">
											<text class="h1">qbzi001</text>
											<text class="h2">213051</text>
										</view>
										<view class="li_right">
											<view class="training">
												培训中：000
											</view>
											<view class="switch">
												切换
												<image class="switch_font" src="../../static/index/front.png" mode="widthFix"></image>
											</view>
										</view>
									</view>
									<view class="action">
										<view class="action_left">
											<view class="h3">预约</view>
											<view class="action_btn">匹配失败</view>
										</view>
										<view class="action_right">
											<view class="h3">付款</view>
											<view class="action_btn">未打款</view>
										</view>
									</view>
									<view class="action">
										<view class="action_left">
											<view class="h3">预约</view>
											<view class="action_btn">匹配失败</view>
										</view>
										<view class="action_right">
											<view class="h3">付款</view>
											<view class="action_btn">未打款</view>
										</view>
									</view>
								</view>
								<!-- 背景图 -->
								<view class="li_pic">
									<image src="../../static/index/pack-yellow.png" mode="scaleToFill"></image>
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
		components: {
			headers,
			tabbers
		},
		data() {
			return {
				show: 0,
			}

		},
		methods: {
			jump(url) {
				uni.navigateTo({
					url: url
				})
			},
			one() {
				this.show = 0;
			},
			two() {
				this.show = 1;
			},
			three(){
				this.show = 2;
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
		padding: 0 90rpx;
		position: absolute;
		top: 50rpx;
		left: 0rpx;
		z-index: 101;
	}

	.title {
		width: 100%;
		height: 90rpx;
		margin-top: 30rpx;
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

	.data_content {
		width: 100%;
		margin-top: 50rpx;
		box-sizing: border-box;
		padding: 0 50rpx;
	}

	.box1 {
		width: 100%;
		height: 50rpx;
		margin: 20rpx 0;
		border-radius: 10rpx;
		background: url(../../static/index/id-icon.png) 10rpx center no-repeat;
		background-size: 50rpx 100%;
		background-color: #AAAAAA;
	}

	.box2 {
		width: 100%;
		height: 50rpx;
		border-radius: 10rpx;
		background: url(../../static/index/switch.png) 10rpx center no-repeat;
		background-size: 50rpx 100%;
		background-color: #AAAAAA;
	}

	.number {
		width: 100%;
		height: 50rpx;
		line-height: 50rpx;
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
		box-sizing: border-box;
		padding-left: 100rpx;
	}

	.data_number {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		box-sizing: border-box;
		/* padding: 0 20rpx; */
	}

	.tab {
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.btn {
		width: 175rpx;
		height: 60rpx;
		font-size: 24rpx;
		font-weight: bold;
		color: #1d8994;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(../../static/index/group.png) center center no-repeat;
		background-size: 100% 100%;
	}

	.btn1 {
		width: 175rpx;
		height: 60rpx;
		font-size: 24rpx;
		font-weight: bold;
		color: #666666;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(../../static/index/group1.png) center center no-repeat;
		background-size: 100% 100%;
	}

	/*  */
	.scroll {
		width: 100%;
		height: 720rpx;
		/* margin-top: 5rpx; */
		box-sizing: border-box;
		/* padding: 0 20rpx; */
		overflow: auto;
	}

	.Account_list {
		width: 100%;
		box-sizing: border-box;
		padding: 0 0;
	}

	.Account_li {
		width: 100%;
		height: 370rpx;
		margin-bottom: 20rpx;
		position: relative;
	}
	.li_pic{
		width: 100%;
		height: 370rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 102;
	}
	.li_pic image{
		width: 100%;
		height: 370rpx;
	}
	.li_content {
		width: 100%;
		height: 370rpx;
		box-sizing: border-box;
		/* padding-left: 200rpx; */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 105;
	}
	.li_name{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding: 0 30rpx;
	}
	.name{
		
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.h1 {
		color: #000000;
		font-size: 30rpx;
		font-weight: bold;
		margin-right: 10rpx;
	}.h2 {
		color: #ff7c00;
		font-size: 24rpx;
		font-weight: bold;
	}
	.li_right{
		width: 370rpx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		
	}
	.training{
		/* width: 150rpx; */
		line-height: 50rpx;
		box-sizing: border-box;
		padding: 0 10rpx;
		border-radius: 10rpx;
		color: #000000;
		font-size: 24rpx;
		font-weight: bold;
		/* text-align: center; */
		display: inline;
		background: #fde94d;
	}
	.switch{
		width: 200rpx;
		height: 80rpx;
		box-sizing: border-box;
		padding: 0 30rpx;
		font-size: 28rpx;
		font-weight: bold;
		color: #C0463A;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: url(../../static/index/light.png) center center no-repeat;
		background-size: 100% 100%;
		position: relative;
	}
	/* 背景图 */
	.switch_font{
		width: 80rpx;
		height: 80rpx;
		position: absolute;
		top: 0;
		right: -10rpx;
	}
	.action{
		width: 100%;
		box-sizing: border-box;
		padding: 0 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		
	}
	.action_left,.action_right{
		width: 50%;
		/* height: 70rpx; */
		font-size: 24rpx;
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.action_btn{
		width: 100%;
		height: 70rpx;
		text-align: center;
		line-height: 60rpx;
	}
	.action_left .action_btn{
		background: url(../../static/index/red-button.png) center center no-repeat;
		background-size: 100% 100%; 
	}.action_right .action_btn{
		background: url(../../static/index/gray-button.png) center center no-repeat;
		background-size: 100% 100%; 
	}
	/* 新 */
	
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
