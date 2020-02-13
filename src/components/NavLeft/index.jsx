import React, { Component } from 'react'
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom'

import MenuConfig from 'config/menuConfig'
import { LogoWrap } from './styledNavleft'
import logo from 'assets/logo-ant.svg'
const { SubMenu } = Menu;

export default class extends Component {
  componentWillMount () {
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode
    })
  }
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={`/admin${item.key}`}>
            {item.title}
          </NavLink>
        </Menu.Item>
      )
    })
  }
  render () {
    return (
      <div>
        <LogoWrap>
          <img src={logo} alt="" />
          <h1>ANTD MS</h1>
        </LogoWrap>
        <Menu
          theme='dark'
        >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}