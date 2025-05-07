"use client"


import style from "./style.module.css"
import Link from 'next/link'; // Importuj Link z next/link
import { IconAdjustmentsCog } from '@tabler/icons-react';
import { IconSnowboarding } from '@tabler/icons-react';
import { useRef } from 'react'; 
import { IconTableFilled } from '@tabler/icons-react';

export default function Home() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    

    // Funkcja odtwarzająca dźwięk
    const playSound = () => {
        // Sprawdzamy, czy audioRef jest dostępny
        if (audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.error("Error playing sound:", error);
            });
        }
    };
    return (
        <>
            <div className={style.container}>
            <div className={style.dinoTitle}>Dino Game</div>
           {/* Audio element for sound */}
           <audio ref={audioRef} src="/sounds/przejsc.mp3"></audio> {/* Preload the sound */}
                {/*<p className={style.class}>Nauka o dinozaurach</p>*/}
                <Link href="/difficultylevel"> {/* Dodaj Link z odpowiednim href */}
                    <button className={style.button} onMouseEnter={playSound}>
                        <span className={style.spanMother}>
                        <span className={style.ikon}><IconSnowboarding stroke={2} /></span>
                            <span>G</span>
                            <span>r</span>
                            <span>a</span>
                            <span>j</span>
                           
                        </span>
                        <span className={style.spanMother2}>
                        <span className={style.ikon}><IconSnowboarding stroke={2} /></span>
                            <span>G</span>
                            <span>r</span>
                            <span>a</span>
                            <span>j</span>
                           
                        </span>
                    </button>
                </Link>

                <Link href="/opcje"> {/* Link do strony /opcje/page.tsx */}
                    <button className={style.button}  onMouseEnter={playSound}>
                        <span className={style.spanMother}>
                        <span className={style.ikon}><IconAdjustmentsCog stroke={2} /></span>
                            <span>O</span>
                            <span>p</span>
                            <span>c</span>
                            <span>j</span>
                            <span>e</span>
                        </span>
                        <span className={style.spanMother2}>
                        <span className={style.ikon}><IconAdjustmentsCog stroke={2} /></span>
                            <span>O</span>
                            <span>p</span>
                            <span>c</span>
                            <span>j</span>
                            <span>e</span>
                        </span>
                    </button>
                </Link>

                <Link href="/resultstable"> {/* Link do strony /results/page.tsx */}
                    <button className={style.button}  onMouseEnter={playSound}>
                        <span className={style.spanMother}>
                        <span className={style.ikon}><IconTableFilled /></span>
                            <span>N</span>
                            <span>a</span>
                            <span>j</span>
                            <span>w</span>
                            <span>y</span>
                            <span>ż</span>
                            <span>s</span>
                            <span>z</span>
                            <span>y</span>
                            <span>&nbsp;</span>
                            <span>w</span>
                            <span>y</span>
                            <span>n</span>
                            <span>i</span>
                            <span>k</span>
                        </span>
                        <span className={style.spanMother2}>
                        <span className={style.ikon}><IconTableFilled /></span>
                            <span>N</span>
                            <span>a</span>
                            <span>j</span>
                            <span>w</span>
                            <span>y</span>
                            <span>ż</span>
                            <span>s</span>
                            <span>z</span>
                            <span>y</span>
                            <span>&nbsp;</span>
                            <span>w</span>
                            <span>y</span>
                            <span>n</span>
                            <span>i</span>
                            <span>k</span>
                        </span>
                    </button>
                </Link>
            </div>
        </>
    );
}