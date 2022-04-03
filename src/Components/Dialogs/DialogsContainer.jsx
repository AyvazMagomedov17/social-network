
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { compose } from 'redux'
import withAuthRedirect from '../../Hoc/withAuthRedirect'
import Dialogs from './Dialogs'

class DialogsContainer extends PureComponent {

    constructor(props) {
        super(props)


    }


    render() {

        return (
            <Dialogs />
        )
    }
}




export default compose(
    connect(null),
    withAuthRedirect
)(DialogsContainer)
