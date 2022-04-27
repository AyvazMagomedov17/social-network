

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { compose } from 'redux'
import withAuthRedirect from '../../Hoc/withAuthRedirect'
import { getCountOfNewMessagesThunk, getDialogsThunk } from '../../Redux/Messages-reducer'
import { getCountOfNewMessagesSelector, getMessagesIsFetching } from '../../Redux/Selectors/Messages-selector'
import Preloader from '../common/Preloader/Preloader'
import Dialogs from './Dialogs'

const DialogsContainer = () => {
    const dispatch = useDispatch()
    const messagesIsFetching = useSelector(getMessagesIsFetching) as boolean
    const countOfNewMessages = useSelector(getCountOfNewMessagesSelector) as number


    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getCountOfNewMessagesThunk())

    }, [])
    useEffect(() => {

        dispatch(getDialogsThunk())
    }, [])
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
