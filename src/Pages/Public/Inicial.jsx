import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native'
import Constants from "expo-constants"
const statusBarHeight = Constants.statusBarHeight;
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export function Inicial(){
    const navigation = useNavigation()
    useEffect(()=>{
        setTimeout(()=>navigation.navigate("Login"), 1500)
    },[])
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#8A19D6'/>
            <Text style={styles.title}> NU</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#8A19D6', //COR NUBANK
        flex:1,
        marginTop:statusBarHeight,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:55,
        fontFamily:'DancingScript_700Bold',
        color:'#fff'
    }
})