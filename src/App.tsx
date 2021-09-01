import { Route, Switch,Redirect } from 'react-router-dom'
import { useTokenCookie, useRefreshTokenCookie } from './helpers/cookie_handlers/AuthCookie'

import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'
import VerifyEmailPage from './pages/VerifyEmail'
import HomePage from './pages/Home'
import AuthenticatedHomePage from './pages/AuthenticatedHome'


const App = () => {

  const [refreshToken ,,] = useRefreshTokenCookie()

  return (
    
      /**
       * Render is used when the certain conditions are met
       **/

    <Switch>
      <Route exact path="/" render={() => (
        refreshToken ? 
        (<AuthenticatedHomePage />):
        ( <HomePage />)
      )} />

      <Route path="/register" render={
        () => (
        refreshToken ? 
        (<Redirect to="/"/>) :
        (<RegisterPage />)
      )} />

      <Route path="/login" render={
        () => (
        refreshToken ? 
        (<Redirect to="/"/>) :
        (<LoginPage />)
      )} />

      <Route path="/verify/:token" render={(props) => <VerifyEmailPage {...props} />}>
      </Route>
    </Switch>
  )
}

export default App