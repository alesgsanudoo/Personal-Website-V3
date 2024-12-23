"use client"

import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {Separator} from "@/components/ui/separator"
import Image from 'next/image'
import Link from 'next/link'
import {
    SidebarTrigger, useSidebar,
} from "@/components/ui/sidebar"
import {useTheme} from "next-themes";
import React, {useEffect, useState} from "react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {cn} from "@/lib/utils";

export default function Home() {
    const {
        state,
    } = useSidebar()
    const isExpanded = state === "expanded"
    return (
        <div className="flex flex-col min-h-screen">
            <title>Explore ⋅ Alejandro Griffith</title>
            {/* Header */}
            <header
                className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4 md:px-8 lg:px-16 xl:px-32">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                            <span>
                                <SidebarTrigger className="-ml-1 dark:text-amber-500 text-blue-500"/>
                            </span>
                            </TooltipTrigger>
                            <TooltipContent side="right"
                                            className={cn("light:bg-black text-primary-foreground", "border-primary", "shadow-md"
                                            )}>
                                <p>{isExpanded ? 'Close' : 'Open'} sidebar <kbd
                                    className="ml-2 rounded border px-1 text-xs border-blue-400 text-blue-400 dark:text-orange-500 dark:border-orange-500">B</kbd>
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <Separator orientation="vertical" className="mr-2 h-4 dark:bg-white bg-gray-700"/>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    Explore
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            {/* Main Content */}
            <main className="flex items-center pl-4 md:pl-8 lg:pl-16 xl:pl-32">
                {/* About Me */}
                <section className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Text */}
                    <div className="flex-col justify-center space-y-4">
                        <div className="relative w-64 xl:w-96 aspect-square">
                            <Image
                                src="/picture.png"
                                alt="Profile picture"
                                fill
                                className="object-cover rounded-2xl"
                                priority
                            />
                        </div>
                        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold dark:text-white text-blue-400 select-none">
                            Hey, I'm Alejandro!
                        </h1>
                        <h2 className="text-xl md:text-xl lg:text-2xl font-bold select-none">
                            <span className="dark:text-white text-black">I am Computer Science Student at </span>
                            <Link href="https://www.purdue.edu" className="mt-4" target="_blank"
                                  rel="noopener noreferrer">
                    <span
                        className="bg-gradient-to-r from-amber-300 to-amber-500 text-transparent bg-clip-text lg:hover:text-3xl lg:transition-all lg:duration-300 select-none">
                  Purdue University
                    </span>
                            </Link>
                        </h2>
                    </div>
                    {/* Text */}
                    <div>
                        <p className="dark:text-gray-200 text-black text-md md:text-lg lg:text-lg lg:mr-20 pr-4 pl-4">
        <span
            className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400">
          Little did I know, when I touched my first laptop
        </span>,
                            that I would become <span
                            className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400">passionate</span> about
                            computer science and project development. My journey began with <span
                            className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400">creating Minecraft servers</span>,
                            <span
                                className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400"> developing addons</span>,
                            and <span
                            className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400">designing websites</span> and <span
                            className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400">shops</span> for
                            these servers. After successfully running several
                            servers with more than <span
                            className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400">10,000 players</span>,
                            I decided to go deeper into computer science.
                        </p>
                        <p className="dark:text-gray-200 text-black text-md md:text-lg lg:text-lg lg:mr-20 pr-4 pl-4 mt-5">
                            Today, I have <span
                            className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400">built</span> several <span
                            className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400">private</span>, <span
                            className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400">public</span>,
                            and <span
                            className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400">class projects</span>,
                            some of which
                            have generated
                            <span
                                className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400"> income</span>.
                            Currently, I am
                            focused on creating <span
                            className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400">side projects</span> to
                            showcase my skills, particularly
                            using <span
                            className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400">C++</span>,
                            a language I am
                            eager to learn more about and thoroughly enjoy programming in.
                        </p>
                        <p className="dark:text-gray-200 text-black text-md md:text-lg lg:text-lg lg:mr-20 pr-4 pl-4 mt-5">
                            When I am not coding, I <span
                            className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400">enjoy playing any type of sports or games</span>, <span
                            className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400">working out</span>, <span
                            className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400">watching series</span>,
                            <span
                                className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400"> reading</span>,
                            and <span
                            className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400">spending</span> time
                            with <span
                            className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400">friends</span> and <span
                            className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400">family</span>.
                        </p>
                        <p className="dark:text-gray-200 text-black text-md md:text-lg lg:text-lg lg:mr-20 pr-4 pl-4 mt-5">
                            <span
                                className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400">Feel free</span> to
                            reach out; I
                            love <span
                            className="font-bold transition duration-300 dark:hover:text-amber-400 hover:text-blue-400">meeting</span> new
                            people
                            and engaging in conversations.
                        </p>
                    </div>
                </section>
            </main>
            <footer className="flex mb-10 flex-col space-y-2 mt-5 pr-4 pl-4 items-center">
                <h2 className="text-gray-500">
                    Made with love by <a href="https://github.com/alesgsanudoo" target="_blank"
                                         className="font-bold text-blue-500 hover:text-blue-700 dark:text-amber-500 dark:hover:text-amber-700">Alex</a> ❤️!
                </h2>
                <h2 className="text-gray-500 text-center">
                    Built with <a href="https://nextjs.org/" target="_blank"
                                  className="font-bold text-blue-500 hover:text-blue-700 dark:text-amber-500 dark:hover:text-amber-700">NextJS</a> and <a
                    href="https://tailwindcss.com/" target="_blank"
                    className="font-bold text-blue-500 hover:text-blue-700  dark:text-amber-500 dark:hover:text-amber-700">TailwindCSS</a>.
                </h2>
            </footer>
        </div>
    )
}
