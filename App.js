import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';




export default function App() {
  

  const handlePress = (screen) => {
    navigator.navigate(screen);
   }

  const [item,setItem] = useState([
    {key: 1, item: 'Banja Luka'},
    {key: 2, item: 'Beograd'},
    {key: 4, item: 'Zagreb'},
    {key: 5, item: 'Madrid'},
    {key: 6, item: 'London'},
    {key: 8, item: 'Podgorica'},
  ]);

  const array = 
    [{key:1, name: 'Republic of Serbska', image: require('./assets/republicOfSerbska.jpg')},
    {key:2, name: 'Serbia', image: require('./assets/800px-Flag_of_Serbia.svg.png')},
    {key:3, name: 'Croatia', image: require('./assets/istockphoto-455219859-612x612.jpg')},
    {key:4, name: 'Spain', image: require('./assets/27.327.030.jpg')},
    {key:5, name: 'Great Britan', image: require('./assets/1280px-Flag_of_the_United_Kingdom_(2-3).svg.png')},
    {key:6, name: 'Montengro', image: require('./assets/Flag_of_Montenegro.svg.png')},
  ]
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.viewName}>
          <Text style={styles.viewText}>Country</Text>
        </View>
      {
        array.map((i) => {
          return(
            <TouchableOpacity onPress={handlePress}>
            <View style={styles.miniCountry} key={i.key}>
            <ImageBackground resizeMode='cover' source={i.image} style={styles.image} />
            <Text style={styles.text}>{i.name}</Text>
            </View>
            </TouchableOpacity>
         )})
      }
       <View style={styles.viewName}>
          <Text style={styles.viewText}>City</Text>
        </View>

{
        item.map((n) => {
          return(
          <View style={styles.mini} key={n.key}>
            <Text style={styles.text}>{n.item}</Text>
          </View>
         )})
      }
      </ScrollView>
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:20,
    fontStyle:'italic',
    color:'white',
    textShadowColor:'black',
    textShadowRadius:4,
    textShadowOffset:{width:0, height:0}
  },
  mini:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',
    width:300,
    height:100,
    marginTop:50,
    marginBottom:20,
    borderRadius:10,
    zIndex:0,
  },
  viewName:{
    marginTop:50,
    justifyContent:'flex-start',
    flexDirection:'row',
  },
  viewText:{
    fontSize:20,
    fontWeight:'bold',
 
  },
  image:{
  width:300,
  height:80,
  position:'absolute',
  borderWid:2,
  borderRadius:10,borderColor:'black', 
  },
  miniCountry:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',
    width:300,
    height:100,
    marginTop:50,
    marginBottom:20,
    borderColor:'black',
    borderWidth:1,
    borderRadius:10,
  },
});
