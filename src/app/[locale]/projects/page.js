'use client'

import React, {useEffect, useState} from 'react'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Github, ExternalLink, Pin, List, ChevronLeft, ChevronRight} from 'lucide-react'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {SidebarTrigger, useSidebar} from "@/components/ui/sidebar";
import {cn} from "@/lib/utils";
import {Separator} from "@/components/ui/separator";
import {motion} from "motion/react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {useTranslations} from "next-intl";
import {Link, useRouter} from "@/i18n/routing";
import {Skeleton} from "@/components/ui/skeleton";

const listedProjects = [
    {
        id: "15",
        title: "Personal Website V3",
        date: "December 2024",
        technologies: ["Next.js", "TailwindCSS"],
        githubUrl: "https://github.com/alesgsanudoo/Personal-Website-V3",
        previewUrl: "https://www.alesgsanudoo.com",
        isPinned: false
    },
    {
        id: "3",
        title: "Personal Website V2",
        date: "June 2024",
        technologies: ["React", "Next.js", "JavaScript", "TailwindCSS"],
        githubUrl: "https://github.com/alesgsanudoo/Personal-Website",
        previewUrl: "https://v2.alesgsanudoo.com/",
        isPinned: false
    },
    {
        id: "5",
        title: "MyShell",
        date: "April 2024",
        description: "A custom shell implementation in C++.",
        technologies: ["C++", "Lex", "Yacc"],
    },
    {
        id: "7",
        title: "MyBetterCSPlan",
        date: "November 2023",
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "CSS"],
        githubUrl: "https://github.com/alesgsanudoo/bettercsplan",
        previewUrl: "projects/mybettercsplan",
        isPinned: false
    },
    {
        id: "6",
        title: "Simple C Compiler",
        date: "November 2023",
        description: "A basic C compiler implementation.",
        technologies: ["C", "Lex", "Yacc"],
    },
    {
        id: "8",
        title: "Pokedex",
        date: "May 2023",
        description: "",
        technologies: ['React', 'CSS', 'MongoDB'],
        githubUrl: "https://github.com/alesgsanudoo/Pokedex",
        previewUrl: "https://pokedex.alesgsanudoo.com/",
    },
    {
        id: "9",
        title: "Capstone Project Website",
        date: "May 2023",
        description: "",
        technologies: ['React', 'CSS'],
    },
    {
        id: "10",
        title: "TesterHomework",
        date: "March 2023",
        description: "",
        technologies: ['Bash'],
        githubUrl: "https://github.com/alesgsanudoo/TesterHomework",
    },
    {
        id: "11",
        title: "Email Signature",
        date: "December 2022",
        description: "",
        technologies: ['HTML'],
        githubUrl: "https://github.com/alesgsanudoo/EmailSignature",
        previewUrl: "https://signature.alesgsanudoo.com/",
    },
    {
        id: "12",
        title: "SkyWars Core Protection",
        date: "September 2020",
        description: "",
        technologies: ['Java'],
        githubUrl: "https://github.com/alesgsanudoo/SkyWarsCore",
    },
    {
        id: "13",
        title: "Minecraft AuthCore Protection",
        date: "September 2020",
        description: "",
        technologies: ['Java'],
        githubUrl: "https://github.com/alesgsanudoo/LobbyCore",
    },
    {
        id: "14",
        title: "High School Website",
        date: "October 2017",
        description: "",
        technologies: ['HTML', 'CSS'],
    }
]


export default function ProjectsPage() {
    const {
        state,
        isMobile,
    } = useSidebar()
    const isExpanded = state === "expanded";
    const lan = useTranslations('ProjectsPage')
    const [isHovered, setIsHovered] = useState(false)
    const [isButtonHovered, setIsButtonHovered] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])


    const pinnedProjects = [
        {
            id: "16",
            title: "TCP Expo",
            date: "March 2026",
            description: lan('projects.16'),
            technologies: ["C", "Linux Kernel", "Bash", "Python", "Flent"],
            githubUrl: "https://github.com/alesgsanudoo/TCP-EXPO",
            url: "projects/tcp-expo",
            isPinned: true
        },
        {
            id: "17",
            title: "Purdue Photography Club",
            date: "Ongoing",
            description: lan('projects.17'),
            technologies: ["TypeScript", "Astro", "React", "Cloudflare Workers", "D1", "R2", "Discord"],
            githubUrl: "https://github.com/PurduePhotographyClub",
            previewUrl: "https://purduephotoclub.org/",
            url: "projects/purdue-photography-club",
            isPinned: true
        },
        {
            id: "7",
            title: "EasyAccess",
            date: "August 2025",
            description: lan('projects.7'),
            technologies: ["Electron", "Node.js", "Javascript", "MCP Agent", "Cloud Management"],
            githubUrl: "https://github.com/alesgsanudoo/EasyAccess",
            previewUrl: "http://easyaccess.dev/",
            url: "projects/easyaccess",
            isPinned: true
        },
        {
            id: "1",
            title: "CS-Connect",
            description: lan('projects.1'),
            date: "Feb 2025",
            technologies: ['Bash', 'Linux', 'awk', 'grep'],
            githubUrl: "https://github.com/alesgsanudoo/CS-Connect",
            url: "projects/cs-connect",
            isPinned: true
        },
        {
            id: "2",
            title: "MySubs",
            description: lan('projects.2'),
            date: "October 2024",
            technologies: ["Next.js", "TailwindCSS", "MongoDB"],
            githubUrl: "https://github.com/alesgsanudoo/mySubs",
            previewUrl: "https://mysubs.alesgsanudoo.com/",
            url: "projects/mysubs",
            isPinned: true
        },
        {
            id: "4",
            title: "SnapBattle",
            date: "May 2024",
            description: lan('projects.4'),
            technologies: ["React Native", "Node.js", "CSS", "Cloud Firestore", "Socket", "OpenAI API"],
            githubUrl: "https://github.com/CSGrinders/SnapBattle",
            url: "projects/snapbattle",
            isPinned: true
        },
    ]

    const router = useRouter();

    const handleCardClick = (e) => {
        router.push(e.url)
    }

    const handleCardMouseEnter = () => setIsHovered(true)
    const handleCardMouseLeave = () => setIsHovered(false)
    const handleButtonMouseEnter = () => setIsButtonHovered(true)
    const handleButtonMouseLeave = () => setIsButtonHovered(false)

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
            <main className="relative z-10 flex-1 overflow-y-auto select-none">
                <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16 xl:px-32">
                    {isLoading ? (
                        <>
                            <section className="max-w-6xl mx-auto space-y-12">
                                <div className="space-y-2 mb-8">
                                    <Skeleton className="h-14 w-64 mb-6"/>
                                    <Skeleton className="h-6 w-2/3"/>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[...Array(4)].map((_, index) => (
                                        <Card key={index}
                                              className="bg-gray-50/80 dark:bg-neutral-900/30 backdrop-blur-md border-gray-200 dark:border-neutral-800/50 select-none relative">
                                            <CardHeader className="relative min-h-[120px]">
                                                <div className="absolute top-4 right-4">
                                                    <Skeleton className="w-5 h-5 rounded-full"/>
                                                </div>
                                                <Skeleton className="h-6 w-3/4 mb-2"/>
                                                <Skeleton className="h-4 w-full"/>
                                                <Skeleton className="h-4 w-5/6"/>
                                            </CardHeader>
                                            <CardContent className="flex-grow min-h-[60px]">
                                                <div className="flex flex-wrap gap-2">
                                                    <Skeleton className="h-6 w-16"/>
                                                    <Skeleton className="h-6 w-20"/>
                                                    <Skeleton className="h-6 w-24"/>
                                                </div>
                                            </CardContent>
                                            <CardFooter className="mt-auto">
                                                <div className="w-full flex items-center justify-between gap-4">
                                                    <div className="flex gap-2">
                                                        <Skeleton className="h-8 w-20"/>
                                                        <Skeleton className="h-8 w-24"/>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Skeleton className="h-4 w-24 mr-1"/>
                                                        <Skeleton className="w-4 h-4 rounded-full"/>
                                                    </div>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            </section>
                            <section className="max-w-6xl mx-auto space-y-12 mt-10">
                                <Card
                                    className="bg-gray-50/80 dark:bg-neutral-900/30 backdrop-blur-md hover:bg-gray-100/80 dark:hover:bg-neutral-900/50 transition-all border-gray-200 dark:border-neutral-800/50 h-full">
                                    <CardHeader>
                                        <div
                                            className="mb-4">
                                            <Skeleton className="h-12 w-12 rounded-full"/>
                                        </div>
                                        <CardTitle
                                            className="text-xl font-semibold text-gray-900 dark:text-neutral-200 select-none">
                                            <Skeleton className="h-6 w-40"/>
                                        </CardTitle>
                                        <CardDescription
                                            className="text-md text-gray-500 dark:text-neutral-400 select-none">
                                            <Skeleton className="h-4 w-full"/>
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="hidden md:flex items-center px-4 py-3 border-b ">
                                            <div className="w-[140px] font-medium"><Skeleton className="h-4 w-20"/>
                                            </div>
                                            <div className="w-[225px] font-medium"><Skeleton className="h-4 w-24"/>
                                            </div>
                                            <div className="flex-1 font-medium"><Skeleton className="h-4 w-32"/></div>
                                            <div className="w-[100px] text-right pl-10 font-medium"><Skeleton
                                                className="h-4 w-16"/></div>
                                        </div>
                                        <div className="divide-y divide-border">
                                            {[...Array(5)].map((_, index) => (
                                                <div
                                                    key={index}
                                                    className="flex flex-col md:flex-row md:items-center px-4 py-3 transition-colors"
                                                >
                                                    <div className="w-full md:w-[140px] text-sm">
                                                        <Skeleton className="h-4 w-24"/>
                                                    </div>
                                                    <div className="w-full md:w-[225px] font-medium mt-1 md:mt-0">
                                                        <Skeleton className="h-4 w-40"/>
                                                    </div>
                                                    <div className="flex-1 flex flex-wrap gap-1.5 my-2 md:my-0">
                                                        <Skeleton className="h-6 w-16"/>
                                                        <Skeleton className="h-6 w-20"/>
                                                        <Skeleton className="h-6 w-24"/>
                                                    </div>
                                                    <div
                                                        className="w-full md:w-[100px] flex md:justify-end gap-3 mt-2 md:mt-0">
                                                        <Skeleton className="w-5 h-5 rounded-full"/>
                                                        <Skeleton className="w-5 h-5 rounded-full"/>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>
                        </>
                    ) : (
                        <div className="max-w-6xl mx-auto">
                            <section className="max-w-6xl mx-auto space-y-12">
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

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {pinnedProjects.map((project) => (
                                            <Card
                                                key={project.id}
                                                onClick={() => project.url && handleCardClick(project)}
                                                onMouseEnter={handleCardMouseEnter}
                                                onMouseLeave={handleCardMouseLeave}
                                                className={`group  bg-gray-50/80 dark:bg-neutral-900/30 backdrop-blur-md ${isHovered && !isButtonHovered ? 'hover:bg-gray-100/80 dark:hover:bg-neutral-900/50' : ''} transition-all border-gray-200 dark:border-neutral-800/50 select-none ${project.url ? 'cursor-pointer' : 'cursor-default'} transform hover:scale-105 hover:shadow-xl relative`}>
                                                <CardHeader className="relative min-h-[120px]">
                                                    <div className="absolute top-4 right-4">
                                                        <Pin
                                                            className={`w-5 h-5 text-blue-500 dark:text-amber-500 ${isHovered && !isButtonHovered ? 'group-hover:fill-blue-500 group-hover:dark:fill-amber-500' : ''}`}/>
                                                    </div>
                                                    <CardTitle
                                                        className={`text-xl font-semibold pr-8 ${isHovered && !isButtonHovered ? 'group-hover:text-blue-500 dark:group-hover:text-amber-500' : ''} transition-colors`}>{project.title}</CardTitle>
                                                    <CardDescription>{project.description}</CardDescription>
                                                </CardHeader>
                                                <CardContent className="flex-grow min-h-[60px]">
                                                    <div className="flex flex-wrap gap-2 ">
                                                        {project.technologies.map((tech, index) => (
                                                            <Badge
                                                                key={index}
                                                                variant="outline"
                                                                className="border-blue-500 text-blue-500 dark:border-amber-500 dark:text-amber-500 hover:text-white hover:bg-blue-500 dark:hover:bg-amber-500 select-none"
                                                            >
                                                                {tech}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                                <CardFooter className="mt-auto">
                                                    <div className="w-full flex items-center justify-between gap-4">
                                                        <div className="flex gap-2">
                                                            {project.githubUrl && (
                                                                <Button variant="outline"
                                                                        size="sm" asChild
                                                                        onClick={(e) => e.stopPropagation()}
                                                                        onMouseEnter={handleButtonMouseEnter}
                                                                        onMouseLeave={handleButtonMouseLeave}
                                                                >
                                                                    <a href={project.githubUrl} target="_blank"
                                                                       rel="noopener noreferrer">
                                                                        <Github className="w-4 h-4 mr-2"/>
                                                                        {lan('projects.code')}
                                                                    </a>
                                                                </Button>
                                                            )}
                                                            {project.previewUrl && (
                                                                <Button variant="outline" size="sm" asChild
                                                                        onClick={(e) => e.stopPropagation()}
                                                                        onMouseEnter={handleButtonMouseEnter}
                                                                        onMouseLeave={handleButtonMouseLeave}>
                                                                    <a href={project.previewUrl} target="_blank"
                                                                       rel="noopener noreferrer">
                                                                        <ExternalLink className="w-4 h-4 mr-2"/>
                                                                        {lan('projects.preview')}
                                                                    </a>
                                                                </Button>
                                                            )}
                                                        </div>
                                                        {project.url && (
                                                            <div
                                                                className={`flex items-center text-sm  ${isHovered && !isButtonHovered ? 'group-hover:text-blue-500 dark:group-hover:text-amber-500' : ''} transition-colors`}>
                                                                {lan('projects.learn-more')}
                                                                <ExternalLink
                                                                    className={`w-4 h-4 ml-1 transform ${isHovered && !isButtonHovered ? 'group-hover:translate-x-1 transition-transform' : ''}`}/>
                                                            </div>
                                                        )}
                                                    </div>
                                                </CardFooter>
                                            </Card>
                                        ))}
                                    </div>
                                </motion.div>
                            </section>
                            {/* Project List Section */}
                            <section
                                className="space-y-6 mt-10">
                                <motion.div
                                    initial={{opacity: 0, y: 10}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true, margin: "-15% 0px -15% 0px", amount: "some"}}
                                    transition={{duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9]}}
                                    suppressHydrationWarning
                                >
                                    <Card
                                        className="bg-gray-50/80 dark:bg-neutral-900/30 backdrop-blur-md hover:bg-gray-100/80 dark:hover:bg-neutral-900/50 transition-all border-gray-200 dark:border-neutral-800/50 h-full">
                                        <CardHeader>
                                            <div
                                                className="w-12 h-12 rounded-full bg-gray-200/80 dark:bg-neutral-800/50 flex items-center justify-center mb-4">
                                                <List className="h-6 w-6 text-blue-500 dark:text-amber-500"/>
                                            </div>
                                            <CardTitle
                                                className="text-xl font-semibold text-gray-900 dark:text-neutral-200  select-none">{lan('inner-section')}</CardTitle>
                                            <CardDescription
                                                className="text-md text-gray-500 dark:text-neutral-400 select-none">{lan('inner-section-desc')}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            {/* Table Header */}
                                            <div className="hidden md:flex items-center px-4 py-3 border-b ">
                                                <div className="w-[140px] font-medium ">{lan('all-projects.date')}</div>
                                                <div
                                                    className="w-[225px] font-medium">{lan('all-projects.project')}</div>
                                                <div
                                                    className="flex-1 font-medium">{lan('all-projects.technologies')}</div>
                                                <div
                                                    className="w-[100px] text-right font-medium">{lan('all-projects.links')}
                                                </div>
                                            </div>

                                            {/* Table Body */}
                                            <div className="divide-y divide-border">
                                                {listedProjects.map((project) => (
                                                    <div
                                                        key={project.id}
                                                        className="flex flex-col md:flex-row md:items-center px-4 py-3 transition-colors"
                                                    >
                                                        <div className="w-full md:w-[140px] text-sm">
                                                            {project.date}
                                                        </div>
                                                        <div className="w-full md:w-[225px] font-medium mt-1 md:mt-0">
                                                            {project.title}
                                                        </div>
                                                        <div className="flex-1 flex flex-wrap gap-1.5 my-2 md:my-0">
                                                            {project.technologies.map((tech, index) => (
                                                                <Badge
                                                                    key={index}
                                                                    variant="secondary"
                                                                >
                                                                    {tech}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                        <div
                                                            className="w-full md:w-[100px] flex md:justify-end gap-3 mt-2 md:mt-0">
                                                            {project.githubUrl && (
                                                                <a
                                                                    href={project.githubUrl}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="hover:text-blue-500 hover:dark:text-amber-500 transition-colors"
                                                                >
                                                                    <Github className="w-5 h-5"/>
                                                                </a>
                                                            )}
                                                            {project.previewUrl && (
                                                                <a
                                                                    href={project.previewUrl}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="hover:text-blue-500 hover:dark:text-amber-500 transition-colors"
                                                                >
                                                                    <ExternalLink className="w-5 h-5"/>
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </section>
                        </div>
                    )}
                </div>
                {/* Navigation */}
                <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
                    <nav className="flex justify-between items-center py-8 border-t border-neutral-800">
                        <Link href="/experience"
                              className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors">
                            <ChevronLeft className="w-4 h-4"/>
                            <div>
                                <div className="text-sm font-medium">{lan('pages-prev')}</div>
                                <div className="text-xl dark:text-white text-black">{lan('pages-prev-title')}</div>
                            </div>
                        </Link>
                        <Link href="/resume"
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

