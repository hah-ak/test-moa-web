import {AllHTMLAttributes, ReactNode} from "react";

export interface CustomProps extends AllHTMLAttributes<any> {
    classes? : string
    tag? : keyof HTMLElementTagNameMap
    children?: ReactNode;
    key?: string | number;
    ref?: any;
}