import { feedbackTypes, FeedbackType } from ".."

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps) {
    return (
        <div className="flex py-8 gap-2 w-full">

            { Object.entries(feedbackTypes).map(([key, value]) => {
                return (
                    <button key={key}
                        className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none "
                        onClick = {() => props.onFeedbackTypeChanged(key as FeedbackType)}
                        type="button">
                        <img src={value.image.source} alt={value.image.alt} />
                        <span>{value.title}</span>
                    </button>
                )
            })}
        </div>
    )
}