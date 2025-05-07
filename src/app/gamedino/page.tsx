"use client"
import {useState } from 'react';
import style from './style.module.css';
import Link from 'next/link';
import { IconVolume } from '@tabler/icons-react';
import useLogic from './useLogic';
import { useRouter } from 'next/router';
import { IconVolume3 } from '@tabler/icons-react';

export default function Home() {
 
    const {
        numberOfAnsweredQuestions,
        currentScore,
        numberOfAllQuestions,
        currentQuestion,
        userAnswer,
        additionalStylesAnswer1,
        additionalStylesAnswer2,
        additionalStylesAnswer3,
        additionalStylesAnswer4,
        getNewQuestion,

    } = useLogic();
 

    return (
        <>
            <div className={style.container}>
                
                <div className={style.containerNumber}>
                    <div className={style.left}>
                        <p className={style.numberQuestion}>Pytanie</p>
                        <p className={style.number}>{numberOfAnsweredQuestions + 1}/{numberOfAllQuestions}</p>
                    </div>
                    <div className={style.right}>
                        <p className={style.numberQuestion}>Punkty</p>
                        <p className={style.number}>{currentScore}</p>
                    </div>
                </div>
                <h2 className={style.question}>
                    {currentQuestion?.question}
                </h2>
                <div className={`${style.choiceContainer} ${additionalStylesAnswer1}`} onClick={() => userAnswer(1)}>
                    <p className={style.choicePrefix}>A</p>
                    <p className={style.choiceText}>{currentQuestion?.choices1}</p>
                </div>
                <div className={`${style.choiceContainer} ${additionalStylesAnswer2}`} onClick={() => userAnswer(2)}>
                    <p className={style.choicePrefix}>B</p>
                    <p className={style.choiceText}>{currentQuestion?.choices2}</p>
                </div>
                <div className={`${style.choiceContainer} ${additionalStylesAnswer3}`} onClick={() => userAnswer(3)}>
                    <p className={style.choicePrefix}>C</p>
                    <p className={style.choiceText}>{currentQuestion?.choices3}</p>
                </div>
                <div className={`${style.choiceContainer} ${additionalStylesAnswer4}`} onClick={() => userAnswer(4)}>
                    <p className={style.choicePrefix}>D</p>
                    <p className={style.choiceText}>{currentQuestion?.choices4}</p>
                </div>
              
            </div>

        </>
    );
}
