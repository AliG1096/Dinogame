import useLocalStorageState from "use-local-storage-state";
import { useRef  } from "react"
export type SoundOptions = {
    enabled: boolean
    volume: number
}

export default function useLogic () {

    const [soundOptions, setSoundOptions] = useLocalStorageState<SoundOptions>("soundOptions", {
        defaultValue: {
            enabled: true,
            volume: 100,
        }
    })
     // Funkcja do odtwarzania dźwięku
 const audioRef = useRef<HTMLAudioElement | null>(null);
 const playSound = () => {
    if (audioRef.current) {
        audioRef.current.play().catch((error) => {
            console.error("Error playing sound:", error);
        });
    }
};
    
    
        return {
            soundOptions,
            setSoundOptions,
            audioRef,
            playSound
        }
    
    }

