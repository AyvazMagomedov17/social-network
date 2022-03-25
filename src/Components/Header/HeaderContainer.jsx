import axios from 'axios';
import { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthUserDataAC } from '../../Redux/Auth-reducer';
import Header from './Header';


class HeaderContainer extends Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }




            })
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

export default connect(mapStateToProps, { setAuthUserData: setAuthUserDataAC })(HeaderContainer);