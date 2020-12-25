import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FormLoginRegister from './components/login-register';
import Profile from './components/profile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={FormLoginRegister} />
        <Route path="/" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
