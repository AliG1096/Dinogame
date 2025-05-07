"use client"

import { useEffect, useState } from "react"
import useLocalStorageState from "use-local-storage-state"
import { SoundOptions } from "../app/opcje/useLogic"

export default function AudioPlayer() {
    
    const [soundOptions, setSoundOptions] = useLocalStorageState<SoundOptions>("soundOptions", {
        defaultValue: {
            enabled: true,
            volume: 100,
        }
    })

    const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

    useEffect(() => {
        if (typeof window !== "undefined") {
            setAudio(new Audio("/sounds/sound.mp3"))
        }
    }, [])

    useEffect(() => {
        if (audio !== null) {

            if (audio.paused && soundOptions.enabled) {
                audio.fastSeek(0)
                audio.play()
            } else if (!audio.paused && !soundOptions.enabled) {
                audio.pause()
            }

            audio.volume = soundOptions.volume / 100

            const onEndedHandler = () => {
                if (soundOptions.enabled) {
                    audio.fastSeek(0)
                    audio.play()
                }
            }

            audio.addEventListener("ended", onEndedHandler)

            return () => {
                audio.removeEventListener("ended", onEndedHandler)
            }

        }

    }, [soundOptions])



    return <></>
}