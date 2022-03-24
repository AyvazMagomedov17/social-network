
import './App.css';

import Nav from '../Nav/Nav';

import Profile from '../Profile/Profile';
import WhoToFollowContainer from '../WhoToFollow/WhoToFollowContainer';
import Dialogs from '../Dialogs/Dialogs';
import { Route, Routes, } from 'react-router-dom';
import Friends from '../Friends/Friends';
import HeaderContainer from '../Header/HeaderContainer';





function App(props) {


    return (

        <div className="app">
            <HeaderContainer />
            <div className="app__wrapper __container">
                <Nav />
                <div className='app-wrapper-main'>

                    <Routes>
                        <Route path='/profile/*' element={<Profile />} />
                        <Route path='/messages/*' element={<Dialogs />} />
                        <Route path='/friends/*' element={<Friends />} />
                    </Routes>
                </div>
                <WhoToFollowContainer />
            </div>
        </div>

    );
}


export default App;
