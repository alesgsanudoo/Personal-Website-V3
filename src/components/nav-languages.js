"use client"

import * as React from "react"
import { Globe } from 'lucide-react'
import { Locale, usePathname, useRouter } from '@/i18n/routing'

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import {useLocale} from "next-intl";

const languages = [
    {
        code: 'en',
        name: 'English',
        shortcut: 'E',
        flag: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 912 600" width="24" height="16">
                <rect width="912" height="600" fill="#bf0a30"/>
                <rect y="46.15" width="912" height="46.15" fill="#fff"/>
                <rect y="138.45" width="912" height="46.15" fill="#fff"/>
                <rect y="230.75" width="912" height="46.15" fill="#fff"/>
                <rect y="323.05" width="912" height="46.15" fill="#fff"/>
                <rect y="415.35" width="912" height="46.15" fill="#fff"/>
                <rect y="507.65" width="912" height="46.15" fill="#fff"/>
                <rect width="364.8" height="323.1" fill="#002868"/>
                <g fill="#fff">
                    <g id="s18">
                        <g id="s9">
                            <g id="s5">
                                <g id="s4">
                                    <path id="s" d="M24,13.8l1,2.8h2.9l-2.4,1.7l0.9,2.8l-2.4-1.7l-2.4,1.7l0.9-2.8l-2.4-1.7h2.9z"/>
                                    <use href="#s" y="26"/>
                                </g>
                                <use href="#s4" y="52"/>
                            </g>
                            <use href="#s5" y="104"/>
                        </g>
                        <use href="#s9" x="52"/>
                    </g>
                    <use href="#s18" x="104"/>
                    <use href="#s9" x="208"/>
                    <use href="#s5" x="260"/>
                </g>
            </svg>
        )
    },
    {
        code: 'es',
        name: 'Español',
        shortcut: 'S',
        flag: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" width="24" height="16">
                <rect width="750" height="500" fill="#c60b1e"/>
                <rect width="750" height="250" fill="#ffc400" y="125"/>
            </svg>
        )
    }
]

export function NavLanguages({title}) {
    const [mounted, setMounted] = useState(false)
    const router = useRouter()
    const pathname = usePathname()
    const locale = useLocale()
    const { state, isMobile } = useSidebar()

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleLanguageChange = (newLocale) => {
        router.push(pathname, { locale: newLocale })
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
                return
            }
            if (event.key.toLowerCase() === 'e') {
                handleLanguageChange('en')
            } else if (event.key.toLowerCase() === 's') {
                handleLanguageChange('es')
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleLanguageChange])

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
            <SidebarGroupLabel className="font-bold text-md transition-colors duration-300 ease-in-out text-blue-500 dark:text-amber-500">
                {title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {languages.map((lang) => (
                        <SidebarMenuItem key={lang.code}>
                            <SidebarMenuButton
                                onClick={() => handleLanguageChange(lang.code)}
                                asChild
                                isActive={locale === lang.code}
                                className={locale === lang.code ? "font-bold text-primary" : "opacity-50"}
                            >
                                <div>
                                    <span className="mr-2">{lang.flag}</span>
                                    <span>{lang.name}</span>
                                    {!isMobile && (
                                        <SidebarMenuBadge className="flex items-center space-x-1 px-1.5 py-0.5 text-xs font-medium dark:text-orange-500 text-blue-500">
                                            <b className="opacity-70 border dark:border-orange-500 border-blue-500 px-1.5 py-1 rounded">{lang.shortcut}</b>
                                        </SidebarMenuBadge>
                                    )}
                                </div>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}

