import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {

    const navigation = useNavigation();
    function gotoLoginPage() {
        navigation.navigate('Login');
      }
  return (
    <View style={styles.container}><TouchableOpacity onPress={gotoLoginPage}>
      <Text style={{fontSize:24,color:'#FFFFFF'}}>My App</Text>
      
    </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#2A2A2A",
      justifyContent:'center',alignItems:'center'
    },
  });
  export default SplashScreen