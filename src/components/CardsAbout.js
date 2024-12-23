"use client"

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {animate, inView} from 'motion'
import {useRef, useEffect, useState} from 'react'
import { motion } from "motion/react"
import {
    Code,
    FileCode,
    FileType,
    FileType2,
    FileJson,
    Coffee,
    Terminal,
    Binary,
    Database,
    MonitorCog,
    DatabaseBackup,
    ServerCog,
    Server
} from 'lucide-react'
import Image from 'next/image'
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Skeleton} from "@/components/ui/skeleton"
import {useTranslations} from "next-intl";

const LoadingImage = ({src, alt, width, height, className}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsLoading(true);
        }
    }, []);

    return (
        <div className="relative w-full h-full" suppressHydrationWarning>
            {isLoading && (
                <Skeleton className="absolute inset-0"/>
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
    {name: "Assembly", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/assemblyscript.svg"}
]

const interest = {
    systems: ServerCog,
    backend: DatabaseBackup,
    database: Database,
    cloud: Server,
    "low-level": Binary,
    "object-oriented": Code,
}

const posts = [
    {
        index: 0,
        imageUrl: "https://github.com/alesgsanudoo/alesgsanudoo/blob/main/images/portfio/posts/IMG_1519_jpg.jpg?raw=true",
    },
    {
        index: 1,
        imageUrl: "https://github.com/alesgsanudoo/alesgsanudoo/blob/main/images/portfio/posts/IMG_0109.jpg?raw=true",
    },
    {
        index: 2,
        imageUrl: "https://github.com/alesgsanudoo/alesgsanudoo/blob/main/images/portfio/posts/APC_0141-Enhanced-NR.jpg?raw=true",
    },
    {
        index: 3,
        imageUrl: "https://github.com/alesgsanudoo/alesgsanudoo/blob/main/images/portfio/posts/IMG_3503.jpg?raw=true",
    },
    {
        index: 4,
        imageUrl: "https://github.com/alesgsanudoo/alesgsanudoo/blob/main/images/portfio/posts/APC_0214-hdr-Enhanced-NR.jpg?raw=true",
    },
    {
        index: 5,
        imageUrl: "https://github.com/alesgsanudoo/alesgsanudoo/blob/main/images/portfio/posts/APC_0151.jpg?raw=true",
    },
    {
        index: 6,
        imageUrl: "https://github.com/alesgsanudoo/alesgsanudoo/blob/main/images/portfio/posts/APC_0030-hdr.jpg?raw=true",
    },
    {
        index: 7,
        imageUrl: "https://github.com/alesgsanudoo/alesgsanudoo/blob/main/images/portfio/posts/APC_0080.jpg?raw=true",
    },
    {
        index: 8,
        imageUrl: "https://github.com/alesgsanudoo/alesgsanudoo/blob/main/images/portfio/posts/APC_0143-Enhanced-NR.jpg?raw=true",
    },
    {
        index: 9,
        imageUrl: "https://github.com/alesgsanudoo/alesgsanudoo/blob/main/images/portfio/posts/APC_0144-Enhanced-NR.jpg?raw=true",
    },
    {
        index: 10,
        imageUrl: "https://github.com/alesgsanudoo/alesgsanudoo/blob/main/images/portfio/posts/IMG_2495.jpg?raw=true",
    },
    {
        index: 11,
        imageUrl: "https://github.com/alesgsanudoo/alesgsanudoo/blob/main/images/portfio/posts/IMG_4956.jpg?raw=true",
    },
]

const CardsAbout = ({title, description, icon: Icon, type = "default"},) => {
    const cardRef = useRef(null)
    const lan = useTranslations('AboutPage');
    const languages = ['english', 'spanish', 'korean'];


    return (
        <motion.div
            initial={{opacity: 0, y: 10}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-15% 0px -15% 0px", amount: "some"}}
            transition={{duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9]}}
            suppressHydrationWarning
        >
            <Card
                ref={cardRef}
                className="bg-gray-50/80 dark:bg-neutral-900/30 backdrop-blur-md hover:bg-gray-100/80 dark:hover:bg-neutral-900/50 transition-all border-gray-200 dark:border-neutral-800/50 h-full"
                suppressHydrationWarning
            >
                <CardHeader>
                    <div
                        className="w-12 h-12 rounded-full bg-gray-200/80 dark:bg-neutral-800/50 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-blue-500 dark:text-amber-500"/>
                    </div>
                    <CardTitle
                        className="text-xl font-semibold text-gray-900 dark:text-neutral-200  select-none">{title}</CardTitle>
                    <CardDescription
                        className="text-md text-gray-500 dark:text-neutral-400 select-none">{description}</CardDescription>
                </CardHeader>
                {type === "programming" ? (
                    <CardContent>
                        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
                            {programmingLanguages.map(({name, logo}) => (
                                <div
                                    key={name}
                                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-200/50 dark:bg-neutral-800/30 hover:bg-gray-300/50 dark:hover:bg-neutral-700/30 transition-colors"
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
                    </CardContent>
                ) : type === "languages" ? (
                    <CardContent>
                        <div className="space-y-4">
                            {languages.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center justify-between p-3 rounded-lg bg-gray-200/50 dark:bg-neutral-800/30"
                                >
                                    <span className="text-gray-900 dark:text-neutral-200 select-none">{lan(`languages.list.${item}.language`)}</span>
                                    <span
                                        className="text-sm text-blue-500 dark:text-amber-500 select-none">{lan(`languages.list.${item}.level`)}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                ) : type === "interests" ? (
                    <CardContent>
                        <div className="space-y-2">
                            <div className="grid grid-cols-3 gap-4">
                                {Object.entries(interest).map(([name, IconComponent]) => (
                                    <div
                                        key={name}
                                        className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-200/50 dark:bg-neutral-800/30 hover:bg-gray-300/50 dark:hover:bg-neutral-700/30 transition-colors"
                                    >
                                        <IconComponent className="h-8 w-8 text-blue-500 dark:text-amber-500"/>
                                        <span
                                            className="text-xs text-gray-600 dark:text-neutral-400  select-none">{lan(`interest.list.${name}`)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                ) : (
                    <CardContent>
                        <div className="space-y-2 items-center">
                            <Carousel>
                                <CarouselContent className="-ml-1">
                                    {Object.entries(posts).map(([index, {imageUrl}]) => (
                                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                            <div className="p-1">
                                                <Card>
                                                    <CardContent
                                                        className="flex aspect-square items-center justify-center p-6">
                                                        <LoadingImage
                                                            src={imageUrl}
                                                            alt="post image"
                                                            width={500}
                                                            height={500}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </CardContent>
                                                </Card>
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
                )}
            </Card>
        </motion.div>
    )
}

export default CardsAbout
