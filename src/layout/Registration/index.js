import React from 'react';
import './Registration.css';
import { Alert, Button, Form, Input, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import ApiDiContainer from '../../service/apiDiContainer';
const { Title } = Typography;

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [],
    };
  }

  inputOnChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };
  // getListOfTypes = () => {
  //   ApiDiContainer.ProxyApiAuth.authType().then((res) => {
  //     this.setState({ types: res.data });
  //   });
  // };
  componentDidMount = () => {
    // this.getListOfTypes();
  };

  render() {
    // console.log(this.state);
    return (
      <>
        {/* <img src={logo} className={'logo'} alt="logo" style={{ marginBottom: '35px' }} /> */}
        <Title level={4} className="title" style={{ marginBottom: '35px' }}>
          AR Group
        </Title>
        {/* <img className={'logo'} src={logo} alt={''} /> */}
        <Form
          onFinish={(e) => {
            this.props.registerUser(e.phone, e.login, e.password);
            console.log(e);
          }}>
          {this.props.status === 200 && (
            <div>
              <Alert message="Успешная регистрация." type="success" />
            </div>
          )}
          {this.props.status === 400 && (
            <div>
              <Alert message="Неправильные данные." type="error" />
            </div>
          )}
          {this.props.status === 403 && (
            <div>
              <Alert message="Что-то не так." type="error" />
            </div>
          )}
          {this.props.status === 409 && (
            <div>
              <Alert message="Пользователь уже существует" type="error" />
            </div>
          )}
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: 'Поле не может быть пустым!',
              },
            ]}
            style={{ marginTop: '20px' }}>
            <Input
              className={''}
              placeholder="Телефон"
              prefix={<UserOutlined className={'icons'} />}
            />
          </Form.Item>
          <Form.Item
            name="login"
            rules={[
              {
                required: true,
                message: 'Поле не может быть пустым!',
              },
            ]}>
            <Input
              className={''}
              placeholder="Логин"
              prefix={<UserOutlined className={'icons'} />}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Поле не может быть пустым!',
              },
            ]}>
            <Input.Password
              className={'inputs'}
              placeholder="Пароль"
              prefix={<LockOutlined className={'icons'} />}
            />
          </Form.Item>
          <Button className={'button'} size={'large'} htmlType="submit" type="primary">
            Регистрация
          </Button>
        </Form>
        <input name="_csrf" type="hidden" value="7fb66604-3027-48f6-bcd3-394563ec2a7f" />
      </>
    );
  }
}

export default Registration;
