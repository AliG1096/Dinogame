import { useState, useRef, useEffect } from "react";
import style from './style.module.css';
import { useRouter } from 'next/navigation'; // Import useRouter
import useLocalStorageState from "use-local-storage-state";
import {  getCorrectAnswer, getQuestions, Question } from "../../backend/actions";




const goodSound = '/sounds/dobra.mp3';
const badSound = '/sounds/zla.mp3';
const MAX_QUESTIONS = 15;

export default function useLogic() {
    const router = useRouter(); // Inicjalizacja useRouter
 

    const [currentScore, setCurrentScore] = useLocalStorageState('currentScore', {
        defaultValue: 0
    })

    const [numberOfAllQuestions, setNumberOfAllQuestions] = useState(MAX_QUESTIONS);
    const [pointsPerCorrectAnswer, setPointsPerCorrectAnswer] = useState(10);
    const allQuestionsRef = useRef<Question[]>([]);
    const [numberOfAnsweredQuestions, setNumberOfAnsweredQuestions] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
    const [acceptingAnswers, setAcceptingAnswers] = useState(false);

    const [additionalStylesAnswer1, setAdditionalStylesAnswer1] = useState("")
    const [additionalStylesAnswer2, setAdditionalStylesAnswer2] = useState("")
    const [additionalStylesAnswer3, setAdditionalStylesAnswer3] = useState("")
    const [additionalStylesAnswer4, setAdditionalStylesAnswer4] = useState("")

    const [difficulty] = useLocalStorageState<string>('difficulty', {defaultValue: ""})

    const loadQuestions = async () => {
        if (!difficulty) return

        setCurrentScore(0);

        try {
            let questions = await getQuestions(difficulty, MAX_QUESTIONS);

            switch (difficulty) {
                case 'medium':
                    setPointsPerCorrectAnswer(50);
                    break;
                case 'hard':
                    setPointsPerCorrectAnswer(100);
                    break;
                case 'easy':
                default:
                    setPointsPerCorrectAnswer(10);
                    break;
            }

            allQuestionsRef.current = [...questions];
            setNumberOfAllQuestions(MAX_QUESTIONS);
            getNewQuestion();
        } catch (error) {
            console.error('Error loading questions:', error);
        }
    };

    const getNewQuestion = () => {
        if (allQuestionsRef.current === null) {
            return
        }

        const questionIndex = Math.floor(Math.random() * allQuestionsRef.current.length);

        setCurrentQuestion(allQuestionsRef.current[questionIndex]);
        allQuestionsRef.current.splice(questionIndex, 1); // Remove current question from available questions

        setAcceptingAnswers(true);
        setAdditionalStylesAnswer1("");
        setAdditionalStylesAnswer2("");
        setAdditionalStylesAnswer3("");
        setAdditionalStylesAnswer4("");

    };

    const playSound = (src: string) => {
        const audio = new Audio(src);
        audio.play();
    };
    const userAnswer = async (answer: number) => {
        if (!acceptingAnswers || !currentQuestion) return;
        setAcceptingAnswers(false);

        // const correctAnswer = currentQuestion?.answer;
        const correctAnswer = await getCorrectAnswer(currentQuestion?.id)

        if (answer === correctAnswer) {
            playSound(goodSound);
            setCurrentScore(prevPoints => prevPoints + pointsPerCorrectAnswer);
            if (answer === 1) setAdditionalStylesAnswer1(style.good);
            if (answer === 2) setAdditionalStylesAnswer2(style.good);
            if (answer === 3) setAdditionalStylesAnswer3(style.good);
            if (answer === 4) setAdditionalStylesAnswer4(style.good);
        } else {
            playSound(badSound);
            if (answer === 1) setAdditionalStylesAnswer1(style.bad);
            if (answer === 2) setAdditionalStylesAnswer2(style.bad);
            if (answer === 3) setAdditionalStylesAnswer3(style.bad);
            if (answer === 4) setAdditionalStylesAnswer4(style.bad);

            // Highlight the correct answer
            if (correctAnswer === 1) setAdditionalStylesAnswer1(style.good);
            if (correctAnswer === 2) setAdditionalStylesAnswer2(style.good);
            if (correctAnswer === 3) setAdditionalStylesAnswer3(style.good);
            if (correctAnswer === 4) setAdditionalStylesAnswer4(style.good);
        }



        setTimeout(() => {
            if (numberOfAnsweredQuestions + 1 >= MAX_QUESTIONS) {
           
                console.log('Score set in localStorage:', localStorage.getItem('score')); // Debugging line
                router.push('/end');
            } else {
                getNewQuestion();
                setNumberOfAnsweredQuestions(prev => prev + 1);
            }
        }, 3000); // 10000 milisekund = 10 sekund

    };

    useEffect(() => {
        loadQuestions();
    }, [difficulty]);

    return {
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
    }
}
