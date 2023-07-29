import { Text, View, SafeAreaView, TouchableHighlight, TextInput, StyleSheet} from 'react-native'
import React,{useState} from 'react'
import Btns from '../Telas/Components/TecladoCalculadora'

let estados={
  valorTela: '',
  resultado: 0,
  operado: false,
  ponto: false
}

function Calculadora() {
  const [valor, setValor]=useState(estados.valorTela)
  const [resultado, setResultado]=useState(estados.resultado)
  
  const addDigito=(d)=>{
    if(d=='+' || d=='-' || d=='/' || d=='*'){
      estados.ponto= false
    }
    if(d=='.' && !estados.ponto){
      estados.ponto=true
      estados.operado=false
    } else if(d=='.' && estados.ponto){
      return
    }
    estados.valorTela=estados.valorTela+d
    setValor(estados.valorTela)
    setResultado(estados.resultado)
    estados.operado=false
  }
 
  const limparDigitos=()=>{
    estados={
      valorTela: '',
      resultado: 0,
      operado: false,
      ponto: false
    }
    setValor(estados.valorTela)
    setResultado(estados.resultado)
  }

  const operar=(d)=>{
    if(d==='AC'){
      limparDigitos()
      return
    }
    if(d==='BS'){
      estados.valorTela=valor.substring(0,(valor.length-1))
      setValor(estados.valorTela)
      return
    }
    try{
      estados.resultado=eval(estados.valorTela)
      estados.operado=true
      setResultado(estados.resultado)
    }catch{
      estados.resultado="ERRO"
      estados.operado=true
      setResultado(estados.resultado)
    }
  }


    return (
      <SafeAreaView >
        <View style={style.conteiner}>
          <Text style={style.displaySoma} numberOfLines={1}>{valor}</Text>
          <Text style={style.displayResultado} numberOfLines={1}>{resultado}</Text>
        </View>
        <View style={style.btns}>
         <Btns label='AC' ac Click={()=>{operar('AC')}}></Btns>
         <Btns label='(' Click={()=>{addDigito('(')}}></Btns>
         <Btns label=')' Click={()=>{addDigito(')')}}></Btns>
         <Btns label='/' operacao Click={()=>{addDigito('/')}}></Btns>
          <Btns label='1' Click={()=>{addDigito('1')}}></Btns>
          <Btns label='2' Click={()=>{addDigito('2')}}></Btns>
          <Btns label='3' Click={()=>{addDigito('3')}}></Btns>
          <Btns label='*' operacao Click={()=>{addDigito('*')}}></Btns>

          <Btns label='4' Click={()=>{addDigito('4')}}></Btns>
          <Btns label='5' Click={()=>{addDigito('5')}}></Btns>
          <Btns label='6' Click={()=>{addDigito('6')}}></Btns>
          <Btns label='-' operacao Click={()=>{addDigito('-')}}></Btns>

          <Btns label='7' Click={()=>{addDigito('7')}}></Btns>
          <Btns label='8' Click={()=>{addDigito('8')}}></Btns>
          <Btns label='9' Click={()=>{addDigito('9')}}></Btns>
          <Btns label='+' operacao Click={()=>{addDigito('+')}}></Btns>
          <Btns label='0' operacao Click={()=>{addDigito('0')}}></Btns>
          <Btns label='.' operacao Click={()=>{addDigito('.')}}></Btns>
          <Btns label='->' bs Click={()=>{operar('BS')}}></Btns>
          <Btns label='=' igual Click={()=>{operar('=')}}></Btns>
        </View>
      </SafeAreaView>
    )
}

const style = StyleSheet.create({
  conteiner:{
    alignItems: 'flex-end',
  },
  displaySoma:{
    fontSize: 30,
    margin: 5
  },
  displayResultado:{
     fontSize: 40,
     color: 'green',
     fontWeight: 'bold',
     margin: 5
  },
  btns:{
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export default Calculadora