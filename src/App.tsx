import { Route, Switch,Redirect } from 'react-router-dom'
import { useTokenCookie } from './helpers/cookie_handlers/AuthCookie'

import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'
import VerifyEmailPage from './pages/VerifyEmail'
import HomePage from './pages/Home'

const App = () => {

  const [token,,] = useTokenCookie()
  return (
    
      /**
       * Render is used when the certain conditions are met
       **/

    <Switch>
      <Route exact path="/" render={() => (
        token ? 
        (<HomePage />):
        ( <LoginPage />)
      )}>
       
      </Route>
      <Route path="/register" render={
        () => (
        token ? 
        (<Redirect to="/"/>) :
        (<RegisterPage />)
      )}>
      </Route>

      <Route path="/verify/:token" render={(props) => <VerifyEmailPage {...props} />}>
      </Route>
    </Switch>
  )
}

export default App