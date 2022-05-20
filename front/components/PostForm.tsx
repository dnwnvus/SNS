import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { ADD_POST_REQUEST } from '../reducers/post';

const PostForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const { imagePaths, isAddingPost, postAdded } = useSelector((state: any) => state.post);

    useEffect(() => {
        setText('')
    }, [postAdded])

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type: ADD_POST_REQUEST,
            data: {
                text,
            },
        });
    }, []);

    const onChangeText = useCallback((e) => {
        setText(e.target.value)
    }, []);

    return (
        <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onSubmitCapture={onSubmitForm}>
            <Input.TextArea maxLength={140} placeholder="이곳에 내용을 입력해주세요." value={text} onChange={onChangeText} />
            <div style={{ marginTop: '5px' }}>
                <Button>이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={isAddingPost}>트윗</Button>
            </div>
            <div>
                {imagePaths.map((v: any) => {
                    return (
                        <div key={v} style={{ display: 'inline-block' }}>
                            <img src={`http://localhost:3066/${v}`} style={{ width: '200px' }} alt={v} />
                        <div> 
                            <Button>제거</Button>
                        </div>
                        </div>
                    );
                })}
            </div>
        </Form>
    );
};

export default PostForm;