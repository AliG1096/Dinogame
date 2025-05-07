"use client"

import useLocalStorageState from "use-local-storage-state";
import style from "./style.module.css"
import Link from 'next/link'; // Importuj Link z next/link
import { useEffect } from "react";
import useLogic from "./useLogic";


export default function Home() {
  const {
    setDifficulty,
    difficulty,
    audioRef,
    playSound,
  } = useLogic();
  return (
    <>
      <div className={style.container}>
                    <audio ref={audioRef} src="/sounds/przejsc.mp3" preload="auto"></audio>
      <audio ref={audioRef} src="/sounds/przejsc.mp3" preload="auto"></audio>
        <div className={style.containerop}>
          <div>
            <h1 className={style.h1}>Poziom trudności</h1>
          </div>
          <div className={style.radioInputWrapper}>
            <label className={style.label} onMouseEnter={playSound}>
              <input
                value="easy"
                name="difficulty"
                id="difficulty-easy"
                className={style.radioInput}
                type="radio" 
                onChange={() => setDifficulty('easy')}
                checked={difficulty === "easy"}
                />
              <div className={style.radioDesign}></div>
              <div className={style.labelText}>Łatwy</div>
            </label>
            <label className={style.label} onMouseEnter={playSound}>
              <input value="medium" 
                name="difficulty" 
                id="difficulty-medium" 
                className={style.radioInput} 
                type="radio"
                onChange={() => setDifficulty('medium')}
                checked={difficulty === "medium"} />
              <div className={style.radioDesign}></div>
              <div className={style.labelText}>Średni</div>
            </label>
            <label className={style.label} onMouseEnter={playSound}> 
              <input  value="hard" 
                name="difficulty" 
                id="difficulty-hard" 
                className={style.radioInput} 
                type="radio"
                onChange={() => setDifficulty('hard')}
                
                checked={difficulty === "hard"}  />
              <div className={style.radioDesign}></div>
              <div className={style.labelText}>Trudny</div>
            </label>
          </div>

          <div className={style.buttonsContainer}>
            <Link href="/">
              <button className={style.button} onMouseEnter={playSound}>
                <span>Wróć</span>
              </button>
            </Link>
            <Link href="/gamedino">
              <button className={style.buttonr} onMouseEnter={playSound}>
                <span>Dalej</span>
              </button>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}