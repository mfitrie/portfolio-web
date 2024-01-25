"use client"

import Image from "next/image";
import Button from "./Button";
import ArrowRight from "./icons/arrow-right";
import UserIcon from "./icons/user";

export default function AboutMe(){

    const downloadResume = () => {
        const fileUrl = '/RESUME FITRIE.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'RESUME FITRIE';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="h-screen grid grid-rows-6">
            <div className="row-span-1 flex justify-center items-center">
                <h2 className="text-4xl font-bold flex gap-2">
                    <UserIcon size="40" hexColor="#000" /> 
                    About Me
                </h2>
            </div>
            <div className="row-span-5 grid grid-cols-2">
                <div className="flex justify-center items-center">
                    {/* <p>Column one</p> */}
                    {/* <img
                        id="me-image"
                        className="h-3/6 w-2/6 rounded-lg drop-shadow-2xl cursor-pointer grayscale hover:grayscale-0"
                        // src="https://picsum.photos/seed/picsum/300/300"
                        src="../../public/Fitrie-casual.jpg"
                        alt="avatar-image"
                    /> */}
                    <Image
                        className="h-4/6 w-2/6 rounded-lg drop-shadow-2xl cursor-pointer grayscale hover:grayscale-0"
                        width={200}
                        height={300}
                        src="/Fitrie-casual.jpg"
                        alt="avatar-image"
                    />
                </div>
                <div className="px-8 flex flex-col justify-center gap-4">
                    <div>
                        <p className="text-2xl font-bold">I&apos;m Fitrie</p>
                        <p className="text-lg font-semibold">Full Stack Developer</p>
                    </div>
                    <div className="text-justify">
                        <p>I am a diligent and versatile professional with a profound aptitude for assimilating new skills. I possess a robust foundation in JavaScript, Node.js, TypeScript, Go, and design patterns, enabling me to proficiently develop resilient applications.</p>
                    </div>
                    <div>
                        <span className="text-blue-700">Email: </span>
                        <span>mfitrie78@gmail.com</span>
                    </div>
                    <div>
                        <span className="text-blue-700">Place: </span>
                        <span>Klang, Malaysia - 41050</span>
                    </div>
                    <div className="mt-8">
                        <Button handleOnClick={ downloadResume }>
                            Resume 
                            <ArrowRight size="20" hexColor="#fff"/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}