import React, {AllHTMLAttributes, forwardRef} from "react";

// & AllHTMLAttributes<any> & HTMLElement
export const SuccessBtn = forwardRef((props:{classNames:string, tag:string}, ref) => {
    const Tag = `${props.tag}`
    return (
        <>
            <button ref={ref} className={`btn3d btn-success ${props.classNames}`}>button</button>
        </>
    )
})