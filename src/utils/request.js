import axios from 'axios'
// import store from '../store'
// import {
//   ElNotification
// } from 'element-plus'
// 引入封装loading加载
// import loading from './loading'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 将token发送给后台
    // const token = store.getters.token
    // if (token) config.headers.token = token
    config.headers.appid='bd9d01ecc75dbbaaefce'
    // loading.open()
    return config
  },
  (err) => {
    loading.close()
    return Promise.reject(err)
  })
// 响应拦截器
service.interceptors.response.use(
  (res) => {
    // loading.close()
    // if (res.data.msg === 'ok') {
    //   return res.data.data
    // }
    return res
  },
  (err) => {
    // loading.close()
    // _showError(err.msg || err.response.data.msg)
    return Promise.reject(err)
  })
// 统一传参为data
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}
// 响应提示信息
// const _showError = (message) => {
//   const info = message || '发生未知错误'
//   ElNotification.error(info)
// }

export default request
