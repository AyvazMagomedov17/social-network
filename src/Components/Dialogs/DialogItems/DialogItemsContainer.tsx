
import { getDialogDataStateSelector } from "../../../Redux/Selectors/DialogItmes-selector";
import { GetFuncForUseSelector } from "../../common/Functions/Functions";
import DialogItems from "./DialogItems";
import { dialogDataType } from "../../../Types/types"
import { getCountOfNewMessagesSelector } from "../../../Redux/Selectors/Messages-selector";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDialogsThunk } from "../../../Redux/Messages-reducer";

let DialogItemsContainer = () => {
    const dispatch = useDispatch()


    const dialogDataState: Array<dialogDataType> = GetFuncForUseSelector(getDialogDataStateSelector)

    return <DialogItems dialogDataState={dialogDataState} />
}
export default DialogItemsContainer