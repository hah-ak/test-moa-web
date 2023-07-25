import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {sessionSlice} from "@/app/globalRedux/session/session";

export const store = configureStore({
    reducer: {
        [sessionSlice.name] : sessionSlice.reducer
    },
    devTools:true
})

export type RootState = ReturnType<typeof store['getState']>
export type AppDisPatch = typeof store["dispatch"]
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>