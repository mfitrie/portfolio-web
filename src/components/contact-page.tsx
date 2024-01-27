"use client"

import Image from "next/image"
import Button from "./Button"
import { Icon } from "@iconify/react"
import Link from "next/link"
import LinkedinIcon from "./icons/linkedin"
import GithubIcon from "./icons/github"
import TwitterIcon from "./icons/twitter"

export default function ContactPage(){
    return (
        <section id="contact-page" className="grid grid-rows-6 md:h-screen">
            <div className="row-span-1 flex justify-center items-center">
                <h2 className="text-4xl font-bold flex gap-2 items-center">
                    <Icon icon="ri:shake-hands-line"/>
                    Get In Touch
                </h2>
            </div>
            <div className="row-span-4 grid rounded-lg shadow-xl m-5 xs:grid-cols-1 md:grid-cols-2">
                <div className="flex justify-center items-center">
                    <Image
                        src="/developer-ilustration.jpg"
                        width={400}
                        height={400}
                        alt="ilustration-image"
                    />
                </div>
                <div className="flex flex-col gap-5 justify-center items-center">
                    <div className="group relative w-72 md:w-80 lg:w-96">
                        <label htmlFor="1" className="block w-full pb-1 text-sm font-bold text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Name</label>
                        <input id="1" type="text" placeholder="Enter name" className="peer border border-gray-400 h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400" />
                    </div>
                    <div className="group relative w-72 md:w-80 lg:w-96">
                        <label htmlFor="2" className="block w-full pb-1 text-sm font-bold text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Email</label>
                        <input id="2" type="text" placeholder="Enter email" className="peer border border-gray-400 h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400" />
                    </div>
                    <div className="group relative w-72 md:w-80 lg:w-96">
                        <label htmlFor="3" className="block w-full pb-1 text-sm font-bold text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Phone</label>
                        <input id="3" type="text" placeholder="Enter phone number" className="peer border border-gray-400 h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400" />
                    </div>
                    <div className="group relative w-72 md:w-80 lg:w-96">
                        <label htmlFor="4" className="block w-full pb-1 text-sm font-bold text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Message</label>
                        <textarea id="4" placeholder="Enter message" className="peer border border-gray-400 h-20 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400" />
                    </div>
                    <div>
                        <Button
                            handleOnClick={ () => {} }
                        >
                            <span>Submit</span>
                            <Icon icon="mingcute:send-line"/>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="row-span-1 grid text-white xs:grid-cols-1 xs:gap-4 xs:py-4 md:grid-cols-2 md:py-2" style={{backgroundColor: "#192a56"}}>
                <div className="px-4 flex flex-col gap-4">
                    <span className="text-lg font-semibold ">Fitrie Portfolio</span>
                    <div className="flex flex-col">
                        <span className="text-sm">Thank you for visiting my personal portfolio website</span>
                        <span className="text-sm">Connect with me over socials. 🚀</span>
                    </div>
                </div>
                <div className="px-4 grid grid-cols-2 xs:gap-5 md:gap-0">
                    <div className="flex flex-col gap-2">
                        <span className="text-lg font-semibold ">Contact Info</span>
                        <div className="flex flex-col">
                            <span className="text-sm flex flex-row items-center gap-2">
                                <Icon className="text-orange-500" icon="eva:email-outline" width="20"/>
                                mfitrie78@gmail.com
                            </span>
                            <span className="text-sm flex flex-row items-center gap-2">
                                <Icon className="text-orange-500" icon="mdi:address-marker-outline" width="20"/>
                                Klang, Malaysia - 41050
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <Link
                            href="https://www.linkedin.com/in/muhammad-fitrie-a88472199/"
                            target="_blank"
                            title="Linkedin"
                            className="drop-shadow-lg"
                        >
                            <span className="w-8 h-8 flex justify-center items-center rounded-full" style={{backgroundColor: "#2c3e50"}}>
                                <LinkedinIcon size="20" hexColor="#3498db"/>
                            </span>
                        </Link>
                        <Link
                            href="https://github.com/mfitrie"
                            target="_blank"
                            title="GitHub"
                            className="drop-shadow-lg"
                        >
                            <span className="w-8 h-8 flex justify-center items-center rounded-full" style={{backgroundColor: "#2c3e50"}}>
                                <GithubIcon size="20" hexColor="#3498db"/>
                            </span>
                        </Link>
                        <Link
                            href="https://twitter.com/_mfitrie_"
                            target="_blank"
                            title="Twitter"
                            className="drop-shadow-lg"
                        >
                            <span className="w-8 h-8 flex justify-center items-center rounded-full" style={{backgroundColor: "#2c3e50"}}>
                                <TwitterIcon size="20" hexColor="#3498db"/>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}