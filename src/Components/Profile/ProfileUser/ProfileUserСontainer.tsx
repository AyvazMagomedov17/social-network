
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { boolean } from 'yup';
//@ts-ignore
import { getProfileThunk, getStatusThunk } from '../../../Redux/Profile-reducer.ts'
import { getAuthIdSelector } from '../../../Redux/Selectors/AddPost-selector';
import { getUsersDataSelector } from '../../../Redux/Selectors/FrienList-selector';
import { getActualStringSelector, getIsFollowedUser, getIsgetProfileSelector, getProfileSelector, getUpdateProfileErrorMessageSelector, getUserIdSelector } from '../../../Redux/Selectors/ProfileUser-selectors';
import { ActualStringType, ProfileType, UsersDataType } from '../../../Types/types';
import { GetFuncForUseSelector } from '../../common/Functions/Functions';
import Preloader from '../../common/Preloader/Preloader';

import ProfileUser from './ProfileUser';



const ProfileUserContainer = () => {
    const dispatch = useDispatch()
    const location = useParams()
    const State = {
        profile: GetFuncForUseSelector(getProfileSelector) as ProfileType,
        actualString: GetFuncForUseSelector(getActualStringSelector) as ActualStringType,
        userId: GetFuncForUseSelector(getUserIdSelector) as number,
        updateProfileErrorMessage: GetFuncForUseSelector(getUpdateProfileErrorMessageSelector) as string,
        isgetProfile: GetFuncForUseSelector(getIsgetProfileSelector) as boolean,
        authId: useSelector(getAuthIdSelector),
        friendsData: useSelector(getUsersDataSelector) as UsersDataType[],
        isFollowedUser: useSelector(getIsFollowedUser) as boolean
    }


    const refreshProfile = () => {
        //@ts-ignore
        let userId = +location['*']
        if (!userId && !location['*']) {

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
        <ProfileUser {...State} isOwner={!State.actualString["*"] || State.actualString['*'] == State.authId} profile={State.profile} />
    )


}


export default ProfileUserContainer