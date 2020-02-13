import React, { Component } from 'react'
import { Card, Tabs, message, Icon } from 'antd'

const { TabPane } = Tabs;
export default class Tab extends Component {
  newTabIndex = 0
  callback = (key) => {
    console.log(key);
    message.info('进入页签: ' + key)
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }
  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  }
  componentDidMount () {
    const panes = [
      {
        title: 'Tab1',
        content: 'tab11111',
        key: '1'
      },
      {
        title: 'Tab2',
        content: 'tab2222',
        key: '2'
      },
      {
        title: 'Tab3',
        content: 'tab3333',
        key: '3'
      },
    ]
    this.setState({
      activeKey: panes[0].key,
      panes
    })
  }
  state = {
    panes: []
  }
  render () {
    return (
      <div>
        <Card title='Tab页签' className='card-wrap'>
          <Tabs defaultActiveKey='2' onChange={this.callback}>
            <TabPane tab="Tab 1" key="1">
              大哥喝阔乐
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              大哥抽中华
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              大哥吸大麻
            </TabPane>
            <TabPane disabled tab="Tab 4" key="4">
              大哥吸大麻
            </TabPane>
          </Tabs>
        </Card>
        <Card title='Tab带图的页签' className='card-wrap'>
          <Tabs defaultActiveKey='2' onChange={this.callback}>
            <TabPane
              tab={
                <>
                  <Icon type='plus' />
                  tab 1
                </>
              }
              key="1">
              大哥喝阔乐
            </TabPane>
            <TabPane
              tab={
                <>
                  <Icon type='edit' />
                  tab 2
                </>
              }
              key="2">
              大哥抽中华
            </TabPane>
            <TabPane
              tab={
                <>
                  <Icon type='delete' />
                  tab 3
                </>
              }
              key="3">
              大哥吸大麻
            </TabPane>
            <TabPane
              disabled
              tab={
                <>
                  <Icon type='plus' />
                  tab 4
                </>
              }
              key="4">
              大哥吸大麻
            </TabPane>
          </Tabs>
        </Card>
        <Card title='可编辑的页签' className='card-wrap'>
          <Tabs
            defaultActiveKey='1'
            onChange={this.callback}
            type='editable-card'
            onEdit={this.onEdit}
          >
            {
              this.state.panes.map((panel) => {
                return (
                  <TabPane
                    tab={panel.title}
                    key={panel.key}
                  >
                    {panel.content}
                  </TabPane>
                )
              })
            }
          </Tabs>
        </Card>
      </div>
    )
  }
}
