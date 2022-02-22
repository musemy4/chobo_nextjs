// react, nextjs
import { useState } from 'react';
import { useRouter } from "next/router";

// component
import { Layout } from '../../components/layout'

//tmp data
import { menuVer2Data } from '../../global/navLink';

// interface
import { ILeftMenuStates } from "../../components/left-menu/left-menu-interface";
import LeftMenu from '../../components/left-menu/left-menu';
import RightContent from '../../components/right-content/right-content';

export default function MenuVer1() {
    const selection = useRouter().pathname;
    const [state, setState] = useState<ILeftMenuStates>({
        menus: menuVer2Data,
        selection: selection
    });

    return (
        <Layout title="Blog | Next.js + tailwind + keycloak Example">
            <LeftMenu menus={state.menus} selection={state.selection}/>
            <br />
            <RightContent selection={state.selection} />
        </Layout>


    )
}