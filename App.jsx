import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/navigation/Routes';
import {MyProvider} from './src/context/MyContext';
import {MyTaskProvider} from './src/context/TaskContext';

const App = () => {
  return (
    <MyTaskProvider>
      <MyProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </MyProvider>
    </MyTaskProvider>
  );
};

export default App;
