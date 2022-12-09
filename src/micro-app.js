import store from '@/store'
// import { Loading } from 'element-ui'
import shareComponent from '../src/utils/shareComponent.js'

const microApps = [
  {
    name: 'app-ebill',
    entry: '//localhost:8082',
    activeRule: '/app/app-ebill',
  },
  {
    name: 'app-erp',
    entry: '//localhost:8081',
    activeRule: '/app/app-erp',
  },
]
const { token, userInfo, dictionarys } = store.getters
// 全局子应用加载动画
// let loadingInstance = {}
const apps = microApps.map((item) => {
  return {
    ...item,
    container: '#sub-micro-container', // 子应用挂在的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      globeData: { token, userInfo, dictionarys },
      shareComponent, // 下发公共组件
    },
    loader: (loading) => {
      console.log('loading: ', loading)
    },
  }
})
export default apps
