import { useEffect } from "react"
import { compose } from "redux"
import withAuthRedirect from "../../Hoc/withAuthRedirect"

import Profile from "./Profile"



const ProfileContainer = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div><Profile /></div>
    )

}


export default compose(
    withAuthRedirect
)(ProfileContainer)