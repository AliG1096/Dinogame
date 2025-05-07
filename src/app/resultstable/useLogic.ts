import { useMemo,useRef  } from "react"
import useLocalStorageState from "use-local-storage-state"
import { HighestScores } from "../end/useLogic"
export default function useLogic () {
const [highestScores, setHighestScores] = useLocalStorageState<HighestScores>('highestScores', {
    defaultValue: []
})

const sortedScores = useMemo(
    () => highestScores.toSorted((a, b) => b.score - a.score),
    [highestScores]
)
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
    sortedScores ,audioRef,playSound,
}

}