import { Text, View,
     SafeAreaView, ColorPropType,
     TouchableHighlight, TextInput, StyleSheet, Dimensions} from 'react-native'
import React from 'react'


export default props=>{
  const styleButton=[style.btn]
  if(props.duplo){
    styleButton.push(style.btnDuplo)
  }
  if(props.igual){
    styleButton.push(style.btnIgual)
  }
  if(props.operacao){
    styleButton.push(style.btnOper)
  }
  if(props.ac){
    styleButton.push(style.btnAc)
  }
  if(props.bs){
    styleButton.push(style.btnBS)
  }
 return(
    <TouchableHighlight
    onPress={props.Click}>
       <Text style={styleButton} >{props.label}</Text>
    </TouchableHighlight>
 )
}

const style = StyleSheet.create({
btn:{
    fontSize:30,
    height:Dimensions.get('window').width/4,
    width:Dimensions.get('window').width/4,
    padding: 20,
    backgroundColor:"#000",
    color:'#fff',
    borderWidth:0.2,
    borderColor: '#777',
    textAlign:'center',
},
btnIgual:{
    color: '#ff0'
},
btnOper:{
    color:'#0f0'
},
btnAc:{
    color:'#f00'
},
btnBS:{
    color:'#0ff'
},
btnDuplo:{
    width:(Dimensions.get('window').width/4)*2,
}
})