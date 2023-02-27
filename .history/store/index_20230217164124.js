import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export const state = {
	Xmdata_x:[
		{ //智慧校园项目
			xmname:"智慧校园中心平台",//项目名称
			xmtd:"开放融合、智能联动、数据至慧",
			xmjj:"为实现智慧校园中各类软件、硬件系统的智能联动、数据融合、高效运行，元素科技自主研发一套元素智慧校园中心平台（简称中心平台），通过盖平台可助力学习实现信息技术玉教育教学深度融合，达到提高教学质量、提升管理效率、促进家校共育的目的。",//项目简介
			xmsyt:"/static/gswh04.jpg",//项目首页图路径
		},
		{ //智慧校园项目
			xmname:"智慧校园中心平台",//项目名称
			xmtd:"开放融合、智能联动、数据至慧",
			xmjj:"为实现智慧校园中各类软件、硬件系统的智能联动、数据融合、高效运行，元素科技自主研发一套元素智慧校园中心平台（简称中心平台），通过盖平台可助力学习实现信息技术玉教育教学深度融合，达到提高教学质量、提升管理效率、促进家校共育的目的。",//项目简介
			xmsyt:"/static/gswh04.jpg",//项目首页图路径
		},
	],
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