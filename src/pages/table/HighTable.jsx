import React, { Component } from 'react'
import { Card, Table, Badge, Button, notification, Modal } from 'antd'
import { ajax } from 'utils/http'
import { pagination } from 'utils/utils'

export default class HighTable extends Component {
  state = {
    loading: true
  }
  params = {
    page: 1
  }
  handleChange = (pagination, filters, sorter) => {
    // console.log(sorter);
    // this.setState({
    //   sortOrder: sorter.order
    // })
  }
  handleDelete = (item) => () => {
    let id = item.id
    Modal.confirm({
      title: '确认',
      content: '您确定要删除此项数据吗?',
      onOk: () => {
        notification.success({
          message: '删除成功!',
        })
        this.request()
      }
    })
  }
  componentDidMount () {
    this.request()
  }
  request () {
    this.setState({
      loading: true
    })
    // 获取动态数据
    ajax({
      url: '/ajax/table/list2',
      params: {
        page: this.params.page
      },
      isShowLoading: false
    })
      .then((res) => {
        this.setState({
          loading: false
        })
        if (res.code === 0) {
          console.log(res)
          res.result.list.map((item, index) => {
            item.key = index
          })
          this.setState({
            dataSource: res.result.list,
            pagination: pagination(res, (current) => {
              this.params.page = current
              this.request()
            })
          })
        }
      })
  }
  render () {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        render (sex) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        render (state) {
          let config = {
            1: '咸鱼一条',
            2: '风华浪子',
            3: '北大才子',
            4: '千锋才子',
            5: '创业者'
          }
          return config[state]
        }
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        render (interest) {
          let config = {
            1: '游泳',
            2: '打篮球',
            3: '踢足球',
            4: '爬山',
            5: '读书'
          }
          return config[interest]
        }
      },
      {
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        dataIndex: 'time'
      },
    ]
    const columns2 = [
      {
        title: 'id',
        fixed: 'left',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        fixed: 'left',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        render (sex) {
          return sex == 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        width: 80,
        dataIndex: 'state',
        render (state) {
          let config = {
            '1': '咸鱼一条',
            '2': '风华浪子',
            '3': '北大才子',
            '4': '百度FE',
            '5': '创业者'
          }
          return config[state];
        }
      },
      {
        title: '爱好',
        width: 80,
        dataIndex: 'interest',
        render (abc) {
          let config = {
            '1': '游泳',
            '2': '打篮球',
            '3': '踢足球',
            '4': '跑步',
            '5': '爬山',
            '6': '骑行',
            '7': '桌球',
            '8': '麦霸'
          }
          return config[abc];
        }
      },
      {
        title: '生日',
        width: 120,
        dataIndex: 'birthday'
      },
      // {
      //   title: '生日',
      //   width: 120,
      //   dataIndex: 'birthday'
      // }, {
      //   title: '生日',
      //   width: 120,
      //   dataIndex: 'birthday'
      // }, {
      //   title: '生日',
      //   width: 120,
      //   dataIndex: 'birthday'
      // }, {
      //   title: '生日',
      //   width: 120,
      //   dataIndex: 'birthday'
      // }, {
      //   title: '生日',
      //   width: 120,
      //   dataIndex: 'birthday'
      // }, {
      //   title: '生日',
      //   width: 120,
      //   dataIndex: 'birthday'
      // }, {
      //   title: '生日',
      //   width: 120,
      //   dataIndex: 'birthday'
      // }, {
      //   title: '生日',
      //   width: 120,
      //   dataIndex: 'birthday'
      // }, {
      //   title: '生日',
      //   width: 120,
      //   dataIndex: 'birthday'
      // }, {
      //   title: '生日',
      //   width: 120,
      //   dataIndex: 'birthday'
      // }, {
      //   title: '生日',
      //   width: 120,
      //   dataIndex: 'birthday'
      // }, {
      //   title: '生日',
      //   width: 120,
      //   dataIndex: 'birthday'
      // }, {
      //   title: '生日',
      //   width: 120,
      //   dataIndex: 'birthday'
      // }, {
      //   title: '生日',
      //   width: 120,
      //   dataIndex: 'birthday'
      // }, {
      //   title: '生日',
      //   width: 120,
      //   dataIndex: 'birthday'
      // }, {
      //   title: '生日',
      //   width: 120,
      //   dataIndex: 'birthday'
      // },
      {
        title: '地址',
        width: 120,
        fixed: 'right',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        width: 80,
        fixed: 'right',
        dataIndex: 'time'
      }
    ]
    const columns3 = [
      {
        title: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        render (sex) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '年龄',
        dataIndex: 'age',
        sorter: (a, b) => {
          return a.age - b.age
        },
      },
      {
        title: '状态',
        dataIndex: 'state',
        render (state) {
          let config = {
            1: '咸鱼一条',
            2: '风华浪子',
            3: '北大才子',
            4: '千锋才子',
            5: '创业者'
          }
          return config[state]
        }
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        render (interest) {
          let config = {
            1: '游泳',
            2: '打篮球',
            3: '踢足球',
            4: '爬山',
            5: '读书'
          }
          return config[interest]
        }
      },
      {
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        dataIndex: 'time'
      },
    ]
    const columns4 = [
      {
        title: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        render (sex) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '年龄',
        dataIndex: 'age',
        sorter: (a, b) => {
          return a.age - b.age
        },
      },
      {
        title: '状态',
        dataIndex: 'state',
        render (state) {
          let config = {
            1: '咸鱼一条',
            2: '风华浪子',
            3: '北大才子',
            4: '千锋才子',
            5: '创业者'
          }
          return config[state]
        }
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        render (interest) {
          let config = {
            1: <Badge status='success' text='游泳' />,
            2: <Badge status='error' text='打篮球' />,
            3: <Badge status='default' text='踢足球' />,
            4: <Badge status='processing' text='爬山' />,
            5: <Badge status='success' text='骑行' />,
            6: <Badge status='warning' text='麦霸' />,
            7: <Badge status='success' text='飙车' />,
            8: <Badge status='success' text='读书' />,
          }
          return config[interest]
        }
      },
      {
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        dataIndex: 'time'
      },
      {
        title: '操作',
        render: (text, item) => {
          return <Button type="danger" onClick={this.handleDelete(item)}>删除</Button>
        }
      }
    ]
    return (
      <div>
        <Card title='头部固定' style={{ marginBottom: 10 }}>
          <Table
            bordered
            columns={columns}
            loading={this.state.loading}
            dataSource={this.state.dataSource}
            pagination={this.state.pagination}
            scroll={{ y: 240 }}
          />
        </Card>
        <Card title='左侧固定' style={{ marginBottom: 10 }}>
          <Table
            bordered
            columns={columns2}
            loading={this.state.loading}
            dataSource={this.state.dataSource}
            pagination={this.state.pagination}
            scroll={{ x: 2585 }}
          />
        </Card>
        <Card title='年龄排序' style={{ marginBottom: 10 }}>
          <Table
            bordered
            columns={columns3}
            loading={this.state.loading}
            dataSource={this.state.dataSource}
            pagination={this.state.pagination}
          // onChange={this.handleChange}
          />
        </Card>
        <Card title='操作按钮' style={{ marginBottom: 10 }}>
          <Table
            bordered
            columns={columns4}
            loading={this.state.loading}
            dataSource={this.state.dataSource}
            pagination={this.state.pagination}
          // onChange={this.handleChange}
          />
        </Card>
      </div>
    )
  }
}
