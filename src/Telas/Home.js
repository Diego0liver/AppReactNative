import React,{useContext} from 'react';
import { TotalContext } from '../Context/Context';
import { VictoryPie, VictoryTooltip } from  'victory-native'
import { Calendar } from 'react-native-calendars';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native';
import OutrasOpcao from './Components/OutrasOpcao';


function Home({ navigation }) {
 const { soma, mercadoTotal, comidaTotal, trasporteTotal, cartaoTotal,
   almocoJantaTotal, outrosTotal, totalSaida, dastasFilter, total, anotacao} = useContext(TotalContext)  
 const dados = [
  {
    x: 'Contas',
    y: comidaTotal,
    color: 'tomato'
  },
  {
    x: 'Transporte',
    y: trasporteTotal,
    color: '#914AD9'
  },
  {
    x: 'Mercado',
    y: mercadoTotal,
    color: '#F29829'
  },
  {
    x: 'Cartao de credito',
    y : cartaoTotal,
    color: '#0C9AF2'
  },
  {
    x: 'Almoco/Janta',
    y : almocoJantaTotal,
    color: 'navy'
  },
  {
    x: 'Outros',
    y : outrosTotal,
    color: '#F23D6D'
  }
]

const markedDates = dastasFilter.reduce((acc, date) => {
  acc[date] = { selected: true, selectedColor: '#00adf5' };
  return acc;
}, {});

const handleDatePress = (date) => {
  if (markedDates[date.dateString]) {
    navigation.navigate('Contas');
  }else{
    Alert.alert(`Dia ${date.day}`, `Nao tem nada marcado neste dia.`);
  }
};

  return (
      <ScrollView style={styles.view}>
        <View style={styles.soma}>
          <Text style={styles.titleName}>Bem vindo Diego</Text>
          <Text style={styles.somaTitle}>Carteira :</Text>
          <Text
          style={[styles.somaText,
            Number(totalSaida) > Number(total) ? styles.negativo : null
            ]}>Total: R$  
          {`${Number(totalSaida) > Number(total) ? " -" : ""}${soma}`}</Text>
        </View>
    
          <View style={styles.listaHome}>
            <Text style={styles.titleHome}>Seus Gastos e Saida</Text>
              <VictoryPie
              data={dados}
              colorScale={dados.map((value)=>value.color)}
              style={{ labels:{display: 'none'}, } }
              innerRadius={80}
              labelComponent={<VictoryTooltip renderInPortal={false}
              style={{color: 'black'}}
              orientation={'top'}
              />}
              />
                 <ScrollView horizontal>
                    <View style={styles.listGrafico}>
                    <Text style={styles.contas}>Contas: R${comidaTotal}</Text>
                    <Text style={styles.transporte}>Transporte: R${trasporteTotal}</Text>
                    <Text style={styles.mercado}>Mercado: R${mercadoTotal}</Text>
                    <Text style={styles.cartao}>Cartao de credito: R${cartaoTotal}</Text>
                    <Text style={styles.comida}>Almoco/Janta: R${almocoJantaTotal}</Text>
                    <Text style={styles.outros}>Outros: R${outrosTotal}</Text>
                    </View>
               </ScrollView >
          </View>
          <View style={styles.line} />
           <View style={styles.container}>
              <Text style={styles.titleCalendario}>Suas contas a Vencer</Text>
              <Calendar
              markedDates={markedDates}
              onDayPress={handleDatePress} />
           </View>
           <OutrasOpcao total={total} anotacao={anotacao} totalSaida={totalSaida} navigation={navigation}/>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
view:{
   backgroundColor: '#061440'
},
container:{
  backgroundColor: '#fff',
  paddingTop: 50
},
line: {
  width: '100%',
  height: 1,
  backgroundColor: '#F0F0F0',
},
soma:{
  padding: 20
},
somaText:{
  color: '#fff',
  fontSize: 35,
  fontWeight: 'bold',
  textShadowColor: '#fff',
  textShadowOffset: { width: 2, height: 2 },
  textShadowRadius: 30,
  elevation: 20, 
},
negativo:{
  color: '#fff',
  fontSize: 35,
  fontWeight: 'bold',
  textShadowColor: 'red',
  textShadowOffset: { width: 2, height: 2 },
  textShadowRadius: 30,
  elevation: 20, 
},
somaTitle:{
  color: '#fff',
  fontSize: 20,
  padding: 3
},
titleName:{
  color: '#fff',
  fontSize: 20,
  padding: 3,
  backgroundColor: '#081A57',
  textAlign: 'center',
  borderRadius: 10
},
listaHome:{
  backgroundColor: '#fff',
  borderRadius: 50,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  marginTop: 20,
  paddingTop: 20
},
titleHome:{
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 25,
  color: '#061440',
  marginBottom: -25
},
titleCalendario:{
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 25,
  color: '#061440',
  paddingBottom: 20
},
contas:{
  color: '#fff',
  backgroundColor: 'tomato',
  padding: 5,
  margin: 2,
  fontWeight: 'bold',
  borderRadius: 10
},
transporte:{
  color: '#fff',
  backgroundColor: '#914AD9',
  padding: 5,
  margin: 2,
  fontWeight: 'bold',
  borderRadius: 10
},
mercado:{
  color: '#fff',
  backgroundColor: '#F29829',
  padding: 5,
  margin: 2,
  fontWeight: 'bold',
  borderRadius: 10
},
cartao:{
  color: '#fff',
  backgroundColor: '#0C9AF2',
  padding: 5,
  margin: 2,
  fontWeight: 'bold',
  borderRadius: 10
},
comida:{
  color: '#fff',
  backgroundColor: 'navy',
  padding: 5,
  margin: 2,
  fontWeight: 'bold',
  borderRadius: 10
},
outros:{
  color: '#fff',
  backgroundColor: '#F23D6D',
  padding: 5,
  margin: 2,
  fontWeight: 'bold',
  borderRadius: 10
},
listGrafico:{
  flexDirection: 'row',
  paddingBottom: 20
},
 evento: {
  backgroundColor: 'white',
  margin: 10,
  padding: 20,
  borderRadius: 5,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowRadius: 1,
  elevation: 2,
},
listaText:{
  fontSize: 20,
  fontWeight: 'bold',
 },
 lista:{
  marginTop: 40,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around'
 }
})

export default Home;
