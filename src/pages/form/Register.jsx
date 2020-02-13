import React, { Component } from 'react'
import moment from 'moment'
import {
  Card,
  Form,
  Button,
  Input,
  Checkbox,
  Radio,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload,
  Icon,
  message,
  notification,
  InputNumber,
} from 'antd'

const { Item: FormItem } = Form
const { Group: RadioGroup } = Radio
const { Option } = Select;

function getBase64 (img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload (file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

@Form.create({ name: 'normal_Register' })
class Register extends Component {
  state = {
    loading: false,
  }
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    let userInfo = this.props.form.getFieldsValue()
    console.log(userInfo);
    notification.success({
      message: '大哥发阔乐了!',
      description: '上个月大哥没法阔乐和中华',
    })
  };
  render () {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 6
      },
      wrapperCol: {
        xs: 24,
        sm: 8
      }
    }
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 6
        }
      }
    }
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div>
        <Card titl='注册表单'>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <FormItem label='用户名' hasFeedback >
              {
                getFieldDecorator('userName', {
                  validateFirst: true,
                  rules: [
                    {
                      required: true,
                      message: '用户名不得为空'
                    }
                  ]
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    autoComplete='current-username'
                  />
                )
              }
            </FormItem>
            <FormItem label='密码' hasFeedback /*hasFeedback 为显示正确或错误等图标*/>
              {
                getFieldDecorator('password', {
                  validateFirst: true,
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input.Password
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Password"
                    autoComplete='current-password'
                  />,
                )
              }
            </FormItem>
            <FormItem label='性别'>
              {
                getFieldDecorator('sex', {
                  initialValue: '1'
                })(
                  <RadioGroup>
                    <Radio value='1'>男</Radio>
                    <Radio value='2'>女</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>
            <FormItem label='年龄'>
              {
                getFieldDecorator('age', {
                  initialValue: '18'
                })(
                  <InputNumber />
                )
              }
            </FormItem>
            <FormItem label='当前状态'>
              {
                getFieldDecorator('state', {
                  initialValue: '2'
                })(
                  <Select>
                    <Option value='1'>咸鱼一条</Option>
                    <Option value='2'>风华浪子</Option>
                    <Option value='3'>北大才子</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label='爱好'>
              {
                getFieldDecorator('interest', {
                  initialValue: ['2', '5']
                })(
                  <Select mode='multiple'>
                    <Option value='1'>足球</Option>
                    <Option value='2'>游泳</Option>
                    <Option value='3'>跑步</Option>
                    <Option value='4'>爬山</Option>
                    <Option value='5'>骑行</Option>
                    <Option value='6'>桌球</Option>
                    <Option value='7'>麦霸</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label='是否已婚'>
              {
                getFieldDecorator('isMarried', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Switch />
                )
              }
            </FormItem>
            <FormItem label='生日'>
              {
                getFieldDecorator('birthday', {
                  initialValue: moment('2018-08-08')
                })(
                  <DatePicker
                    showTime
                    format='YYYY-MM-DD'
                  />
                )
              }
            </FormItem>
            <FormItem label='联系地址'>
              {
                getFieldDecorator('address', {
                  initialValue: '北京市'
                })(
                  <Input.TextArea allowClear autoSize={
                    { minRows: 4, maxRows: 6 }
                  } />
                )
              }
            </FormItem>
            <FormItem label='早起时间'>
              {
                getFieldDecorator('time', {
                })(
                  <TimePicker />
                )
              }
            </FormItem>
            <FormItem label='头像'>
              {
                getFieldDecorator('userImg')(
                  <Upload
                    listType='picture-card'
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                    onChange={this.handleChange}
                    showUploadList={false}
                  >
                    {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                  </Upload>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              {
                getFieldDecorator('yes')(
                  <Checkbox>我已阅读过<a href=''>注册协议</a></Checkbox>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              <Button type='primary' htmlType="submit">注册</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Register