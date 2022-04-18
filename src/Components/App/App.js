
import s from '../../Styles/App/App.scss';
import Nav from '../Nav/Nav'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Friends from '../Friends/Friends.tsx';
import React, { Suspense, useEffect, } from 'react';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { initializeAppThunk } from '../../Redux/App-reducer.ts';
import Preloader from '../common/Preloader/Preloader';
import store from '../../Redux/Redux-store.ts';
import HeaderContainer from '../Header/HeaderContainer';
import WhoToFollowContainer from '../WhoToFollow/WhoToFollowContainer';
import { getAuthProfileThunk } from '../../Redux/Auth-reducer.ts';


const DialogsContainer = React.lazy(() => import('../Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('../Profile/ProfileContainer'));
const LoginContainer = React.lazy(() => import('../Login/LoginContainer'));




const AppRender = (props) => {

    useEffect(() => {
        props.initializeApp(props.id)
    }, [props.id])



    let params = useLocation()


    if (!props.initialized) {
        return <Preloader />
    }
    return (
        <>
            <Suspense fallback={<Preloader />}>
                <Routes>
                    <Route path='/login' element={<LoginContainer />} />
                </Routes>
            </Suspense>




            {(params.pathname !== '/login' && props.initialized) ?
                <div className="app">

                    <HeaderContainer />
                    <div className="app__wrapper __container">
                        <Nav />
                        <div className='app-wrapper-main'>
                            <Suspense fallback={<Preloader />}>
                                <Routes>
                                    <Route path='/friends/*' element={<Friends />} />
                                    <Route path='/profile/*' element={<ProfileContainer />} />
                                    <Route path='/messages/*' element={<DialogsContainer />} />

                                    <Route path='*' element={<div>404 Not found</div>} />
                                    <Route path='/' element={props.initialized ? <Navigate to='/profile' /> : <Navigate to='/login' />} />

                                </Routes>
                            </Suspense>
                        </div>
                        <Suspense fallback={<Preloader />}>
                            <WhoToFollowContainer />
                        </Suspense>
                    </div>
                </div>
                :
                <></>
            }

        </>

    );

}
let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        id: state.auth.id

    }
}

let AppContainer = compose(connect(mapStateToProps, { initializeApp: initializeAppThunk, getProfile: getAuthProfileThunk }))(AppRender);

let App = props => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>)
}

export default App;