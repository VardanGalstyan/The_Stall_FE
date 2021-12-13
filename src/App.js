import './App.css';
import './Styles/css/Styles.css'
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Error from './utils/Error';
import HorseOwnerHome from './components/horseOwner/HorseOwnerHome';
import Home from './components/Home/Home';
import Stable from './components/Stable/Stable';
import StableOwnerMainProfile from './components/stableOwner/StableOwnerMainProfile';
import RiderProfile from './components/Rider/RiderProfile';
import HorseOwnerProfile from './components/horseOwner/HorseOwnerProfile';
import HorseProfile from './components/Horse/HorseProfile';

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
                <Redirect to='/home' />,
              token && role === 'stableOwner' ?
                <Redirect to='/stableOwner' /> :
                <Redirect to='/home' />,
              token && role === 'horseOwner' ?
                <Redirect to='/horseOwner' /> :
                <Redirect to='/home' />
            )
          }} />

          <Route exact path='/rider' component={RiderProfile} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/stableOwner/:id' component={StableOwnerMainProfile} />
          <Route exact path='/horseOwner/:id' component={HorseOwnerProfile} />
          <Route exact path='/horseOwners:id' component={HorseOwnerHome} />
          <Route exact path='/stables/:id' component={Stable} />
          <Route exact path='/horses/:id' component={HorseProfile} />
          <Route exact path='/error' component={Error} />
        </Switch>
      </Container>
    </Router >
  );
}

export default App;
