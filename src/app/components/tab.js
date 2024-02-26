import { Fragment } from "react";
import { motion } from "framer-motion";

const variants = {
     default : { width: 0},
     active : { width: "calc(100% - 0.75rem)"}
}
function TabButton({active, selectTab, children}){
    const buttonClasses = active ? 'text-black border-black': 'text-[#adb7be] border-purple-500'
    return (
        <Fragment>
            <button onClick={selectTab}>
                <div className={`mr-3 font-semibold hover:text-grey ${buttonClasses}`}>
                    {children}
                </div>
                <motion.div 
                animate={active ? "active" : "default"} 
                variants={variants}
                className="h-1 bg-primary-500 mt-2 mr-3"
                >
              

                </motion.div>
            </button>
        </Fragment>
    )
}

export default TabButton;