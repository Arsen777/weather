import { Provider } from 'react-redux';

import store from './store';
import Weather from './weather';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Weather />
      </div>
    </Provider>
  );
}

export default App;
