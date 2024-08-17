import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, Image, StyleSheet, Alert} from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../Hook/Auth";
import { AntDesign, Ionicons, Entypo, MaterialCommunityIcons, FontAwesome6, MaterialIcons  } from '@expo/vector-icons'; 
import { Home } from "../Pages/Auth/Home";
import { Perfil } from "../Pages/Auth/Perfil";
import { Extrato } from "../Pages/Auth/Extrato";
import { Investimentos } from "../Pages/Auth/Investimentos";
import { Shopping } from "../Pages/Auth/Shopping";
import { api } from "../../Api";


function BottomBarNavigation(){

    const {user, setUser} = useAuth()
    
    const navigation = useNavigation()
    const {Navigator, Screen} = createBottomTabNavigator()
    return (
        <Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "Home") {
                return focused ? (
                    <MaterialIcons name="mobiledata-off"  size={size} color={color} />
                ) : (
                  <AntDesign name="home" size={size} color={color} />
                );
              } else if (route.name === "Historico") {
                return focused ? (
                    <AntDesign name="customerservice" size={size} color={color} />
      
                ) : (
                    <AntDesign name="customerservice" size={size} color={color} />
                );
              } else if (route.name === "Perfil") {
                return focused ? (
                  <FontAwesome6 name="person" size={size} color={color} />
      
                ) : (
                  <FontAwesome6 name="person" size={size} color={color} />
                );
              }
            },
    
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "grey",
            tabBarStyle: {
              marginBottom: 10,
              marginTop:5,
              marginHorizontal: 5,
              borderRadius: 50,
              elevation: 15,
              position:'absolute',
              left:95,
              justifyContent: "space-between",
              width: "55%",
              alignSelf: "center"
            },
            tabBarItemStyle:{borderRadius:50, marginHorizontal:5, marginVertical:2}
          })}
        >
          <Screen
            name="Home"
            component={Home}
            options={{
              headerShown: true,
              statusBarStyle: "dark",
              tabBarActiveBackgroundColor: "#B9B9B9",
              tabBarShowLabel: false,
              tabBarLabelStyle: { color: "black" },
              headerBackgroundContainerStyle:{backgroundColor:"#8A19D6"},
              headerStyle:{backgroundColor:"#8A19D6"},
              headerTitle:"",
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => setUser(null)}
                  style={{ marginRight: 10 }}
                >
                  <Ionicons name="exit-outline" size={24} color="black" />
                </TouchableOpacity>
              ),
              headerLeft: () => (
                <TouchableOpacity onPress={()=>Alert.alert("Ei...", "Você já está na home")}>
                  
                </TouchableOpacity>
              ),
            }}
          />
    
          <Screen
            name="Investimentos"
            component={Investimentos}
            options={{
              tabBarLabel: "Pedidos",
              headerTitleAlign: "center",
              tabBarActiveBackgroundColor: "#B9B9B9",
              tabBarShowLabel: true,
              tabBarLabelStyle: {  color: "black" },
              headerTitle: "Pedidos",
              //headerTitleStyle: {  },
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => setUser(null)}
                  style={{ marginRight: 10 }}
                >
                  <Ionicons name="exit-outline" size={24} color="black" />
                </TouchableOpacity>
              ),
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate("HomeCliente")}>
                </TouchableOpacity>
              ),
            }}
          />
    
          <Screen
            name="Shopping"
            component={Shopping}
            options={{
              headerShown: true,
              tabBarActiveBackgroundColor: "#B9B9B9",
              tabBarShowLabel: true,
              tabBarLabelStyle: { color: "black" },
              tabBarLabel: "Clientes",
              headerTitleAlign: "center",
              headerTitle: "Clientes",
              headerTitleStyle: {  },
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => setUser(null)}
                  style={{ marginRight: 10 }}
                >
                  <Ionicons name="exit-outline" size={24} color="black" />
                </TouchableOpacity>
              ),
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate("HomeFuncionario")}>

                </TouchableOpacity>
              ),
            }}
          />
        </Navigator>
      );
}


export function AuthRoutes(){
  const [data, setData] = useState("")
  async function getData(){
    const response = await api.get("?results=1&nat=BR")
    setData(response.data.results)
    console.log(data)
  }
  useEffect(()=>{
    getData
  },[])
    const {user, setUser} = useAuth()
    const Navigation = useNavigation()
    const {Navigator, Screen} = createNativeStackNavigator()
    return(
        <Navigator>
            <Screen name="Bar" component={BottomBarNavigation} options={{headerShown:false}}/>
            <Screen name="Home" component={Home} options={{headerShown:false}}/>
        </Navigator>
    )
}