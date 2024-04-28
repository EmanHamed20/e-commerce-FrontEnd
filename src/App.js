
import { Provider } from 'react-redux';
import './App.css';
import SignUp from './components/SignUp/signup';
import store from './store/store';
function App() {
  return (
    <Provider store={store}
    ><SignUp></SignUp></Provider>
   

  );
}

export default App;
