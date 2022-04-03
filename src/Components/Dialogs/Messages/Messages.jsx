import MyMessage from './MyMessage/MyMessage';
import s from './Messages.module.css'
import YourMessage from './YourMessage/YourMessage';
import OneMessage from './OneMessage/OneMessage';
import AddMessageContainer from '../AddMessage/AddMessageContainer';
import Preloader from '../../common/Preloader/Preloader';

const Messages = (props) => {


    let myMessageInfoData = props.myMessageInfoData
    let yourMessageInfoData = props.yourMessageInfoData
    let OneMessageData = props.OneMessageData


    let OneMessageElement = OneMessageData
        .map((messageEl) => {
            if (!props.profile) {
                return <Preloader />
            }
            if (messageEl.from === 'me') {
                return <MyMessage img={props.profile.photos.small != null ? props.profile.photos.small : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} NewMessageElement={<OneMessage message={messageEl.message} />} name={props.profile.fullName} time={myMessageInfoData.time} />
            }
            if (messageEl.from === 'you') {
                return <YourMessage NewMessageElement={<OneMessage message={messageEl.message} />} name={yourMessageInfoData.name} time={yourMessageInfoData.time} />
            }

        })

    return (
        <div className={s.messages}>
            <div className={s.main}>
                {OneMessageElement}
            </div>
            <div className={s.addMessage}>
                <AddMessageContainer />
            </div>
        </div>


    )
}

export default Messages;