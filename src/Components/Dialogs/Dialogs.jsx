
import { memo } from 'react';
import DialogItemsContainer from './DialogItems/DialogItemsContainer';
import s from './Dialogs.module.css'
import MessagesContainer from './Messages/MessagesContainer';


const Dialogs = memo((props) => {
    return (
        <div className={s.dialogs}>
            <DialogItemsContainer />
            <MessagesContainer />

        </div>
    )
})

export default Dialogs;