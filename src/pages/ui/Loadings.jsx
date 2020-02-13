import React, { Component } from 'react'
import { Card, Spin, Icon, Alert } from 'antd'

export default class Loadings extends Component {
  render () {
    const antIcon = <Icon type="more" style={{ fontSize: 40 }} spin />;
    const antIcon2 = <Icon type="loading" style={{ fontSize: 24 }} spin />;
    return (
      <div>
        <Card title='Spin用法' className='card-wrap'>
          <Spin className='spin-wrap' size='small' />
          <Spin className='spin-wrap' />
          <Spin className='spin-wrap' size='large' />
          <Spin className='spin-wrap' size='large' />
          <Spin className='spin-wrap' indicator={antIcon} />
          <Spin className='spin-wrap' indicator={antIcon2} />
        </Card>
        <Card title='内容遮罩' className='card-wrap'>
          <Alert
            className='alert-wrap'
            showIcon
            message='React'
            description='大哥喝阔乐,大哥抽中华'
            type='info'
          />
          <Alert
            className='alert-wrap'
            showIcon
            message='React'
            description='大哥喝阔乐,大哥抽中华'
            type='warning'
          />
          <Spin>
            <Alert
              className='alert-wrap'
              showIcon
              message='React'
              description='大哥喝阔乐,大哥抽中华'
              type='success'
            />
          </Spin>
          <Spin tip='加载中 ...'>
            <Alert
              className='alert-wrap'
              showIcon
              message='React'
              description='大哥喝阔乐,大哥抽中华'
              type='success'
            />
          </Spin>
          <Spin indicator={antIcon2} tip='加载中 ...'>
            <Alert
              className='alert-wrap'
              showIcon
              message='React'
              description='大哥喝阔乐,大哥抽中华'
              type='success'
            />
          </Spin>
        </Card>
      </div>
    )
  }
}
