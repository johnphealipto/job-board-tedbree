import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginScreen from './pages/LoginScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LoginScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
