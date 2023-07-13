

import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes'
 import { InsideAplicationRouter } from '../insideAplication/router/insideAplicationRouter'

export const AppRouter = () => {
  return (
  
    
    <Routes>
        {/* login */}
        <Route path='/auth/*' element={<AuthRoutes/>}/>
        <Route path='/app/*' element={<InsideAplicationRouter/>}/>
    </Routes>
   
  );
  
  // ...
  
}