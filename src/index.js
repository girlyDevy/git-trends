import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Auth from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch ,Redirect} from "react-router-dom"
import Dashboard from './pages/dashboard.jsx'
ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Switch> 
            <Route exact path="/" component={Auth}/>
          { localStorage.getItem("token")!==null ?
           (<Route exact path="/dashboard" component={Dashboard}/>)
           : (<Redirect to="/" />
           )
} 
        </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
