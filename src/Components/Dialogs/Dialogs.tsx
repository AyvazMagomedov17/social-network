
import { memo } from 'react';
import DialogItemsContainer from './DialogItems/DialogItemsContainer';
//@ts-ignore
import s from '../../Styles/Dialogs/dialogs.module.scss'
import MessagesContainer from './Messages/MessagesContainer';


const Dialogs = memo(() => {
    return (
        <div className={s.dialogs}>
            <DialogItemsContainer />
            <MessagesContainer />

        </div>
    )
})

export default Dialogs;