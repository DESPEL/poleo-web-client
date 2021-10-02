import { SideBar } from './components/sidebar'

import { getUserData, getDefaultUser } from './helpers/data'
import { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home } from './pages/home'
import { AnswerPage } from './pages/answer';
import { HistoryPage } from './pages/history';
import { MePage } from './pages/me';
import { MyPollsPage } from './pages/myPolls';
import { Login } from './pages/login';

function App() {
  const [user, setUser] = useState(getDefaultUser)

  useEffect(() => {
    (async () => {
      setUser(await getUserData())
    })()
  }, [])

  return (
    <Router>
      <SideBar user={user} />
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/answer'>
          <AnswerPage></AnswerPage>
        </Route>
        <Route exact path='/history'>
          <HistoryPage></HistoryPage>
        </Route>
        <Route exact path='/me'>
          <MePage user={user} setUser={setUser}></MePage>
        </Route>
        <Route exact path='/mypolls'>
          <MyPollsPage user={user}></MyPollsPage>
        </Route>
        <Route exact path='/login'>
          <Login user={user}></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
