"use client";

import useLocalStorageState from "use-local-storage-state";
import style from "./style.module.css";
import Link from 'next/link';
import useLogic from './useLogic';



export default function Home() {
    const {
        soundOptions ,
        setSoundOptions,
        audioRef,
        playSound,
} = useLogic();
 
    return (
        <>
            <div className={style.container}>
            <audio ref={audioRef} src="/sounds/przejsc.mp3" preload="auto"></audio>
                <div className={style.containerop}>
                    <div>
                        <h1 className={style.h1}>Opcje</h1>
                    </div>
                    <div className={style.optionContainer}>
                        <span className={style.optionText}>Dźwiek gry : </span>
                        <input 
                            type="checkbox" 
                            className={style.l} 
                            checked={soundOptions.enabled ?? false} 
                            onChange={(event) => setSoundOptions(prev => ({...prev, enabled: event.target.checked}))}
                        />
                    </div>
                    <div className={style.optionContainer}>
                        <span className={style.optionText}>Poziom głośność : </span>
                        <div className="PB-range-slider-div">
                            <input 
                                type="range"
                                min="0"
                                max="100"
                                className="PB-range-slider"
                                id="myRange"
                                value={soundOptions.volume ?? 0}
                                onChange={(event) => setSoundOptions(prev => ({...prev, volume: +event.target.value}))}
                            />
                            <p className="PB-range-slidervalue"></p>
                        </div>
                    </div>

                    <div className={style.buttonsContainer}>
                        <Link href="/">
                            <button className={style.button}  onMouseEnter={playSound}>
                                <span>Wróć</span>
                            </button>
                        </Link>
                      
                    </div>
                </div>
            </div>
        </>
    );
}
