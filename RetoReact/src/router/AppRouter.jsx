import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
// import { PrincipalPage } from '../insideAplication/page'

export const AppRouter = () => {

  return (
    <Routes>
        {/* login */}
        <Route path='/auth/*' element= {<AuthRoutes/>}/>
        <Route path='/*' element = {<Navigate to="/auth/login"/>}/>
        {/* <Route path='/PrincipalPage/*' element= {<Routers/>}/> */}
        
    </Routes>
  )
}
