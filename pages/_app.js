// 우리가 만들 모든 페이지의 청사진을 커스텀할수있는 장소

import Layout from "../components/layout";
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
    
}

export default MyApp;
