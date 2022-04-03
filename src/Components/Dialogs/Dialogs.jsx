
import { memo } from 'react';
import { Navigate } from 'react-router-dom';
import DialogItemsContainer from './DialogItems/DialogItemsContainer';
import s from './Dialogs.module.css'
import MessagesContainer from './Messages/MessagesContainer';


const Dialogs = memo((props) => {
    console.log('Render')
    return (
        <div className={s.dialogs}>
            <DialogItemsContainer />
            <MessagesContainer />

        </div>
    )
})

export default Dialogs;