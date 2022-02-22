import React from "react";
import NavBar from "./header";

import Head from 'next/head'
type Props = {
    title?: string
}

export const Layout: React.FC<Props> = ({ children, title = 'Nextjs+tailwind+keycloak' }) => {
    return (
        <div className="h-screen">
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <NavBar />
        <div className="flex">{children}</div>
        </div>
    )
}