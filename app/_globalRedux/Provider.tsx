"use client"

import React from "react";
import {Provider} from "react-redux";
import {store} from "@/app/_globalRedux/store";

export const Providers = ({ children }: { children: React.ReactNode}) => {
    return <Provider store={store}>{children}</Provider>
}