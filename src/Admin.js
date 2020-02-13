import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Switch, Redirect, Route } from 'react-router-dom'

import loadable from './utils/loadable'
import Header from '@/Header'
import Footer from '@/Footer'
import NavLeft from '@/NavLeft'
import 'pages/ui/ui.less'

const Home = loadable(() => import('pages/home'))
const Buttons = loadable(() => import('pages/ui/Buttons'))
const Modals = loadable(() => import('pages/ui/Modals'))
const Loadings = loadable(() => import('pages/ui/Loadings'))
const Notices = loadable(() => import('pages/ui/Notices'))
const Messages = loadable(() => import('pages/ui/Messages'))
const Tab = loadable(() => import('pages/ui/Tab.jsx'))
const Gallery = loadable(() => import('pages/ui/Gallery.jsx'))
const Carousels = loadable(() => import('pages/ui/Carousels.jsx'))
const Login = loadable(() => import(
  /* webpackPrefetch: true */
  /* webpackChunkName:"Login" */
  'pages/form/Login.jsx'))
const Register = loadable(() => import('pages/form/Register.jsx'))
const BasicTable = loadable(() => import('pages/table/BasicTable.jsx'))
const HighTable = loadable(() => import('pages/table/HighTable.jsx'))
const City = loadable(() => import('pages/city/index.jsx'))

export default class Admin extends Component {
  render () {
    let { match: { url } } = this.props
    return (
      <Row type='flex' className='container'>
        <Col span={3} className='nav-left'>
          <NavLeft />
        </Col>
        <Col span={21} className='main'>
          <Header />
          <Row className='content'>
            <Switch>
              <Route path={url + '/ui/buttons'} component={Buttons} />
              <Route path={url + '/ui/modals'} component={Modals} />
              <Route path={url + '/ui/loadings'} component={Loadings} />
              <Route path={url + '/ui/notification'} component={Notices} />
              <Route path={url + '/ui/messages'} component={Messages} />
              <Route path={url + '/ui/tabs'} component={Tab} />
              <Route path={url + '/ui/gallery'} component={Gallery} />
              <Route path={url + '/ui/carousel'} component={Carousels} />
              <Route path={url + '/form/login'} component={Login} />
              <Route path={url + '/form/reg'} component={Register} />
              <Route path={url + '/table/basic'} component={BasicTable} />
              <Route path={url + '/table/high'} component={HighTable} />
              <Route path={url + '/city'} component={City} />
              <Route path={url + '/home'} component={Home} />
              <Redirect exact from={url} to={url + '/home'} />
              {this.props.children}
            </Switch>
          </Row>
          <Footer />
        </Col>
      </Row>
    )
  }
}