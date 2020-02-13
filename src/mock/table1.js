import Mock from 'mockjs'

export default Mock.mock(RegExp('/ajax/table/list1' + '.'), 'get', {
  "code": 0,
  "msg": "请登录",
  "result": {
    "list|10": [
      {
        "id|+1": 1,
        userName: '@cname',
        "sex|1-2": 1,
        "state|1-5": 1,
        "interest|1-5": 1,
        birthday: "@datetime",
        address: '@county(true)',
        time: '09:00'
      }
    ],
    page: 5,
    page_size: 10,
    total: 100
  }
});