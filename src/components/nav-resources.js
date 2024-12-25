"use client"

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import * as React from "react";
import {Link} from "@/i18n/routing"

export function NavResources({items, title}) {
    const {state, isMobile} = useSidebar()

    return (
        <SidebarGroup>
            {state === "expanded" && (
                <SidebarGroupLabel
                    className={"font-bold text-md text-blue-500 dark:text-amber-500 transition-colors duration-300 ease-in-out"}>
                    <span>{title}</span>
                </SidebarGroupLabel>
            )}
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton asChild isActive={item.isActive}>
                            <Link href={item.url}>
                                {item.icon && <item.icon/>}
                                <span>{item.name}</span>
                                {!isMobile && (
                                    <SidebarMenuBadge
                                        className="flex items-center space-x-1 px-1.5 py-0.5 text-xs font-medium dark:text-orange-500 text-blue-500">
                                        <b className="opacity-70 border dark:border-orange-500 border-blue-500 px-1.5 py-1 rounded">{item.number}</b>
                                    </SidebarMenuBadge>
                                )}
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}

