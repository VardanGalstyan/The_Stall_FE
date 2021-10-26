import './App.css';
import { Container } from 'react-bootstrap';
import LoginOptions from './components/onboarding/LoginOptions';
import Login from './components/onboarding/Login';
import Register from './components/onboarding/Register';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import RiderHome from './components/Rider/RiderHome';
import Error from './utils/Error';
import './Styles/css/Styles.css'

function App() {
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')
  return (
    <Router>
      <Container fluid className="App">
        <Switch>
          <Route exact path='/' render={() => {
            return (
              token && role === 'rider' ?
                <Redirect to='/RiderHome' /> :
                <Redirect to='/loginOption' />
            )
          }} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/RiderHome' component={RiderHome} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/loginOption' component={LoginOptions} />
          <Route exact path='/error' component={Error} />
        </Switch>
      </Container>
    </Router >
  );
}

export default App;
