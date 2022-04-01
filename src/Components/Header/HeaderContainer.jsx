
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { logoutThunkCreator } from '../../Redux/Auth-reducer';
import Header from './Header';


class HeaderContainer extends Component {

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default compose(connect(mapStateToProps, {

    logoutThunk: logoutThunkCreator

}))(HeaderContainer)