
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getLoginThunkCreator, logoutThunkCreator, setAuthUserDataAC } from '../../Redux/Auth-reducer';
import { getStatusThunkCreator } from '../../Redux/Profile-reducer';
import Header from './Header';


class HeaderContainer extends Component {
    componentDidMount() {
        this.props.getLoginThunk()

    }
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
    setAuthUserData: setAuthUserDataAC,
    getLoginThunk: getLoginThunkCreator,
    logoutThunk: logoutThunkCreator

}))(HeaderContainer)