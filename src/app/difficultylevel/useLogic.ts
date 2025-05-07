import { useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import { useRef  } from "react"
export default function useLogic () {

const [difficulty, setDifficulty] = useLocalStorageState('difficulty')
const audioRef = useRef<HTMLAudioElement | null>(null);
const playSound = () => {
   if (audioRef.current) {
       audioRef.current.play().catch((error) => {
           console.error("Error playing sound:", error);
       });
   }
};
  useEffect(() => {
    setDifficulty('easy')
  }, [])
  return {
    setDifficulty,
    difficulty,
    audioRef,
    playSound,
  }
    
}
