import React, { Component } from 'react'
import { Card, Button, message } from 'antd'

export default class Messages extends Component {
  showMessages = (type) => () => {
    message[type]({
      content: type
    })
  }
  state = {
    key: 'updatable'
  }
  openMessage = () => {
    message.loading({ content: 'Loading...', key: this.state.key });
    setTimeout(() => {
      message.success({ content: 'Loaded!', key: this.state.key, duration: 2 });
    }, 1000);
  };
  render () {
    return (
      <div>
        <Card title='全局提示框' className='card-wrap'>
          <Button type='primary' onClick={this.showMessages('success')}>
            Success
          </Button>
          <Button type='primary' onClick={this.showMessages('info')}>
            Info
          </Button>
          <Button type='primary' onClick={this.showMessages('warning')}>
            Warning
          </Button>
          <Button type='primary' onClick={this.showMessages('error')}>
            Error
          </Button>
          <Button type='primary' onClick={this.showMessages('loading')}>
            Loading
          </Button>
          <Button type="primary" onClick={this.openMessage}>
            Open the message box
          </Button>,
        </Card>
      </div>
    )
  }
}
