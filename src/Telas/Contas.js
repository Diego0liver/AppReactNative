import React,{useContext, useState} from 'react';
import { TotalContext } from '../Context/Context';
import moment from 'moment';
import axios from 'axios';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  FlatList, Text, View, StyleSheet, ScrollView, TouchableOpacity,
  Image, Modal, TextInput, Button, Alert} from 'react-native';


function Contas() {
 const { contas, getAllContas } = useContext(TotalContext)
 const [titulo, setTitulo] = useState('')
 const [preco, setPreco] = useState('')
 const [selectedDate, setSelectedDate] = useState(null);
const [showDatePicker, setShowDatePicker] = useState(false);
 const [modal, setModal] = useState(false)

 const handleInputChange = (value) => {
  setTitulo(value);
};
const handleInputChangePreco = (value) => {
setPreco(value);
};
const onDateConfirm = (date) => {
  setSelectedDate(date);
  setShowDatePicker(false);
};

const onDateCancel = () => {
  setShowDatePicker(false);
};

const openDatePicker = () => {
  setShowDatePicker(true);
};
const transformDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

function contasPost(){
  const formattedDateString = transformDate(selectedDate);
  if(titulo && preco && selectedDate){
   axios.post('http://10.0.2.2:8000/api/contas', {
    titulo: titulo,
    preco: preco,
    vencimento: formattedDateString
  }).then(getAllContas())
  setTitulo("")
  setPreco("")
  setModal(false)
}else{ Alert.alert("Preencha todos os campos")}
}
const contasDelete = (item) => {
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
          axios.delete(`http://10.0.2.2:8000/api/contas/${item}`)
    .then(response => {
      getAllContas()
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


  function reflashContas(){
    getAllContas()
  }
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

            <Text>Vencimento</Text>
            <Button title="Abrir Calendário" onPress={openDatePicker} />

            <DateTimePickerModal
              isVisible={showDatePicker}
              mode="date"
              onConfirm={onDateConfirm}
              onCancel={onDateCancel}
            />
                 <TouchableOpacity onPress={contasPost}>
                   <Text style={styles.botaoModal}>Adicionar</Text> 
                 </TouchableOpacity>
                 <TouchableOpacity onPress={()=>setModal(false)}>
                   <Text style={{ color:'red', margin: 5, textAlign: 'center' }}>Fechar</Text> 
                 </TouchableOpacity>
          </View>
      </View>
    </Modal>


        <View style={styles.topoView}>
        <Text style={styles.topoTextView}>Contas</Text>
        <View style={{ flexDirection:'row' }}>
          <TouchableOpacity  style={styles.add} onPress={reflashContas}>
          <Image source={require('../img/reflash.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModal(true)} style={styles.add}>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View> 
      </View>

          <View>
          <FlatList
            data={contas}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item})=>(
          <View
            style={styles.lista}
            key={item.id}>
            <View>
            <Text style={styles.listaText}>{item.titulo}</Text>
            <Text style={styles.listaText}>R$ {item.preco}</Text>
            </View>
            <View>
            <Text style={styles.listaText}>Vencimento</Text>
            <Text style={styles.listaText}>{moment(item.vencimento).format('DD/MM')}</Text>
            </View>
            <TouchableOpacity onPress={() => contasDelete(item.id)}>
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
   topoTextView:{
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10
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
export default Contas;