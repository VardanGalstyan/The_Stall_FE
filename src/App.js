import './App.css';
import './Styles/css/Styles.css'
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import LoginOptions from './components/onboarding/LoginOptions';
import Login from './components/onboarding/Login';
import Register from './components/onboarding/Register';
import RiderHome from './components/Rider/RiderHome';
import Error from './utils/Error';
import StableOwnerHome from './components/stableOwner/StableOwnerHome.jsx';
import HorseOwnerHome from './components/horseOwner/HorseOwnerHome';
import Stable from './components/stables/Stable';
import Home from './components/Home/Home';

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
                <Redirect to='/rider' /> :
                <Redirect to='/loginOption' />,
              token && role === 'stableOwner' ?
                <Redirect to='/stableOwner' /> :
                <Redirect to='/loginOption' />,
              token && role === 'horseOwner' ?
                <Redirect to='/horseOwner' /> :
                <Redirect to='/loginOption' />
            )
          }} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/rider' component={RiderHome} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/stableOwner' component={StableOwnerHome} />
          <Route exact path='/horseOwner' component={HorseOwnerHome} />
          <Route exact path='/stable/:id' component={Stable} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/loginOption' component={LoginOptions} />
          <Route exact path='/error' component={Error} />
        </Switch>
      </Container>
    </Router >
  );
}

export default App;
