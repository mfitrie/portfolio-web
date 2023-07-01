// import Image from "next/image";
// import { _api, Icon } from '@iconify/react';
// import fetch from 'cross-fetch';
import Link from "next/link"
import ArrowDown from "./icons/arrow-down"
import GithubIcon from "./icons/github"
import LinkedinIcon from "./icons/linkedin"
import TwitterIcon from "./icons/twitter"

// _api.setFetch(fetch);

export default function MainPage(){
    return (
        <main className="h-screen grid grid-cols-2">
            <div className="h-full px-10 flex flex-col items-start justify-center gap-6">
                <div className="flex flex-col gap-3">
                    <h1 className="text-5xl text-blue-950 font-bold">Hi There,</h1>
                    <h1 className="text-5xl text-blue-950 font-bold">Im <span className="text-orange-500">Muhammad Fitrie</span> </h1>
                    <h2 className="text-lg font-semibold">I am Fullstack Developer</h2>
                </div>
                <div>
                    <button className="bg-green-500 rounded-lg px-4 py-2 flex gap-1 items-center text-white shadow-xl hover:bg-green-700 hover:transition-all hover:gap-3">
                        Click me!
                        <ArrowDown size="20"/>
                    </button>
                </div>
                <div className="flex gap-6 mt-7">
                    <Link
                        href="https://www.linkedin.com/in/muhammad-fitrie-a88472199/"
                    >
                        <span className="w-16 h-16 flex justify-center items-center rounded-full" style={{backgroundColor: "#2c3e50"}}>
                                <LinkedinIcon size="30" hexColor="#3498db"/>
                        </span>
                    </Link>
                    <Link
                        href="https://github.com/mfitrie"
                    >
                        <span className="w-16 h-16 flex justify-center items-center rounded-full" style={{backgroundColor: "#2c3e50"}}>
                            <GithubIcon size="30" hexColor="#3498db"/>
                        </span>
                    </Link>
                    <Link
                        href="https://twitter.com/_mfitrie_"
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
                    <img
                        className="h-full w-full rounded-full drop-shadow-xl"
                        src="https://picsum.photos/seed/picsum/300/300"
                        alt="avatar-image"
                    />
                </div>
            </div>
        </main>
    )
}