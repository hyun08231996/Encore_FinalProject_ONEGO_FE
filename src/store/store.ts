import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import UserStore from '@/store/modules/user'
import WriteStore from '@/store/modules/WriteStore'

export default new Vuex.Store({
	state: {

	},
	mutations: {

	},
	actions: {

	},
	modules: {
		user:UserStore,
		WriteStore,
	}
})