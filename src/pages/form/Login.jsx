import React, { Component } from 'react'
import { Card, Form, Input, Icon, Button, Checkbox, message } from 'antd'
import './from.less'

const { Item: FormItem } = Form
function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
@Form.create({ name: 'normal_login' })
class Login extends Component {
  // componentDidMount () { // 搭配disable的button使用,因为初始渲染时就必须检测一遍来判断按钮是否可以点击
  //   this.props.form.validateFields();
  // }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) console.log(values);
      if (!err) {
        message.success(`${values.username},登录成功,您的密码为${values.password}`)
        console.log('Received values of form: ', values);
      }
    });
  };
  render () {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username')
    // const usernameError1 = isFieldTouched('username1') && getFieldError('username1')
    const passwordError = isFieldTouched('password') && getFieldError('password')
    // const passwordError1 = isFieldTouched('password1') && getFieldError('password1')
    return (
      <div>
        {/* <Card title='登录行内表单'>
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <FormItem
              validateStatus={usernameError ? 'error' : ''}
              help={usernameError || ''}
            >
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                  autoComplete='current-Username'
                />,
              )}
            </FormItem>
            <FormItem
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                  autoComplete='current-password'
                />,
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                Log in
              </Button>
            </FormItem>
          </Form>
        </Card> */}

        <Card title='登录框' style={{ marginTop: 10 }}>
          <Form
            onSubmit={this.handleSubmit} className="login-form"
          >
            <FormItem>
              {getFieldDecorator('username', {
                validateFirst: true,
                rules: [
                  { required: true, message: '用户名不得为空' },
                  { min: 5, max: 10, message: '长度不在范围内' },
                  { pattern: /^\w+$/g, message: '用户名必须为字母或者数字' }
                ],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                  autoComplete='current-username'
                />,
              )}
            </FormItem>

            <FormItem>
              {
                getFieldDecorator('password', {
                  validateFirst: true,
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    autoComplete='current-password'
                  />,
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('remember', {
                  valuePropName: 'checked',//初始checkbox选中必须加上这两项
                  initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)
              }
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Login