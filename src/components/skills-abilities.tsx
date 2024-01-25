"use client"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"


export default function SkillsAbilities(){
    return (
        <div className="h-screen grid grid-row-6">
            <div className="row-span-1 flex justify-center items-center">
                <h2 className="text-4xl font-bold">
                    Skills & Abilities
                </h2>
            </div>
            <div className="row-span-5 p-4">
                <div className="h-full p-4 grid grid-rows-5 border rounded-xl gap-5 bg-black/10">
                    <div className="grid grid-cols-6 gap-5">
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="devicon:react" width={40}/>
                            <span>React.js</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="skill-icons:svelte" width={40}/>
                            <span>Svelte</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="logos:vue" width={40}/>
                            <span>Vue.js</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="logos:bootstrap" width={40}/>
                            <span>Bootstrap</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="simple-icons:chakraui" width={40}/>
                            <span>Chakra UI</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="logos:tailwindcss-icon" width={40}/>
                            <span>Tailwind CSS</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-5">
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="logos:nodejs" width={40}/>
                            <span>Node.js</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="logos:go" width={40}/>
                            <span>Go</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="devicon:java" width={40}/>
                            <span>Java</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="logos:aws-lambda" width={40}/>
                            <span>AWS Lambda</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="logos:aws-cloudwatch" width={40}/>
                            <span>AWS Cloudwatch</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="logos:aws-eventbridge" width={40}/>
                            <span>AWS EventBridge</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-5">
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="devicon:mongodb-wordmark" width={40}/>
                            <span>MongoDB</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="logos:mysql" width={40}/>
                            <span>MySQL</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="devicon:postgresql-wordmark" width={40}/>
                            <span>PostgreSQL</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="skill-icons:expressjs-dark" width={40}/>
                            <span>Express.js</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="logos:nestjs" width={40}/>
                            <span>Nest.js</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="logos:gin" width={40}/>
                            <span>Go Gin</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-5">
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="logos:daisyui" width={40}/>
                            <span>Daisy UI</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="devicon:nextjs" width={40}/>
                            <span>Next.js</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="devicon:firebase" width={40}/>
                            <span>FireBase</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="devicon:redis" width={40}/>
                            <span>Redis</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="logos:twilio" width={40}/>
                            <span>Twilio</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="skill-icons:jest" width={40}/>
                            <span>Jest</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-5">
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="logos:typescript-icon" width={40}/>
                            <span>TypeScript</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="skill-icons:docker" width={40}/>
                            <span>Docker</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="logos:kotlin-icon" width={40}/>
                            <span>Kotlin</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="logos:ubuntu" width={40}/>
                            <span>Ubuntu</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="skill-icons:bash-dark" width={40}/>
                            <span>Bash Script</span>
                        </div>
                        <div className="border rounded-xl w-full h-full flex flex-col gap-2 justify-center items-center text-white hover:shadow-2xl" style={{backgroundColor: "#192a56"}}>
                            <Icon icon="skill-icons:powershell-light" width={40}/>
                            <span>PowerShell</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}