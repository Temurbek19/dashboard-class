import {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Sidebar from './containers/Sidebar/Sidebar';

import Overview from './pages/Overview/Overview';
import Tickets from './pages/Tickets/Tickets';
import Ideas from './pages/Ideas/Ideas';

import './assets/styles/main.scss';

class App extends Component {

  constructor() {
    super();

    this.state = {
        activePage: 'overview'
    }

    this.setActivePage = this.setActivePage.bind(this);
} 

setActivePage(page) {
    this.setState({
        activePage: page
    })
}

    render() {
      return (
        <Router>
           <div className="fragment">
            <Sidebar activePage={this.state.activePage} setActivePage={this.setActivePage}/>
            <Switch>
              <Route path="/tickets" component={Tickets}/>
              <Route path="/overview" component={Overview}/>
              <Route path="/ideas" component={Ideas}/>
            </Switch>
          </div>
        </Router>
      );
    }
}

export default App;
