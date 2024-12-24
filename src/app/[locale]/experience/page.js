"use client"

import {
    Briefcase,
    GraduationCap,
    Calendar,
    MapPin,
    Building,
    ExternalLink,
    ChevronLeft,
    ChevronRight
} from 'lucide-react'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Separator} from "@/components/ui/separator"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {SidebarTrigger, useSidebar} from "@/components/ui/sidebar";
import {cn} from "@/lib/utils";
import {motion} from "motion/react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import React from "react";
import {useTranslations} from "next-intl";
import {Link} from '@/i18n/routing'

export default function ExperiencePage() {
    const {
        state,
        isMobile,
    } = useSidebar()
    const isExpanded = state === "expanded";
    const lan = useTranslations('ExperiencePage')

    const workExperienceItems = ['cs252', 'cs250', 'jl', 'developer']
    const educationItems = ['purdue', 'ab']

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <title>{lan('metadata')}</title>
            <header
                className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b dark:border-neutral-800/50">
                <div className="flex items-center gap-2 px-4 md:px-8 lg:px-16 xl:px-32">
                    {!isMobile ? (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <SidebarTrigger className="-ml-1 dark:text-amber-500 text-blue-500"/>
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
                                <BreadcrumbPage>{lan('nav-bar-page')}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            {/* Main Content */}
            <main className="relative z-10 flex-1 overflow-y-auto" suppressHydrationWarning>
                <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16 xl:px-32">
                    <div className="space-y-2 mb-8">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 dark:text-amber-500 select-none">
                            {lan('section-title')}
                        </h1>
                        <p className="text-lg text-gray-500 dark:text-neutral-400 select-none max-w-2xl">
                            {lan('section-description')}
                        </p>
                    </div>
                    <motion.div
                        initial={{opacity: 0, y: 10}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, margin: "-15% 0px -15% 0px", amount: "some"}}
                        transition={{duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9]}}
                        suppressHydrationWarning
                    >
                        {/* Work Experience */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-neutral-200 select-none flex items-center gap-2">
                                <Briefcase className="h-6 w-6 dark:text-amber-500 text-blue-500"/>
                                {lan('inner-section-work-title')}
                            </h2>

                            <div className="relative">
                                {/* Timeline Line */}
                                <div className="absolute left-8 top-0 bottom-4 w-px bg-[#2C2C2C]"/>

                                {/* Experience Items */}
                                {workExperienceItems.map((experience) => (
                                    <div key={experience} className="relative pl-16 pb-10">
                                        {/* Timeline Dot */}
                                        <div
                                            className="absolute left-[25px] w-4 h-4 rounded-full dark:bg-amber-500 bg-blue-500"/>
                                        <Card
                                            className="bg-gray-50/80 dark:bg-neutral-900/30 backdrop-blur-md hover:bg-gray-100/80 dark:hover:bg-neutral-900/50 transition-all border-gray-200 dark:border-neutral-800/50 h-full">
                                            <CardHeader>
                                                <div className="space-y-1">
                                                    <div className="flex items-start justify-between">
                                                        <CardTitle className="flex items-center gap-2">
                                                            <a href={lan(`workExperienceItems.${experience}.link`)}
                                                               target="_blank"
                                                               className="group flex items-center gap-2">
                                                                <span
                                                                    className="text-xl font-semibold transition-colors group-hover:text-blue-500 dark:group-hover:text-amber-500">{lan(`workExperienceItems.${experience}.title`)}</span>
                                                                {!isMobile && (
                                                                    <ExternalLink
                                                                        className="h-4 w-4 text-blue-500 dark:text-amber-500 transition-transform group-hover:translate-x-0.5"/>
                                                                )}
                                                            </a>
                                                        </CardTitle>
                                                        <Badge variant="secondary"
                                                               className="bg-blue-500 dark:bg-amber-500 dark:text-black dark:hover:text-white text-white hover:text-black select-none">
                                                            {lan(`workExperienceItems.${experience}.type`)}
                                                        </Badge>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <Building
                                                            className="h-4 w-4 dark:text-amber-500 text-blue-500"/>
                                                        <span>{lan(`workExperienceItems.${experience}.company`)}</span>
                                                    </div>
                                                    <div
                                                        className="flex items-center gap-4 text-sm text-muted-foreground">
                                                        <div className="flex items-center gap-1">
                                                            <Calendar
                                                                className="h-4 w-4 dark:text-amber-500 text-blue-500"/>
                                                            <span>{lan(`workExperienceItems.${experience}.date`)}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <MapPin
                                                                className="h-4 w-4 dark:text-amber-500 text-blue-500"/>
                                                            <span>{lan(`workExperienceItems.${experience}.location`)}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                                    {(() => {
                                                        const items = [];
                                                        const responsibilities = parseInt(lan(`workExperienceItems.${experience}.responsibilities-items`), 10) || 0
                                                        for (let i = 0; i < responsibilities; i++) {
                                                            items.push(
                                                                <li key={i}>{lan(`workExperienceItems.${experience}.responsibilities.${i}`)}</li>
                                                            );
                                                        }
                                                        return items;
                                                    })()}
                                                </ul>
                                                <div className="flex gap-2 mt-4 flex-wrap">
                                                    {lan(`workExperienceItems.${experience}.technologies`).split(",").map((tech, idx) => (
                                                        <Badge key={idx} variant="outline"
                                                               className="border-blue-500 text-blue-500 dark:border-amber-500 dark:text-amber-500 hover:text-white hover:bg-blue-500 dark:hover:bg-amber-500 select-none">
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </section>


                        {/* Education */}
                        <section className="space-y-6 mt-10">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-neutral-200 select-none flex items-center gap-2">
                                <GraduationCap className="h-6 w-6 dark:text-amber-500 text-blue-500"/>
                                {lan('inner-section-edu-title')}
                            </h2>

                            <div className="relative">
                                {/* Timeline Line */}
                                <div className="absolute left-8 top-0 bottom-0 w-px bg-[#2C2C2C]"/>

                                {/* Education Items */}
                                {educationItems.map((edu) => (
                                    <div key={edu} className="relative pl-16 pb-10">
                                        {/* Timeline Dot */}
                                        <div
                                            className="absolute left-[25px] w-4 h-4 rounded-full dark:bg-amber-500 bg-blue-500"/>
                                        <Card
                                            className="bg-gray-50/80 dark:bg-neutral-900/30 backdrop-blur-md hover:bg-gray-100/80 dark:hover:bg-neutral-900/50 transition-all border-gray-200 dark:border-neutral-800/50 h-full">
                                            <CardHeader>
                                                <div className="space-y-1">
                                                    <div className="flex items-start justify-between">
                                                        {lan(`educationItems.${edu}.link`).trim() !== "" ? (
                                                            <CardTitle className="flex items-center gap-2">
                                                                <a href={lan(`educationItems.${edu}.link`)}
                                                                   target="_blank"
                                                                   className="group flex items-center gap-2">
                                                                    <span
                                                                        className="text-xl font-semibold transition-colors group-hover:text-blue-500 dark:group-hover:text-amber-500">{lan(`educationItems.${edu}.degree`)}</span>
                                                                    {!isMobile && (
                                                                        <ExternalLink
                                                                            className="h-4 w-4 text-blue-500 dark:text-amber-500 transition-transform group-hover:translate-x-0.5"/>
                                                                    )}
                                                                </a>
                                                            </CardTitle>
                                                        ) : (
                                                            <CardTitle
                                                                className="text-xl font-semibold">{lan(`educationItems.${edu}.degree`)}</CardTitle>
                                                        )
                                                        }
                                                        <Badge variant="secondary"
                                                               className="bg-blue-500 dark:bg-amber-500 dark:text-black dark:hover:text-white text-white hover:text-black select-none">
                                                            {lan(`educationItems.${edu}.type`)}
                                                        </Badge>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <Building
                                                            className="h-4 w-4 dark:text-amber-500 text-blue-500"/>
                                                        <span>{lan(`educationItems.${edu}.institution`)}</span>
                                                    </div>
                                                    <div
                                                        className="flex items-center gap-4 text-sm text-muted-foreground">
                                                        <div className="flex items-center gap-1">
                                                            <Calendar
                                                                className="h-4 w-4 dark:text-amber-500 text-blue-500"/>
                                                            <span>{lan(`educationItems.${edu}.date`)}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <MapPin
                                                                className="h-4 w-4 dark:text-amber-500 text-blue-500"/>
                                                            <span>{lan(`educationItems.${edu}.location`)}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                                    {(() => {
                                                        const items = [];
                                                        const highlights = parseInt(lan(`educationItems.${edu}.highlights-items`), 10) || 0
                                                        for (let i = 0; i < highlights; i++) {
                                                            items.push(
                                                                <li key={i}>{lan(`educationItems.${edu}.highlights.${i}`)}</li>
                                                            );
                                                        }
                                                        return items;
                                                    })()}
                                                </ul>

                                                <div className="flex gap-2 mt-4 flex-wrap">
                                                    {lan(`educationItems.${edu}.relevantCourses`).split(',').map((course) => (
                                                        course.trim() !== "" ? (
                                                            <Badge
                                                                key={course}
                                                                variant="outline"
                                                                className="border-blue-500 text-blue-500 dark:border-amber-500 dark:text-amber-500 hover:text-white hover:bg-blue-500 dark:hover:bg-amber-500 select-none"
                                                            >
                                                                {course.trim()}
                                                            </Badge>
                                                        ) : null
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </motion.div>
                </div>
                <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
                    <nav className="flex justify-between items-center py-8 border-t border-neutral-800">
                        <Link href="/about"
                              className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors">
                            <ChevronLeft className="w-4 h-4"/>
                            <div>
                                <div className="text-sm font-medium">{lan('pages-prev')}</div>
                                <div className="text-xl dark:text-white text-black">{lan('pages-prev-title')}</div>
                            </div>
                        </Link>
                        <Link href="/projects"
                              className="flex items-center gap-2 text-right text-gray-500 hover:text-gray-300 transition-colors">
                            <div>
                                <div className="text-sm font-medium">{lan('pages-next')}</div>
                                <div className="text-xl dark:text-white text-black">{lan('pages-next-title')}</div>
                            </div>
                            <ChevronRight className="w-4 h-4"/>
                        </Link>
                    </nav>
                </div>
            </main>
            <footer className="flex mb-10 flex-col space-y-2 mt-5 pr-4 pl-4 items-center">
                <h2 className="text-gray-500">
                    {lan('footer.paragraph1')}<a href="https://github.com/alesgsanudoo" target="_blank"
                                                 className="font-bold text-blue-500 hover:text-blue-700 dark:text-amber-500 dark:hover:text-amber-700">Alex</a> ❤️!
                </h2>
                <h2 className="text-gray-500 text-center">
                    {lan('footer.paragraph2')}<a href="https://nextjs.org/" target="_blank"
                                                 className="font-bold text-blue-500 hover:text-blue-700 dark:text-amber-500 dark:hover:text-amber-700">NextJS</a>{lan('footer.paragraph3')}<a
                    href="https://tailwindcss.com/" target="_blank"
                    className="font-bold text-blue-500 hover:text-blue-700  dark:text-amber-500 dark:hover:text-amber-700">TailwindCSS</a>.
                </h2>
            </footer>
        </div>
    )
}


