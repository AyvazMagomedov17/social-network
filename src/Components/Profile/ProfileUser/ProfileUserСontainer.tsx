
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { boolean } from 'yup';
//@ts-ignore
import { getProfileThunk, getStatusThunk } from '../../../Redux/Profile-reducer.ts'
import { getActualStringSelector, getIsgetProfileSelector, getProfileSelector, getUpdateProfileErrorMessageSelector, getUserIdSelector } from '../../../Redux/Selectors/ProfileUser-selectors';
import { ActualStringType, ProfileType } from '../../../Types/types';
import { GetFuncForUseSelector } from '../../common/Functions/Functions';
import Preloader from '../../common/Preloader/Preloader';

import ProfileUser from './ProfileUser';



const ProfileUserContainer = () => {
    const dispatch = useDispatch()

    const State = {
        profile: GetFuncForUseSelector(getProfileSelector) as ProfileType,
        actualString: GetFuncForUseSelector(getActualStringSelector) as ActualStringType,
        userId: GetFuncForUseSelector(getUserIdSelector) as number,
        updateProfileErrorMessage: GetFuncForUseSelector(getUpdateProfileErrorMessageSelector) as string,
        isgetProfile: GetFuncForUseSelector(getIsgetProfileSelector) as boolean,
    }


    const refreshProfile = () => {
        let userId = State.actualString["*"]
        if (!userId) {
            userId = State.userId
        }
        dispatch(getProfileThunk(userId))
        dispatch(getStatusThunk(userId))
    }
    useEffect(() => {
        refreshProfile()
    }, [State.actualString])

    if (State.isgetProfile) {
        return <Preloader />
    }
    return (
        <ProfileUser {...State} isOwner={!State.actualString["*"]} profile={State.profile} />
    )


}


export default ProfileUserContainer