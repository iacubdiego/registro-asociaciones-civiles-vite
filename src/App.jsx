// import { useState } from 'react'
import './App.css'
import { Route } from 'wouter'

import { auth } from './firebase/config';
import { AuthProvider } from "./context/AuthContext";

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/RegisterNew'
import AdminContent from './pages/AdminContent';

function App() {

  return (
    <>
     <AuthProvider auth={auth}>
        <Route path='/' component={Home} />
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/admincontetn' component={AdminContent}/>


      </AuthProvider>

    </>
  )
}

export default App
