import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start, initGlobalState } from 'qiankun'
import apps from './micro-app'
import ElementUI from 'element-ui'
import { Loading } from 'element-ui'
// import Loading from '@@/micro-common/components/Loading'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })
// 覆盖element的loading
Vue.use(Loading)

let propsData = {
  sex: '男',
  age: 18,
  userName: '小东',
}
const actions = initGlobalState(propsData)
// 主项目项目监听和修改(在项目中任何需要监听的地方进行监听)
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log('改变前的值 ', prev)
  console.log('改变后的值 ', state)
})
// 将actions对象绑到Vue原型上，为了项目中其他地方使用方便
Vue.prototype.$actions = actions

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
let loadingInstance
registerMicroApps(apps, {
  beforeLoad: (app) => {
    loadingInstance = Loading.service({
      target: '#mask-container',
    })
    console.log('beforeLoad:', app.name)
    return Promise.resolve()
  },
  afterMount: (app) => {
    loadingInstance.close()
    console.log('afterMount:', app.name)
    return Promise.resolve()
  },
})
start()
