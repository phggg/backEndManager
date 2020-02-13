import React, { Component } from 'react'
import { Card, Table, Modal, Button, notification } from 'antd'
import { ajax } from 'utils/http'
import { pagination } from 'utils/utils'

export default class BasicTable extends Component {
  state = {
    dataSource2: [],
    loading: true
  }
  params = {
    page: 1
  }
  componentDidMount () {
    const dataSource = [
      {
        id: '0',
        userName: 'Jack',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00'
      },
      {
        id: '1',
        userName: 'Tom',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00'
      },
      {
        id: '2',
        userName: 'Lily',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00'
      },
    ]
    dataSource.map((item, index) => {
      item.key = index
    })
    this.setState({
      dataSource
    })
    this.request()
  }

  request () {
    this.setState({
      loading: true
    })
    // 获取动态数据
    ajax({
      url: '/ajax/table/list1',
      params: {
        page: this.params.page
      },
      isShowLoading: false
    })
      .then((res) => {
        let _this = this
        this.setState({
          loading: false
        })
        if (res.code === 0) {
          res.result.list.map((item, index) => {
            item.key = index
          })
          this.setState({
            dataSource2: res.result.list,
            dataSource3: res.result.list,
            selectedRowKeys2: [],
            selectedRows: null,
            pagination: pagination(res, (current) => {
              this.params.page = current
              this.request()
            })
          })
        }
      })
  }



  onRowClick = (record, index) => {
    let selectKey = [index]
    // Modal.success({
    //   title: '信息',
    //   content: `用户名: ${record.userName},用户爱好: ${record.interest}`
    // })
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    })
  }
  handleDelete = () => {
    let rows = this.state.selectedRows
    let ids = []
    rows.map((item) => {
      ids.push(item.id)
    })
    Modal.confirm({
      title: '删除提示',
      content: '您确定删除这些数据吗?',
      onOk: () => {
        this.request()
        notification.success({
          message: '删除成功!',
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
    // const locale = {
    //   filterConfirm: '确定',
    //   filterReset: '重置',
    //   emptyText: '暂无数据'
    // }
    const { selectedRowKeys } = this.state
    const { selectedRowKeys2 } = this.state
    const rowSelection = {
      type: 'radio', // 单选还是多选
      selectedRowKeys
    }
    const rowCheckSelection = {
      type: 'checkbox',
      selectedRowKeys: selectedRowKeys2,
      onChange: (selectedRowKeys2, selectedRows) => {
        this.setState({
          selectedRowKeys2,
          selectedRows
        })
      }
    }
    return (
      <div>
        <Card title='基础表格' style={{ marginBottom: 10 }}>
          <Table
            bordered
            columns={columns}
            // locale={locale}
            dataSource={this.state.dataSource}
            pagination={false} // 取消分页
          />
        </Card>
        <Card title='动态数据渲染表格' style={{ marginBottom: 10 }}>
          <Table
            bordered
            columns={columns}
            // locale={locale}
            loading={this.state.loading}
            dataSource={this.state.dataSource2}
            pagination={false} // 取消分页
          />
        </Card>
        <Card title='Mock-单选' style={{ marginBottom: 10 }}>
          <Table
            bordered
            columns={columns}
            loading={this.state.loading}
            dataSource={this.state.dataSource2}
            pagination={false} // 取消分页
            rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: () => { // 点击行
                  this.onRowClick(record, index + 1)
                },
                onMouseEnter: () => { // 鼠标移入行

                }
              }
            }}
          />
        </Card>
        <Card title='Mock-多选' style={{ marginBottom: 10 }}>
          <div style={{ marginBottom: 10 }}>
            <Button onClick={this.handleDelete}>删除</Button>
          </div>
          <Table
            bordered
            columns={columns}
            loading={this.state.loading}
            dataSource={this.state.dataSource2}
            pagination={false} // 取消分页
            rowSelection={rowCheckSelection}
          />
        </Card>
        <Card title='Mock-多选分页' style={{ marginBottom: 10 }}>
          <div style={{ marginBottom: 10 }}>
            <Button onClick={this.handleDelete}>删除</Button>
          </div>
          <Table
            bordered
            columns={columns}
            loading={this.state.loading}
            dataSource={this.state.dataSource3}
            pagination={this.state.pagination} // 取消分页
            rowSelection={rowCheckSelection}
          />
        </Card>
      </div>
    )
  }
}
