import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import { useRef  } from "react"

export type HighestScores = {
    name: string;
    score: number;
}[]
export default function useLogic() {
  
const [currentScore, setCurrentScore] = useLocalStorageState('currentScore', {
    defaultValue: 0
})

const [highestScores, setHighestScores] = useLocalStorageState<HighestScores>('highestScores', {
    defaultValue: []
})

const [username, setUsername] = useState<string>('');
const [buttonText, setButtonText] = useState<string>('Zapisz');


const handleButtonClick = () => {
    if (username.trim() !== '') { // Check if the input is not empty
        setButtonText('Zapisane');

        setHighestScores(prev => [...prev, {
            name: username,
            score: currentScore,
        }])

    } else {
        // Optionally, you can provide feedback or handle empty input case here
        setButtonText('Niezapisane');
    }
};
const audioRef = useRef<HTMLAudioElement | null>(null);
const playSound = () => {
   if (audioRef.current) {
       audioRef.current.play().catch((error) => {
           console.error("Error playing sound:", error);
       });
   }
};
return {
    username,
    setUsername,
    handleButtonClick,
    currentScore,
    buttonText,
    playSound,
    audioRef,
}
}