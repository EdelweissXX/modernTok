import '../styles/globals.scss'
import 'antd/dist/antd.css'
import { AppProps } from 'next/app'
import { Provider } from "react-redux";
import store from '../src/redux/index'
import {useEffect, useState} from "react";
function MyApp({ Component, pageProps }: AppProps) {
    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }
    if (typeof window === 'undefined') {
        return <></>;
    } else {
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        )
    }

}

export default MyApp
