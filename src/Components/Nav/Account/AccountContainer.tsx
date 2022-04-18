
import { connect } from "react-redux"
import { compose } from "redux"
import { getProfileThunk } from "../../../Redux/Profile-reducer"
import { getAuthProfileSelecotr } from "../../../Redux/Selectors/AddPost-selector"
import { ProfileType } from "../../../Types/types"
import { GetFuncForUseSelector } from "../../common/Functions/Functions"
import Account from "./Account"



const AccountContainer = () => {
    const profile: ProfileType = GetFuncForUseSelector(getAuthProfileSelecotr)

    return (
        <Account profile={profile} />
    )
}





export default AccountContainer