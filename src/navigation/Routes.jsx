import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../utils/routes';
import UserListScreen from '../screens/UserListScreen';
import UserDetailScreen from '../screens/UserDetailScreen';
import TaskScreen from '../screens/TaskScreen';

const {TASK, USERDETAIL, USERLIST} = SCREENS;

const MyStack = createNativeStackNavigator();

const Routes = () => {
  return (
    <MyStack.Navigator>
      <MyStack.Screen name={USERLIST} component={UserListScreen} />
      <MyStack.Screen name={USERDETAIL} component={UserDetailScreen} />
      <MyStack.Screen name={TASK} component={TaskScreen} />
    </MyStack.Navigator>
  );
};

export default Routes;
