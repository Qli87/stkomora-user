import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PageRouting from './PageRouting'
import Page404 from './components/Page404'

class App extends React.Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route path='/pocetna' component={PageRouting} />
            <Route path='/onama' component={PageRouting} />
            <Route path='/kontakt' component={PageRouting} />
            <Route path='/vijesti' component={PageRouting} />
            <Route path='/biografija' component={PageRouting} />
            <Route path='/kategorija_vijesti' component={PageRouting} />
            {/* <Route path='/detaljnije' component={PageRouting} /> */}
            <Route path='/oglasi' component={PageRouting}></Route>
            <Route path='/clanovi' component={PageRouting}></Route>
            <Route path='/' component={Page404} />
          </Switch>
      </Router>
    )
  }
}

export default App;
