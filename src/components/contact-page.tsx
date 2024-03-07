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
        <section id="contact-page">
            <div className="grid text-white xs:grid-cols-1 xs:gap-4 xs:py-4 md:grid-cols-2 md:py-2" style={{backgroundColor: "#192a56"}}>
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