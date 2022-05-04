import { useState } from "react";
import { CloseButton } from "../closeButton";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

/** Vetor de objetos, acessado pela propriedade:
 * 
 *      //Object.entries(feedbackTypes) => 
 * 
 * [
 * ['BUG', {...}],
 * ['IDEA', {...}],
 * ['THOUGHT', {...}]
 * ]
 */

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem pensante'
        }
    },

}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg
        w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            <footer>
                Feito com ♥ pela <a className="underline underline-offset-2" href="#">Rocketseat</a>
            </footer>
        </div>
   
    )
}