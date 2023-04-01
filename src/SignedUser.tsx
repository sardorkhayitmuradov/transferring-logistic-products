// import { Route, Routes } from 'react-router-dom';
// import { routes } from './Utils/routes';

import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import './index.css';

const { Header, Sider, Content } = Layout;

const SignedUser: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: '100%' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint='lg'
        collapsedWidth='0'
        style={{ height: '100vh' }}
      >
        <div className='text-white text-center text-[20px] h-[32px] m-4 bg-[#ffffff4d]'>
          Logo
        </div>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Dashboard'
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Clients',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Products',
            },
          ]}
        />
      </Sider> 
      <Layout className='site-layout' style={{ height: '100vh' }}>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
        content
        </Content>
      </Layout>
    </Layout>
  );
};

export default SignedUser;
