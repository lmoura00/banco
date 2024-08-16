import React from 'react'
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native'

export function Shopping(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Shopping</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#2f2f2f'
    },
    title:{
        fontSize:25

    }
})