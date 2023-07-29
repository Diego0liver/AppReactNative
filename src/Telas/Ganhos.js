import React,{useContext, useState} from 'react';
import { TotalContext } from '../Context/Context';
import axios from 'axios';
import {
  FlatList, Text, View, StyleSheet, TouchableOpacity, Modal,
   TextInput, ScrollView, Image, Alert} from 'react-native';


function Ganhos() {
 const { ganho, total, getAllGanho } = useContext(TotalContext)
 const [titulo, setTitulo] = useState('')
 const [preco, setPreco] = useState('')
 const [refresh, setRefresh] = useState(false)
 const [modal, setModal] = useState(false)

 const handleInputChange = (value) => {
  setTitulo(value);
};
const handleInputChangePreco = (value) => {
setPreco(value);
};

  function entrada(){
    if(titulo && preco){
     axios.post('http://10.0.2.2:8000/api/ganho', {
      titulo: titulo,
      preco: preco,
    }).then(getAllGanho())
    setTitulo("")
    setPreco("")
    setModal(false)
}else{Alert.alert("Preencha todos os campos")}
}

const handleDelete = (item) => {
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
          axios.delete(`http://10.0.2.2:8000/api/ganho/${item}`)
    .then(response => {
      getAllGanho()
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
        <ScrollView>
        <Modal visible={modal}
        transparent={true}
        animationType='fade'
        onRequestClose={()=>setModal(false)}
        >
          <View style={styles.backModal}>
              <View style={styles.model}>
                <Text>Qual foi seu ganho?</Text>
                <TextInput value={titulo} onChangeText={handleInputChange}
                  style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 4,
                    padding: 8,
                    fontSize: 16,
                  }}></TextInput>

                 <Text>Qual o valor do ganho?</Text>
                <TextInput value={preco} onChangeText={handleInputChangePreco}
                keyboardType="numeric"style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 4,
                    padding: 8,
                    fontSize: 16,
                  }}></TextInput>
                     <TouchableOpacity onPress={entrada}>
                       <Text style={styles.botaoModal}>Adicionar</Text> 
                     </TouchableOpacity>
                     <TouchableOpacity onPress={()=>setModal(false)}>
                       <Text style={{ color:'red', margin: 5, textAlign: 'center' }}>Fechar</Text> 
                     </TouchableOpacity>
              </View>
          </View>
        </Modal>
        <View style={styles.topoView}>
          <Text style={styles.topoTextView}>Ganhos</Text>
          <View style={{ flexDirection:'row' }}>
            <TouchableOpacity onPress={()=> getAllGanho()} style={styles.add}>
            <Image source={require('../img/reflash.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setModal(true)} style={styles.add}>
                <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
          </View> 
         </View>

        <View>
          <FlatList 
          refreshing={refresh}
          onRefresh={()=>{
           setRefresh(true)
           getAllGanho()
           setRefresh(false)
          }}
           data={ganho}
           keyExtractor={({id},index)=>id}
           renderItem={({item})=>(
            <View style={styles.lista}>
            <Text style={styles.listaText}>{item.titulo}</Text>
            <Text style={styles.listaText}>R$ {item.preco}</Text>
            <TouchableOpacity
              onPress={() => handleDelete(item.id)}>
              <Image style={styles.imgLixo} source={require('../img/lixo.png')}/>
            </TouchableOpacity>
            </View>
           )}
          />
         <View style={styles.topo}>
          <Text style={styles.topoText}>Total R$ {total}</Text>
         </View>
        </View>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  topoTextView:{
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10
  },
    imgLixo:{
      width: 40,
      height: 40
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
  topoView:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#061440'
   },
  listaText:{
   fontSize: 20,
   fontWeight: 'bold'
  },
add:{
  backgroundColor: '#fff',
  width: 50,
  height: 50,
  borderRadius: 100,
  margin: 10,
},
addText:{
  textAlign: 'center',
  color: '#061440',
  fontSize: 35,
  fontWeight: 'bold'
},
topo:{
  backgroundColor: '#914AD9',
  padding: 20
},
topoText:{
  color: '#fff',
  fontSize: 25
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
  width: 400
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
}
})



export default Ganhos;
