// 우리가 만들 모든 페이지의 청사진을 커스텀할수있는 장소

import NavBar from "../components/nav-bar";
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
    return (
        <div>
            <NavBar />
            <Component {...pageProps} />
        </div>
    )
    
}

export default MyApp;
