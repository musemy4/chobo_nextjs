// 우리가 만들 모든 페이지의 청사진을 커스텀할수있는 장소
import '../styles/globals.css'
import * as React from 'react'





const keycloakCfg = {
    url: 'http://ca-172-16-36-180.vurix.kr/auth',
    realm: 'vurix-dms',
    clientId: 'vurix-dms-platform',
}

// https://www.npmjs.com/package/@react-keycloak/nextjs

function MyApp({ Component, pageProps, cookies }: any) {
    return (
        <Component {...pageProps} />
    )
    
}

export default MyApp;
