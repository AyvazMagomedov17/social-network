
import { getDialogDataStateSelector } from "../../../Redux/Selectors/DialogItmes-selector";
import { GetFuncForUseSelector } from "../../common/Functions/Functions";
import DialogItems from "./DialogItems";
import { dialogDataType } from "../../../Types/types"

let DialogItemsContainer = () => {
    const dialogDataState: Array<dialogDataType> = GetFuncForUseSelector(getDialogDataStateSelector)
    return <DialogItems dialogDataState={dialogDataState} />
}
export default DialogItemsContainer