"use client"

import Background3d from "@/components/background-3d"
import { Footer } from "@/components/footer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { BriefcaseBusiness, Facebook, Github, Linkedin, Sun } from "lucide-react"


export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Background3d />

      {/* --------------------------------------Card 1-------------------------------------- */}
      <div className="w-full grid grid-flow-row-dense grid-cols-1 justify-between gap-4 md:grid-cols-2">
        {/* //* Hi */}
        <Card className="bg-white/20 backdrop-blur-xs border-0">
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <Avatar
                  className="w-[3.5rem] h-[3.5rem]"
                >
                  <AvatarImage
                    src="/images/fitrie-image.jpg"
                    className="object-cover"
                  />
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
              <div className="text-muted-foreground flex flex-col gap-4">
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
                onClick={() => {
                  window.open("https://www.linkedin.com/in/muhammad-fitrie-a88472199", '_blank');
                }}
              >
                <Linkedin />
              </Button>
              <Button
                className="cursor-pointer"
                variant="outline"
                size="icon"
                onClick={() => {
                  window.open("https://github.com/mfitrie", '_blank');
                }}
              >
                <Github />
              </Button>
              <Button
                className="cursor-pointer"
                variant="outline"
                size="icon"
                onClick={() => {
                  window.open("https://www.facebook.com/muhammad.fitrie.176208", '_blank');
                }}
              >
                <Facebook />
              </Button>
            </div>
          </CardFooter>
        </Card>

        {/* //* Work */}
        <Card className="bg-white/20 backdrop-blur-xs border-0 ">
          <CardHeader>
            <CardTitle className="flex flex-row items-center gap-2">
              <BriefcaseBusiness />
              <span>Work</span>
            </CardTitle>
            <CardAction>
              <Button className="cursor-pointer" variant="link">Hire Me</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              <div className="grid grid-flow-row-dense grid-cols-12 items-center">
                <div className="col-span-2 flex flex-col items-center">
                  <Avatar
                    className="w-[2.5rem] h-[2.5rem] col-span-2"
                  >
                    <AvatarImage
                      src="/images/logo/siagalabs.jpg"
                      className="object-cover"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex flex-col justify-between col-span-6">
                  <p className="text-sm">Siaga Labs</p>
                  <p className="text-muted-foreground text-sm">Fullstack Developer</p>
                </div>
                <div className="col-span-4">
                  <p className="text-muted-foreground text-xs">2024 May -- Present</p>
                </div>
              </div>

              <Separator />

              <div className="grid grid-flow-row-dense grid-cols-12 items-center">
                <div className="col-span-2 flex flex-col items-center">
                  <Avatar
                    className="w-[2.5rem] h-[2.5rem] col-span-2"
                  >
                    <AvatarImage
                      src="/images/logo/thunderquote_logo.jpg"
                      className="object-cover"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex flex-col justify-between col-span-6">
                  <p className="text-sm">Thunderquote</p>
                  <p className="text-muted-foreground text-sm">Fullstack Developer</p>
                </div>
                <div className="col-span-4">
                  <p className="text-muted-foreground text-xs">2023 Sept -- 2024 Mar</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            {/* //TODO: download resume */}
          </CardFooter>
        </Card>
        {/*--------------------------------------Card 1--------------------------------------*/}
      </div>

      {/*--------------------------------------Card 2--------------------------------------*/}
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
        <Card className="bg-white/20 backdrop-blur-xs border-0 w-80 h-80 -rotate-2 p-0 group transition-all duration-300 cursor-pointer hover:rotate-0 hover:scale-105">
          <CardContent className="px-0 relative h-full overflow-hidden rounded-xl">
            <img
              src='/images/pic-1.jpg'
              alt='Banner'
              className='w-full h-full rounded-xl object-cover transition-transform duration-100 group-hover:scale-110'
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">CREATE</h4>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/20 backdrop-blur-xs border-0 w-80 h-80 -rotate-2 p-0 group transition-all duration-300 cursor-pointer hover:rotate-0 hover:scale-105">
          <CardContent className="px-0 relative h-full overflow-hidden rounded-xl">
            <img
              src='/images/pic-2.jpg'
              alt='Banner'
              className='w-full h-full rounded-xl object-cover transition-transform duration-100 group-hover:scale-110'
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">INNOVATE</h4>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/20 backdrop-blur-xs border-0 w-80 h-80 -rotate-2 p-0 group transition-all duration-300 cursor-pointer hover:rotate-0 hover:scale-105">
          <CardContent className="px-0 relative h-full overflow-hidden rounded-xl">
            <img
              src='/images/pic-3.jpg'
              alt='Banner'
              className='w-full h-full rounded-xl object-cover transition-transform duration-100 group-hover:scale-110'
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">INSPIRE</h4>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/20 backdrop-blur-xs border-0 w-80 h-80 -rotate-2 p-0 group transition-all duration-300 cursor-pointer hover:rotate-0 hover:scale-105">
          <CardContent className="px-0 relative h-full overflow-hidden rounded-xl">
            <img
              src='/images/pic-4.jpg'
              alt='Banner'
              className='w-full h-full rounded-xl object-cover transition-transform duration-100 group-hover:scale-110'
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">GROW</h4>
            </div>
          </CardContent>
        </Card>

      </div>
      {/*--------------------------------------Card 2--------------------------------------*/}


      <Footer />
    </div>
  )
}