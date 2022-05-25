import '../styles/globals.scss'
import 'antd/dist/antd.css'
import {AppProps} from 'next/app'
import {Provider} from "react-redux";
import store from '../src/redux/index'
import {useEffect, useState} from "react";
import Head from "next/head";

function MyApp({Component, pageProps,router}: AppProps) {

    const [showChild, setShowChild] = useState(false);

    // console.log(pageProps)
    useEffect(() => {
        setShowChild(true);
    }, []);

    //防止UI组件报错
    if (!showChild) {
        return null;
    }

    if (typeof window === 'undefined') {
        return <></>;
    } else {

        return (
            <div>
                <Head>
                    <title>{'Index'}</title>
                    <meta name="description" content={""}/>
                </Head>
                <Provider store={store}>

                    <Component {...pageProps} />
                </Provider>
            </div>
        )
    }

}

export default MyApp
