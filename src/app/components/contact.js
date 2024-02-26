import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
    return <>
    <section className="py-20" id="sec-contact">
        <div className="grid">
            <div className="col-span-12">
                <h3 className="text-center text-6xl sm:text-8xl md:text-9xl font-bold text-left text-big-header relative top-5 -z-10">Contact Me</h3>
                <h3 className="text-center text-4xl font-bold mb-4 text-left text-my-color">Contact Me</h3>
                <div className="flex flex-row justify-center items-center py-5">
                <Link href="https://www.linkedin.com/in/khor-wee-cheng" target="_blank" className="hover:text-link-hover"><FaLinkedin size={24}/></Link>&nbsp;&nbsp;&nbsp;
                <Link href="mailto:weechengkhor911002@gmail.com" target="_blank" className="hover:text-link-hover"><FaEnvelope size={24}/></Link>&nbsp;&nbsp;&nbsp;
                <Link href="https://github.com/weechengkhor91" target="_blank" className="hover:text-link-hover"><FaGithub size={24}/></Link>
                </div>
            </div>
        </div>
        
    </section>
    </>
}

export default Contact;