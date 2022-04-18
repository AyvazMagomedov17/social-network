

import { addPostAC } from '../../../Redux/Profile-reducer'
import AddPost from './AddPost'

import { GetFuncForUseSelector } from '../../common/Functions/Functions'
import { getAuthProfileSelecotr, getImgSelector } from '../../../Redux/Selectors/AddPost-selector'
import { useDispatch } from 'react-redux'

import Preloader from '../../common/Preloader/Preloader'



const AddPostContainer = () => {
    let StateProps = {
        profile: GetFuncForUseSelector(getAuthProfileSelecotr)
    }
    const dispatch = useDispatch()
    let addPost = (text: string) => {
        dispatch(addPostAC(text))
    }
    if (StateProps.profile === null) {
        return <Preloader />
    }
    return (
        <AddPost profile={StateProps.profile} addPost={addPost} />
    )
}

export default AddPostContainer