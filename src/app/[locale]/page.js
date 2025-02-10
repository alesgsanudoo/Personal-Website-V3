"use client"

import {
    Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import {Separator} from "@/components/ui/separator"
import Image from 'next/image'
import {Link} from "@/i18n/routing"
import "../globals.css";
import {
    SidebarTrigger, useSidebar,
} from "@/components/ui/sidebar"
import React, {useEffect, useState} from "react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {cn} from "@/lib/utils";
import {useLocale, useTranslations} from "next-intl";
import {Button} from "@/components/ui/button";
import {
    Github,
    Linkedin,
    Mail,
    Instagram,
    Briefcase,
    Pencil,
    ArrowRight,
    ChevronRight
} from 'lucide-react'
import {motion} from "motion/react"
import Announcements from "@/components/announcements"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge"
import {Skeleton} from "@/components/ui/skeleton";
import {useTheme} from "next-themes";


const programmingLanguages = [
    {name: "HTML", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/html5.svg"},
    {name: "CSS", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/css3.svg"},
    {name: "React", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/react.svg"},
    {name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/javascript.svg"},
    {name: "Java", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/java.svg"},
    {name: "C++", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/cplusplus.svg"},
    {name: "C", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/c.svg"},
    {name: "SQL", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/sqlite.svg"},
    {name: "Python", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/python.svg"},
    {name: "Bash", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gnubash.svg"},
    {name: "Assembly", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/assemblyscript.svg"},
    {name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mongodb.svg"}
]

const LoadingImage = ({src, alt, className, profile}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsLoading(true);
        }
    }, []);

    return (
        <div className="relative w-full h-full" suppressHydrationWarning>
            {isLoading && (
                profile ? (
                    <Skeleton className="w-64 h-64 xl:w-96 xl:h-96 rounded-full"/>
                ) : (
                    <Skeleton className="absolute inset-0"/>
                )
            )}
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`${className} object-cover`}
                onLoad={() => setIsLoading(false)}
            />
        </div>
    );
};

export default function ExplorePage() {
    const {
        state,
        isMobile,
    } = useSidebar()
    const isExpanded = state === "expanded"
    const lan = useTranslations('ExplorePage')
    const locale = useLocale();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])


    const newDrops = [
        {
            title: "CS-Connect",
            description: lan('new-drops.description2'),
            image: "https://github.com/alesgsanudoo/alesgsanudoo/blob/main/images/gifs/cs-connect/cc-command.gif?raw=true",
            category: lan('new-drops.category2'),
            link: "/projects/cs-connect"
        },
        {
            title: "MySubs",
            description: lan('new-drops.description1'),
            image: "https://github.com/alesgsanudoo/alesgsanudoo/blob/main/images/portfio/projects/9jCNdUH%20-%20Imgur.png?raw=true",
            category: lan('new-drops.category1'),
            link: "/projects/mysubs"
        }
    ]

    const thoughts = [
        {
            title: lan('thoughts.title1'),
            description: lan('thoughts.description1'),
            link: "/blogs/abcs-event"
        }
    ]

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
                                <BreadcrumbPage>{lan('nav-bar-explore')}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            {/* Main Content */}
            <main className="relative z-10 flex-1 overflow-y-auto flex flex-col items-center justify-center">
                <div className="container flex-col py-8 px-4 md:px-8 lg:px-16 xl:px-32">
                    {isLoading ? (
                        <>
                            <section className="max-w-6xl mx-auto space-y-12">
                                {isMobile ? (
                                    <div className="flex gap-8 flex-col-reverse items-center">
                                        <div className="flex flex-col gap-4 w-full max-w-2xl">
                                            <Skeleton className="h-12 w-2/3 xl:w-1/2"/>
                                            <Skeleton className="h-8 xl:w-2/3"/>
                                            <div className="flex gap-4 mt-4">
                                                {[1, 2, 3, 4].map((i) => (
                                                    <Skeleton key={i} className="h-10 w-10 rounded-full"/>
                                                ))}
                                            </div>
                                            <Skeleton className="h-4 w-1/2"/>
                                        </div>
                                        <Skeleton className="w-64 h-64 xl:w-96 xl:h-96 rounded-full"/>
                                    </div>
                                ) : (
                                    <div className="flex gap-8 flex-row items-center justify-between">
                                        <div className="flex flex-col gap-4 w-full max-w-2xl">
                                            <Skeleton className="h-12 w-2/3 xl:w-1/2"/>
                                            <Skeleton className="h-8 xl:w-2/3"/>
                                            <div className="flex gap-4 mt-4">
                                                {[1, 2, 3, 4].map((i) => (
                                                    <Skeleton key={i} className="h-10 w-10 rounded-full"/>
                                                ))}
                                            </div>
                                            <Skeleton className="h-4 w-1/2"/>
                                        </div>
                                        <Skeleton
                                            className="w-64 h-64 xl:w-[20rem] xl:h-[20rem] rounded-full shrink-0"/>
                                    </div>
                                )}
                            </section>
                            <section className="max-w-6xl mx-auto space-y-12 mt-10">
                                <div className="flex flex-col space-y-5">
                                    <Skeleton className="h-10 w-3/4 max-w-sm"/>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {[...Array(2)].map((_, index) => (
                                            <Card key={index} className="overflow-hidden">
                                                <Skeleton className="aspect-[16/9] w-full"/>
                                                <CardHeader className="space-y-2">
                                                    <div className="flex justify-between items-center">
                                                        <Skeleton className="h-6 w-1/2"/>
                                                        <Skeleton className="h-5 w-20"/>
                                                    </div>
                                                    <Skeleton className="h-4 w-full"/>
                                                    <Skeleton className="h-4 w-3/4"/>
                                                </CardHeader>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
                                    {[...Array(12)].map((_, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-200/50 dark:bg-neutral-800/30"
                                        >
                                            <Skeleton className="h-8 w-8 rounded-full"/>
                                            <Skeleton className="h-4 w-16"/>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col space-y-5">
                                    <Skeleton className="h-9 w-48"/>
                                    <Skeleton className="h-5 w-full max-w-md"/>
                                    <Card className="mt-10 overflow-hidden">
                                        <CardHeader className="relative z-10">
                                            <div className="flex gap-4 items-center">
                                                <Skeleton className="h-9 w-9 rounded-lg"/>
                                                <div className="space-y-2 flex-1">
                                                    <Skeleton className="h-5 w-3/4"/>
                                                    <Skeleton className="h-4 w-full"/>
                                                </div>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-6">
                                    {[0, 1].map((index) => (
                                        <Card key={index} className="group flex-1 relative overflow-hidden">
                                            <CardHeader className="relative z-10">
                                                <div className="flex gap-4 items-center">
                                                    <Skeleton className="h-9 w-9 rounded-lg"/>
                                                    <div className="space-y-2 flex-1">
                                                        <Skeleton className="h-5 w-24"/>
                                                        <Skeleton className="h-4 w-full max-w-[200px]"/>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="relative z-10">
                                                <div className="flex items-center">
                                                    <Skeleton className="h-4 w-24"/>
                                                    <Skeleton className="h-4 w-4 ml-2"/>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </section>
                        </>
                    ) : (
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                        >
                            <section className="max-w-6xl mx-auto space-y-12">
                                <div
                                    className={cn(
                                        "flex gap-8",
                                        isMobile ? "flex-col-reverse items-center" : "flex-row items-center justify-between"
                                    )}
                                >
                                    <div className="flex flex-col gap-4">
                                        <h1 className="text-5xl font-bold dark:text-amber-500 text-blue-500 select-none">
                                            {lan('me')}
                                        </h1>
                                        <h2 className="text-2xl font-bold select-none">
                                    <span className="dark:text-white text-black">
                                        {lan('major')}
                                    </span>
                                            <Link
                                                href="https://www.purdue.edu"
                                                className="dark:text-white text-black select-none underline decoration-2 underline-offset-4 hover:underline-offset-8 hover:text-blue-500 hover:dark:text-amber-500"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Purdue University
                                            </Link>
                                        </h2>
                                        <div className="flex gap-4 mt-4">
                                            <Button size="icon" asChild>
                                                <Link href="https://www.instagram.com/alesgsanudoo_/" target="_blank">
                                                    <Instagram className="h-5 w-5"/>
                                                </Link>
                                            </Button>
                                            <Button size="icon" asChild>
                                                <Link href="https://github.com/alesgsanudoo" target="_blank">
                                                    <Github className="h-5 w-5"/>
                                                </Link>
                                            </Button>
                                            <Button size="icon" asChild>
                                                <Link href="https://www.linkedin.com/in/alesgsanudoo/" target="_blank">
                                                    <Linkedin className="h-5 w-5"/>
                                                </Link>
                                            </Button>
                                            <Button size="icon" asChild>
                                                <Link href="mailto:contact@alesgsanudoo.com">
                                                    <Mail className="h-5 w-5"/>
                                                </Link>
                                            </Button>
                                        </div>
                                        <Announcements lan={locale}/>
                                    </div>
                                    <motion.div
                                        initial={{scale: 0.8, opacity: 0}}
                                        animate={{scale: 1, opacity: 1}}
                                        transition={{duration: 0.5}}
                                        className="relative w-64 xl:w-96 aspect-square"
                                    >
                                        <LoadingImage src={"/picture.png"} alt="Profile picture"
                                                      className="object-cover rounded-2xl h-64 w-32" profile={true}/>
                                    </motion.div>
                                </div>
                            </section>
                            <section className={`max-w-6xl mx-auto space-y-12 ${!isMobile && 'mt-5'}`}>
                                <div className="flex flex-col space-y-5">
                                    <h2
                                        className="text-3xl font-bold text-blue-500 dark:text-amber-500"
                                    >
                                        {lan('new-drops.title')}
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {newDrops.map((project) => (
                                            <Link href={project.link} key={project.title}>
                                                <Card
                                                    className="overflow-hidden hover:bg-accent/50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl relative">
                                                    <div className="stars opacity-70"></div>
                                                    <div className="relative aspect-[16/9]">
                                                        <LoadingImage src={project.image} alt={project.title}/>
                                                    </div>
                                                    <CardHeader className="relative z-10 min-h-[130px]">
                                                        <div className="flex justify-between items-center">
                                                            <CardTitle className="text-xl">{project.title}</CardTitle>
                                                            <Badge variant="secondary">{project.category}</Badge>
                                                        </div>
                                                        <CardDescription>{project.description}</CardDescription>
                                                    </CardHeader>
                                                </Card>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
                                    {programmingLanguages.map(({name, logo, index}) => (
                                        <div
                                            key={name}
                                            className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-200/50
                                    dark:bg-neutral-800/30 hover:bg-gray-300/50 dark:hover:bg-neutral-700/30
                                    transition-colors"
                                        >
                                            <Image
                                                src={logo}
                                                alt={`${name} logo`}
                                                width={32}
                                                height={32}
                                                className="h-8 w-8 [filter:invert(65%)_sepia(71%)_saturate(1807%)_hue-rotate(190deg)_brightness(104%)_contrast(105%)] dark:[filter:invert(65%)_sepia(71%)_saturate(1807%)_hue-rotate(1deg)_brightness(104%)_contrast(102%)]"
                                            />
                                            <span className="text-xs text-neutral-400 select-none">{name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-3xl font-bold text-blue-500 dark:text-amber-500"
                                    >
                                        {lan('thoughts.title')}
                                    </h2>
                                    <p className="mt-2 mb-5 text-gray-500 dark:text-neutral-400">
                                        {lan('thoughts.description')}
                                    </p>
                                    <div className="flex flex-col space-y-4">
                                        {thoughts.map((thought, index) => (
                                            <Link href={thought.link} key={thought.title}>
                                                <Card
                                                    className="group hover:bg-accent/50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl relative overflow-hidden">
                                                    <CardHeader className="relative z-10">
                                                        <div className="flex gap-4 items-center">
                                                            <div
                                                                className="p-2 rounded-lg bg-blue-500/10 dark:bg-amber-500/10">
                                                                <Pencil
                                                                    className="h-5 w-5 text-blue-500 dark:text-amber-500"/>
                                                            </div>
                                                            <div>
                                                                <CardTitle
                                                                    className="text-lg group-hover:text-blue-500 group-hover:dark:text-amber-500">{thought.title}</CardTitle>
                                                                <CardDescription>{thought.description}</CardDescription>
                                                            </div>
                                                        </div>
                                                    </CardHeader>
                                                </Card>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Link href="/experience">
                                        <Card
                                            className="group hover:bg-accent/50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl h-full relative overflow-hidden">
                                            <div className="stars opacity-70"></div>
                                            <CardHeader className="relative z-10">
                                                <div className="flex gap-4 items-center">
                                                    <div
                                                        className="p-2 rounded-lg bg-blue-500/10 dark:bg-amber-500/10">
                                                        <Briefcase
                                                            className="h-5 w-5 text-blue-500 dark:text-amber-500"/>
                                                    </div>
                                                    <div>
                                                        <CardTitle
                                                            className="group-hover:dark:text-amber-500 group-hover:text-blue-500">{lan('experience')}</CardTitle>
                                                        <CardDescription>{lan('experience-description')}</CardDescription>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="relative z-10">
                                                <Button variant="link"
                                                        className="px-0 group-hover:underline group-hover:underline-offset-8 group-hover:dark:text-amber-500">
                                                    {lan('view-experience')}
                                                    <ArrowRight
                                                        className="h-4 w-4 group-hover:text-blue-500 group-hover:dark:text-amber-500  group-hover:translate-x-1 transition-transform"/>
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                    <Link href="/projects">
                                        <Card
                                            className="group hover:bg-accent/50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl h-full relative overflow-hidden">
                                            <div className="stars opacity-70"></div>
                                            <CardHeader className="relative z-10">
                                                <div className="flex gap-4 items-center">
                                                    <div
                                                        className="p-2 rounded-lg bg-blue-500/10 dark:bg-amber-500/10">
                                                        <Pencil
                                                            className="h-5 w-5 text-blue-500 dark:text-amber-500"/>
                                                    </div>
                                                    <div>
                                                        <CardTitle
                                                            className="group-hover:dark:text-amber-500 group-hover:text-blue-500">{lan('projects')}</CardTitle>
                                                        <CardDescription>{lan('project-description')}</CardDescription>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="relative z-10">
                                                <Button variant="link"
                                                        className="px-0 group-hover:underline group-hover:underline-offset-8 group-hover:dark:text-amber-500">
                                                    {lan('view-projects')}
                                                    <ArrowRight
                                                        className="h-4 w-4 group-hover:text-blue-500 group-hover:dark:text-amber-500  group-hover:translate-x-1 transition-transform"/>
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </div>
                            </section>
                        </motion.div>
                    )}
                </div>
                {/* Navigation */}
                <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
                    <nav className="flex justify-end items-center py-8 border-t border-neutral-800">
                        <Link href="/about"
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
