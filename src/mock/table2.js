import Mock from 'mockjs'

export default Mock.mock(RegExp('/ajax/table/list2' + '.'), 'get', {
  "code": 0,
  "msg": "请登录",
  "result": {
    "list|20": [
      {
        "id|+1": 1,
        userName: '@cname',
        "sex|1-2": 1,
        "age|10-50": 1,
        "state|1-5": 1,
        "interest|1-8": 1,
        birthday: "@datetime",
        address: '@county(true)',
        time: '09:00'
      }
    ],
    page: 1,
    page_size: 20,
    total: 100
  }
});