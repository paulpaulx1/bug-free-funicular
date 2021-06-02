import { Provider } from 'react-redux';
import { store } from '../state';

const App = () => {
  return (
    <Provider store={store}>
      <>
        hellworld
        <h1>search for package</h1>
        {/* <RepositoriesList /> */}
      </>
    </Provider>
  );
};

export default App;
