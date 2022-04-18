
import Posts from './Posts'
import { GetFuncForUseSelector } from '../../common/Functions/Functions';
import { getAuthProfileSelecotr } from '../../../Redux/Selectors/AddPost-selector';
import { getPostsSelector } from '../../../Redux/Selectors/Posts-selector';
import Preloader from '../../common/Preloader/Preloader';
import { ProfileType } from '../../../Types/types';

type Props = {}

let PostsContainer = ({ }: Props) => {
    let StateProps = {
        profile: GetFuncForUseSelector(getAuthProfileSelecotr) as ProfileType,
        postData: GetFuncForUseSelector(getPostsSelector)
    }
    if (!StateProps.profile) {
        return <Preloader />
    }
    return (
        <Posts profile={StateProps.profile} postData={StateProps.postData} />
    )
}

export default PostsContainer

