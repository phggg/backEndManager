import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'

export default class Modals extends Component {

  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false
  }

  handleOpen = (type) => () => {
    this.setState({
      [type]: true
    })
  }

  handleConfirm = (type) => () => {
    Modal[type]({
      title: '是否确认',
      content: '大哥真不喝可乐?',
      onOk () {
        console.log('ok')
      },
      onCancel () {
        console.log('cancle');
      }
    })
  }

  render () {
    return (
      <div>
        <Card title='基础模态框' className='card-wrap'>
          <Button type='primary' onClick={this.handleOpen('showModal1')}>Open</Button>
          <Button type='primary' onClick={this.handleOpen('showModal2')}>自定义页脚</Button>
          <Button type='primary' onClick={this.handleOpen('showModal3')}>顶部20px弹框</Button>
          <Button type='primary' onClick={this.handleOpen('showModal4')}>水平垂直居中</Button>
        </Card>
        <Card title='信息确认框' className='card-wrap'>
          <Button type='primary' onClick={this.handleConfirm('confirm')}>Confirm</Button>
          <Button type='primary' onClick={this.handleConfirm('info')}>Info</Button>
          <Button type='primary' onClick={this.handleConfirm('success')}>Success</Button>
          <Button type='primary' onClick={this.handleConfirm('warning')}>Warning</Button>
          <Button type='primary' onClick={this.handleConfirm('error')}>Error</Button>
        </Card>
        <Modal
          title='React'
          visible={this.state.showModal1}
          onCancel={() => {
            this.setState({
              showModal1: false
            })
          }}
        >
          <p>大哥喝阔乐</p>
        </Modal>
        <Modal
          title='React'
          visible={this.state.showModal2}
          okText='下一步'
          cancelText='大哥,算了'
          onCancel={() => {
            this.setState({
              showModal2: false
            })
          }}
        >
          <p>大哥喝阔乐</p>
        </Modal>
        <Modal
          title='React'
          visible={this.state.showModal3}
          style={{ top: 20 }}
          onCancel={() => {
            this.setState({
              showModal3: false
            })
          }}
        >
          <p>大哥喝阔乐</p>
        </Modal>
        <Modal
          title='React'
          visible={this.state.showModal4}
          centered={true}
          onCancel={() => {
            this.setState({
              showModal4: false
            })
          }}
        >
          <p>大哥喝阔乐</p>
        </Modal>
      </div>
    )
  }
}
