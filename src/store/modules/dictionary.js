// import { getDictAll } from '@/api/global/home-api';

// 驼峰转换
const hump = (str) => {
  str = str.toLowerCase()
  const list = str.split('')
  list.forEach((item, index) => {
    if (item === '_') {
      list[index + 1] = list[index + 1].toUpperCase()
    }
  })
  return list.join('').replace(/_/g, '')
}
// 对象转数组
const objToArr = (obj) => {
  const list = []
  if (obj) {
    const keys = Object.keys(obj)
    keys.forEach((key) => {
      list.push({
        code: key,
        desc: obj[key],
      })
    })
  }

  return list
}
const state = {
  // 字典集
  dictionary: {},
}

const mutations = {
  SAVE_DICTIONARY(state, dictionary) {
    // 转数组
    const keys = Object.keys(dictionary)
    keys.forEach((key) => {
      // 转驼峰 且 对象转数组
      dictionary[hump(key)] = objToArr(dictionary[key])
      // 删除原对象
      delete dictionary[key]
    })
    // 合并基础产品类型
    state.dictionary = dictionary
  },
  CLEAR_DICTIONARY(state) {
    state.dictionary = {}
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
