import React from "react";

const ProjectTag = ({name, onClick,isSelected}) => {
    const buttonStyles = isSelected ? 'text-black bg-purple-500' : "text-[#adb7be] border-slate-600 hover:border-purple "
    return (
        <button onClick={() => onClick(name)} className={`${buttonStyles} border-2 rounded-full px-6 py-2 text-xl cursor-pointer`}>
             {name}
        </button>
    )
}

export default ProjectTag;