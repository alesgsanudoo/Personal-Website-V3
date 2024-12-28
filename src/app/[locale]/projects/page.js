'use client'

import React, {useState} from 'react'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Github, ExternalLink, Pin, List, ChevronLeft, ChevronRight} from 'lucide-react'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {SidebarTrigger, useSidebar} from "@/components/ui/sidebar";
import {cn} from "@/lib/utils";
import {Separator} from "@/components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {useToast} from "@/hooks/use-toast";
import {useTranslations} from "next-intl";
import {Link, useRouter} from "@/i18n/routing";

const projects = [
    {
        id: "1",
        title: "Personal Website V3",
        description: "Newest version my personal website built with Next.js.",
        date: "December 2024",
        technologies: ["Next.js", "TailwindCSS"],
        githubUrl: "https://github.com/alesgsanudoo/Personal-Website-V3",
        previewUrl: "https://www.alesgsanudoo.com",
        url: "projects/personal-website-v3",
        isPinned: true
    },
    {
        id: "2",
        title: "My Subs",
        description: "A subscription management application with real-time updates.",
        date: "October 2024",
        technologies: ["Next.js", "TailwindCSS", "MongoDB"],
        githubUrl: "https://github.com/alesgsanudoo/mySubs",
        previewUrl: "https://mysubs.alesgsanudoo.com/",
        url: "projects/mysubs",
        isPinned: true
    },
    {
        id: "3",
        title: "Personal Website V2",
        date: "June 2024",
        technologies: ["React", "Next.js", "JavaScript", "TailwindCSS"],
        githubUrl: "https://www.alesgsanudoo.com/",
        previewUrl: "https://v2.alesgsanudoo.com/",
        isPinned: false
    },
    {
        id: "4",
        title: "SnapBattle",
        date: "May 2024",
        description: "Real-time multiplayer social app with AI integration.",
        technologies: ["React Native", "Node.js", "CSS", "Cloud Firestore", "Socket", "OpenAI API"],
        githubUrl: "https://github.com/CSGrinders/SnapBattle",
        url: "projects/snapbattle",
        isPinned: true
    },
    {
        id: "5",
        title: "MyShell",
        date: "April 2024",
        description: "A custom shell implementation in C++.",
        technologies: ["C++", "Lex", "Yacc"],
    },
    {
        id: "6",
        title: "Simple C Compiler",
        date: "November 2023",
        description: "A basic C compiler implementation.",
        technologies: ["C", "Lex", "Yacc"],
    },
    {
        id: "7",
        title: "MyBetterCSPlan",
        date: "November 2023",
        description: "Need to change",
        technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'CSS'],
        githubUrl: "https://github.com/alesgsanudoo/bettercsplan",
        url: "projects/mybettercsplan",
        isPinned: true
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


export default function ProjectPage() {
    const {
        state,
        isMobile,
    } = useSidebar()
    const isExpanded = state === "expanded";
    const lan = useTranslations('ProjectPage')
    const [isHovered, setIsHovered] = useState(false)
    const [isButtonHovered, setIsButtonHovered] = useState(false)

    const pinnedProjects = projects.filter(project => project.isPinned)
    const listedProjects = projects.filter(project => !project.isPinned)
    const router = useRouter();

    const handleCardClick = (e) => {
        console.log(e);
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
                    <section className="max-w-6xl mx-auto space-y-12">
                        <div className="space-y-2 mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 dark:text-amber-500 select-none">
                                {lan('section-title')}
                            </h1>
                            <p className="text-lg text-gray-500 dark:text-neutral-400 select-none max-w-2xl">
                                {lan('section-description')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {pinnedProjects.map((project) => (
                                <Card
                                    key={project.id}
                                    onClick={() => handleCardClick(project)}
                                    onMouseEnter={handleCardMouseEnter}
                                    onMouseLeave={handleCardMouseLeave}
                                    className={`group  bg-gray-50/80 dark:bg-neutral-900/30 backdrop-blur-md ${isHovered && !isButtonHovered ? 'hover:bg-gray-100/80 dark:hover:bg-neutral-900/50' : ''} transition-all border-gray-200 dark:border-neutral-800/50 select-none cursor-pointer`}>
                                    <CardHeader className="relative">
                                        <div className="absolute top-4 right-4">
                                            <Pin
                                                className={`w-5 h-5 text-blue-500 dark:text-amber-500 ${isHovered && !isButtonHovered ? 'group-hover:fill-blue-500 group-hover:dark:fill-amber-500' : ''}`}/>
                                        </div>
                                        <CardTitle
                                            className={`text-xl font-semibold pr-8 ${isHovered && !isButtonHovered ? 'group-hover:text-blue-500 dark:group-hover:text-amber-500' : ''} transition-colors`}>{project.title}</CardTitle>
                                        <CardDescription>{project.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow min-h-[80px]">
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
                                                            Code
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
                                                            Preview
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                            <div
                                                className={`flex items-center text-sm  ${isHovered && !isButtonHovered ? 'group-hover:text-blue-500 dark:group-hover:text-amber-500' : ''} transition-colors`}>
                                                Learn more
                                                <ExternalLink
                                                    className={`w-4 h-4 ml-1 transform ${isHovered && !isButtonHovered ? 'group-hover:translate-x-1 transition-transform' : ''}`}/>
                                            </div>
                                        </div>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Project List Section */}
                    <section
                        className="space-y-6 mt-10">
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
                                <div className="hidden md:flex items-center px-4 py-3 border-b bg-muted/50">
                                    <div className="w-[140px] font-medium text-muted-foreground">Date</div>
                                    <div className="w-[225px] font-medium text-muted-foreground">Project</div>
                                    <div className="flex-1 font-medium text-muted-foreground">Technologies</div>
                                    <div className="w-[100px] text-right font-medium text-muted-foreground">Links
                                    </div>
                                </div>

                                {/* Table Body */}
                                <div className="divide-y divide-border">
                                    {listedProjects.map((project) => (
                                        <div
                                            key={project.id}
                                            className="flex flex-col md:flex-row md:items-center px-4 py-3 hover:bg-muted/50 transition-colors"
                                        >
                                            <div className="w-full md:w-[140px] text-sm text-muted-foreground">
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
                                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                                    >
                                                        <Github className="w-5 h-5"/>
                                                    </a>
                                                )}
                                                {project.previewUrl && (
                                                    <a
                                                        href={project.previewUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-muted-foreground hover:text-foreground transition-colors"
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
                    </section>
                </div>
                {/* Navigation */}
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

