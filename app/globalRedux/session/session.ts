import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type SessionState = {
    id : string | null
}
const initialState:SessionState = {
    id : null
}
export const sessionSlice = createSlice({
    name : 'session',
    initialState,
    reducers: {
        setSession : (state, action:PayloadAction<SessionState>) => {
            if (state.id == null) {
                state.id = action.payload.id
            }
        }
    }
})

export const {setSession} = sessionSlice.actions
export default sessionSlice.reducer