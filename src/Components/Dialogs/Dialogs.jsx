
import DialogItemsContainer from './DialogItems/DialogItemsContainer';
import s from './Dialogs.module.css'
import MessagesContainer from './Messages/MessagesContainer';


const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <DialogItemsContainer store={props.store} />
            <MessagesContainer store={props.store} />

        </div>
    )
}

export default Dialogs;