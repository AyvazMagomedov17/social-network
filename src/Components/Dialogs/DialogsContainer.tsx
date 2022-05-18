

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { compose } from 'redux'
import withAuthRedirect from '../../Hoc/withAuthRedirect'
import { getCountOfNewMessagesThunk, getDialogsThunk, MessagesActions } from '../../Redux/Messages-reducer'
import { getCountOfNewMessagesSelector, getDialogsIsFetching, getMessagesIsFetching } from '../../Redux/Selectors/Messages-selector'
import Preloader from '../common/Preloader/Preloader'
import Dialogs from './Dialogs'

const DialogsContainer = () => {
    const dispatch = useDispatch()
    const messagesIsFetching = useSelector(getMessagesIsFetching) as boolean
    const countOfNewMessages = useSelector(getCountOfNewMessagesSelector) as number
    const dialogsIsFetching = useSelector(getDialogsIsFetching) as boolean


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    useEffect(() => {
        if (!dialogsIsFetching) dispatch(getDialogsThunk())
        return function () {
            dispatch(MessagesActions.clearDialogList())
        }

    }, [dialogsIsFetching])
    if (messagesIsFetching) {
        return <Preloader />
    }
    return (
        <Dialogs />
    )

}


export default compose(
    withAuthRedirect
)(DialogsContainer)
