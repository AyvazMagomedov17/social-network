

import { useDispatch } from 'react-redux';

import { logoutThunk } from '../../Redux/Auth-reducer';
import { getloginSelector } from '../../Redux/Selectors/Header-selector';
import { getIsAuthSelector } from '../../Redux/Selectors/Login-selectors';
import { GetFuncForUseSelector } from '../common/Functions/Functions';
import Header from './Header';


const HeaderContainer = () => {
    let State = {
        isAuth: GetFuncForUseSelector(getIsAuthSelector) as boolean,
        login: GetFuncForUseSelector(getloginSelector) as string
    }
    let dispatch = useDispatch()
    const logoutThunkFunc = (): void => {
        dispatch(logoutThunk())
    }

    return (
        <Header {...State} logoutThunk={logoutThunkFunc} />
    )

}




export default HeaderContainer