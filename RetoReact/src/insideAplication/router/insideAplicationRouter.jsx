
import { Route, Routes } from "react-router-dom"
import {InsideAplicationPage} from '../pages/InsideAplicationPage'


export const InsideAplicationRouter = () => {
  return (

    <Routes>

      {console.log("esto es el router de insudeAplication router")}
      <Route path='InsideAplication' element={<InsideAplicationPage/>} />

      {/*    
       <Routes>
      
        <Route path='login' element = {<LoginPage/>}/>
        <Route path='register' element = {<RegisterPage/>}/>
        <Route path='/*' element = {<Navigate to="/auth/login"/>}/>

    </Routes>
     */}
    </Routes>
  )
}