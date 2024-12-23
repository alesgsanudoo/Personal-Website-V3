"use client"

import * as React from "react"
import {Moon, Sun} from 'lucide-react'
import {useTheme} from "next-themes"

import {
    SidebarGroup, SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu, SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem, useSidebar,
} from "@/components/ui/sidebar"
import {useEffect, useState} from "react";
import {Skeleton} from "@/components/ui/skeleton";

export function NavThemes({title, dark, light}) {
    const [mounted, setMounted] = useState(false)
    const {setTheme, theme} = useTheme()
    const {state, isMobile} = useSidebar()

    useEffect(() => {
        setMounted(true)
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            setTheme(savedTheme)
        }
    }, [setTheme])

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
                return
            }
            if (event.key.toLowerCase() === 'd') {
                handleThemeChange('dark')
            } else if (event.key.toLowerCase() === 'l') {
                handleThemeChange('light')
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleThemeChange])

    if (!mounted) {
        return (
            <SidebarGroup>
                <Skeleton className="h-4 w-20 mb-2"/>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <Skeleton className="h-8 w-full"/>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <Skeleton className="h-8 w-full"/>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        )
    }

    return (
        <SidebarGroup>
            <SidebarGroupLabel
                className={theme === "light" ? "font-bold text-md text-blue-500 transition-colors duration-300 ease-in-out" : "font-bold text-md text-amber-500 transition-colors duration-300 ease-in-out"}>{title}</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            onClick={() => handleThemeChange("light")}
                            asChild
                            isActive={theme === "light"}
                            className={theme === "light" ? "font-bold text-blue-500" : "opacity-50"}
                        >
                            <div>
                                <Sun
                                    className={`h-[1.2rem] w-[1.2rem] mr-2 ${theme === "light" ? "text-blue-500" : "opacity-50"}`}/>
                                <span>{light}</span>
                                {!isMobile && (
                                    <SidebarMenuBadge
                                        className="flex items-center space-x-1 px-1.5 py-0.5 text-xs font-medium dark:text-orange-500 text-blue-500">
                                        <b className="opacity-70 border dark:border-orange-500 border-blue-500 px-1.5 py-1 rounded">L</b>
                                    </SidebarMenuBadge>
                                )}
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            onClick={() => handleThemeChange("dark")}
                            isActive={theme === "dark"}
                            asChild
                            className={theme === "dark" ? "font-bold text-orange-500" : "opacity-50"}
                        >
                            <div>
                                <Moon
                                    className={`h-[1.2rem] w-[1.2rem] mr-2 ${theme === "dark" ? "text-orange-500" : "opacity-50"}`}/>
                                <span>{dark}</span>
                                {!isMobile && (
                                    <SidebarMenuBadge
                                        className="flex items-center space-x-1 px-1.5 py-0.5 text-xs font-medium dark:text-orange-500 text-blue-500">
                                        <b className="opacity-70 border dark:border-orange-500 border-blue-500 px-1.5 py-1 rounded">D</b>
                                    </SidebarMenuBadge>
                                )}
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}

