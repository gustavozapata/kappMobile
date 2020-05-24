import 'react-native-gesture-handler';
import React from 'react';

import HomeScreen from './screens/HomeScreen';
import ItemsScreen from './screens/ItemsScreen';
import TagsScreen from './screens/TagsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#428BF7',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Categories'}}
        />
        <Stack.Screen name="Assets">
          {props => <ItemsScreen {...props} view={'Assets'} />}
        </Stack.Screen>
        <Stack.Screen name="Documents">
          {props => <ItemsScreen {...props} view={'Documents'} />}
        </Stack.Screen>
        <Stack.Screen name="Cards">
          {props => <ItemsScreen {...props} view={'Cards'} />}
        </Stack.Screen>
        <Stack.Screen name="Apps">
          {props => <ItemsScreen {...props} view={'Apps'} />}
        </Stack.Screen>

        <Stack.Screen name="Tags" component={TagsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
