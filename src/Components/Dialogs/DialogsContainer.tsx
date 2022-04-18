

import { compose } from 'redux'
import withAuthRedirect from '../../Hoc/withAuthRedirect'
import Dialogs from './Dialogs'

const DialogsContainer = () => {


    return (
        <Dialogs />
    )

}


export default compose(
    withAuthRedirect
)(DialogsContainer)
