"use client"

import Image from "next/image";
import Button from "./Button";
import ArrowRight from "./icons/arrow-right";
import UserIcon from "./icons/user";
import Container from "./container";

export default function AboutMe(){
    return (
        <Container>

            <section id="about-me" className="h-screen grid grid-rows-6">
                <div className="row-span-1 flex justify-center items-center">
                    <h2 className="text-4xl font-bold flex gap-2">
                        <UserIcon size="40" hexColor="#000" /> 
                        About Me
                    </h2>
                </div>
                <div className="row-span-5 grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2">
                    <div className="justify-center items-center xs:hidden md:flex">
                        <Image
                            className="h-4/6 w-2/6 rounded-lg drop-shadow-2xl cursor-pointer grayscale hover:grayscale-0"
                            width={200}
                            height={300}
                            src="/fitrie-casual-2.jpg"
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
                    </div>
                </div>
            </section>
        </Container>
    )
}