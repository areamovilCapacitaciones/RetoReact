import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'

export const AppRouter = () => {

  return (
    <Routes>
        {/* login */}
        <Route path='/auth/*' element= {<AuthRoutes/>}/>
    </Routes>
  )
}
