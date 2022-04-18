import { compose } from "redux"
import withAuthRedirect from "../../Hoc/withAuthRedirect"

import Profile from "./Profile"


const ProfileContainer = () => {
    return (
        <div><Profile /></div>
    )

}


export default compose(
    withAuthRedirect
)(ProfileContainer)