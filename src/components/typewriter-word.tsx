"use client"
import { Typewriter } from "react-simple-typewriter"

const listCapability = [
    'Fullstack Developer',
    'Back-End Developer',
    'Front-End Developer',
    'AWS Developer'
]

export default function TypewriterWord(){
    return (
        <h2 className="text-2xl font-semibold">
            I am {' '}
            <span id="typewriter-animation" className="text-orange-700">
                <Typewriter
                    words={listCapability}
                    loop={false}
                    cursor
                    cursorBlinking
                    typeSpeed={80}
                    deleteSpeed={80}
                    delaySpeed={1500}
                />
            </span>
        </h2>
    )
}