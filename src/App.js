import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import OfficePage from './components/Office/OfficePage';

function App() {
  return (
    <div className="App">
      {/* header/navigation goes here */}
          <BrowserRouter>
            <Switch>
              <Route path='/' exact component={()=><div>Home</div>}/>
              <Route path='/office' exact component={OfficePage}/>
              <Route path='/contact' exact component={()=><div>Contact</div>}/>
            </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
