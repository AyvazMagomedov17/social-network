//@ts-ignore
import { stateType } from "../Redux-store.ts";

export const getStatusSelector = (state: stateType) => {
    return state.profilePage.status
}