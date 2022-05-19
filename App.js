import "react-native-gesture-handler"
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CoursesScreen from "./screens/CoursesScreen";
import ApplyForAdmission from "./screens/ApplyForAdmission";
import OnlinePayment from "./screens/OnlinePayment";
import Login from "./screens/Login";

const App = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="admission">
        <Drawer.Screen options={{title:"Code With Sadiq",drawerLabel:"Home"}} name="home" component={HomeScreen} />
        <Drawer.Screen options={{title:"Courses"}} name="courses" component={CoursesScreen}  />
        <Drawer.Screen options={{title:"Apply For Admission"}} name="admission" component={ApplyForAdmission}  />
        <Drawer.Screen options={{title:"Pay Outstanding Fee"}} name="payFee" component={OnlinePayment}  />
        <Drawer.Screen options={{title:"Login"}} name="login" component={Login}  />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App

