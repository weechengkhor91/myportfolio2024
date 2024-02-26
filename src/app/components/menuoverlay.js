import { Fragment } from "react"
import NavLink from "./navlink"

function MenuOverlay(props) {

    return (
        <Fragment>
            <ul className="flex flex-col py-4 items-center">
                {
                    props.links.map((item,index) => (
                        <li key={index}>
                        <NavLink href={item.path} title={item.title}/>
                        </li>
                    ))
                }
            </ul>
        </Fragment>
    )
}

export default MenuOverlay