import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { updateStatusThunkCreator } from '../../../../Redux/Profile-reducer'
import ProfileUserStatus from './ProfileUserStatus'

class ProfileUserStatusContainer extends Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Update')
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })


    }
    deactivateEditMode = () => {

        this.setState({
            editMode: false
        })
        this.props.updateStatusThunk(this.state.status)


    }
    onStatusChange = (value) => {

        this.setState({
            status: value
        })
    }

    render() {
        return (
            <ProfileUserStatus onStatusChange={this.onStatusChange} status={this.props.status} state={this.state} deactivateEditMode={this.deactivateEditMode} activateEditMode={this.activateEditMode} />

        )
    }

}

let mapStateToProps = (state) => {
    return {
        status: state.profilePage.status
    }
}

export default compose(connect(mapStateToProps, {
    updateStatusThunk: updateStatusThunkCreator
}))(ProfileUserStatusContainer)