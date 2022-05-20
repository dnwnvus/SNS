import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Avatar, Button } from 'antd';
import { LOG_OUT_REQUEST } from '../reducers/user';

const UserProfile = () => {
    const { me } = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, []);

    return (
        <Card
            actions={[]}
        >
        <Card.Meta 
            avatar={<Avatar>{me.nickname[0]}</Avatar>}
            title={me.nickname}
        />
        <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;