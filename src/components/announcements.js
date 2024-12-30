"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Rocket, HelpCircle, Heart } from 'lucide-react'
import {useSidebar} from "@/components/ui/sidebar";


export default function Announcements({lan}) {
    const {
        isMobile,
    } = useSidebar()
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)
        }, 3000)

        return () => clearInterval(timer)
    }, [])
    const announcements = lan === 'es'
        ? [
            {
                content: [
                    { type: 'icon', icon: Rocket, className: 'w-5 h-5 text-blue-500' },
                    { type: 'text', text: '¡NUEVA VERSIÓN! ', className: 'font-bold text-blue-600' },
                    { type: 'text', text: 'Bienvenido a mi nuevo portafolio.' }
                ]
            },
            {
                content: [
                    { type: 'icon', icon: HelpCircle, className: 'w-5 h-5 text-yellow-500' },
                    { type: 'text', text: 'Recuerda usar la barra lateral para explorar mi portafolio.' }
                ]
            },
            {
                content: [
                    { type: 'icon', icon: Heart, className: 'w-5 h-5 text-red-500' },
                    { type: 'text', text: 'No dudes en ', className: 'text-gray-700 dark:text-gray-300' },
                    { type: 'text', text: 'contactarme', className: 'font-bold text-green-600' },
                    { type: 'text', text: '!!!' }
                ]
            }
        ]
        : [
            {
                content: [
                    { type: 'icon', icon: Rocket, className: 'w-5 h-5 text-blue-500' },
                    { type: 'text', text: 'NEW VERSION! ', className: 'font-bold text-blue-600' },
                    { type: 'text', text: 'Welcome to my new portfolio.' }
                ]
            },
            {
                content: [
                    { type: 'icon', icon: HelpCircle, className: 'w-5 h-5 text-yellow-500' },
                    { type: 'text', text: 'Remember to use the sidebar to explore my portfolio.' }
                ]
            },
            {
                content: [
                    { type: 'icon', icon: Heart, className: 'w-5 h-5 text-red-500' },
                    { type: 'text', text: 'Feel free to ', className: 'text-gray-700 dark:text-gray-300' },
                    { type: 'text', text: 'reach out', className: 'font-bold text-green-600' },
                    { type: 'text', text: '!!!' }
                ]
            }
        ];

    return (
        <div className={`p-2 rounded-full inline-flex items-center w-full select-none ${isMobile ? 'min-h-[150px]' : 'mt-10'}`}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center space-x-2 w-full"
                >
                    {announcements[currentIndex].content.map((item, index) => {
                        if (item.type === 'icon') {
                            const IconComponent = item.icon
                            return <IconComponent key={index} className={item.className} />
                        } else {
                            return (
                                <span
                                    key={index}
                                    className={`text-md ${item.className || 'text-gray-800 dark:text-gray-200'}`}
                                >
                  {item.text}
                </span>
                            )
                        }
                    })}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

