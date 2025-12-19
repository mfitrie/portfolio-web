"use client"

import { useTheme } from "next-themes"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react"

const LOCAL_STORAGE_KEY = 'portfolio-web';
type LocalStorageSchema = {
    theme: "light" | "dark"
}

export function ModeToggle() {
    const { setTheme, theme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [mounted, setMounted] = useState(false);

    //* ------------------------------------------ useEffect------------------------------------------ *//
    // Handle hydration
    useEffect(() => {
        setMounted(true);
    }, []);

    // Sync state with next-themes
    useEffect(() => {
        if (mounted && theme) {
            setIsDarkMode(theme === "dark");
        }
    }, [theme, mounted]);

    // Load theme on mount
    useEffect(() => {
        if (mounted) {
            loadThemeFromLocalStorage();
        }
    }, [mounted]);
    //* ------------------------------------------ useEffect------------------------------------------ *//

    //* ------------------------------------------ utils------------------------------------------ *//
    function loadThemeFromLocalStorage() {
        const rawData = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!rawData) {
            return;
        }
        try {
            const data: LocalStorageSchema = JSON.parse(rawData);
            if (data.theme) {
                setTheme(data.theme);
                setIsDarkMode(data.theme === "dark");
            }
        } catch (error) {
            console.error("Error parsing theme from localStorage:", error);
        }
    }

    function handleThemeChange(checked: boolean) {
        const newTheme = checked ? "dark" : "light";
        setIsDarkMode(checked);
        setTheme(newTheme);

        const data: LocalStorageSchema = {
            theme: newTheme,
        };
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    }
    //* ------------------------------------------ utils------------------------------------------ *//

    // Prevent hydration mismatch
    if (!mounted) {
        return null;
    }

    return (
        <div className="flex items-center space-x-2">
            <Switch
                id={isDarkMode ? "dark-mode" : "light-mode"}
                checked={isDarkMode}
                onCheckedChange={handleThemeChange}
            />
            <Label htmlFor={isDarkMode ? "dark-mode" : "light-mode"}>
                {isDarkMode ? "Dark Mode" : "Light Mode"}
            </Label>
        </div>
    )
}