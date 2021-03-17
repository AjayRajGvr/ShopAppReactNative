import React from 'react';
import {Text,View,FlatList,StyleSheet,Button} from 'react-native';

export default function WholesaleRetailer(){

    const data=[
        {
            title:"Wholesale 1:",
            text: "bags",
        },
        {
            title:"Wholesale 2",
            text: "Shoes",
        },
        {
            title:"Wholesale 3",
            text: "HAts",
        },
        {
            title:"Wholesale 4",
            text: "sandals",
        },
        {
            title:"Wholesale 5",
            text: "Jackets",
        },
      ]
    return(
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
          <View  style={{ flexDirection:"row" }} >
    <View >
        <Button title='sort'/>
    </View>
    <View>
        <Button title='filter'/>
    </View>
</View>
        </View>
    )
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