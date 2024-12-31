"use client"

import {ChevronLeft} from 'lucide-react'
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
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import {cn} from "@/lib/utils"
import React, {useEffect, useState} from "react"
import {motion} from "motion/react"
import {Skeleton} from "@/components/ui/skeleton"
import {useLocale, useTranslations} from "next-intl";
import {Link} from "@/i18n/routing"

export default function BlogsPage() {
    const {
        state,
        isMobile,
    } = useSidebar()
    const isExpanded = state === "expanded";
    const [blogs, setBlogs] = useState([]);
    const lan = useTranslations('BlogsPage')
    const language = useLocale()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(`/api/blogs?lan=${language}`);
                const data = await res.json();
                setBlogs(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);


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
                                        <p>{isExpanded ? lan('sidebar-option-close') : lan('"sidebar-option-open"')} sidebar <kbd
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
                                    <BreadcrumbLink href="/blogs">{lan('nav-bar-explore')}</BreadcrumbLink>
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
                                <div className="space-y-2 mb-8">
                                    <Skeleton className="h-14 w-64 mb-6"/>
                                    <Skeleton className="h-6 w-2/3"/>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[...Array(6)].map((_, index) => (
                                        <Card key={index}
                                              className="bg-gray-50/80 dark:bg-neutral-900/30 backdrop-blur-md">
                                            <CardHeader>
                                                <Skeleton className="h-6 w-3/4"/>
                                            </CardHeader>
                                            <CardContent>
                                                <Skeleton className="h-4 w-full mb-2"/>
                                                <Skeleton className="h-4 w-5/6"/>
                                            </CardContent>
                                            <CardFooter className="flex justify-between items-center">
                                                <Skeleton className="h-4 w-1/4"/>
                                                <Skeleton className="h-4 w-1/4"/>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                                <div className="flex justify-center items-center gap-4 mt-8">
                                    <Skeleton className="h-3 w-3 rounded-xl"/>
                                </div>
                            </section>
                        ) : (
                            <section className="max-w-6xl mx-auto space-y-12">
                                {/* Blog Header */}
                                <div className="space-y-4">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 dark:text-amber-500 select-none">
                                        {lan('section-title')}
                                    </h1>
                                    <p className="text-lg text-gray-500 dark:text-neutral-400 select-none">
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
                                    {/* Blog Posts Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {blogs.map((post) => (
                                            <Link href={`/blogs/${post.slug}`} key={post.id}>
                                                <Card
                                                    className="group  bg-gray-50/80 dark:bg-neutral-900/30 backdrop-blur-md hover:bg-gray-100/80 dark:hover:bg-neutral-900/50 transition-all border-gray-200 dark:border-neutral-800/50 cursor-pointer transform hover:scale-105 hover:shadow-xl relative">
                                                    <CardHeader>
                                                        <CardTitle className="text-xl font-semibold">
                                                            <div
                                                                className="group-hover:text-blue-500 dark:group-hover:text-amber-500 transition-colors">
                                                                {post.title}
                                                            </div>
                                                        </CardTitle>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{post.excerpt}</p>
                                                    </CardContent>
                                                    <CardFooter
                                                        className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                                                        <span>{post.date}</span>
                                                        <span>{post.readTime}</span>
                                                    </CardFooter>
                                                </Card>
                                            </Link>
                                        ))}
                                    </div>
                                    {/* Pagination */}
                                    <div className="flex justify-center items-center gap-4 mt-8">
                                        <span className="select-none text-black dark:text-white">1/1</span>
                                    </div>
                                </motion.div>
                            </section>
                        )}
                    </div>

                    {/* Navigation */}
                    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
                        <nav className="flex justify-between items-center py-8 border-t border-neutral-800">
                            <Link href="/contact"
                                  className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors">
                                <ChevronLeft className="w-4 h-4"/>
                                <div>
                                    <div className="text-sm font-medium">{lan('pages-prev')}</div>
                                    <div className="text-xl dark:text-white text-black">{lan('pages-prev-title')}</div>
                                </div>
                            </Link>
                        </nav>
                    </div>
                </main>

                {/* Footer */}
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

