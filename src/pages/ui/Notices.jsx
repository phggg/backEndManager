import React, { Component } from 'react'
import { Card, Button, notification } from 'antd'

export default class Notices extends Component {
  openNotification = (type, placement) => () => {
    notification.config({
      placement: placement ? placement : 'topRight'
    })
    notification[type]({
      message: '大哥发阔乐了!',
      description: '上个月大哥没法阔乐和中华',
    })
  }
  render () {
    return (
      <div>
        <Card title='通知提醒框' className='card-wrap'>
          <Button
            type='primary'
            onClick={this.openNotification('success')}
          >Success</Button>
          <Button
            type='primary'
            onClick={this.openNotification('info')}
          >Info</Button>
          <Button
            type='primary'
            onClick={this.openNotification('warning')}
          >Warning</Button>
          <Button
            type='primary'
            onClick={this.openNotification('error')}
          >Error</Button>
        </Card>
        <Card title='通知提醒框' className='card-wrap'>
          <Button
            type='primary'
            onClick={this.openNotification('success', 'topLeft')}
          >Success</Button>
          <Button
            type='primary'
            onClick={this.openNotification('info', 'topRight')}
          >Info</Button>
          <Button
            type='primary'
            onClick={this.openNotification('warning', 'bottomLeft')}
          >Warning</Button>
          <Button
            type='primary'
            onClick={this.openNotification('error', 'bottomRight')}
          >Error</Button>
        </Card>
      </div>
    )
  }
}
