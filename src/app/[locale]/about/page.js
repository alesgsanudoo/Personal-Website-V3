"use client"
import {Link} from "@/i18n/routing";
import {Heart, Languages, Code, Camera, ChevronLeft, ChevronRight} from 'lucide-react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {Separator} from "@/components/ui/separator"
import {SidebarTrigger, useSidebar} from "@/components/ui/sidebar"
import Card from '@/components/CardsAbout'
import {Card as Card2} from "@/components/ui/card";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import {cn} from "@/lib/utils"
import React, {useEffect, useState} from "react";
import {useTranslations} from "next-intl";
import {Skeleton} from "@/components/ui/skeleton";
import {CardContent, CardHeader} from "@/components/ui/card";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";

export default function AboutPage() {
    const {
        state,
        isMobile,
    } = useSidebar()
    const isExpanded = state === "expanded";
    const lan = useTranslations('AboutPage')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <title>{lan('metadata')}</title>
            <header
                className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b dark:border-neutral-800/50">
                <div className="flex items-center gap-2 px-4 md:px-8 lg:px-16 xl:px-32 select-none">
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
            <main className="relative z-10 flex-1 overflow-y-auto">
                <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16 xl:px-32">
                    {isLoading ? (
                            <section className="max-w-6xl mx-auto space-y-12">
                                <div className="space-y-4">
                                    <Skeleton className="h-14 w-64 mb-6"/>
                                    <div className="flex flex-col space-y-5">
                                        <Skeleton className="h-20 w-full"/>
                                        <Skeleton className="h-20 w-full"/>
                                        <Skeleton className="h-8 w-full"/>
                                        <Skeleton className="h-8 w-3/4"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Card2
                                        className="bg-gray-50/80 dark:bg-neutral-900/30 backdrop-blur-md border-gray-200 dark:border-neutral-800/50 h-full">
                                        <CardHeader>
                                            <Skeleton
                                                className="w-12 h-12 rounded-full bg-gray-200/80 dark:bg-neutral-800/50 mb-4"/>
                                            <Skeleton className="h-7 w-48 mb-2"/>
                                            <Skeleton className="h-5 w-full max-w-[280px]"/>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-3 gap-4">
                                                {[...Array(6)].map((_, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-200/50 dark:bg-neutral-800/30"
                                                    >
                                                        <Skeleton className="h-8 w-8 rounded-lg"/>
                                                        <Skeleton className="h-3 w-12"/>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card2>
                                    <Card2
                                        className="bg-gray-50/80 dark:bg-neutral-900/30 backdrop-blur-md border-gray-200 dark:border-neutral-800/50 h-full">
                                        <CardHeader>
                                            <Skeleton
                                                className="w-12 h-12 rounded-full bg-gray-200/80 dark:bg-neutral-800/50 mb-4"/>
                                            <Skeleton className="h-7 w-48 mb-2"/>
                                            <Skeleton className="h-5 w-full max-w-[280px]"/>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                {[1, 2, 3].map((item) => (
                                                    <div
                                                        key={item}
                                                        className="flex items-center justify-between p-3 rounded-lg bg-gray-200/50 dark:bg-neutral-800/30"
                                                    >
                                                        <Skeleton
                                                            className="h-4 w-1/3 bg-gray-300 dark:bg-neutral-700 rounded"/>
                                                        <Skeleton
                                                            className="h-4 w-1/4 bg-gray-300 dark:bg-neutral-700 rounded"/>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card2>
                                    <div className="md:col-span-2">
                                        <Card2
                                            className="bg-gray-50/80 dark:bg-neutral-900/30 backdrop-blur-md border-gray-200 dark:border-neutral-800/50 h-full">
                                            <CardHeader>
                                                <Skeleton
                                                    className="w-12 h-12 rounded-full bg-gray-200/80 dark:bg-neutral-800/50 mb-4"/>
                                                <Skeleton className="h-7 w-48 mb-2"/>
                                                <Skeleton className="h-5 w-full max-w-[280px]"/>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
                                                    {[...Array(12)].map((_, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-200/50 dark:bg-neutral-800/30"
                                                        >
                                                            <Skeleton className="h-8 w-8 rounded-lg"/>
                                                            <Skeleton className="h-3 w-12"/>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card2>
                                    </div>
                                    <div className="md:col-span-2">
                                        <Card2
                                            className="bg-gray-50/80 dark:bg-neutral-900/30 backdrop-blur-md hover:bg-gray-100/80 dark:hover:bg-neutral-900/50 transition-all border-gray-200 dark:border-neutral-800/50 h-full">
                                            <CardHeader>
                                                <Skeleton
                                                    className="w-12 h-12 rounded-full bg-gray-200/80 dark:bg-neutral-800/50 mb-4"/>
                                                <Skeleton className="h-7 w-48 mb-2"/>
                                                <Skeleton className="h-5 w-full max-w-[280px]"/>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="space-y-2 items-center">
                                                    <Carousel>
                                                        <CarouselContent className="-ml-1">
                                                            {[1, 2, 3, 4, 5].map((index) => (
                                                                <CarouselItem key={index}
                                                                              className="pl-1 md:basis-1/2 lg:basis-1/3">
                                                                    <div className="p-1">
                                                                        <Card2>
                                                                            <CardContent
                                                                                className="flex aspect-square items-center justify-center p-6">
                                                                                <Skeleton
                                                                                    className="w-full h-full rounded"/>
                                                                            </CardContent>
                                                                        </Card2>
                                                                    </div>
                                                                </CarouselItem>
                                                            ))}
                                                        </CarouselContent>
                                                        <div className="flex justify-center gap-2 mt-4">
                                                            <Skeleton className="h-3 w-3 rounded-xl mb-2"/>
                                                            <Skeleton className="h-3 w-3 rounded-xl mb-2"/>
                                                        </div>
                                                    </Carousel>
                                                </div>
                                            </CardContent>
                                        </Card2>
                                    </div>
                                </div>
                            </section>
                        ) :
                        (
                            <section className="max-w-6xl mx-auto space-y-12">
                                {/* About Me Section */}
                                <div className="space-y-2">
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 dark:text-amber-500 mb-6 select-none">
                                        {lan('section-title')}
                                    </h1>
                                    <div className="space-y-4 text-neutral-300">
                                        <p className="dark:text-gray-200 text-black">
                                            {lan('content.paragraph1')}
                                        </p>
                                        <p className="dark:text-gray-200 text-black">
                                            {lan('content.paragraph2')}
                                        </p>
                                        <p className="dark:text-gray-200 text-black">
                                            {lan('content.paragraph3')}
                                        </p>
                                        <p className="dark:text-gray-200 text-black">
                                            {lan('content.paragraph4')}
                                        </p>
                                    </div>
                                </div>

                                {/* Cards Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Card
                                        icon={Heart}
                                        title={lan('interest.title')}
                                        description={lan('interest.description')}
                                        type="interests"
                                    />
                                    <Card
                                        icon={Languages}
                                        title={lan('languages.title')}
                                        description={lan('languages.description')}
                                        type="languages"
                                    />
                                    <div className="md:col-span-2">
                                        <Card
                                            icon={Code}
                                            title={lan('programming.title')}
                                            description={lan('programming.description')}
                                            type="programming"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <Card
                                            icon={Camera}
                                            title={lan('photography.title')}
                                            description={lan('photography.description')}
                                            type="posts"
                                        />
                                    </div>
                                </div>
                            </section>
                        )}
                </div>
                <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
                    <nav className="flex justify-between items-center py-8 border-t border-neutral-800">
                        <Link href="/"
                              className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors">
                            <ChevronLeft className="w-4 h-4"/>
                            <div>
                                <div className="text-sm font-medium">{lan('pages-prev')}</div>
                                <div className="text-xl dark:text-white text-black">{lan('pages-prev-title')}</div>
                            </div>
                        </Link>
                        <Link href="/experience"
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
            <footer className="flex mb-10 flex-col space-y-2 mt-5 pr-4 pl-4 items-center select-none">
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

