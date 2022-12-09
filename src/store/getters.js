const getters = {
  token: (state) => state.login.token || '123123',
  userInfo: (state) => state.login.userInfo,
  dictionarys: (state) => state.dictionary.dictionary,
}
export default getters
