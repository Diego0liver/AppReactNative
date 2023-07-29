import React,{useContext, useState} from 'react';
import { TotalContext } from '../Context/Context';
import axios from 'axios';
import {
  FlatList, TouchableOpacity, Image,
  Text, StyleSheet, Modal, TextInput, Alert,
  View, SafeAreaView, ScrollView
} from 'react-native';

function Anotacao() {
 const { anotacao, getAllAnotocao} = useContext(TotalContext)  
 const [modal, setModal] = useState(false)
 const [titulo, setTitulo] = useState('')
 const [descricao, setDescricao] = useState('')

 function reflashAnotacao(){
  getAllAnotocao()
 }

 const handleInputChange = (value) => {
  setTitulo(value);
};
const handleInputChangeDescricao = (value) => {
  setDescricao(value);
};

function anotacaoAdd(){
  if(titulo && descricao){
   axios.post('http://10.0.2.2:8000/api/anotocao', {
    titulo: titulo,
    descricao: descricao
  }).then(getAllAnotocao())
  setTitulo("")
  setDescricao("")
  setModal(false)
}else{ Alert.alert("Preencha todos os campos")}
}

const anotacaoDelete = (item) => {
  Alert.alert(
    'Confirmação',
    'Tem certeza que deseja excluir?',
    [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Excluir',
        onPress: () => {
          axios.delete(`http://10.0.2.2:8000/api/anotocao/${item}`)
    .then(response => {
      getAllAnotocao()
    })
    .catch(error => {
      console.error('Erro na requisição DELETE:', error);
    });
        },
      },
    ],
    { cancelable: false }
  );
};

  return (
      <View>
        <Modal visible={modal}
    transparent={true}
    animationType='fade'
    onRequestClose={()=>setModal(false)}
    >
      <View style={styles.backModal}>
          <View style={styles.model}>
            <Text>Titulo</Text>
            <TextInput value={titulo} onChangeText={handleInputChange}
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 4,
                padding: 8,
                fontSize: 16,
              }}></TextInput>

             <Text>Descricao</Text>
            <TextInput value={descricao} onChangeText={handleInputChangeDescricao}
            keyboardType="numeric"style={{
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 4,
                padding: 8,
                fontSize: 16,
              }}></TextInput>

                 <TouchableOpacity onPress={anotacaoAdd} >
                   <Text style={styles.botaoModal}>Adicionar</Text> 
                 </TouchableOpacity>
                 <TouchableOpacity onPress={()=>setModal(false)}>
                   <Text style={{ color:'red', margin: 5, textAlign: 'center' }}>Fechar</Text> 
                 </TouchableOpacity>
          </View>
      </View>
    </Modal>
    <ScrollView>
     <View style={styles.topoView}>
        <Text style={styles.topoTextView}>Anotacao</Text>
        <View style={{ flexDirection:'row' }}>
          <TouchableOpacity style={styles.add} onPress={reflashAnotacao}>
          <Image source={require('../img/reflash.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModal(true)} style={styles.add}>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View> 
      </View>
        <View>
          <FlatList
           data={anotacao}
           keyExtractor={({id},index)=>id}
           renderItem={({item})=>(
            <View style={styles.lista}>
              <View>
            <Text style={styles.listaText}>{item.titulo}</Text>
            <Text style={styles.listaDescricao}>{item.descricao}</Text>
              </View>
            <TouchableOpacity onPress={() => anotacaoDelete(item.id)}>
          <Image style={styles.imgLixo} source={require('../img/lixo.png')}/>
          </TouchableOpacity>
            </View>
           )}
          />
        </View>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  topoView:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#061440'
   },
   add:{
    backgroundColor: '#fff',
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity:  0.23,
    shadowRadius: 11.78,
    elevation: 15,
    width: 50,
    height: 50,
    borderRadius: 100,
    margin: 10,
  },
  topoTextView:{
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10
  },
  addText:{
    textAlign: 'center',
    color: '#061440',
    fontSize: 35,
    fontWeight: 'bold'
  },
  lista:{
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#fff',
    margin: 3,
    padding: 3
  },
  listaText:{
      fontSize: 22,
      fontWeight: 'bold'
  },
  listaDescricao:{
    fontSize: 20,
    fontStyle: 'italic',
    width: 330
  },
  imgLixo:{
    width: 40,
    height: 40
},
backModal:{
  flex: 1,
  justifyContent: 'center',
  alignContent: 'center',
  backgroundColor: 'rgba(145,74,217,0.82)'
},
model:{
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 20,
    width: 400,
    height: 300
},
botaoModal:{
  color: '#fff',
  fontWeight:'bold',
  backgroundColor: '#061440',
  margin: 4,
  padding: 4,
  borderRadius: 20,
  textAlign: 'center',
  fontSize:18
  },
})


export default Anotacao;