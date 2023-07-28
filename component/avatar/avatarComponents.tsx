import {forwardRef} from "react";
import {CustomProps} from "@/component/type";
import {isEmpty} from "lodash";

export const AvatarDefault = forwardRef<any, CustomProps & {src:string, rounded:boolean}>((props, ref) => {
    const round  =props.rounded ? 'rounded-full' : 'rounded'
    if (isEmpty(props.src)) {
        return (
            <div className={`relative overflow-hidden bg-gray-100 dark:bg-gray-600 ${props.classes ?? 'w-10 h-10'} ${round}`}>
                <svg className={`absolute w-12 h-12 text-gray-400 -left-1`} style={{left:'-0.25rem'}} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
            </div>
        )
    }
    return (
        <img src={props.src} className={`${props.classes ?? 'w-10 h-10'} ${round}`}/>
    )
})