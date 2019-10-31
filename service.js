// 管理账号信息
const USERS_KEY = 'USERS_KEY';
const STATE_KEY = 'STATE_KEY';

const getUsers = function () {
    let ret = '';
    ret = uni.getStorageSync(USERS_KEY);
    if (!ret) {
        ret = '[]';
    }
    return JSON.parse(ret);
}

const addUser = function (userInfo) {
    let users = getUsers();
    users.push({
        account: userInfo.account,
        password: userInfo.password
    });
    uni.setStorageSync(USERS_KEY, JSON.stringify(users));
}
const config = {
	version : '1.0.4'
}
const _api_root ='http://0292.t1.nethhw188.com/';
const api = {
	login: {
		login:  _api_root + 'port/login/index',//系统登录
		// logo: _api_root + "port/login/get_enter_logo",//获取网站图像
		forget: _api_root + 'port/login/forgetpwd',//修改密码
	},
	reg: {
		register: _api_root + 'port/login/register',//新用户注册
		code: _api_root + 'port/login/verifycode',//获取验证码
		// agree: _api_root + 'port/login/get_user_regagree',//获取注册协议
		// help: _api_root + 'port/member/helpRegister',//帮助注册
	},
	index:{
		user: _api_root + 'port/member/information',//获取会员信息
		friends: _api_root + "port/member/inviteFriends",//获取邀请二维码
		index: _api_root + 'port/index/index',//获取产品信息
		appointmentCate: _api_root + 'port/index/appointmentCate',//预约接口
		appointment: _api_root + "port/index/appointment",//选择卡片
		my_product: _api_root + "port/member/my_product",//训练馆
		// code: _api_root + 'port/member/verifycode',//获取验证码
		// verification: _api_root + 'port/member/verificationAccount',//短信验证
		// golden: _api_root + '',//入金记录
		// market: _api_root + 'port/quotation/index',//虚拟币行情
		// popup: _api_root + "port/index/notice",//通知信息
	},
	details: {
		my_profit: _api_root + 'port/member/my_profit',//金币、资产记录
		submitMethod: _api_root + 'port/member/submitMethod',//添加银行卡
		getPaymentType: _api_root + 'port/member/getPaymentType',//银行卡类型
		// earning: _api_root + "port/member/incomeLog",//获取收益记录
	},
	prop:{
		myPaymentMethod: _api_root + 'port/member/myPaymentMethod',//银行卡
		transfer_accounts: _api_root + 'port/member/transfer_accounts',//转让道具（卡片）
	},
	assets:{
		// record: _api_root + 'port/investment/investmentlog',//投资记录
		// investment: _api_root + 'port/investment/investment',//投资记录
		// details: _api_root + 'port/investment/investDetail',//投资详情
		// inves: _api_root + 'port/investment/InvestmentCash',//投资提现
		// additionalInvestment: _api_root + 'port/investment/additionalInvestment',//升级投资
		// upgradecates: _api_root + 'port/investment/upgradecates',//可选择的升级投资类型
	},
	setting:{
		// team: _api_root + 'port/member/myTeam',//我的团队
		// order: _api_root + "port/server_center/workorderList",//获取反馈列表
		// form: _api_root + "port/server_center/submitWorkorder",//提交反馈
		// lang: _api_root + "port/member/switchLanguage",//多语言切换
		// code: _api_root + 'port/member/verifycode',//获取验证码
		// forgetPwd2: _api_root + 'port/member/forgetPwd2',//忘记钱包密码
		// changePwd: _api_root + 'port/member/changePwd',//修改密码
	}
}

const auth = function(self, url, data, _success){
	var token = uni.getStorageSync('token');
	if (token == '') {
		uni.showToast({
			icon: 'none',
			// title: uni.getStorageSync('error')
			title: '已退出登錄，請重新登錄'
		});
		
		uni.setStorageSync('token','');
		uni.reLaunch({
			url: '/pages/login/login',
		});
	}
	var data = {
		token: uni.getStorageSync('token'),
		// lang: uni.getStorageSync('language'),
		...data
	}
	uni.request({
		url: url,
		method: 'GET',
		data: data,
		success: res => {
			var res = res.data;
			if (res.code == 1) {
				_success(self, res);
	
			} else {
				if (res.code == 400) {
					uni.setStorageSync('token','');
					setTimeout(function(){
						uni.showToast({
							icon: 'none',
							// title: uni.getStorageSync('error')
							title: '已退出登錄，請重新登錄'
						});
						
						uni.reLaunch({
							url: '/pages/login/login'
						});
					},2000);
				} else {
					uni.showToast({
						icon: 'none',
						title: res.msg
					});
				}
			}
		},
		fail: res => {
			console.log(res)
			uni.showToast({
				icon: 'none',
				// title: uni.getStorageSync('windows')
				title: '网站消息获取错误'
			});
		},
		complete: (data) => {
			var data = data.data;
			if(data.code == 13){
				uni.showToast({
					icon: 'none',
					title: data.msg
				});
				this.removeToken();
				uni.showToast({
					icon: 'none',
					// title: uni.getStorageSync('error')
					title: '已退出登錄，請重新登錄'
				});
				
				uni.reLaunch({
					url: '/pages/login/login'
				});
			}
			uni.hideLoading();
		}
	});
}

export default {
    getUsers,
    addUser,
	config,
	auth,
	api,
}
