import React from 'react';
import { View, Text } from 'react-native';
import {  DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ paddingTop: 10, marginTop: 20}}>
        <View style={{ marginLeft: 20}}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 20}}>Auxiliar de finanças</Text>
        </View>
      <DrawerItemList {...props}/>
      </View>

    </DrawerContentScrollView>
  );
};
export default DrawerContent