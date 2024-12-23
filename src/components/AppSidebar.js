"use client"

import * as React from "react"
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
    Sun,
    Moon, Instagram, Github, Linkedin, User, Briefcase, FileUser, Contact, FlaskConical, Compass, Newspaper, Send
} from 'lucide-react'
import { usePathname, useRouter } from "@/i18n/routing"
import {NavMain} from "@/components/nav-main"
import {NavResources} from "@/components/nav-resources"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail, useSidebar,
} from "@/components/ui/sidebar"
import {NavThemes} from "@/components/nav-themes";
import {Separator} from "@/components/ui/separator";
import {NavSocial} from "@/components/nav-socials";
import {useCallback, useEffect} from "react";
import {NavLanguages} from "@/components/nav-languages";
import {useTranslations} from "next-intl";

export function AppSidebar(props) {
    const {
        state,
        isMobile,
    } = useSidebar()

    const pathname = usePathname()
    const router = useRouter()
    const lan = useTranslations('AppSidebar')

    const data = {
        social: [
            {
                name: "Instagram",
                icon: Instagram,
                url: "https://www.instagram.com/alesgsanudoo_/",
            },
            {
                name: "Github",
                icon: Github,
                url: "https://github.com/alesgsanudoo",
            },
            {
                name: "Linkedin",
                icon: Linkedin,
                url: "https://www.linkedin.com/in/alesgsanudoo/",
            },
        ],
        navMain: [
            {
                title: lan('explore'),
                url: "/",
                icon: Compass,
                number: 1,
            },
            {
                title: lan('about-me'),
                url: "/about",
                icon: User,
                number: 2,
            },
            {
                title: lan('experience'),
                url: "/experience",
                icon: Briefcase,
                number: 3,
            },
            {
                title: lan('projects'),
                url: "/projects",
                icon: FlaskConical,
                number: 4,
            },
            {
                title: lan('resume'),
                url: "/resume",
                icon: FileUser,
                number: 5,
            },
            {
                title: lan('contact-me'),
                url: "/contact",
                icon: Contact,
                number: 6,
            },
        ],
        resources: {
            title: lan('resources'),
            items: [
                {
                    name: lan('me-and-myself'),
                    url: "/blogs",
                    icon: Newspaper,
                    number: 7,
                },
            ],
        },
        Themes: {
            title: lan('appearance'),
            dark: lan('dark'),
            light: lan('light'),
        },
        Languages: {
            title: lan('languages')
        }
    }

    // Function to check if a URL matches the current pathname
    const isActive = useCallback((url) => {
        if (url === '/') {
            return pathname === url
        }
        return pathname.startsWith(url)
    }, [pathname])

    // Function to handle keyboard navigation
    const handleKeyDown = useCallback((event) => {
        const key = event.key
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
            return
        }
        if (key >= '1' && key <= '6') {
            const index = parseInt(key) - 1
            if (index < data.navMain.length) {
                const item = data.navMain[index]
                router.push(item.url)
            }
        }
    }, [router])

    // Add event listener for keydown
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleKeyDown])

    return (
        <Sidebar collapsible="icon" {...props}>
            {state === "expanded" && (
                <SidebarHeader>
      <pre className="font-mono text-xs text-center text-primary justify-center">
        <code>{`
*      ☄️       .
.    *       *      .
*       .       *
        `}</code>
      </pre>
                </SidebarHeader>
            )}
            <SidebarContent>
                <NavMain items={data.navMain.map(item => ({
                    ...item,
                    isActive: isActive(item.url)
                }))}/>
                <NavResources items={data.resources.items} title={data.resources.title}/>
                {
                    state === "collapsed" && (
                        <Separator orientation="horizontal" className="ml-2 w-8"/>
                    )
                }
                <NavThemes title={data.Themes.title} dark={data.Themes.dark} light={data.Themes.light}/>
                <NavLanguages title={data.Languages.title}/>
            </SidebarContent>
            <SidebarFooter>
                <NavSocial socials={data.social}/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}

