import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput, Span } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Persona from '../../component/Persona';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>MARVEL</Text>
          <Text style={[styles.text, { color: '#CECECF' }]}>|</Text>
          <Text style={[styles.text, { color: '#CECECF' }]}>PERSONAGENS</Text>
        </View>
      </View>

      <View style={styles.line} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: '#FFF', }}
      >

        <View style={styles.search}>
          <View style={styles.inputArea}>
            <FontAwesome5 name="search" size={24} color="black" />
            <TextInput
              placeholder="Qual personagem está procurando?"
              style={styles.input}
            />
          </View>
        </View>

      </ScrollView>

      <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Persona img={require('../../assets/1.png')} onClick={() => navigation.navigate('Detail')}>
            Iron Man
          </Persona>
          <Persona img={require('../../assets/1.png')} onClick={() => navigation.navigate('Detail')}>
            Iron Man
          </Persona>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Persona img={require('../../assets/1.png')} onClick={() => navigation.navigate('Detail')}>
            Iron Man
          </Persona>
          <Persona img={require('../../assets/1.png')} onClick={() => navigation.navigate('Detail')}>
            Iron Man
          </Persona>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Persona img={require('../../assets/1.png')} onClick={() => navigation.navigate('Detail')}>
            Iron Man
          </Persona>
          <Persona img={require('../../assets/1.png')} onClick={() => navigation.navigate('Detail')}>
            Iron Man
          </Persona>
        </View>
      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header: {
    marginBottom: 8
  },
  image: {
    width: '100%'
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text: {
    fontFamily: 'Inter_900Black',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line: {
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  },
  search: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,
  },
  inputArea: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor: '#FFF',
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
  },
  input: {
    fontFamily: 'Inter_900Black',
    paddingHorizontal: 10,
    fontSize: 13,
    width: '90%',
  }
});