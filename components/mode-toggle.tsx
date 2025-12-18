"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react"

export function ModeToggle() {
    const { setTheme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        if(isDarkMode){
            setTheme('dark');
            return;
        }
        setTheme('light');
        // setTheme('system');
    }, [isDarkMode]);

    return (
        <div className="flex items-center space-x-2">
            <Switch
                id={isDarkMode ? "dark-mode" : "light-mode"}
                checked={isDarkMode}
                onCheckedChange={(e) => {
                    setIsDarkMode(e);
                }}
            />
            {
                isDarkMode && (
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                )
            }
            {
                !isDarkMode && (
                    <Label htmlFor="light-mode">Light Mode</Label>
                )
            }
        </div>
    )
}
