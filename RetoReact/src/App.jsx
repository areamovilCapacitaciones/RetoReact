import {AppRouter} from "./router/AppRouter"
import {AppTheme} from './theme'

function App() {


  const user = 'info@areamovil.com.co';
  const password = '123456ab'
  // const {} = usefetch('https://areamovilmocks.azurewebsites.net/api/Login/ValidateUser?userName=info@areamovil.com.co&password=123456ab')

  return (
    <>
    <AppTheme>
      <AppRouter/>
    </AppTheme>

    </>
  )
}

export default App
