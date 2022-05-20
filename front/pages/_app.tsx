import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { createStore } from 'redux';
import withRedux from 'next-redux-wrapper';
import rootReducer from '../reducers/index';

type TwitterProps = {
    Component: any;
};

export const Twitter = ({ Component }: TwitterProps) => {
    return(
    <>
        <Head>
            <title>Twitter</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.3/antd.css" />
        </Head>
        <AppLayout>
            <Component/>
        </AppLayout>
    </>
    );
};

export default withRedux((initialState: any) => {
    const store = createStore(rootReducer, initialState);
    return store;
}) (Twitter);