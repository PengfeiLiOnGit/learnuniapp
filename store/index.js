import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		login : false,
		token : '123',
		avatarUrl : '',
		userName : ''
	},
	getters:{
		changeLogin(state){
			
		}
	},
	mutations:{
		initUser(state,user){
			state.userName = "测试用户";
		}
	},
	actions:{
		changeLogin({state}){
			return new Promise(function(resolve){
				setTimeout(()=>{
					state.login = !state.login;
					resolve();
				},3000);
			});
		}
	},
	modules:{
			
	}
});

export default store;