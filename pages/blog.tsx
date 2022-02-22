// react, nextjs
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";

// component
import { Layout } from '../components/layout'
import { LeftMenu } from '../components/left-menu/left-menu'
import { LeftMenuItem } from '../components/left-menu/left-menu-item'

//tmp data
import { menuBlog } from '../global/navLink';

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
            <LeftMenu>
            selection now::: {selection}
            <br />
              {state?.menus.map(item => {
                  return <div key={item.name}> {item.name} </div>;
                // return <LeftMenuItem key={item.path} to={item.path} caption={item.name}
                //                      active={selection}
                //                      icon={item.icon}/>
              })}
            </LeftMenu>
        </Layout>


    )
}