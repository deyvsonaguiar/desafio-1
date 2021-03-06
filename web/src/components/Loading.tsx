import { CircleNotch } from "phosphor-react";

export function Loading() {
    return (
        <div
        className="h-6 w-6 flex items-center justify-center animate-spin">
            <CircleNotch  weight="bold" className="w-4 h-4"/>
        </div>
    )
}