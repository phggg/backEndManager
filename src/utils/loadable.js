import React from 'react';
import Loadable from 'react-loadable';
import { Spin } from 'antd'
//通用的过场组件
const loadingComponent = () => {
  return (
    <div style={{height: '60vh', display: 'flex'}}>
      <Spin className='spinWrap' size="large" tip="Loading..." />
    </div>
  )
}

//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader, loading = loadingComponent) => {
  return Loadable({
    loader,
    loading
  });
}