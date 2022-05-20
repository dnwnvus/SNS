import React from 'react';
import { List, Card, Form, Input, Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

import NicknameEditForm from '../components/NicknameEditForm';

const Profile = () => {
    return (
        <>
            <NicknameEditForm />
            <List
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md:3 }}
                size="small"
                header={<div>팔로잉 목록</div>}
                loadMore={<Button style={{ width: '100px' }}>더 보기</Button>}
                bordered
                dataSource={['루미', '노루', '미로']}
                renderItem={item => (
                    <List.Item style={{ marginTop: '20px' }}>
                        <Card actions={[<CaretRightOutlined  key="stop" type="stop" />]}><Card.Meta description={item} /></Card>
                    </List.Item>
                )}
            />
            <Form style={{ marginBottom: '20px', border: '1px solid #d9d9d9', padding: '20px' }}>
                <Input addonBefore="닉네임" />
                <Button type="primary" >수정</Button>
            </Form>
            <List
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md:3 }}
                size="small"
                header={<div>팔로워 목록</div>}
                loadMore={<Button style={{ width: '100px' }}>더 보기</Button>}
                bordered
                dataSource={['양동훈1', '양동훈2', '양동훈3']}
                renderItem={item => (
                    <List.Item style={{ marginTop: '20px' }}>
                        <Card actions={[<CaretRightOutlined key="stop" type="stop" />]}><Card.Meta description={item} /></Card>
                    </List.Item>
                )}
            />
        </>
    );
};

export default Profile;