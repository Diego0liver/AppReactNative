import React from 'react';
import { View, Text } from 'react-native';
import {  DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


const DrawerContent = (props) => {
  let sair = '< Sair do APP'
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ paddingTop: 10, marginTop: 20}}>
        <View style={{ marginLeft: 20}}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 20}}>Auxiliar de finanças</Text>
        </View>
      <DrawerItemList {...props}/>
      </View>

      <View style={{ paddingTop: 10, marginLeft: 20}}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color:'#fff', backgroundColor: '#081A57', width: 110, padding:5, borderRadius: 5}}>
            {sair}
          </Text>
      </View>
    </DrawerContentScrollView>
  );
};
export default DrawerContent