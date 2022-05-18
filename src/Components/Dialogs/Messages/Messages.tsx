import MyMessage from './MyMessage/MyMessage';
//@ts-ignore
import s from '../../../Styles/Dialogs/messages.module.scss'
import YourMessage from './YourMessage/YourMessage';
import OneMessage from './OneMessage/OneMessage';
import Preloader from '../../common/Preloader/Preloader';
import AddMessage from '../AddMessage/AddMessage';
import { ProfileType } from '../../../Types/types';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthIdSelector } from '../../../Redux/Selectors/AddPost-selector';
import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getMessagesThunk, MessagesActions } from '../../../Redux/Messages-reducer';
import { getDialogsIsFetching, getMessagesIsFetching, getMessagesListSelector, getTotalMessagesCountSelector } from '../../../Redux/Selectors/Messages-selector';
import { profileApi } from '../../../Api/api';
import { v4 as uuidv4 } from 'uuid';


type PropsType = {
    totalMessagesCount: number
    id: number | null
    profile: any
}
const Messages = (props: PropsType) => {
    let scrollRef = useRef(null)

    const totalMessagesCount = useSelector(getTotalMessagesCountSelector)
    const dispatch = useDispatch()
    const authUserId = useSelector(getAuthIdSelector)
    let params = useParams()
    let userId = Number(params['*'])
    const messagesList = useSelector(getMessagesListSelector)

    let messagesScrollTop = document.getElementById('messagesScroll')
    const [isFirstSetUsers, setisFirstSetUsers] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [isFetching, setIsFetching] = useState(false)
    const [isGetNewMessages, setIsGetNewMessages] = useState(true)
    const [friendProfileInfo, setFriendProfileInfo] = useState<ProfileType>()
    const scrollHendler = (e: any) => {
        if (e.target.scrollTop < 100) {
            if (totalMessagesCount > messagesList.length) {
                setCurrentPage(prevPage => prevPage + 1)
                setIsFetching(true)
            }

        }
    }
    const getFriendProfileInfo = async (userId: number) => {
        const response = await profileApi.getProfileAPI(userId)
        setFriendProfileInfo(response)
    }

    useEffect(() => {

        dispatch(MessagesActions.deleteMessagesListAC())
        dispatch(getMessagesThunk(userId))
        setisFirstSetUsers(true)
        getFriendProfileInfo(userId)
        return () => {
            dispatch(MessagesActions.deleteMessagesListAC())
            setCurrentPage(1)
        }
    }, [userId])

    useEffect(() => {
        if (isGetNewMessages) {
            dispatch(getMessagesThunk(userId))
            setIsGetNewMessages(false)
        }
    }, [isGetNewMessages])
    useEffect(() => {
        if (isFetching) {

            dispatch(getMessagesThunk(userId, currentPage))
            setisFirstSetUsers(false)
        }
        setIsFetching(false)

    }, [isFetching])
    useEffect(() => {
        if (isFirstSetUsers) if (messagesScrollTop) messagesScrollTop.scrollTop = 10000
        if (messagesScrollTop) messagesScrollTop.addEventListener('scroll', scrollHendler)
        return function () {
            if (messagesScrollTop) messagesScrollTop.removeEventListener('scroll', scrollHendler)
        }
    }, [messagesScrollTop])


    let OneMessageElement = messagesList
        .map((messageEl) => {

            if (!props.profile) {
                return <Preloader />
            }
            if (messageEl.senderId === authUserId) {
                let time = +messageEl.addedAt.slice(11, 13) + 3
                return <MyMessage id={props.profile.userId} key={uuidv4()} img={props.profile.photos.small != null ? props.profile.photos.small : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} NewMessageElement={<OneMessage message={messageEl.body} />} name={props.profile.fullName} time={messageEl?.addedAt.slice(0, 10) + '  ' + (time) + messageEl?.addedAt.slice(13, 16)} />
            }
            if (messageEl.senderId !== authUserId) {
                return <YourMessage id={friendProfileInfo?.userId} key={uuidv4()} NewMessageElement={<OneMessage message={messageEl.body} />} name={friendProfileInfo?.fullName} time={messageEl.addedAt} img={friendProfileInfo?.photos?.small != null ? friendProfileInfo?.photos?.small : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} />
            }

        })

    return (
        <>

            <div className={s.messages}>
                {totalMessagesCount ? <div ref={scrollRef} onScroll={(e) => {
                    scrollHendler(e)
                }} className={s.main} id='messagesScroll'>
                    {OneMessageElement}

                </div> : <div className={s.main}><p className={s.withoutMessages}>Нет сообщений</p></div>}

                <button className={s.updateMessages} onClick={() => {
                    setIsGetNewMessages((prevState) => !prevState)
                }} >Обновить сообщения</button>
                <div className={s.addMessage}>
                    <AddMessage />
                </div>
            </div>
        </>



    )
}

export default Messages;