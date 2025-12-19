"use client"

import Background3d from "@/components/background-3d"


export default function Home() {
  return (
    <div className="h-full w-full">
      <Background3d />
      <div className="h-full">
        <h1 className="scroll-m-20 text-left text-4xl font-extrabold tracking-tight text-balance text-white drop-shadow-lg">
          Hello, I'm Fitrie
        </h1>
      </div>
    </div>
  )
}