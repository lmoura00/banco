import React from "react";
import {ActivityIndicator} from "react-native"
import { Routes } from "./src/Routes/Index";
import { AuthProvider } from "./src/Hook/Auth";
//import {app} from './firebaseConfig'
import Constants from "expo-constants"
const statusBarHeight = Constants.statusBarHeight;
import {useFonts, DancingScript_400Regular, DancingScript_500Medium, DancingScript_600SemiBold, DancingScript_700Bold} from '@expo-google-fonts/dancing-script'
export default function App(){
  let [fontsLoaded] = useFonts({
    DancingScript_400Regular, DancingScript_500Medium, DancingScript_600SemiBold, DancingScript_700Bold
  })
  if(!fontsLoaded){
    return(
      <ActivityIndicator size={"large"}/>
    )
  }else{
      return(
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    )
  }

}