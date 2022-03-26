
import { Navigate } from 'react-router-dom';
import DialogItemsContainer from './DialogItems/DialogItemsContainer';
import s from './Dialogs.module.css'
import MessagesContainer from './Messages/MessagesContainer';


const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <DialogItemsContainer />
            <MessagesContainer />

        </div>
    )
}

export default Dialogs;