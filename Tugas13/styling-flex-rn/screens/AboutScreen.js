import React from 'react'
import {StyleSheet, View, Text, Image} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tentang Saya</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/Vector.png')}/>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>
          Arjun Sumarlan
        </Text>
      </View>
      <View style={styles.jobContainer}>
        <Text style={styles.jobText}>
          React Developer
        </Text>
      </View>
      <View style={styles.portofolioContainer}>
        <View style={styles.portofolioTextContainer}>
          <Text style={styles.portofolioText }>
            Portofolio
          </Text>
        </View>
        <View style={styles.portfolioItemContainer}>
          <View style={styles.portfolioItem}>
            <Icon name="logo-github" size={35} color={'#3EC6FF'}/>
            <Text  style={styles.portfolioItemText}>@mukhlish</Text>
          </View>
          <View style={styles.portfolioItem}>
            <Icon name="logo-linkedin" size={35} color={'#3EC6FF'}/>
            <Text style={styles.portfolioItemText}>@mukhlis-h</Text>
          </View>
        </View>
      </View>
      <View style={styles.portofolioContainer}>
        <View style={styles.portofolioTextContainer}>
          <Text style={styles.portofolioText }>
            Hubungi Saya
          </Text>
        </View>
        <View style={{padding: 10, alignItems: 'center'}}>
          <View style={{...styles.portfolioItem, flexDirection: 'row', marginVertical: 10}}>
            <Icon name="logo-facebook" size={40} color={'#3EC6FF'} />
            <Text  style={styles.portfolioItemText}>@mukhlish</Text>
          </View>
          <View style={{...styles.portfolioItem, flexDirection: 'row', marginVertical: 10}}>
            <Icon name="logo-twitter" size={40} color={'#3EC6FF'} />
            <Text style={styles.portfolioItemText}>@mukhlis-h</Text>
          </View>
          <View style={{...styles.portfolioItem, flexDirection: 'row', marginVertical: 10}}>
            <Icon name="logo-instagram" size={40} color={'#3EC6FF'} />
            <Text style={styles.portfolioItemText}>@mukhlis-h</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  titleContainer: {
    marginTop: 100
  },
  title: {
    fontSize: 30,
    color: '#003366'
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25

  },
  image: {
    borderRadius: 100,
    overflow: 'hidden',
    height: 200,
    width: 200,
  },
  nameContainer: {
    marginTop: 25
  },
  nameText: {
    color: "#003366",
    fontSize: 25
  },
  jobContainer: {
    marginBottom: 10
  },
  jobText: {
    color: "#3EC6FF",
    fontSize: 16
  },
  portofolioContainer: {
    backgroundColor: '#EFEFEF',
    width: '90%',
    marginBottom: 10
  },
  portofolioTextContainer: {
    borderBottomWidth: 1,
    borderColor: 'black',
    width: '100%',
    padding: 5
  },
  portofolioText: {

  },
  portfolioItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10
  },
  portfolioItem: {
    alignItems: 'center'
  },
  portfolioItemText: {
    color: '#003366'
  }
});

export default AboutScreen;