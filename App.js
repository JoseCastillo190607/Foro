import { StatusBar } from "expo-status-bar";
import React from "react";
import { } from "react-native";
// import TopLogin from "./components/TopLogin";
// import DownLogin from "./components/DownLogin";
// import Main from "./components/Main";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Foro from "./components/Foro/Foro";
import Categories from "./components/Categories/Categories"
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
      return(
          // <Login/>
          // <Register/>
      //    <Foro/>
      <NavigationContainer>
            <Stack.Navigator initiaRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Categories" component={Categories}/>
            </Stack.Navigator>
      </NavigationContainer>
      )
}
