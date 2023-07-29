import { Text, View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'


function Ajuda() {
    return (
      <ScrollView style={styles.conteiner}>
        <View style={styles.item}>
        <Text style={styles.tituloCategoria}>Home</Text>
        <Text style={styles.list}>• A carteira e a soma de entrada/ganho menos saida/perda</Text>
        <Text style={styles.list}>• O grafico mostra as categorias de saida/perda para saber onde esta seus gastos</Text>
        <Text style={styles.list}>• O calendario com marcasao azul indica onde voce tem contas a vencer</Text>
        <Text style={styles.list}>• Logo apos tem a quantidade de anotacao que voce tem, o total do seus ganhos, e total de saidas</Text>
        </View>

        <View  style={styles.item}>
        <Text style={styles.tituloCategoria}>Saida/Perda</Text>
        <Text style={styles.list}>• O botao com + adiciona uma saida/perda</Text>
        <Text style={styles.list}>• O botao ao lado esquedo do + atualiza a lista, caso o intem adicionado nao apareca</Text>
        </View>

        <View  style={styles.item}>
        <Text style={styles.tituloCategoria}>Entradas/Ganhos</Text>
        <Text style={styles.list}>• O botao com + adiciona uma entradas/ganhos</Text>
        <Text style={styles.list}>• O botao ao lado esquedo do + atualiza a lista, caso o intem adicionado nao apareca</Text>
        </View>

        <View  style={styles.item}>
        <Text style={styles.tituloCategoria}>Contas</Text>
        <Text style={styles.list}>• O botao com + adiciona uma Contas</Text>
        <Text style={styles.list}>• O botao ao lado esquedo do + atualiza a lista, caso o intem adicionado nao apareca</Text>
        </View>

        <View  style={styles.item}>
        <Text style={styles.tituloCategoria}>Anotacao</Text>
        <Text style={styles.list}>• O botao com + adiciona uma Anotacao</Text>
        <Text style={styles.list}>• O botao ao lado esquedo do + atualiza a lista, caso o intem adicionado nao apareca</Text>
        </View>

        <View  style={styles.item}>
        <Text style={styles.tituloCategoria}>Calculadora</Text>
        <Text style={styles.list}>• Voce pode usar calculadora sem sair do APP</Text>
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  conteiner:{
    backgroundColor: '#D1D1D1'
  },
  titulo:{
    textAlign: 'center',
    backgroundColor: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  tituloCategoria:{
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
  list:{
    fontSize: 17,
    fontStyle: 'italic',
  },
  item:{
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 10,
    padding: 5
  }
})

export default Ajuda