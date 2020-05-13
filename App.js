import 'react-native-gesture-handler';
import React from 'react';

import HomeScreen from './screens/HomeScreen';
import AssetsScreen from './screens/AssetsScreen';
import DocumentsScreen from './screens/DocumentsScreen';
import CardsScreen from './screens/CardsScreen';
import AppsScreen from './screens/AppsScreen';
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
        <Stack.Screen name="Assets" component={AssetsScreen} />
        <Stack.Screen name="Documents" component={DocumentsScreen} />
        <Stack.Screen name="Cards" component={CardsScreen} />
        <Stack.Screen name="Apps" component={AppsScreen} />

        <Stack.Screen name="Tags" component={TagsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
