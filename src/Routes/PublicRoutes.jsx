import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Inicial } from "../Pages/Public/Inicial";
import { Login } from "../Pages/Public/Login";
import { Cadastrar } from "../Pages/Public/Cadastrar";


export function PublicRoutes(){
    const {Navigator, Screen} = createNativeStackNavigator()
    return(
        <Navigator>
            <Screen name="Inicial" component={Inicial} options={options}/>
            <Screen name="Login" component={Login}/>
            <Screen name="Cadastrar" component={Cadastrar}/>
        </Navigator>
    )
}

const options = {
    headerShown: false
}