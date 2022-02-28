
import AppRouter from './routes/routes';
import { Provider } from 'react-redux';
import store from './stores/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <AppRouter/>
      </Provider>
    
  
    </div>
  );
}

export default App;
