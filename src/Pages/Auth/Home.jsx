import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { api } from "../../../Api";

export function Home() {
  const [nome, setNome] = useState("Lucas");
  const [valorConta, setValorConta] = useState("0,00");
  const [valorContaOutroBanco, setValorContaOutroBanco] = useState("0,00");
  const [data, setData] = useState([]);

  async function getData() {
    const response = await api.get("?results=1&nat=BR");
    setData(response.data.results);
    console.log(data.results);
  }

  useEffect(() => {
    getData();
  }, []);

  const itens = [
    {
      id: 1,
      title: "Área Pix",
      tipo: MaterialIcons,
      name: "pix",
      size: 24,
      color: "black",
    },
    {
      id: 2,
      title: "Pagar",
      tipo: FontAwesome,
      name: "cc-mastercard",
      size: 24,
      color: "black",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Olá, {nome}</Text>
      <ScrollView>
        <TouchableOpacity style={styles.btExtrato}>
          <View style={{ paddingLeft: 15, paddingTop: 20, paddingBottom: 10 }}>
            <View>
              <Text style={{ fontSize: 20, color:'#fff' }}>Conta</Text>
              <Text style={{ fontSize: 20, color:'#fff' }}>R$ {valorConta}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 15, paddingTop: 15, color: "#a9a9a9" }}>
                R$ {valorContaOutroBanco} em outro banco
              </Text>
            </View>
          </View>
          <View style={{ paddingTop: 20, paddingRight: 25 }}>
            <Text style={{ fontSize: 25, color:'#fff' }}>></Text>
          </View>
        </TouchableOpacity>
        <ScrollView style={styles.barIcons} horizontal>
          {itens.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={{
                //backgroundColor: "green",
                padding: 10,
                alignItems: "center",
                marginHorizontal: 5,
              }}
            >
                <View style={{
                        backgroundColor: "#b9b9b9",
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        alignSelf: "center",
                        justifyContent: "center",
                        alignItems:'center',
                        alignContent:'center'
                        }}>
                    <item.tipo
                        name={item.name}
                        size={item.size}
                        color={item.color}
                    />
                </View>
              <Text style={{color:'#fff', marginTop:5}}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#111"
  },
  title: {
    fontSize: 25,
  },
  nome: {
    color: "#fff",
    fontSize: 22,
    backgroundColor: "#8A19D6",
    paddingBottom: 15,
    paddingTop: 10,
    marginTop: -5,
    elevation: 0,
    borderColor: "#8A19D6",
    borderStyle: "solid",
    paddingLeft: 20,
  },
  btExtrato: {
    flexDirection: "row",
    justifyContent: "space-between",
    //backgroundColor:'red'
  },
  barIcons: {
    //backgroundColor: "red",
    width: "auto",
    height: 120,
  },
});
