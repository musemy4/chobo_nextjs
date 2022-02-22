export interface ILeftMenu {
    name: string;
    path: string;
    icon: string;
}

export interface ILeftMenuStates {
    menus: ILeftMenu[];
    selection: string;
}