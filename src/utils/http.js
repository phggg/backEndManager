import axios from 'ts-axios-bd'
import { Modal } from 'antd'
export const get = ({
  url,
  params = {}
}) => {
  return axios({
    url,
    params
  })
    .then((result) => {
      return result.data
    })
}

export const ajax = ({
  url,
  params = {},
  isShowLoading = false
}) => {
  let loading
  if (isShowLoading !== false) {
    loading = document.getElementById('ajaxLoading')
    loading.style.display = 'block'
  }
  return new Promise((resolve, reject) => {
    axios({
      url,
      params
    })
      .then((result) => {
        if (isShowLoading !== false) {
          loading.style.display = 'none'
        }
        if (result.status === 200) {
          let res = result.data
          if (res.code === 0) {
            resolve(res)
          } else {
            Modal.success({
              title: '提示',
              content: res.msg
            })
          }
        } else {
          reject(result.data)
        }
      })
  })
}
export const post = ({
  url,
  method = 'post',
  data = ''
}) => {
  return axios({
    method,
    url,
    data
  })
    .then((result) => {
      return result.data
    })
}