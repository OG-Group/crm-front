import { LaptopOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, Drawer, Breadcrumb } from 'antd';
import { Link, Routes, Route } from 'react-router-dom';

import SaleCommercial from '../../modules/Commercial/SaleCommercial';
import RentCommercial from '../../modules/Commercial/RentCommercial';

import Review from '../../modules/Review/Review';
import ApiDiContainer from '../../service/apiDiContainer';

import React from 'react';
import './CRMmain.module.css';

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: `commercial`,
    icon: <LaptopOutlined />,
    label: 'Коммерческая недвижимость',
    children: [
      {
        key: 'checkInCatalog',
        label: `Проверка в каталоге`,
      },
      {
        key: 'rentCommercial',
        label: <Link to="rentCommercial">Аренда коммерческой недвижимости</Link>,
      },
      {
        key: 'sellCommercial',
        label: <Link to="saleCommercial">Продажа коммерческой недвижимости</Link>,
      },
      {
        key: 'create3_opt3',
        label: `Каталог БЦ`,
      },
    ],
  },
  {
    key: `create2`,
    icon: <UserOutlined />,
    path: 'orders',
    label: `Квартиры`,
  },
  {
    key: `create3`,
    icon: <UserOutlined />,
    label: `Коттеджи`,
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
    this.state = {
      sideMenu: false,
      path: '',
    };
    // this.token = {colorBgContainer}
  }

  componentDidMount() {
    // ApiDiContainer.ProxyApi.getAvailableOffices().then(()=>{})
  }

  openSideMenu = () => {
    this.setState({ sideMenu: true });
  };

  closeSideMenu = () => {
    this.setState({ sideMenu: false });
  };

  render() {
    return (
      <Layout>
        <Header onBreakpoint={() => alert()}>
          {/* <div>AR group</div> */}
          {window.innerWidth < 800 ? (
            <Button onClick={this.openSideMenu}>
              <MenuOutlined />
            </Button>
          ) : (
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items} />
          )}
          <Drawer
            title="Basic Drawer"
            placement="left"
            onClose={this.closeSideMenu}
            open={this.state.sideMenu}
            width={window.innerWidth}>
            <Menu style={{ border: 0 }} mode="inline" defaultSelectedKeys={['2']} items={items} />
          </Drawer>
        </Header>

        <Content
          style={{
            padding: 10,
            margin: 0,
            // minHeight: 680,
            flexGrow: 1,
            background: '#f1f1f1',
          }}>
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Routes>
            <Route path={'/'} element={<Review />} />
            <Route path={'/rentCommercial'} element={<RentCommercial link={'rentCommercial'} />} />
            <Route path={'/saleCommercial'} element={<SaleCommercial link={'saleCommercial'} />} />
            {/* <Route
                   path={this.props.match.path + 'tasks'}
                   render={(props) => (
                     <MyTasks
                     />
                   )} */}
          </Routes>
        </Content>
        {/* <Footer
          style={{
            textAlign: 'center',
          }}>
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
      </Layout>
    );
  }
}

export default CRMmain;
