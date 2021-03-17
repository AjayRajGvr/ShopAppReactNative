import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View,Text,Button,Image} from 'react-native'
import HomeScreen from './screens/Homescreen';
import DetailsScreen from './screens/ProductScreen';
import Privacy from './screens/components/Privacy';
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/icon.png')}
    />
  );
}

export default function App() {
  const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => (
            <Button
              onPress={()=>alert('This is is the privacy policy ')}
              title="Privacy policy"
              color="#00cc00"
            />
          ),
          headerBackImage: ()=>(<LogoTitle />)
          
        }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="privacy" component={Privacy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}