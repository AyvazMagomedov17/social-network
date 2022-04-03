import Dialog from './Dialog/Dialog';
import s from './DialogItems.module.css'

const DialogItems = ({ dialogDataP }) => {
    let dialogData = dialogDataP
    let dialogElements = dialogData
        .map(dialog => <Dialog name={dialog.name} id={dialog.id} />)

    return (
        <div className={s.dialogItems}>
            <ul className={s.dialog}>
                {dialogElements}
            </ul>
        </div>
    )
}
export default DialogItems;