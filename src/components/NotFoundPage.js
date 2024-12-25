'use client'

import {useTranslations} from 'next-intl'
import {ChevronLeft} from "lucide-react"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import {SidebarTrigger, useSidebar} from "@/components/ui/sidebar"
import {cn} from "@/lib/utils"
import React, {useEffect, useState} from "react";
import {Link} from "@/i18n/routing"
import {Separator} from "@/components/ui/separator";
import "./space.css";
import "@/app/globals.css"
import {motion} from "motion/react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

const Meteor = () => {
    const [position, setPosition] = useState({ top: 0, left: 0 });

    const generatePosition = () => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const topPosition = Math.random() * viewportHeight;
        const leftPosition = Math.random() * viewportWidth;
        console.log("leftPosition", leftPosition);
        console.log("topPosition", topPosition);
        return {
            top: topPosition,
            left: leftPosition
        };
    };

    const resetMeteor = () => {
        const newPosition = generatePosition();
        setPosition(newPosition);
    };

    useEffect(() => {
        const newPosition = generatePosition();
        setPosition(newPosition);

        const intervalId = setInterval(() => {
            resetMeteor();
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div
            className={`meteor`}
            style={{
                top: `${position.top}px`,
                left: `${position.left}px`,
            }}
        />
    );
};

export function NotFoundPage() {
    const {
        state,
        isMobile,
    } = useSidebar()
    const isExpanded = state === "expanded"
    const lan = useTranslations('NotFound')


    return (
        <>
            <div className="stars bg-black"></div>
            <div className="absolute inset-0 overflow-hidden">
                <Meteor/>
            </div>
            {/* Header */}
            <title>{lan('metadata')}</title>
            <header
                className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-neutral-800/50 ">
                <div className="flex items-center gap-2 px-4 md:px-8 lg:px-16 xl:px-32">
                    {!isMobile ? (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                            <span>
                                <SidebarTrigger className="-ml-1 text-blue-500 dark:text-amber-500"/>
                            </span>
                                </TooltipTrigger>
                                <TooltipContent side="right"
                                                className={cn("text-white", "border-primary", "shadow-md"
                                                )}>
                                    <p>{isExpanded ? lan('sidebar-option-close') : lan('sidebar-option-open')} sidebar <kbd
                                        className="ml-2 rounded border px-1 text-xs text-blue-500 border-blue-500 dark:text-orange-500 dark:border-orange-500">B</kbd>
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ) : (<SidebarTrigger className="-ml-1 text-blue-500 dark:text-amber-500"/>)}
                    <Separator orientation="vertical" className="mr-2 h-4 bg-white"/>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-white">{lan('nav-bar-page')}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            {/* Main Content */}
            <main className="relative z-10 flex-1 overflow-y-auto flex items-center justify-center">
                <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16 xl:px-32 text-center ">
                    <div>
                        <h1 className="text-9xl md:text-[12rem] lg:text-[15rem] font-bold text-blue-500 dark:text-amber-500 mb-6 select-none animate-pulse">
                            404
                        </h1>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 mb-6">
                            {lan('title')}
                        </h2>
                        <p className="text-xl text-gray-400 mb-8">
                            {lan('description')}
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 bg-blue-500 dark:bg-amber-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 dark:hover:bg-amber-600 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5"/>
                            {lan('back-home')}
                        </Link>
                    </div>
                </div>
            </main>
            <footer className="relative z-10 flex mb-10 flex-col space-y-2 mt-5 pr-4 pl-4 items-center">
                <h2 className="text-gray-500">
                    {lan('footer.paragraph1')}<a href="https://github.com/alesgsanudoo" target="_blank"
                                                 className="font-bold text-blue-500 hover:text-blue-700 dark:text-amber-500 dark:hover:text-amber-700">Alex</a> ❤️!
                </h2>
                <h2 className="text-gray-500 text-center">
                    {lan('footer.paragraph2')}<a href="https://nextjs.org/" target="_blank"
                                                 className="font-bold text-blue-500 hover:text-blue-700 dark:text-amber-500 dark:hover:text-amber-700">NextJS</a>{lan('footer.paragraph3')}<a
                    href="https://tailwindcss.com/" target="_blank"
                    className="font-bold text-blue-500 hover:text-blue-700 dark:text-amber-500 dark:hover:text-amber-700">TailwindCSS</a>.
                </h2>
            </footer>
        </>
    )
}
