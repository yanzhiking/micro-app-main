import Loading from '../components/Loading' //自定义公共组件
import Upload from '../components/Upload' //自定义公共组件

const shareComponents = [Loading, Upload] // 需要共享给子应用的组件
//vue插件的install方法
const install = function (Vue) {
  shareComponents.forEach((component) => {
    Vue.component(component.name, component) //注册为Vue全局组件
  })
}

export default {
  install,
}
