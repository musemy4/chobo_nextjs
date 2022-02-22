// interface
import { ILeftMenuStates } from "./left-menu-interface";
// component
import { LeftMenuItem } from '../../components/left-menu/left-menu-item'

export default function LeftMenu({menus, selection}: ILeftMenuStates) {
    return (
        <>        
        {menus.map(item => {
            return <LeftMenuItem key={item.path} to={item.path} caption={item.name}
                                 active={selection} icon={item.icon}/>
        })}
        </>

    );
}