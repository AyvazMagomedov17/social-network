//@ts-ignore
import { stateType } from './../../../Redux/Redux-store.ts';

import { useSelector } from 'react-redux';
export let GetFuncForUseSelector = (func: (state: stateType) => stateType) => {
    return useSelector((state: stateType) => func(state))
}