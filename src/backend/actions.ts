"use server";

import easyQuestions from "@/backend/questions-easy.json";
import mediumQuestions from "@/backend/questions-medium.json";
import hardQuestions from "@/backend/questions-hard.json";

type RawQuestion = {
    id:number;
    question: string,
    choices1: string,
    choices2: string,
    choices3: string,
    choices4: string,
    answer: number,
}

export type Question = {
    id:number;
    question: string,
    choices1: string,
    choices2: string,
    choices3: string,
    choices4: string,
}

export async function getQuestions(difficulty: string, amount: number): Promise<Question[]> {
    let questionsPool: RawQuestion[] = [];

    // Wybierz odpowiednią pulę pytań na podstawie poziomu trudności
    switch (difficulty) {
        case 'medium':
            questionsPool = mediumQuestions;
            break;
        case 'hard':
            questionsPool = hardQuestions;
            break;
        case 'easy':
        default:
            questionsPool = easyQuestions;
            break;
    }

    // Losowanie pytań
    const selectedQuestions: Question[] = [];
    const usedIndexes = new Set<number>();

    while (selectedQuestions.length < amount && questionsPool.length > 0) {
        const randomIndex = Math.floor(Math.random() * questionsPool.length);

        // Unikamy powtórzeń, sprawdzając czy indeks był już użyty
        if (!usedIndexes.has(randomIndex)) {
            const {answer, ...question} = questionsPool[randomIndex]
            selectedQuestions.push(question);
            usedIndexes.add(randomIndex);
        }
    }

    // Zwracanie wylosowanych pytań
    return selectedQuestions;
}
export async function getCorrectAnswer(questionId: number) {
    //pobierz mi wszystkie pytania
    //wez wszystkie pytania dodaj do wielkiech tablicy 
    let questionsPool: RawQuestion[] = [...easyQuestions, ...mediumQuestions, ...hardQuestions];
    //wez z nich id
    return questionsPool.find(item => item.id === questionId)?.answer
}