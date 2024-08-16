import React from 'react'
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native'

export function Login(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Login</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#8A19D6'
    },
    title:{
        fontSize:25

    }
})