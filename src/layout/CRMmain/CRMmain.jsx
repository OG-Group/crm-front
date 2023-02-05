import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { Link, Routes, Route } from 'react-router-dom';
import CreateAdt from '../../modules/CreateAdt/CreateAdt';
import Review from '../../modules/Review/Review';
import ApiDiContainer from '../../service/apiDiContainer';

import React from 'react';
import './CRMmain.module.css';

const { Header, Content, Sider } = Layout;

const items = [
  {
    key: `create`,
    icon: <LaptopOutlined />,
    label: <Link to="create">Создание объявления</Link>,
  },
  {
    key: `create2`,
    icon: <UserOutlined />,
    path: 'orders',
    label: `Еще меню`,
  },
  {
    key: `create3`,
    icon: <UserOutlined />,
    label: `Еще меню с подменю`,
    children: [
      {
        key: 'create3_opt1',
        label: `option1`,
      },
      {
        key: 'create3_opt2',
        label: `option2`,
      },
      {
        key: 'create3_opt3',
        label: `option3`,
      },
    ],
  },
];

class CRMmain extends React.Component {
  constructor(props) {
    super(props);
    // this.token = {colorBgContainer}
  }

  componentDidMount() {
    // ApiDiContainer.ProxyApi.getAvailableOffices().then(()=>{})
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
        <Sider
          width={300}
          style={{
            // overflow: 'auto',
            height: '100vh',
            // position: 'fixed',
            borderRight: 2,
          }}>
          <Header className="header">
            <div className="logo" />
            <Link to="/">
              <div style={{ color: 'white' }}>Аренда офисов</div>
            </Link>
            {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
          </Header>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,

              // background: '#f5f5f5',
            }}
            items={items}
          />
        </Sider>
        <Layout>
          <Header className="header">
            {/* <div className="logo" /> */}
            <div style={{ color: 'white' }}>((()))</div>
            {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
          </Header>

          <Content
            style={{
              padding: 24,
              margin: 0,
              // minHeight: 680,
              flexGrow: 1,
              background: '#ffffff',
            }}>
            {/* Тут какая-то важная инфа, может быть собирать стату по объявлениям и выводить сюда */}
            <Routes>
              <Route path={'/'} element={<Review />} />
              <Route path={'/create'} element={<CreateAdt />} />
              {/* <Route
                  path={this.props.match.path + 'tasks'}
                  render={(props) => (
                    <MyTasks
                    />
                  )} */}
            </Routes>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default CRMmain;
