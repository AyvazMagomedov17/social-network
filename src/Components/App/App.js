
import './App.css';
import Nav from '../Nav/Nav';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Friends from '../Friends/Friends';
import React, { Component, Suspense } from 'react';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { initializeAppThunk } from '../../Redux/App-reducer';
import Preloader from '../common/Preloader/Preloader';
import { getProfileThunk } from '../../Redux/Profile-reducer';
import store from '../../Redux/Redux-store';
import HeaderContainer from '../Header/HeaderContainer';
import WhoToFollowContainer from '../WhoToFollow/WhoToFollowContainer';


const DialogsContainer = React.lazy(() => import('../Dialogs/DialogsContainer'));

const ProfileContainer = React.lazy(() => import('../Profile/ProfileContainer'));
const LoginContainer = React.lazy(() => import('../Login/LoginContainer'));




class AppRender extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }



    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (

            <div className="app">
                <HeaderContainer />
                <div className="app__wrapper __container">
                    <Nav />
                    <div className='app-wrapper-main'>
                        <Suspense fallback={<Preloader />}>
                            <Routes>
                                <Route path='/profile/*' element={<ProfileContainer />} />
                                <Route path='/messages/*' element={<DialogsContainer />} />
                                <Route path='/friends/*' element={<Friends />} />
                                <Route path='/login' element={<LoginContainer />} />
                            </Routes>
                        </Suspense>
                    </div>

                    <WhoToFollowContainer />

                </div>
            </div>

        );
    }
}
let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,

    }
}

let AppContainer = compose(connect(mapStateToProps, { initializeApp: initializeAppThunk, getProfile: getProfileThunk }))(AppRender);

let App = props => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>)
}

export default App;