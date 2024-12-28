'use client'

import {useState, useEffect} from 'react'
import {Button} from "@/components/ui/button"
import {ArrowUp, CircleHelp, PanelLeft} from 'lucide-react'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

const ScrollAndInfo = (lan) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isInfoOpen, setIsInfoOpen] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const getInfoText = () => {
        if (lan.lan === 'en') {
            return (
                <>
                    Use <PanelLeft className="inline-block w-4 h-4 mx-1 text-blue-500 dark:text-amber-500" /> in the top corner to open/close the sidebar.
                </>
            )
        } else {
            return (
                <>
                    Usa <PanelLeft className="inline-block w-4 h-4 mx-1 text-blue-500 dark:text-amber-500" /> de arriba para abrir/cerrar el sidebar.
                </>
            )
        }
    }


    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div className="relative">
                <div
                    className={`absolute bottom-0 right-0 transition-transform duration-300 ${isVisible ? 'translate-y-[-52px]' : ''}`}>
                    <Popover open={isInfoOpen} onOpenChange={setIsInfoOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                size="icon"
                                className="rounded-full shadow-lg"
                                aria-label={lan.lan === 'en' ? 'More information' : 'Más información'}
                            >
                                <CircleHelp className="h-4 w-4"/>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-64 text-sm" side="left" align="end">
                            <p className="select-none">{getInfoText()}</p>
                        </PopoverContent>
                    </Popover>
                </div>


                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                className={`p-2 rounded-full shadow-lg transition-opacity duration-300 z-50 motion-safe:animate-bounce ${
                                    isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                }`}
                                onClick={scrollToTop}
                                size="icon"
                                aria-label={lan.lan === 'en' ? 'Scroll to top' : 'Scroll hacia arriba'}
                            >
                                <ArrowUp className="h-4 w-4"/>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className="select-none">{lan.lan === 'en' ? 'Scroll to top' : 'Scroll hacia arriba'}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    )
}

export default ScrollAndInfo

