import React, { Component } from 'react'
import { Card, Row, Col, Icon, Modal } from 'antd'
export default class Gallery extends Component {
  state = {
    visible: false
  }
  openGallery = (imgSrc) => () => {
    this.setState({
      visible: true,
      currentImg: '/gallery/' + imgSrc
    })
  }
  render () {
    const imgs = [
      ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'],
      ['7.png', '8.png', '9.png', '10.png', '11.png', '12.png'],
      ['13.png', '14.png', '15.png', '16.png', '17.png', '18.png'],
      ['19.png', '20.png', '21.png', '22.png', '23.png', '24.png', '25.png'],
    ]
    const imgList = imgs.map((list) => list.map((item) =>
      <Card
        style={{ marginBottom: 10 }}
        cover={<img onClick={this.openGallery(item)} src={'/gallery/' + item}></img>}
      >
        <Card.Meta
          title="React Admin"
          description="大哥喝阔乐"
          avatar={<Icon type="twitter" />}
        />
      </Card>
    ))
    return (
      <div className='card-wrap'>
        <Row gutter={10}>
          {
            imgList.map((item, index) => {
              console.log(index);
              console.log(imgList);
              return (
                <Col md={6}>
                  {imgList[index]}
                </Col>
              )
            })
          }
        </Row>
        <Modal
          width={300}
          height={500}
          visible={this.state.visible}
          title="图片画廊"
          onCancel={() => {
            this.setState({
              visible: false
            })
          }}
          footer={null}
        >
          {<img src={this.state.currentImg} alt="" style={{ width: '100%' }} />}
        </Modal>
      </div>
    )
  }
}
