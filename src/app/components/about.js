'use client';
import { Fragment, useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./tab";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const TAB_DATA = [
    {
        title:"Skills",
        id:"skills",
        content:(
            <ul className="circle pl-4">
                <li>React JS</li>
                <li>Next JS</li>
                <li>Photoshop</li>
                <li>Figma</li>
                <li>HTML</li>
                <li>Bootstrap CSS</li>
                <li>Javascript</li>
            </ul>
        )
    },
    {
        title: "Education",
        id:"education",
        content:(
            <div className="tab-wrapper">
                <div className="tab-detail">
                    <div className="tab-header">Universiti Teknikal Malaysia Melaka(UTeM), Malacca - Degree </div>
                    <div className="tab-year">Sept 2011 - Feb 2015</div>
                    <div className="tab-title">Bachelor of Computer Science in Interactive Media</div>
                </div>
                <div className="tab-detail">
                    <div className="tab-header">Institut Bukit Mertajam(IBM), Bukit Mertajam-Penang - STPM </div>
                    <div className="tab-year">Apr 2009 - Dec 2010</div>
                    <div className="tab-title">Sijil Tinggi Pelajaran Malaysia</div>
                </div>
                <div className="tab-detail">
                    <div className="tab-header">SMK Raja Lope Nor Rashid, Perak - SPM  </div>
                    <div className="tab-year">Dec 2008</div>
                    <div className="tab-title">Sijil Pelajaran Malaysia </div>
                </div>

            </div> // tab wrapper
        )
    }
]
function About(){
    const [tab,setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleChangeTab = (id) => {
        startTransition(()=> {
            setTab(id);
        })
    }
     return (
        <section id="sec-about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about.jpg" width={500} height={500} priority alt="About" className="rounded-xl"/>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h3 className="text-6xl sm:text-8xl md:text-8xl font-bold text-left text-big-header relative top-5 -z-10">About Me</h3>
                <h3 className="text-4xl font-bold mb-4 text-left text-my-color">About Me</h3>
                <div className="flex mb-2">
                <MapPinIcon className="h-5 w-5"/>&nbsp;&nbsp;&nbsp;37, Jalan Rumah Tinggi, #12-435, Singapore 150037.
                </div>
                <div className="flex mb-2">
                <PhoneIcon className="h-5 w-5"/>&nbsp;&nbsp;&nbsp;<a href="https://api.whatsapp.com/send?phone=6583998784" target="_blank">+65 8399 8784</a> (Whatsapp) / <a href="tel:+601157646683">+6011 5764 6683 </a>
                </div>
                <div className="flex mb-2">
                <EnvelopeIcon className="h-5 w-5"/>&nbsp;&nbsp;&nbsp;<a href="mailto:weechengkhor911002@gmail.com" target="_blank">weechengkhor911002@gmail.com</a>
                </div>
                
        




                    <div className="flex flex-row mt-8">
                        <TabButton selectTab={()=> handleChangeTab("skills")} active={tab=== "skills"}>
                            Skills
                        </TabButton>
                        <TabButton selectTab={()=> handleChangeTab("education")} active={tab=== "education"}>
                            Education
                        </TabButton>

                    </div>
                    <div className="mt-8">
                        {
                            TAB_DATA.find((item) => item.id === tab).content
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About;