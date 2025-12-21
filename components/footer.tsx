"use client"

import { Separator } from "@/components/ui/separator"

export function Footer() {
    return (
        <footer className="w-full py-6 px-4">
            <Separator className="mb-6" />
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-muted-foreground">
                        © 2024 Fitrie. All rights reserved.
                    </div>
                    <div className="flex gap-6 text-sm text-muted-foreground">
                        <a href="/about" className="hover:text-foreground transition-colors">
                            About
                        </a>
                        <a href="/projects" className="hover:text-foreground transition-colors">
                            Hire
                        </a>
                        <a href="/contact" className="hover:text-foreground transition-colors">
                            Blog
                        </a>
                        <a href="/contact" className="hover:text-foreground transition-colors">
                            Projects
                        </a>
                        <a href="/contact" className="hover:text-foreground transition-colors">
                            Uses
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}