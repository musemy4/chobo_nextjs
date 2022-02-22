// interface
import { ILeftMenuStates } from "./left-menu-interface";
// component
import { LeftMenuItem } from '../../components/left-menu/left-menu-item'

export default function LeftMenu({menus, selection}: ILeftMenuStates) {
    return (
        <div className="bg-slate-100 w-1/5">        
        selection now::: {selection}
        {menus.map(item => {
            return <LeftMenuItem key={item.path} to={item.path} caption={item.name}
                                 active={selection} icon={item.icon}/>
        })}
        </div>

    );
}