import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Homem de Ferro'
  })

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/h.png')}
        style={styles.image}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 30 }]}>Homem de Ferro</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 24 }]}>F = 8.300 N</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            Biografia:
          </Text>
          <Text style={styles.textContent}>
            Aos 21 anos, Tony Stark herdou a fortuna de seu pai quando este faleceu em um acidente e logo conseguiu ampliar ainda mais o sucesso da empresa, também herdada de seu pai, Stark Enterprise, que atua no fornecimento de armamentos. Tony não apenas é indiretamente responsável pela morte de milhões de pessoas como também se beneficia pessoalmente disso. Dada a sua juventude, logo criou para si uma fama de playboy milionário com sua vida de luxo, bebidas e mulheres. O milionário nutria sentimentos por sua secretária Pepper Pots, que por sua vez é apaixonada por Harold “Happy” Hogan.
            Durante a guerra do Vietnã, ao inspecionar o uso de uma arma projetada por sua fábrica, é vítima de um acidente que alojou estilhaços de bomba em seu coração. Encontrado pelos vietnamitas, Stark cai nas mãos do líder guerrilheiro vietnamita Wong Chu e é forçado a desenvolver uma arma para eles, contando para isso com a ajuda de um velho cientista chinês Yinsen.
          </Text>
          <Text style={styles.textTitle}>
            Primeira Aparição:
          </Text>
          <Text style={styles.textContent}>
            Tales of Suspense #39 – 1963.
          </Text>
          <Text style={styles.textTitle}>
            Nome:
          </Text>
          <Text style={styles.textContent}>
            Anthony Edward “Tony” Stark.
          </Text>
          <Text style={styles.textTitle}>
            Outros Nomes:
          </Text>
          <Text style={styles.textContent}>
            Vingador Dourado, Centurião Prateado, Máquina de Combate, Homem de Ferro Superior.
          </Text>
          <Text style={styles.textTitle}>
            Nacionalidade:
          </Text>
          <Text style={styles.textContent}>
            Norte Americano (Long Island, NY, EUA) Terra 616.
          </Text>
          <Text style={styles.textTitle}>
            Raça:
          </Text>
          <Text style={styles.textContent}>
            Humana.
          </Text>
        </View>

        <View style={styles.line} />

        <View>
          <Text style={styles.textTitle}>VERSÕES:</Text>

          <View style={styles.imageV}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Image
                  source={require('../../assets/1.1.png')}
                  style={styles.imagelol}
                />

                <Image
                  source={require('../../assets/1.2.png')}
                  style={styles.imagelol}
                />

                <Image
                  source={require('../../assets/1.3.png')}
                  style={styles.imagelol}
                />

                <Image
                  source={require('../../assets/1.4.png')}
                  style={styles.imagelol}
                />
              </View>

            </ScrollView>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image: {
    width: '100%'
  },
  title: {
    fontFamily: 'Inter_900Black',
    paddingHorizontal: '2%'
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontFamily: 'Inter_900Black',
    fontSize: 22,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  line: {
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%'
  },
  imageV: {
    paddingVertical: '10%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagelol: {
    width: 250,
    height: 200
  }
});