import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function Home() {
 return (
   <View style={styles.container}>
     <View style={styles.header}>
       <Image
        source={require('../../assets/banner.png')}
        style={styles.image}
       />

      <View style={styles.textContainer}>
        <Text style={styles.text}>MARVEL</Text>
        <Text style={[styles.text, { color: '#CECECF' } ]}>|</Text>
        <Text style={[styles.text, { color: '#CECECF' } ]}>PERSONAGENS</Text>
      </View>
     </View>

      <View style={styles.line}/>
  
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'      
  },
  header:{
    marginBottom: 8
  },
  image:{
    width:'100%'
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  }
});