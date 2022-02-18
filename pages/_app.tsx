// 우리가 만들 모든 페이지의 청사진을 커스텀할수있는 장소
import '../styles/globals.css'
import * as React from 'react'


import type { IncomingMessage } from 'http'
import type { AppProps, AppContext } from 'next/app'
import cookie from 'cookie'
import { SSRKeycloakProvider, SSRCookies } from '@react-keycloak/ssr'



const keycloakCfg = {
    url: 'http://ca-172-16-36-180.vurix.kr/auth',
    realm: 'vurix-dms',
    clientId: 'vurix-dms-platform',
}


interface InitialProps {
    cookies: unknown
  }

// https://www.npmjs.com/package/@react-keycloak/nextjs

function MyApp({ Component, pageProps, cookies }: AppProps & InitialProps) {
    return (
        <SSRKeycloakProvider
        keycloakConfig={keycloakCfg}
        persistor={SSRCookies(cookies)}>
            <Component {...pageProps} />
        </SSRKeycloakProvider>   
        )
    
}

function parseCookies(req?: IncomingMessage) {
    if (!req || !req.headers) {
      return {}
    }
    return cookie.parse(req.headers.cookie || '')
  }
  
  MyApp.getInitialProps = async (context: AppContext) => {
    // Extract cookies from AppContext
    return {
      cookies: parseCookies(context?.ctx?.req),
    }
  }

  
export default MyApp;
