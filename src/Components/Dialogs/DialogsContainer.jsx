
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { compose } from 'redux'
import withAuthRedirect from '../../Hoc/withAuthRedirect'
import Dialogs from './Dialogs'

class DialogsContainer extends Component {

    constructor(props) {
        super(props)


    }


    render() {
        return (
            <Dialogs />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        nothing: 0
    }
}

export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)(DialogsContainer)
