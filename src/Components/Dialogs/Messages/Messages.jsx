import MyMessage from './MyMessage/MyMessage';
import s from './Messages.module.css'
import YourMessage from './YourMessage/YourMessage';
import OneMessage from './OneMessage/OneMessage';
import AddMessageContainer from '../AddMessage/AddMessageContainer';

const Messages = (props) => {

    let myMessageInfoData = props.myMessageInfoData
    let yourMessageInfoData = props.yourMessageInfoData
    let OneMessageData = props.OneMessageData


    let OneMessageElement = OneMessageData
        .map((messageEl) => {
            if (messageEl.from === 'me') {
                return <MyMessage NewMessageElement={<OneMessage message={messageEl.message} />} name={myMessageInfoData.name} time={myMessageInfoData.time} />
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