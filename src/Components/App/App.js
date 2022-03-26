
import './App.css';

import Nav from '../Nav/Nav';

import Profile from '../Profile/Profile';
import WhoToFollowContainer from '../WhoToFollow/WhoToFollowContainer';
import Dialogs from '../Dialogs/Dialogs';
import { Route, Routes, } from 'react-router-dom';
import Friends from '../Friends/Friends';
import HeaderContainer from '../Header/HeaderContainer';
import Login from '../Login/Login';
import DialogsContainer from '../Dialogs/DialogsContainer';
import ProfileContainer from '../Profile/ProfileContainer';





function App(props) {


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
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </div>
                <WhoToFollowContainer />
            </div>
        </div>

    );
}


export default App;
