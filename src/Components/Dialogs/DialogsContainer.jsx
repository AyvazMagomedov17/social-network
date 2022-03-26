
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Dialogs from './Dialogs'

class DialogsContainer extends Component {

    constructor(props) {
        super(props)


    }


    render() {
        if (!this.props.isAuth) {
            return <Navigate to='/login' />
        }
        return (
            <Dialogs />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps)(DialogsContainer)
