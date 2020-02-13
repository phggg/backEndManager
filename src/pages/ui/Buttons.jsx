import React, { Component } from 'react'
import { Card, Button, Icon, Radio } from 'antd'
export default class Buttons extends Component {

  state = {
    loading: true,
    size: 'default'
  }

  handleCloseLoading = () => {
    this.setState({
      loading: !this.state.loading
    })
  }

  handleChange = (e) => {
    this.setState({
      size: e.target.value
    })
  }

  render () {
    return (
      <div>
        <Card title='基础按钮' className='card-wrap'>
          <Button type='primary'>主按钮</Button>
          <Button>默认按钮</Button>
          <Button type='dashed'>虚线按钮</Button>
          <Button type='danger'>删除按钮</Button>
          <Button disabled>禁用按钮</Button>
        </Card>
        <Card title='图形按钮' className='card-wrap'>
          <Button icon='plus' type='primary'>创建</Button>
          <Button icon='edit'>编辑</Button>
          <Button icon='delete'>删除</Button>
          {/* shape指定按钮形状 */}
          <Button shape='circle' icon='search'></Button>
          <Button type='primary' icon='search'>搜索</Button>
          <Button type='primary' icon='download'>下载</Button>
        </Card>
        <Card title='loading按钮' className='card-wrap'>
          <Button type='primary' loading={this.state.loading}>确定</Button>
          <Button type='primary' shape='circle' loading={this.state.loading}></Button>
          <Button loading={this.state.loading}>点击加载</Button>
          <Button shape='circle' loading={this.state.loading}></Button>
          <Button type='primary' icon='search'>搜索</Button>
          <Button type='primary' onClick={this.handleCloseLoading}>loading开关</Button>
        </Card>
        <Card title='按钮尺寸' className='card-wrap'>
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value='small'>小</Radio>
            <Radio value='default'>中</Radio>
            <Radio value='large'>大</Radio>
          </Radio.Group>
          <Button type='primary' size={this.state.size}>尺寸</Button>
          <Button size={this.state.size}>尺寸</Button>
          <Button type='dashed' size={this.state.size}>尺寸</Button>
          <Button type='danger' size={this.state.size}>尺寸</Button>
        </Card>
        <Card title='按钮组'>
          <Button.Group>
            <Button type='primary'><Icon type="left" />返回</Button>
            <Button type='primary'>前进<Icon type="right" /></Button>
          </Button.Group>
        </Card>
      </div>
    )
  }
}
