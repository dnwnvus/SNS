import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';

const LoginForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const { isLoggingIn } = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    const onSubmitForm = useCallback((e: any) => {
        e.preventDefault();
        dispatch({
            type: LOG_IN_REQUEST,
            data: {
                userId: id, 
                password,
            },
        });
    }, [id, password]);

    const onChangeId = useCallback((e: any) => {
        setId(e.target.value);
    }, []);
    const onChangePassword = useCallback((e: any) => {
        setPassword(e.target.value);
    }, []);

    return (
        <Form onSubmitCapture={onSubmitForm} style={{ padding: '10px'}}>
        <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" value={id} onChange={onChangeId} required />
        </div>
        <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input name="user-password" value={password} onChange={onChangePassword} type="password" required />
        </div>
        <div style={{ marginTop: '10px' }}>
            <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
            <Link href="/signup"><a><Button>회원가입</Button></a></Link>
        </div>
        </Form>
    );
}

export default LoginForm;