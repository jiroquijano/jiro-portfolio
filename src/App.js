import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      Header/Navigation
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={()=><div>Home</div>}/>
          <Route path='/office' exact component={()=><div>Office</div>}/>
          <Route path='/contact' exact component={()=><div>Contact</div>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
