
import React,{useState} from 'react';
import { View, Text,Button,TextInput,FlatList,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Carousel from 'react-native-snap-carousel';

export default function HomeScreen({navigation}) {

  const [searchText,setSearchText]=useState('');

  const data=[
    {
        title:"Item 1",
        text: "Text 1",
    },
    {
        title:"Item 2",
        text: "Text 2",
    },
    {
        title:"Item 3",
        text: "Text 3",
    },
    {
        title:"Item 4",
        text: "Text 4",
    },
    {
        title:"Item 5",
        text: "Text 5",
    },
  ]


  return (
    <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20,
        }}>
          <View style={{borderRadius:30}}>
          <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          onChangeText={setSearchText}
          placeholder="Find Something"
          style={{backgroundColor: '#fff', paddingHorizontal: 20,fontSize:42}}
        />
          </View>
       
        <View style={{padding:20,marginVertical:30}}>
        <Button
        title="Explore ALL"
        onPress={() => navigation.navigate('Details')}
         />
      </View>
      <View style={{
          backgroundColor: '#ccc',
          padding: 10,
          marginVertical: 10,
          borderRadius: 10,
        }}>
      <FlatList
        contentContainerStyle={{paddingBottom: 20}}
        data={data}
        keyExtractor={(item, _index) => _index.toString()}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Text
              style={{
                padding: 10,
                color: 'black',
                fontSize: 20,
                letterSpacing: 1,
              }}>{`${item.title} ${item.text}`}</Text>
          </View>
        )}
      />
      </View>
    

     
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#101010',
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '700',
  },
  listItem: {
    marginTop: 10,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      height: 4,
      width: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    width: '100%',
    elevation: 2.2,
  },
  listItemText: {
    fontSize: 18,
  },
});