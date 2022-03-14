
import './App.css';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';

import Profile from '../Profile/Profile';
import WhoToFollow from '../WhoToFollow/WhoToFollow';
import Dialogs from '../Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App(props) {


    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <div className="app__wrapper __container">
                    <Nav />
                    <div className='app-wrapper-main'>

                        <Routes>
                            <Route path='/profile' element={<Profile store={props.store} />} />
                            <Route path='/messages/*' element={<Dialogs store={props.store} />} />
                        </Routes>
                    </div>
                    <WhoToFollow />
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
