import React, { Component } from 'react'
import { Row, Col } from 'antd'

import { formateDate } from 'utils/utils'
import { get } from 'utils/http'
import './index.less'
export default class extends Component {
  state = {}
  async componentDidMount () {
    this.setState({
      userName: '庞浩',
      sysTime: formateDate()
    })
    setInterval(() => {
      let sysTime = formateDate()
      this.setState({
        sysTime
      })
    }, 1000);
    let city = '北京'
    let res = await get({
      url: `/api/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    })
    // let dayPictureUrl = res.results[0].weather_data[0].dayPictureUrl
    // let weather = res.results[0].weather_data[0].weather
    this.setState({
      // dayPictureUrl,
      // weather
    })
  }

  render () {
    return (
      <div className='header'>
        <Row className='header-top'>
          <Col span={24}>
            <span>
              欢迎, {this.state.userName ? this.state.userName : ''}
            </span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className='bread-crumb'>
          <Col span={4} className='bread-crumb-title'>
            首页
          </Col>
          <Col span={20} className='weather'>
            <span className='data'>{this.state.sysTime}</span>
            <span className='weather-img'>
              <img className='dayPictureUrl' src={this.state.dayPictureUrl} alt="" />
            </span>
            <span className='weather-detail'>{this.state.weather}</span>
          </Col>
        </Row>
      </div>
    )
  }
}