import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, ALBUM_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE } from '../utils/consts'
import Album from '../pages/Album'
import Admin from '../pages/Admin'
import Auth from '../pages/Auth'
import Main from '../pages/Main'


const AppRouter = () => {

    return (
        <Routes>
            <Route path={MAIN_ROUTE} element={<Main />} exact />
            <Route path={ALBUM_ROUTE} element={<Album />} exact />
            <Route path={ADMIN_ROUTE} element={<Admin />} exact />
            <Route path={LOGIN_ROUTE} element={<Auth />} exact />
            <Route path={REGISTRATION_ROUTE} element={<Auth />} exact />
            <Route to={ALBUM_ROUTE} />
        </Routes>
    )
}

export default AppRouter