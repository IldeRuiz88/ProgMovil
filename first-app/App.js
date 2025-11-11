import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedScreen from './components/FeedScreen';
import LoginScreen from './components/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [reports, setReports] = React.useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen  
          name="Feed"
          options={{ headerShown: false }}
        >
          {(props) => (
            <FeedScreen
              {...props}
              reports={reports}
            />
          )}
        </Stack.Screen>

        <Stack.Screen  
          name="Login"
          options={{ title: 'Nuevo Reporte' }}
        >
          {(props) => (
            <LoginScreen
              {...props}
              addReport={(rep) => setReports([...reports, rep])}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
