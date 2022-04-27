import Dialog from './Dialog/Dialog';
//@ts-ignore
import s from '../../../Styles/Dialogs/dialogItems.module.scss'
import { dialogDataType } from "../../../Types/types"
import { useSelector } from 'react-redux';
import { getDialogListSelector } from '../../../Redux/Selectors/DialogItmes-selector';

type PropsType = {
    dialogDataState: Array<dialogDataType>
}
const DialogItems = ({ dialogDataState }: PropsType) => {

    let dialogList = useSelector(getDialogListSelector)
    let dialogElements = dialogList
        .map(dialog => <Dialog key={dialog.id} img={dialog.photos.small != null ? dialog.photos.small : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} name={dialog.userName} id={dialog.id} />)


    return (
        <div className={s.dialogItems}>
            <ul className={s.dialog}>
                {dialogElements}
            </ul>
        </div>
    )
}
export default DialogItems;