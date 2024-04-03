import { Fragment } from "react"
import NavLink from "./navlink"
import {  XMarkIcon} from "@heroicons/react/24/solid";
import {motion} from "framer-motion";
function MenuOverlay(props) {

    return (
        <Fragment>
            
            <motion.div 
            initial={{ opacity: 0}} 
            animate={{ opacity: 1}} 
            transition={{ duration: 0.5}}
            className="fixed bg-overall-bg h-screen top-0 right-0 w-1/2 shadow ">
            <button onClick={() => props.onClickClose(false)} className="absolute top-5 right-2 px-3 py-2">
                        <XMarkIcon className="h-5 w-5"/>
                    </button> 
            <ul className="flex flex-col py-20 items-center">
                {
                    props.links.map((item,index) => (
                        <li key={index} className="hover:text-primary-600 duration-300">
                        <NavLink href={item.path} title={item.title}/>
                        </li>
                    ))
                }
            </ul>
            </motion.div>
        </Fragment>
    )
}

export default MenuOverlay