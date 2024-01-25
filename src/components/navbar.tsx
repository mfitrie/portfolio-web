"use client"

import Link from "next/link";

export default function NavBar(){
    function handleSmoothScroll(sectionId: string){
        const e = document?.getElementById(sectionId);
        e?.scrollIntoView({
            behavior: 'smooth',
        });
    }

    return (
        // TODO: add navigation menu using daisyui
        <nav className="bg-white h-16 w-screen fixed flex items-center shadow-lg z-10 xs:hidden md:flex">
            <div className="container mx-auto px-4 flex flex-row justify-between">
            <h1 className="font-bold text-lg">Developer 1.0</h1>
            <ul className="flex flex-row gap-8">
                <li className="hover:text-blue-400 duration-200" onClick={() => {
                    handleSmoothScroll("home-page")
                }}>
                    <Link href="#">Home</Link>
                </li>
                <li className="hover:text-blue-400 duration-200" onClick={() => {
                    handleSmoothScroll("about-me")
                }}>
                    <Link href="#">About</Link>
                </li>
                <li className="hover:text-blue-400 duration-200" onClick={() => {
                    handleSmoothScroll("skills-abilities")
                }}>
                    <Link href="#">Skills</Link>
                </li>
                {/* <li className="hover:text-blue-400 duration-200">
                    <Link href="#">Education</Link>
                </li> */}
                {/* <li className="hover:text-blue-400 duration-200">
                    <Link href="#">Work</Link>
                </li>
                <li className="hover:text-blue-400 duration-200">
                    <Link href="#">Experience</Link>
                </li> */}
                <li className="hover:text-blue-400 duration-200" onClick={() => {
                    handleSmoothScroll("contact-page")
                }}>
                    <Link href="#">Contact</Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}