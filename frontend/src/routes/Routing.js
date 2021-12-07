import React from 'react'
import { Suspense } from 'react';
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Tickets from '../pages/Tickets';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext';

const Routing = () => {
    return (
        <Router>
            <Suspense fallback={<h2>Loading...</h2>}>
                <AuthContext.Consumer>{({access_token}) => access_token ?
                    (<Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/cart'element={<Cart />} />
                        <Route path='/tickets' element={<Tickets />} />
                        <Route path='*' element={<Home />} />
                    </Routes>) :
                    (<Routes>
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='*' element={<Login />} />
                    </Routes>)    
                }</AuthContext.Consumer>
            </Suspense>
        </Router>
    )
}

export default Routing
