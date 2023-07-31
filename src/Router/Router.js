import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Telas/Home';
import Saida from '../Telas/Saida';
import Ganhos from '../Telas/Ganhos'
import Anotacao from '../Telas/Anotacao';
import Contas from '../Telas/Contas';
import Calculadora from '../Telas/Calculadora';
import Ajuda from '../Telas/Ajuda';
import DrawerContent from './DrawerContent';
import MenuIcon from '../img/svg/MenuIcon';
import SaidaIcon from '../img/svg/SaidaIcon';
import EntradaIcon from '../img/svg/EntradaIcon';
import ContasIcon from '../img/svg/ContasIcon';
import AnotacaoIcon from '../img/svg/AnotacaoIcon';
import CalculadoraIcon from '../img/svg/CalculadoraIcon';
import AjudaIcon from '../img/svg/AjudaIcon';
import Login from '../Telas/Login/Login';
import Cadastro from '../Telas/Login/Cadastro';

const Drawer = createDrawerNavigator();
const Router = () => {

    return (
      <Drawer.Navigator 
       drawerContent={props=> <DrawerContent {...props}/>}
       screenOptions={{ drawerLabelStyle:{fontSize: 20},
        drawerActiveBackgroundColor:'#081A57', drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#333' }}
       initialRouteName='Home'>
      <Drawer.Screen name="Home" component={Home}  options={{
          drawerIcon: ({ focused, color, size }) => (
            <MenuIcon width={size} height={size} color={color} />
          ),
        }}/>
      <Drawer.Screen name="Saidas/Gastos" component={Saida}
      options={{
        drawerIcon: ({ focused, color, size }) => (
          <SaidaIcon width={size} height={size} color={color} />
        ),
      }}/> 
      <Drawer.Screen name="Entradas/Ganhos" component={Ganhos}
      options={{
        drawerIcon: ({ focused, color, size }) => (
          <EntradaIcon width={size} height={size} color={color} />
        ),
      }} />
      <Drawer.Screen name="Contas" component={Contas} 
      options={{
        drawerIcon: ({ focused, color, size }) => (
          <ContasIcon width={size} height={size} color={color} />
        ),
      }}
      />
      <Drawer.Screen name="Anotacao" component={Anotacao} 
      options={{
        drawerIcon: ({ focused, color, size }) => (
          <AnotacaoIcon width={size} height={size} color={color} />
        ),
      }}/>
      <Drawer.Screen name="Calculadora" component={Calculadora} 
      options={{
        drawerIcon: ({ focused, color, size }) => (
          <CalculadoraIcon width={size} height={size} color={color} />
        ),
      }}/>
      <Drawer.Screen name="Mapa do App" component={Ajuda} options={{
        drawerIcon: ({ focused, color, size }) => (
          <AjudaIcon width={size} height={size} color={color} />
        ),
      }}/>
      
      <Drawer.Screen name="Sair do App" component={Login} options={{
        drawerIcon: ({ focused, color, size }) => (
          <AjudaIcon width={size} height={size} color={color} />
        ),
      }}/>
      
    </Drawer.Navigator>
      );

}


export default Router