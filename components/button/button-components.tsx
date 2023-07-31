import React, {AllHTMLAttributes, forwardRef, ReactNode} from "react";
import {CustomProps} from "@/components/type";
export const SuccessBtn = forwardRef<any, CustomProps>((props, ref) =>
    React.createElement(props.tag || "div",{...props,className:`btn3d btn-success ${props.classes || ''}`},props.children)
)

export const PaginationBtn = forwardRef<any, CustomProps>((props, ref) => (
    <a {...props}
       className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
        {props.children}
    </a>
))