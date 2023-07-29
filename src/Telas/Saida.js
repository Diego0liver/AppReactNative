import React,{useContext, useState} from 'react';
import { TotalContext } from '../Context/Context';
import axios from 'axios';
import {Picker} from '@react-native-picker/picker';
import {FlatList, Text, View, StyleSheet, TouchableOpacity,
 Modal, TextInput, ScrollView, SafeAreaView, Image, Alert } from 'react-native';


function Saida() {
 const { list, totalSaida, getAllSaida} = useContext(TotalContext)
 const [titulo, setTitulo] = useState('')
 const [preco, setPreco] = useState('')
 const [categoria, setCategoria] = useState('')
 const [modal, setModal] = useState(false)
 const [refresh, setRefresh] = useState(false)

 const handleInputChange = (value) => {
  setTitulo(value);
};
const handleInputChangePreco = (value) => {
setPreco(value);
};
const handleInputChangeCategoria = (value) => {
  setCategoria(value);
  };

  function saida(){
    if(titulo && preco && categoria){
     axios.post('http://10.0.2.2:8000/api/saida', {
      titulo: titulo,
      preco: preco,
      categoria: categoria
    }).then(getAllSaida())
    setTitulo("")
    setPreco("")
  
    setModal(false)
}else{ Alert.alert("Preencha todos os campos")}
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
          axios.delete(`http://10.0.2.2:8000/api/saida/${item}`)
    .then(response => {
      getAllSaida()
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
  <View >
   <ScrollView
   refreshing={refresh}
   onRefresh={()=>{
    setRefresh(true)
    getAllSaida()
    setRefresh(false)
   }}>
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

             <Text>Preco</Text>
            <TextInput value={preco} onChangeText={handleInputChangePreco}
            keyboardType="numeric"style={{
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 4,
                padding: 8,
                fontSize: 16,
              }}></TextInput>

            <Text>Categoria</Text>

               <Picker style={{ width: 300, height: 10 }}
               selectedValue={categoria} onValueChange={handleInputChangeCategoria}
               >
                 <Picker.Item key={0} value="categorias" label='categorias'/>
                 <Picker.Item key={1} value="Contas" label='Contas'/>
                 <Picker.Item key={2} value="Almoco/Janta" label='Almoco/Janta'/>
                 <Picker.Item key={3} value="Cartao de credito" label='cartao de credito'/>
                 <Picker.Item key={3} value="Transporte" label='Transporte'/>
                 <Picker.Item key={4} value="Mercado" label='Mercado'/>
                 <Picker.Item key={5} value="Outros" label='Outros'/>
               </Picker>

                 <TouchableOpacity onPress={saida}>
                   <Text style={styles.botaoModal}>Adicionar</Text> 
                 </TouchableOpacity>
                 <TouchableOpacity onPress={()=>setModal(false)}>
                   <Text style={{ color:'red', margin: 5, textAlign: 'center' }}>Fechar</Text> 
                 </TouchableOpacity>
          </View>
      </View>
    </Modal>
    <View style={styles.topoView}>
      <Text style={styles.topoTextView}>Gastos</Text>
       <View style={{ flexDirection:'row' }}>
        <TouchableOpacity onPress={()=> getAllSaida()} style={styles.add}>
        <Image source={require('../img/reflash.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setModal(true)} style={styles.add}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View> 
    </View>

    <View>
      <FlatList
       data={list}
       keyExtractor={(item) => item.id.toString()}
       renderItem={({item})=>(
        <View
          key={item.id}
          style={[styles.lista, 
            item.categoria === 'Contas' ? styles.contasList : null,
            item.categoria === 'Almoco/Janta' ? styles.almocoList : null,
            item.categoria === 'Cartao de credito' ? styles.cartaoList : null,
            item.categoria === 'Transporte' ? styles.tranporteList : null,
            item.categoria === 'Mercado' ? styles.mercadoList : null,
            item.categoria === 'Outros' ? styles.outrosList : null
            ]}>
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
      <Text style={styles.topoText}>Total R$ {totalSaida}</Text>
     </View>
    </View>
    </ScrollView>
  </View >
);
}

const styles = StyleSheet.create({
topoView:{
 display: 'flex',
 flexDirection: 'row',
 justifyContent: 'space-between',
 backgroundColor: '#061440'
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
imgLixo:{
    width: 40,
    height: 40
},
listaText:{
fontSize: 20,
fontWeight: 'bold'
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
topoTextView:{
  color: '#fff',
  fontSize: 20,
  marginTop: 20,
  marginLeft: 10
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
contasList:{
  borderLeftWidth: 5, 
  borderLeftColor: 'tomato', },
almocoList:{
  borderLeftWidth: 5, 
  borderLeftColor: 'navy', 
},
cartaoList:{
  borderLeftWidth: 5, 
  borderLeftColor: '#0C9AF2', 
},
tranporteList:{
  borderLeftWidth: 5, 
  borderLeftColor: '#914AD9', 
},
mercadoList:{
  borderLeftWidth: 5, 
  borderLeftColor: '#F29829', 
},
outrosList:{
  borderLeftWidth: 5, 
  borderLeftColor: '#F23D6D', 
}
})



export default Saida;
