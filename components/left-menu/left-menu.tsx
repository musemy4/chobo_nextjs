import React from "react"

export const LeftMenu = (props: { children?: React.ReactNode}): JSX.Element => {
    return (
        <div className="left-menu">
            <ul>
                {props.children ? props.children : ''}
            </ul>
        </div>
    )
}