"use client"

// import Image from "next/image";
// import { _api, Icon } from '@iconify/react';
// import fetch from 'cross-fetch';
import Link from "next/link"
import ArrowDown from "./icons/arrow-down"
import GithubIcon from "./icons/github"
import LinkedinIcon from "./icons/linkedin"
import TwitterIcon from "./icons/twitter"
import styles from '@/components/css/main-background.module.css';
import TypewriterWord from "./typewriter-word"
import Button from "./Button"
import Image from "next/image"
import { motion } from "framer-motion"

// _api.setFetch(fetch);

export default function MainPage(){
    return (
        <main className="h-screen grid grid-cols-2 relative xs:grid-cols-1 md:grid-cols-2">
            <ul className={styles.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            <div className="h-full flex flex-col items-start justify-center gap-6 xs:order-2 xs:gap-2 xs:px-0 md:px-10 md:order-1 md:gap-6">
                <div className="flex flex-col gap-3">
                    <h1 className="text-blue-950 font-bold xs:text-4xl md:text-5xl">Hi There,</h1>
                    <h1 className="text-blue-950 font-bold xs:text-4xl md:text-5xl">Im <span className="text-orange-500">Muhammad Fitrie</span> </h1>
                    <TypewriterWord />
                </div>
                <div>
                    <Button
                        handleOnClick={() => {}}
                    >
                        About me!
                        <ArrowDown size="20"/>
                    </Button>
                </div>
                <div className="flex gap-6 mt-7 sm:mt-1 md:mt-7">
                    <Link
                        href="https://www.linkedin.com/in/muhammad-fitrie-a88472199/"
                        target="_blank"
                        title="Linkedin"
                        className="drop-shadow-lg"
                    >
                        <span className="w-16 h-16 flex justify-center items-center rounded-full" style={{backgroundColor: "#2c3e50"}}>
                            <LinkedinIcon size="30" hexColor="#3498db"/>
                        </span>
                    </Link>
                    <Link
                        href="https://github.com/mfitrie"
                        target="_blank"
                        title="GitHub"
                        className="drop-shadow-lg"
                    >
                        <span className="w-16 h-16 flex justify-center items-center rounded-full" style={{backgroundColor: "#2c3e50"}}>
                            <GithubIcon size="30" hexColor="#3498db"/>
                        </span>
                    </Link>
                    <Link
                        href="https://twitter.com/_mfitrie_"
                        target="_blank"
                        title="Twitter"
                        className="drop-shadow-lg"
                    >
                        <span className="w-16 h-16 flex justify-center items-center rounded-full" style={{backgroundColor: "#2c3e50"}}>
                            <TwitterIcon size="30" hexColor="#3498db"/>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="h-full flex items-center justify-center xs:order-1 md:order-2">
                <div className="w-4/6 xs:flex xs:justify-center">
                    <motion.div 
                        className="rounded-full overflow-hidden drop-shadow-xl xs:w-64 xs:h-64 md:w-96 md:h-96"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <Image
                            className="object-cover w-full h-full"
                            src="/Fitrie-casual.jpg"
                            alt="avatar-image"
                            width={721}
                            height={1280}
                        />
                    </motion.div>
                </div>
            </div>
        </main>
    )
}