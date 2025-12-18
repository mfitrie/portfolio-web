"use client"

import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

// Dynamically import Canvas with no SSR to prevent hydration errors
const ClientOnly = ({ children }: { children: ReactNode }) => {
    return <>{children}</>
}

export default dynamic(() => Promise.resolve(ClientOnly), {
    ssr: false,
})