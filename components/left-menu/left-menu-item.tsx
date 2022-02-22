import Link from "next/link";
import React from "react";

interface LeftMenuItemProps {
  to: string
  caption?: string
  active: string
  icon?: string
}

export const LeftMenuItem = (props: LeftMenuItemProps): JSX.Element => {
  return (
    <li className={"left-menu-item " + (props.active === props.to ? 'active' : '')}>
    <Link href={props.to} passHref>
      <span className="left-menu-icon">
          아이콘 들어가는곳
        {/* {props.icon ? props.icon : <BsApp/>} */}
      </span>
      {props.caption ?
        <span className="left-menu-text"> {props.caption}</span> : ''
      }
    </Link>
    </li>
  )
}
