import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native'

export function Home(){
    const [nome, setNome] = useState("Lucas")
    const [valorConta, setValorConta] = useState("0,00")
    const [valorContaOutroBanco, setValorContaOutroBanco] = useState("0,00")

    return(
        <View style={styles.container}>
            <Text style={styles.nome}>Olá, {nome}</Text>
            <ScrollView>
                <TouchableOpacity style={styles.btExtrato}>
                    <View style={{paddingLeft:15, paddingTop:20, paddingBottom:10}}>
                        <View>
                            <Text style={{fontSize:20}}>Conta</Text>
                            <Text style={{fontSize:20}}>R$ {valorConta}</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:15, paddingTop:15, color:'#a9a9a9'}}>R$ {valorContaOutroBanco} em outro banco</Text>
                        </View>
                    </View>
                    <View style={{paddingTop:20, paddingRight:25}}>
                        <Text style={{fontSize:25}}>></Text>
                    </View>
                </TouchableOpacity>
                <FlatList>

                </FlatList>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    title:{
        fontSize:25
    },
    nome:{
        color:'#fff',
        fontSize:22,
        backgroundColor:'#8A19D6',
        paddingBottom:15,
        paddingTop:10,
        marginTop:-5,
        elevation:0,
        borderColor:'#8A19D6',
        borderStyle:'solid',
        paddingLeft:20
    },
    btExtrato:{
        flexDirection:'row',
        justifyContent:"space-between",
        //backgroundColor:'red'
    }
})