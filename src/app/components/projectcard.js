import { Fragment } from "react"
import Link from "next/link";
import { CodeBracketIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid";    

function ProjectCard({ imgUrl, title, description}){
    return (
        <Fragment>
            <div>
                <div className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden" style={{ background:`url(${imgUrl})`, backgroundSize: 'cover'}}>
                    <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                        <Link href="/" className="h-14 w-14 border-2 relative rounded-full border-[rgb(173,183,190)] hover:border-white">
                            <CodeBracketIcon className="h-10 w-10 text-[#adb7be] cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-grey"/>
                        </Link>
                    </div>
                </div>
                <div className="rounded-b-xl py-6 px-4 text-white bg-[#181818]">
                    <h4 className="text-xl font-semibold">{title}</h4>
                    <p className="text-[#adb7be]"><span><ChevronDoubleRightIcon className="h-5 w-5 inline mr-1"/></span>{description}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default ProjectCard;