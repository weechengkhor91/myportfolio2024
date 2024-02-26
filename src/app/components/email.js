'use client';
import { Fragment, useRef } from "react";

const Email = () => {
    const refEmail = useRef();
    const refSubject = useRef();
    const refMessage = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: refEmail.current.value,
            subject: refSubject.current.value,
            message: refMessage.current.value
        }
        console.log(data);
        const JSONData = JSON.stringify(data);
        const endpoint = "/api/send";
        const options = {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSONData
        }
        const response = await fetch(endpoint, options);
        const resData = await response.json();
        if( response.status === 200){
            console.log('Message sent.');
        }
    }
    return (
        <Fragment>
            <section className="py-10">
            <h3 className="text-9xl font-bold text-center text-[#f8f8f8] relative top-5 -z-10">Contact Me</h3>
            <h3 className="text-4xl font-bold mb-4 text-center text-[#252525]">Contact Me</h3>
           <div className="grid grid-cols-12 ">
                <div className="col-start-5 col-span-4">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="text-[#252525] block mb-1">
                        Your Email
                    </label>
                    <input type="email" id="email" name="email" required ref={refEmail} placeholder="katrina@gmail.com"
                    className="border border-[#cdcdcd] placeholder:-[#9ca2a9] rounded text-grey-100 p-2 block w-full"
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="text-[#252525] block mb-1">
                        Subject
                    </label>
                    <input type="text" id="subject" name="subject" required ref={refSubject} placeholder="Subject"
                    className="border border-[#cdcdcd] placeholder:-[#9ca2a9] rounded text-grey-100 p-2 block w-full"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="text-[#252525] block mb-1">
                        Message
                    </label>
                    <textarea id="message" name="message" ref={refMessage} placeholder="Message" className="border border-[#cdcdcd] placeholder:-[#9ca2a9] rounded text-grey-100 block w-full p-2"></textarea>

                </div>
                <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded block w-full">
                    Send Message
                </button>
            </form>
                </div>
           </div>

            </section>
        </Fragment>
    )
}

export default Email;