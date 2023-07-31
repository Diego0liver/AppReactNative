import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native'
import React from 'react'


function Cadastro() {
    return (
      <View style={styles.conteiner}>
        <Text style={styles.textTitulo}>Auxiliar de finanças</Text>
        <Image style={styles.img} source={require('../../img/money.png')} />
        
        <Text style={styles.textInput}>Nome</Text>
        <TextInput style={styles.inputs}></TextInput>

        <Text style={styles.textInput}>Email</Text>
        <TextInput style={styles.inputs}></TextInput>

        <Text style={styles.textInput}>Senha</Text>
        <TextInput style={styles.inputs}></TextInput>

          <Button title="Cadastrar"></Button>
          <Text style={styles.textCadastro}>Fazer Login</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#061440'
    },
    img:{
        backgroundColor: '#fff',
        borderRadius: 200,
        width: 100,
        height: 100
    },
    inputs:{
        borderWidth: 2,
        borderColor: '#0C9AF2',
        borderRadius: 4,
        padding: 8,
        fontSize: 16,
        width: 300,
        backgroundColor: '#fff',
        marginBottom: 5
    },
    textInput:{
        color: '#fff',
        fontSize: 20,
        marginTop: 15,
        fontWeight: 'bold'
    },
    textCadastro:{
        color: '#fff',
        fontSize: 15,
        fontStyle: 'italic',
    }, 
    textTitulo:{
        marginBottom: 20,
        color: '#fff',
        fontSize: 30
    }
})

export default Cadastro