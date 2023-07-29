import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';

const OutrasOpcao = ({total, anotacao, totalSaida, navigation }) => {

  const anotacaoRota=()=>{
    navigation.navigate('Anotacao');
  }
  const ganho=()=>{
    navigation.navigate('Entradas/Ganhos');
  }
  const perda=()=>{
    navigation.navigate('Saidas/Gastos');
  }

  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <ScrollView horizontal style={styles.containerScroll}>

      <View style={styles.containerId}>
        <TouchableOpacity onPress={anotacaoRota}>
      <Text style={styles.text}>Voce tem</Text>
      <Text style={styles.italicText}>{anotacao.length} anotacao</Text>
        </TouchableOpacity>
      <Image style={styles.img} source={require('../../img/note.png')}/>
      </View>

      <View style={styles.containerId}>
        <TouchableOpacity  onPress={ganho}>
      <Text style={styles.text}>Total de Ganhos</Text>
      <Text style={styles.italicText}>R$ {total}</Text>
      </TouchableOpacity>
      <Image style={styles.img} source={require('../../img/up.png')}/>
      </View>

      <View style={styles.containerId}>
        <TouchableOpacity  onPress={perda}>
      <Text style={styles.text}>Total de Saidas</Text>
      <Text style={styles.italicText}>R$ {totalSaida}</Text>
      </TouchableOpacity>
      <Image style={{ width: 45, height: 45 }} source={require('../../img/baixo.png')}/>
      </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 50
  },
  italicText: {
    fontStyle: 'italic',
    fontSize: 20,
    color: '#fff'
  },
  
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#F0F0F0',
  },
  containerScroll:{
    flexDirection: 'row',
    display: 'flex',
    margin: 20
  },
  containerId:{
    backgroundColor: '#914AD9',
    marginRight: 20,
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row'
  },
  text:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  }
});

export default OutrasOpcao;