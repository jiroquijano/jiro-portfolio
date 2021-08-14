import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import OfficePage from './components/Content/OfficePage';

function App() {
  return (
    <div className="App">
      {/* header/navigation goes here */}
          <BrowserRouter>
            <Switch>
              <Route path='/' exact component={()=><Redirect to='/office'/>}/>
              <Route path='/office' exact component={OfficePage}/>
              <Route path='/contact' exact component={()=><div>Contact</div>}/>
            </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
