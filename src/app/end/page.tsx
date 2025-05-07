"use client";
import { useEffect, useState } from 'react';
import style from "./style.module.css";
import Link from 'next/link';
import { IconDeviceFloppy } from '@tabler/icons-react';
import { IconPlayHandball } from '@tabler/icons-react';
import { IconArrowNarrowLeft } from '@tabler/icons-react';
import useLocalStorageState from 'use-local-storage-state';
import useLogic from './useLogic';



export default function Home() {
  
    const {
        username,
        setUsername,
        handleButtonClick,
        currentScore,
        buttonText,
        audioRef,
        playSound,
    } = useLogic();
  
  

    return (
        <>
        <div className={style.container}>
        <audio ref={audioRef} src="/sounds/przejsc.mp3" preload="auto"></audio>
            <h1 className={style.h1}>{currentScore}</h1>
            <div className={style.inputContainer} onMouseEnter={playSound}>
                <input
                    className={style.input}
                    name="text"
                    type="text"
                    placeholder="Nazwa użytkownika"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <button className={style.button} onClick={handleButtonClick} onMouseEnter={playSound}>
                <span className={style.spanMother}>
                    <span className={style.ikon}><IconDeviceFloppy stroke={2} /></span>
                    {buttonText.split('').map((char, index) => (
                        <span key={index}>{char}</span>
                    ))}
                </span>
                <span className={style.spanMother2}>
                    <span className={style.ikon}><IconDeviceFloppy stroke={2} /></span>
                    {buttonText.split('').map((char, index) => (
                        <span key={index}>{char}</span>
                    ))}
                </span>
            </button>

            <Link href="/difficultylevel">
                <button className={style.button} onMouseEnter={playSound}>
                    <span className={style.spanMother}>
                        <span className={style.ikon}><IconPlayHandball stroke={2} /></span>
                        <span>Z</span>
                        <span>a</span>
                        <span>g</span>
                        <span>r</span>
                        <span>a</span>
                        <span>j</span>
                        <span>&nbsp;</span>
                        <span>p</span>
                        <span>o</span>
                        <span>n</span>
                        <span>o</span>
                        <span>w</span>
                        <span>n</span>
                        <span>i</span>
                        <span>e</span>
                    </span>
                    <span className={style.spanMother2}>
                        <span className={style.ikon}><IconPlayHandball stroke={2} /></span>
                        <span>Z</span>
                        <span>a</span>
                        <span>g</span>
                        <span>r</span>
                        <span>a</span>
                        <span>j</span>
                        <span>&nbsp;</span>
                        <span>p</span>
                        <span>o</span>
                        <span>n</span>
                        <span>o</span>
                        <span>w</span>
                        <span>n</span>
                        <span>i</span>
                        <span>e</span>
                    </span>
                </button>
            </Link>

            <Link href="/">
                <button className={style.button} onMouseEnter={playSound}>
                    <span className={style.spanMother}>
                        <span className={style.ikon}><IconArrowNarrowLeft stroke={2} /></span>
                        <span>W</span>
                        <span>r</span>
                        <span>ó</span>
                        <span>ć</span>
                    </span>
                    <span className={style.spanMother2}>
                        <span className={style.ikon}><IconArrowNarrowLeft stroke={2} /></span>
                        <span>W</span>
                        <span>r</span>
                        <span>ó</span>
                        <span>ć</span>
                    </span>
                </button>
            </Link>
        </div>
    </>
    );
}
