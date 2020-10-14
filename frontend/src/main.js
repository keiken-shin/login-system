import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresLogin)){
        if(!store.getters.loggedIn){
            next({ name: 'Login' })
        }else{
            next()
        }
    }else{
        next()
    }
})

createApp(App).use(store).use(router).mount('#app')
