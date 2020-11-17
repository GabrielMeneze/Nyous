import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = () => {

    const [token, setToken] = useState('');

    const getToken = async () =>{
        setToken(await AsyncStorage.getItem('@jtw'))
    }

    useEffect(()=>{
        getToken();
    }, [])

 return(
     <View style={styles.container}>
         <Text>Home</Text>
         <Text>{token}</Text>
     </View>
 )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

export default Home;