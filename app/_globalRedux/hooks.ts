import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDisPatch, RootState} from "@/app/_globalRedux/store";

export const useAppDisPatch = () => useDispatch<AppDisPatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;