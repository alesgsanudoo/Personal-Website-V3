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
import React from "react";
import {motion} from "motion/react";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Markdown from "markdown-to-jsx";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Link} from "@/i18n/routing";

export function BlogContent({postName, postDate, postContent, otherPosts}) {
    const {
        state,
        isMobile,
    } = useSidebar()
    const isExpanded = state === "expanded"
    const lan = useTranslations('PostPage')
    const locale = useLocale()
    console.log(locale)
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
                                <BreadcrumbLink href={"/" + locale + "/blogs"}>{lan('nav-bar-blogs')}</BreadcrumbLink>
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
                            <Card
                                className="mt-10 bg-gray-50/80 dark:bg-neutral-900/30 backdrop-blur-md hover:bg-gray-100/80 dark:hover:bg-neutral-900/50 transition-all border-gray-200 dark:border-neutral-800/50 h-full"
                                suppressHydrationWarning
                            >
                                <CardHeader>
                                    <CardTitle
                                        className="text-xl font-semibold text-gray-900 dark:text-neutral-200 select-none">{lan('other')}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2 items-center">
                                        <Carousel>
                                            <CarouselContent className="-ml-1">
                                                {otherPosts.map((post) => (
                                                    <CarouselItem key={post.data.id}
                                                                  className="pl-1 md:basis-1/2 lg:basis-1/3">
                                                        <div className="p-1">
                                                            <Link href={`/blogs/${post.slug}`}>
                                                            <Card
                                                                className="group bg-gray-50/80 dark:bg-neutral-900/30 backdrop-blur-md hover:bg-gray-100/80 dark:hover:bg-neutral-900/50 transition-all border-gray-200 dark:border-neutral-800/50">
                                                                <CardHeader>
                                                                    <CardTitle className="text-xl font-semibold">
                                                                        <div
                                                                              className="group-hover:text-blue-500 dark:group-hover:text-amber-500 transition-colors">
                                                                            {post.data.title}
                                                                        </div>
                                                                    </CardTitle>
                                                                </CardHeader>
                                                                <CardContent>
                                                                    <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{post.data.excerpt}</p>
                                                                </CardContent>
                                                                <CardFooter
                                                                    className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                                                                    <span>{post.data.date}</span>
                                                                    <span>{post.data.readTime}</span>
                                                                </CardFooter>
                                                            </Card>
                                                        </Link>
                                                        </div>
                                                    </CarouselItem>
                                                ))}
                                            </CarouselContent>
                                            <div className="flex justify-center gap-2 mt-4">
                                                <CarouselPrevious className="static translate-y-0"/>
                                                <CarouselNext className="static translate-y-0"/>
                                            </div>
                                        </Carousel>
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
