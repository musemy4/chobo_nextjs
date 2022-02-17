// 우리가 만들 모든 페이지의 청사진을 커스텀할수있는 장소
import Layout from "../components/layout";
import '../styles/globals.css'
import cookie from 'cookie'
import * as React from 'react'
import { IncomingMessage } from 'http'
import { AppProps, AppContext } from 'next/app'

import { SSRKeycloakProvider, Persistors } from '@react-keycloak/nextjs'
import { KeycloakCookies } from  '@react-keycloak/nextjs'

const keycloakCfg = {
  realm: '',
  url: '',
  clientId: ''
}

// https://www.npmjs.com/package/@react-keycloak/nextjs

function MyApp({ Component, pageProps, cookies }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
    
}

export default MyApp;
