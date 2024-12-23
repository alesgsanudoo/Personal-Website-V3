'use client'

import {useTranslations} from 'next-intl'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import {SidebarTrigger, useSidebar} from "@/components/ui/sidebar"
import {cn} from "@/lib/utils"
import {Separator} from "@/components/ui/separator"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import React from "react";
import {motion} from "motion/react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Markdown from "markdown-to-jsx";

export function BlogContent({postName, postDate, postContent}) {
    const {
        state,
        isMobile,
    } = useSidebar()
    const isExpanded = state === "expanded"
    const lan = useTranslations('PostPage')

    return (
        <>
            {/* Header */}
            <title>{lan('metadata')}</title>
            <header
                className="relative z-10 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b dark:border-neutral-800/50 dark:backdrop-blur-sm dark:bg-neutral-950/50">
                <div className="flex items-center gap-2 px-4 md:px-8 lg:px-16 xl:px-32">
                    {!isMobile ? (
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
                                    <p>{isExpanded ? lan('sidebar-option-close') : lan('sidebar-option-open')} sidebar <kbd
                                        className="ml-2 rounded border px-1 text-xs border-blue-400 text-blue-500 dark:text-orange-500 dark:border-orange-500">B</kbd>
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ) : (<SidebarTrigger className="-ml-1 dark:text-amber-500 text-blue-500"/>)}
                    <Separator orientation="vertical" className="mr-2 h-4 dark:bg-white bg-gray-700"/>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">{lan('nav-bar-explore')}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">{lan('nav-bar-blogs')}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                                <BreadcrumbPage>{postName}.md</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            {/* Main Content */}
            <main className="relative z-10 flex-1 overflow-y-auto">
                <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16 xl:px-32">
                    <section className="max-w-6xl mx-auto space-y-12">
                        <motion.div
                            initial={{opacity: 0, y: 10}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, margin: "-15% 0px -15% 0px", amount: "some"}}
                            transition={{duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9]}}
                            suppressHydrationWarning
                        >
                            <Card className="bg-gray-100/80 dark:bg-neutral-900/70 backdrop-blur-md p-6 rounded-lg">
                                <CardHeader>
                                    <CardTitle
                                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 dark:text-amber-500 mb-6 select-none">
                                        {postName}
                                    </CardTitle>
                                    <p className="text-md text-gray-500 dark:text-neutral-400 select-none">
                                        {lan('date')} {postDate}
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <div className="prose dark:prose-invert max-w-none">
                                        <Markdown>{postContent}</Markdown>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </section>
                </div>
            </main>
        </>
    )
}
