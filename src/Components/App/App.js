
import './App.css';

import Nav from '../Nav/Nav';

import WhoToFollowContainer from '../WhoToFollow/WhoToFollowContainer';
import { Route, Routes, } from 'react-router-dom';
import Friends from '../Friends/Friends';
import HeaderContainer from '../Header/HeaderContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import LoginContainer from '../Login/LoginContainer';





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
                        <Route path='/login' element={<LoginContainer />} />
                    </Routes>
                </div>
                <WhoToFollowContainer />
            </div>
        </div>

    );
}


export default App;
