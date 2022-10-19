import request from '@/utils/request'
// 获取首页数据接口
const getIndexList = (data) => {
  return request({
    url: '/index',
    method: 'GET',
    data
  })
}
export default {
  getIndexList
}