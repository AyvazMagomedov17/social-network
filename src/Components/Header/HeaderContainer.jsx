
import { Component } from 'react';
import { connect } from 'react-redux';
import { getLoginThunkCreator, setAuthUserDataAC } from '../../Redux/Auth-reducer';
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

export default connect(mapStateToProps, {
    setAuthUserData: setAuthUserDataAC,
    getLoginThunk: getLoginThunkCreator
})(HeaderContainer);