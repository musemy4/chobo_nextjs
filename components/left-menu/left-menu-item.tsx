// react, nextjs
import React from "react";

import Link from "next/link";

import { useRouter } from 'next/router';

interface LeftMenuItemProps {
  to: string
  caption?: string
  active: string
  icon?: string
}

export const LeftMenuItem = (props: LeftMenuItemProps): JSX.Element => {
  const router = useRouter();
  return (
    <li className={props.active === props.to ? 'active: border-pink-500' : ''}>
    {/* <li className={"left-menu-item"}> */}
      {/* <Link href={props.to}> */}
      <button onClick={()=>router.push(props.to)}>
        {props.caption}
      </button>  
        
        {/* <span className="left-menu-icon">
            아이콘 들어가는곳
          {props.icon ? props.icon : <BsApp/>}
        </span>
        {props.caption ?
          <span className="left-menu-text"> {props.caption}</span> : ''
        } */}
      {/* </Link> */}
    </li>
  )
}
