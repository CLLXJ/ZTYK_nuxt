import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export const state = {
	Xmdata_x:[],
	// indexShowLinks: false
};

export const mutations = {
	//头部导航产品与新闻信息
// 		
  setXmdata(state,data){
    state.Xmdata_x=data

  }
}
export const actions = {
	async nuxtServerInit({commit,state,req}) {
		
		// //产品导航
		// 	let headProdNav = await axios(`${state.wordpressAPI}/proCategory/showAll/main`);
		// 	commit('setHeadProdNav',headProdNav.data);
		// //新闻导航
		// 	let headNewsNav = await axios(`${state.wordpressAPI}/articleCategory/getAll`);
		// 	commit('setHeadNewsNav',headNewsNav.data);
		// //招聘导航
		// 	let headJobNav = await axios(`${state.wordpressAPIForJob}/jobClass/getAll`);
		// 	commit('setHeadJobNav',headJobNav.data);
		// //友情链接
		// 	let indexLinksData = await axios(`${state.wordpressAPI}/link/selectAll`);
		// 	commit('setIndexLinksData',indexLinksData.data);
	}
};

export const store = () => new Vuex.Store({
	state,
	mutations,
	actions
})

export default store