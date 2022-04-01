
import './App.css';

import Nav from '../Nav/Nav';

import WhoToFollowContainer from '../WhoToFollow/WhoToFollowContainer';
import { Route, Routes, } from 'react-router-dom';
import Friends from '../Friends/Friends';
import HeaderContainer from '../Header/HeaderContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import LoginContainer from '../Login/LoginContainer';
import { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { initializeAppThunk } from '../../Redux/App-reducer';
import Preloader from '../common/Preloader/Preloader';





class App extends Component {

    componentDidMount() {
        this.props.initializeApp()

    }
    render() {
        if (!this.props.initialized) {
            debugger
            return <Preloader />
        }
        return (

            <div className="app">
                <HeaderContainer />
                <div className="app__wrapper __container">
                    <Nav />
                    <div className='app-wrapper-main'>

                        <Routes>
                            <Route path='/profile/*' element={<ProfileContainer />} />
                            <Route path='/messages/*' element={<DialogsContainer />} />
                            <Route path='/friends/*' element={<Friends />} />
                            <Route path='/login' element={<LoginContainer />} />
                        </Routes>
                    </div>
                    <WhoToFollowContainer />
                </div>
            </div>

        );
    }
}
let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(connect(mapStateToProps, { initializeApp: initializeAppThunk }))(App);
