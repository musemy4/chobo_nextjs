// react, nextjs
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";

// component
import { Layout } from '../../components/layout'
import { LeftMenuItem } from '../../components/left-menu/left-menu-item'

//tmp data
import { menuBlog } from '../../global/navLink';

// interface
import { ILeftMenuStates } from "../../components/left-menu/left-menu-interface";
import LeftMenu from '../../components/left-menu/left-menu';

export default function Blog() {
    const selection = useRouter().pathname;
    const [state, setState] = useState<ILeftMenuStates>({
        menus: menuBlog,
        selection: ''
    });

    useEffect(()=> {
        setState({...state, selection: selection})
    }, [selection, state])

    return (
        <Layout title="Blog | Next.js + tailwind + keycloak Example">
            selection now::: {selection}
            <LeftMenu menus={state.menus} selection={state.selection}/>
            <br />
        </Layout>


    )
}