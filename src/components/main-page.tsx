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
        <main className="h-screen grid grid-cols-2 relative">
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
            <div className="h-full px-10 flex flex-col items-start justify-center gap-6">
                <div className="flex flex-col gap-3">
                    <h1 className="text-5xl text-blue-950 font-bold">Hi There,</h1>
                    <h1 className="text-5xl text-blue-950 font-bold">Im <span className="text-orange-500">Muhammad Fitrie</span> </h1>
                    <TypewriterWord />
                </div>
                <div>
                    {/* <button 
                        className="rounded-lg px-4 py-2 flex gap-1 items-center text-white shadow-xl duration-500 ease-in-out hover:bg-green-700 hover:transition-all hover:gap-3" 
                        title="About me!"
                        style={{backgroundColor: '#3498db'}}
                    >
                        About me!
                        <ArrowDown size="20"/>
                    </button> */}
                    <Button
                        handleOnClick={() => {}}
                    >
                        About me!
                        <ArrowDown size="20"/>
                    </Button>
                </div>
                <div className="flex gap-6 mt-7">
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
            <div className="h-full flex items-center justify-center">
                <div className="w-4/6">
                    {/* <Image 
                        src="https://picsum.photos/seed/picsum/300/300"
                        alt="avatar-image"
                        width="300"
                        height="300"
                    /> */}
                    <motion.div 
                        className="w-96 h-96 rounded-full overflow-hidden drop-shadow-xl"
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