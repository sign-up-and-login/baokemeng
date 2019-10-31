<template name="uni-countdown">
	<view class="uni-countdown">
		<!-- <block v-if="lang == 'chn'"> -->
			<block v-if="time == 1">
			{{h}}時{{i}}分{{s}}秒
			</block>
			<block v-else-if="time == 2">
			{{y}}年{{m}}月{{d}}日{{h}}时{{i}}分{{s}}秒
			</block>
			<block v-else>
			{{s}}秒
			</block>
		<!-- </block> -->
		
	<!-- 	<block v-else>
			<block v-if="time == 1">
			{{h}}Hours{{i}}Minutes{{s}}Seconds
			</block>
			<block v-else>
			{{s}}Seconds
			</block>
		</block> -->
	</view>
</template>
<script>
	export default {
		name: "uni-countdown",
		props: {
			bgrColor: {
				type: String,
				default: "#FFFFFF"
			},
			borderColor: {
				type: String,
				default: "#000000"
			},
			fontColor: {
				type: String,
				value: "#000000"
			},
			splitorColor: {
				type: String,
				default: "#000000"
			},
			timer: {
                type: [String, Number],
                default: ''
			},
			type:{
                type: [String, Number],
                default: ''
			}
		},
		data() {
			return {
				// lang:uni.getStorageSync("lang"),
				time:0,
				setTime: null,
				y:'0000',
				m:'00',
				d:'00',
				h: '00',
				i: '00',
				s: '00',
				leftTime: 0
			}
		},
		created: function(e) {
			this.time = this.type;
			console.log(new Date(this.timer * 1000))
			this.countDown(this,this.timer);
		},
		beforeDestroy() {
			clearInterval(this.setTime)
		},
		methods: {
			countDown: function(self,leftTime) {
				if(self.time == 1){
					if (leftTime > 0) {
						var hours = parseInt(leftTime / 1000 / 60 / 60, 10);
						var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);
						var seconds = parseInt(leftTime / 1000 % 60, 10);
					} else {
						var hours = 0,
							minutes = 0,
							seconds = 0;
					}
					if (hours < 10) {
						hours = '0' + hours;
					}
					if (minutes < 10) {
						minutes = '0' + minutes;
					}
					self.h = hours;
					self.i = minutes;
					
				}else if(self.time == 2){
					if (leftTime > 0) {
						var year = parseInt(leftTime / 1000 / 60/60/24/30/12, 10);
						var mon = parseInt(leftTime / 1000 / 60/60/24/30 % 12, 10);
						var day = parseInt(leftTime / 1000 / 60 / 60/24 % 30, 10);
						var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10);
						var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);
						var seconds = parseInt(leftTime / 1000 % 60, 10);
					} else {
						var year = 0;
							mon = 0;
							day = 0;
							hours = 0,
							minutes = 0,
							seconds = 0;
					}
					if (year < 10) {
						year = '0' + year;
					}if (mon < 10) {
						mon = '0' + mon;
					}if (day < 10) {
						day = '0' + day;
					}if (hours < 10) {
						hours = '0' + hours;
					}if (minutes < 10) {
						minutes = '0' + minutes;
					}
					self.h = hours;
					self.i = minutes;
					self.d = day;
					self.m = mon;
					self.y = year;
				}else{
					if (leftTime > 0) {
						var seconds = parseInt(leftTime / 1000, 10);
						
					} else {
						var seconds = 0;
						uni.setStorageSync("sec",1)
					}
				}
				
				if (seconds < 10) {
					seconds = '0' + seconds;
				}
				self.s = seconds;
				if(leftTime > 0){
					setTimeout(function(){
						self.countDown(self,leftTime - 1000)
					},1000);
				}
				
			}
		}
	}
</script>
<style>
	.uni-countdown {
        display: flex;
		padding: 2upx 0;
		flex-wrap: nowrap;
		justify-content: center;
	}

	.uni-countdown-splitor {
		width: auto !important;
		justify-content: center;
		line-height: 44upx;
		padding: 0 5upx;
	}

	.uni-countdown-numbers {
		line-height: 44upx;
		width: auto !important;
		padding: 0 10upx;
		justify-content: center;
		height: 44upx;
		border-radius: 8upx;
		margin: 0 5upx;
		border: 1px solid #000000;
		font-size: 22upx;
	}
</style>
