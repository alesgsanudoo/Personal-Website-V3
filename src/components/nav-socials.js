"use client"

import * as React from "react"

import {
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem, useSidebar,
} from "@/components/ui/sidebar"

export function NavSocial({socials}) {
    const {state} = useSidebar()
    if (state === "expanded") {
        return (
            <SidebarGroupContent>
                <SidebarMenu className="flex flex-row space-x-2 justify-center">
                    {socials.map((item) => (
                        <SidebarMenuItem key={item.name}>
                            <SidebarMenuButton asChild className="font-bold dark:text-orange-500 text-blue-500">
                                <a href={item.url} target={"_blank"}>
                                    <item.icon/>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        )
    } else {
        return (
            <SidebarGroupContent>
                <SidebarMenu>
                    {socials.map((item) => (
                        <SidebarMenuItem key={item.name}>
                            <SidebarMenuButton asChild className="font-bold dark:text-orange-500 text-blue-500">
                                <a href={item.url} target={"_blank"}>
                                    <item.icon/>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        )
    }
}

