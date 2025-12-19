"use client"

import Background3d from "@/components/background-3d"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


export default function Home() {
  return (
    <div className="">
      <Background3d />

      {/* <div className="h-[30rem]">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <h1 className="scroll-m-20 text-left text-4xl font-extrabold tracking-tight text-balance text-white drop-shadow-lg">
              Hello, I'm Fitrie
            </h1>
            <span>
              I'm passionate about building tools that make developers' lives easier. When I'm not coding, you'll find me writing about my experiences and sharing what I've learned.
              Let's connect and build something amazing together! Whether you're looking to collaborate on a project or just want to chat about tech, I'd love to hear from you.
            </span>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div> */}

    </div>
  )
}