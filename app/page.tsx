"use client"

import Background3d from "@/components/background-3d"
import { Footer } from "@/components/footer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Github, Linkedin, Sun } from "lucide-react"


export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Background3d />

      {/* --------------------------------------Card 1-------------------------------------- */}
      <div className="w-full md:w-1/2">
        <Card className="bg-white/10 backdrop-blur-xs border-0">
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <Avatar
                  className="w-[3.5rem] h-[3.5rem]"
                >
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="scroll-m-20 text-left text-4xl font-extrabold tracking-tight text-balance drop-shadow-lg">
                  Hello, I'm Fitrie
                </h1>
              </div>
              <div>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Software Engineer, Freelancer, and Open Source Enthusiast.
                </h3>
              </div>
              <div>
                <p>
                  I'm passionate about building tools that make developers' lives easier. When I'm not coding, you'll find me writing about my experiences and sharing what I've learned.
                </p>
                <p>
                  Let's connect and build something amazing together! Whether you're looking to collaborate on a project or just want to chat about tech, I'd love to hear from you.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-row items-center gap-2">
              <Button
                className="cursor-pointer"
                variant="outline"
                size="icon"
              >
                <Linkedin />
              </Button>
              <Button
                className="cursor-pointer"
                variant="outline"
                size="icon"
              >
                <Github />
              </Button>
              <Button
                className="cursor-pointer"
                variant="outline"
                size="icon"
              >
                <Facebook />
              </Button>
            </div>
          </CardFooter>
        </Card>
        {/*--------------------------------------Card 1--------------------------------------*/}
      </div>

      {/*--------------------------------------Card 2--------------------------------------*/}
      <div className="flex flex-row items-center justify-between">
        <Card className="bg-white/10 backdrop-blur-xs border-0 w-80 h-80 rotate-2">
          <CardContent>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xs border-0 w-80 h-80 -rotate-2">
          <CardContent>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xs border-0 w-80 h-80 rotate-2">
          <CardContent>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xs border-0 w-80 h-80 -rotate-2">
          <CardContent>
          </CardContent>
        </Card>
      </div>
      {/*--------------------------------------Card 2--------------------------------------*/}

      <Footer />
    </div>
  )
}