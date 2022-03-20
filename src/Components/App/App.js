
import './App.css';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';

import Profile from '../Profile/Profile';
import WhoToFollow from '../WhoToFollow/WhoToFollow';
import Dialogs from '../Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Friends from '../Friends/Friends';




function App(props) {


    return (

        <div className="app">
            <Header />
            <div className="app__wrapper __container">
                <Nav />
                <div className='app-wrapper-main'>

                    <Routes>
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/messages/*' element={<Dialogs />} />
                        <Route path='/friends/*' element={<Friends />} />
                    </Routes>
                </div>
                <WhoToFollow />
            </div>
        </div>

    );
}


export default App;
