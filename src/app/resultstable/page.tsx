"use client";

import style from "./style.module.css";
import Link from 'next/link';
import { IconVolume } from '@tabler/icons-react';
import useLocalStorageState from "use-local-storage-state";
import useLogic from "../resultstable/useLogic";
import { useMemo } from "react";

export default function Home() {

    const {
        sortedScores ,audioRef,playSound,
       
} = useLogic();
    
    return (
        <>
            <div className={style.container}>
            <audio ref={audioRef} src="/sounds/przejsc.mp3" preload="auto"></audio>
                <h2 className={style.tableTitle}>Tabela Rankingowa</h2> {/* Dodanie tytułu tabeli */}
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th className={style.th}>Miejsce</th>
                            <th className={style.th}>Nazwa</th>
                            <th className={style.th}>Punkty</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {sortedScores.map((item, index) => (
                            <tr key={`${index}${item.name}${item.score}`}>
                                <td className={style.td}>{index+1}</td>
                                <td className={style.td}>{item.name}</td>
                                <td className={style.td}>{item.score}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                <div className={style.buttonsContainer}>
                    <Link href="/">
                        <button className={style.button}  onMouseEnter={playSound} >
                            <span>Wróć</span>
                        </button>
                    </Link>
                   
                </div>
            </div>
        </>
    );
}