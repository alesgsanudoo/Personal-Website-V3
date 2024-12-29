'use client'

import {useLocale, useTranslations} from 'next-intl'
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
import React, {useState} from "react";
import {motion} from "motion/react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Markdown from "markdown-to-jsx";
import {ExternalLink, Github} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";

export function ProjectContent({projectName, technologies, github, preview, projectContent, otherProjects}) {
    const {
        state,
        isMobile,
    } = useSidebar()
    const isExpanded = state === "expanded"
    const lan = useTranslations('ProjectPage')
    const locale = useLocale()
    return (
        <>
            {/* Header */}
            <title>{lan('metadata')}</title>
            <header
                className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b dark:border-neutral-800/50">
                <div className="flex items-center gap-2 px-4 md:px-8 lg:px-16 xl:px-32 select-none">
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
                                <BreadcrumbLink
                                    href={"/" + locale + "/projects"}>{lan('nav-bar-blogs')}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                                <BreadcrumbPage>{projectName}.md</BreadcrumbPage>
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
                                        className="flex flex-row items-center justify-between gap-4">
                                        <span
                                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 dark:text-amber-500 mb-2 select-none">{projectName}</span>
                                    </CardTitle>
                                    <CardDescription className="flex flex-col space-y-5">
                                        <div className="flex gap-2">
                                            {github && (
                                                <Button variant="outline"
                                                        asChild
                                                >
                                                    <a href={github} target="_blank"
                                                       rel="noopener noreferrer">
                                                        <Github className="w-4 h-4 mr-2"/>
                                                        {lan('code')}
                                                    </a>
                                                </Button>
                                            )}
                                            {preview && (
                                                <Button variant="outline" asChild>
                                                    <a href={preview} target="_blank"
                                                       rel="noopener noreferrer">
                                                        <ExternalLink className="w-4 h-4 mr-2"/>
                                                        {lan('preview')}
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                        <div className="flex flex-wrap gap-2 ">
                                            {technologies.map((tech, index) => (
                                                <Badge
                                                    key={index}
                                                    size="sm"
                                                    className="select-none  font-semibold px-4 py-2 hover:scale-105"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="prose dark:prose-invert max-w-none">
                                        <Markdown>{projectContent}</Markdown>
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
