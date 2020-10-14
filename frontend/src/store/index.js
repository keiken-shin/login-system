import { createStore } from 'vuex'
import { getAPI } from '../axios.api';

export default createStore({
	state: {
		email: '',
		accessToken: null,
		refreshToken: null,
		userType: ''
	},
	mutations: {
		updateStorage(state, { access, refresh, email, password }){
			state.accessToken = access;
			state.refreshToken = refresh;
			state.email = email;
		},
		destroyToken(state){
			state.accessToken = null;
			state.refreshToken = null;
			state.email = '';
		}
	},
	getters:{
		loggedIn(state){
			return state.accessToken != null
		}
	},
	actions: {
		userLogin(context, credentials){
			const userData = {
				'email': credentials.email,
				'password': credentials.password
			}
			return new Promise((resolve, reject) => {
				getAPI.post('/api/token/', 
					userData, {
						headers:{
							'Content-Type': 'application/json'
						}
					}
				)
				.then(response => {
					context.commit('updateStorage', {
						access: response.data.access,
						refresh: response.data.refresh,
						email: credentials.email,
					})
					resolve()
				})
				.catch(err => {
					console.error(err);
					reject();
				})
			})
		},
		userLogout(context){
			if(context.getters.loggedIn){
				context.commit('destroyToken')
			}
		}
	},
	modules: {
	}
})
