// react, nextjs
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";

// component
import { Layout } from '../../components/layout'
import { LeftMenuItem } from '../../components/left-menu/left-menu-item'

//tmp data
import { menuBlog } from '../../global/navLink';

interface MenuDisplayItem {
    name: string;
    path: string;
    icon: string;
}
interface MainFrameState {
    menus: MenuDisplayItem[];
    selection: string;
}

export default function Blog() {
    const selection = useRouter().pathname;
    const [state, setState] = useState<MainFrameState>({
        menus: menuBlog,
        selection: ''
    });

    useEffect(()=> {
        setState({...state, selection: selection})
    }, [selection, state])

    return (
        <Layout title="Blog | Next.js + tailwind + keycloak Example">
            selection now::: {selection}
            <br />
              {state?.menus.map(item => {
                return <LeftMenuItem key={item.path} to={item.path} caption={item.name}
                                     active={selection}
                                     icon={item.icon}/>
              })}
        </Layout>


    )
}