import React, {AllHTMLAttributes, forwardRef, ReactNode} from "react";
interface CustomProps extends AllHTMLAttributes<any> {
    classes? : string
    tag? : keyof HTMLElementTagNameMap
    children?: ReactNode;
    key?: string | number;
    ref?: any;
}
export const SuccessBtn = forwardRef<any, CustomProps>((props, ref) =>
    React.createElement(props.tag || "div",{...props,className:`btn3d btn-success ${props.classes || ''}`},props.children)
)