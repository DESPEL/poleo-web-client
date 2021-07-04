import { SideBar } from './components/sidebar'

import { getUserData } from './helpers/user'
import { useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home } from './pages/home'

function App() {
  const [user, setUser] = useState(getUserData())

  return (
    <Router>
      <div className="App">
        <SideBar user={user} />
        <Switch>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
