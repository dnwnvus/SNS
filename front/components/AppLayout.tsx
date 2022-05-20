import React from 'react';
import Link from 'next/link';
import LoginForm from './LoginForm';
import { useSelector } from 'react-redux';
import UserProfile from './UserProfile';
import { Menu, Input, Row, Col } from 'antd';

type AppLayoutProps = {
    children: any;
}

const AppLayout = ( {children}: AppLayoutProps ) => {
    const { isLoggedIn } = useSelector((state: any) => state.user);
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>메인</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn 
                    ? <UserProfile />
                    : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                </Col>
            </Row>
        </div>
    );
};

export default AppLayout;