'use client';
import { Fragment } from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

function Banner(){
    return <Fragment>
        <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 px-4 place-items-center">
            <motion.div 
                initial={{ opacity: 0, scale: 0.5}} 
                animate={{ opacity: 1, scale: 1}} 
                transition={{ duration: 0.5}}
                className="col-span-8 text-center sm:text-left w-full place-self-center ">
          
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary mb-4 text-4xl lg:text-7xl lg:leading-normal font-extrabold block"><span>Hello, I am</span> <br/>  
                </h3>
                    <div className="mb-3"><TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Wee Cheng',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Front End Developer',
                    1000,
                    'UI /UX Designer',
                    1000
                ]}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-4 text-4xl lg:text-7xl font-extrabold"
                wrapper="span"
                speed={50}
                repeat={Infinity}
                
                /></div>
           
            </motion.div>
            <div className="col-span-4 place-self-center mt-4 lg-mt-0">
                <div className="rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 overflow-hidden w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image src="/images/personal.jpg" className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={380} height={380} alt="Wee Cheng" priority/>
                </div>
            </div>
        </div>
        </section>
    </Fragment>
}

export default Banner;