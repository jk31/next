import App from 'next/app'
import { setGlobal } from 'reactn';

function MyApp({ Component, pageProps }) { 
    return <Component {...pageProps} />
}

setGlobal({
    test: "test from _app"
});

export default MyApp