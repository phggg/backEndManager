import React, { Component } from 'react'
import { Card, Button, Table, Form, Select } from 'antd'

import { ajax } from 'utils/http'

const { Item: FormItem } = Form
const { Option } = Select;

export default class index extends Component {
  // 开通城市
  handleOpenCity = () => {

  }
  render () {
    const columns = [
      {
        title: '城市ID',
        dataIndex: 'id'
      },
      {
        title: '城市名称',
        dataIndex: 'name'
      },
      {
        title: '用车模式',
        dataIndex: 'mode'
      },
      {
        title: '营运模式',
        dataIndex: 'op_mode'
      },
      {
        title: '授权加盟商',
        dataIndex: 'franchisee_name'
      },
      {
        title: '城市管理员',
        dataIndex: 'city_admins'
      },
      {
        title: '城市开通时间',
        dataIndex: 'open_time'
      },
      {
        title: '操作时间',
        dataIndex: 'update_time'
      },
      {
        title: '操作人',
        dataIndex: 'sys_user_name'
      },
    ]
    return (
      <div>
        <Card>
          <FilterForm />
        </Card>
        <Card>
          <Button type='primary' onClick={this.handleOpenCity}>开通城市</Button>
          <Table
            columns={columns}
            dataSource={this.state.list}
          />
        </Card>
      </div>
    )
  }
}

@Form.create({ name: 'city' })
class FilterForm extends Component {
  render () {
    console.log(this.props)
    const { getFieldDecorator } = this.props.form
    return (
      <Form layout="inline">
        <FormItem label='城市'>
          {
            getFieldDecorator('city_id')(
              <Select
                style={{ width: 100 }}
                placeholder='选择'
              >
                <Option value='1'>北京市</Option>
                <Option value='2'>天津市</Option>
                <Option value='3'>深圳市</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label='用车模式'>
          {
            getFieldDecorator('mode')(
              <Select
                style={{ width: 100 }}
                placeholder='选择'
              >
                <Option value='1'>全部</Option>
                <Option value='2'>指定停车点模式</Option>
                <Option value='3'>禁停区模式</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label='运营模式'>
          {
            getFieldDecorator('op_mode')(
              <Select
                style={{ width: 100 }}
                placeholder='选择'
              >
                <Option value='1'>全部</Option>
                <Option value='2'>自营</Option>
                <Option value='3'>加盟</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label='加盟商授权状态'>
          {
            getFieldDecorator('auth_status')(
              <Select
                style={{ width: 100 }}
                placeholder='选择'
              >
                <Option value='1'>全部</Option>
                <Option value='2'>已授权</Option>
                <Option value='3'>未授权</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem>
          <Button type='primary' style={{ margin: '0 20px' }}>查询</Button>
          <Button>重置</Button>
        </FormItem>
      </Form>
    )
  }
}
