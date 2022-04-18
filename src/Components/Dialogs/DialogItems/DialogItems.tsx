import Dialog from './Dialog/Dialog';
//@ts-ignore
import s from '../../../Styles/Dialogs/dialogItems.module.scss'
import { dialogDataType } from "../../../Types/types"

type PropsType = {
    dialogDataState: Array<dialogDataType>
}
const DialogItems = ({ dialogDataState }: PropsType) => {
    let dialogData = dialogDataState
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