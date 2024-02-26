'use client';
import { Fragment, useRef, useState } from "react"
import ProjectCard from "./projectcard";
import ProjectTag from "./projecttag";
import { motion, useInView} from 'framer-motion';

const projectsData = [
    {
        id:1,
        title:"VIVIFI Revamp",
        description:"Figma",
        image:"/images/projects/vivifi.jpg",
        tag:["All","Web"]
    },
    {
        id:2,
        title:"Celcom User Interface",
        image:"/images/projects/celcom.jpg",
        description:"Figma",
        tag:["All", "UI/UX"]
    },
    {
        id:3,
        title:"Camara Project 001",
        image:"/images/projects/camara-001.jpg",
        description:"Figma",
        tag:["All","Web"]
    },
    {
        id:4,
        title:"Camara Project 002",
        image:"/images/projects/camara-002.jpg",
        description:"Figma, React JS (React Thunk)",
        tag:["All","Web"]

    },
    {
        id:5,
        title:"Gomo Rewrad System",
        image:"/images/projects/GomoRewardSystem.jpg",
        description:"Figma",
        tag:["All","Mobile"]

    }
]


function Project(){
    const [tag, setTag] = useState("All");
    const ref= useRef(null);
    const isInView = useInView(ref, { once: true})
    const handleChangeTag = (tag) => {
        setTag(tag)
    }
    const filteredProject = projectsData.filter((project) => {
       return project.tag.includes(tag);
    })

    const cardVariants = {
        initial: { y:50, opacity: 0},
        animate: { y:0, opacity:1}
    }
    return <motion.section ref={ref} id="sec-projects">
        <div className="container mx-auto px-4">
        <h3 className="text-6xl sm:text-8xl md:text-9xl font-bold text-center text-big-header relative top-5 -z-10">My Projects</h3>
        <h3 className="text-4xl font-bold mb-4 text-center text-[#252525]">My Projects</h3>
        <div className="flex flex-row justify-center items-center gap-2 py-6">
           <ProjectTag onClick={handleChangeTag} name="All" isSelected={tag === 'All'}/>
           <ProjectTag onClick={handleChangeTag} name="Web" isSelected={tag === 'Web'}/>
        </div>
        <ul className="grid md:grid-cols-3 gap-8 md:gap-10">
        {
            filteredProject.map((project, index) => {
                return (
                    <motion.li 
                    key={index} 
                    variants={cardVariants} 
                    initial="initial" 
                    animate={isInView ? "animate" : "initial" }
                    transition={{ duration: 0.3, delay: index * 0.4}}
                    >
                    <ProjectCard  title={project.title} imgUrl={project.image} tags={project} description={project.description}/>
                    </motion.li>
                )
            })
        }
        </ul>
        </div>
    </motion.section>
}

export default Project;