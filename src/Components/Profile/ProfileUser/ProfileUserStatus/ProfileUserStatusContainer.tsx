
import { connect, useDispatch } from 'react-redux'
import { compose } from 'redux'
import { updateStatusThunk } from '../../../../Redux/Profile-reducer'
import { getStatusSelector } from '../../../../Redux/Selectors/ProfileUserStatus-selector'
import { GetFuncForUseSelector } from '../../../common/Functions/Functions'

import ProfileUserStatus from './ProfileUserStatus'



type PropsType = {
    isOwner: boolean
}
function ProfileUserStatusContainer({ isOwner }: PropsType) {
    const dispatch = useDispatch()
    const updateStatusThunkFunc = (status: string) => {

        dispatch(updateStatusThunk(status))
    }
    const State = {
        status: GetFuncForUseSelector(getStatusSelector)
    }
    return <ProfileUserStatus isOwner={isOwner} {...State} updateStatusThunk={updateStatusThunkFunc} />
}


export default ProfileUserStatusContainer