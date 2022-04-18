//@ts-ignore
import { stateType } from './../Redux-store.ts';


export const getloginSelector = (state: stateType) => {
    return state.auth.login
}