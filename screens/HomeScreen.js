import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase_auth } from "../firebase/firebaseinit";

const HomeScreen = () => {


  const userEmail = firebase_auth.currentUser?.email;

  const navigation = useNavigation();
function gotoProfile() { 
    navigation.navigate('Profile');
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity   
      onPress={gotoProfile}  
        style={{
          width: 50,
          height: 50,  
          marginBottom: 19,
          marginTop: 15,
        }}
      >
        <Image
          source={require("../assets/images/profilebtn.png")}
          resizeMode="cover"
          style={{
            width: 50,
            height: 50,
            resizeMode: "contain",
            position: "absolute",
            marginLeft:290,
            marginTop:10
          }}
        />
      </TouchableOpacity>

<ScrollView style={{alignSelf:'center',marginTop:0}}>
<Image
          source={require("../assets/images/trones1.jpeg")}
          resizeMode="cover"
          style={{
            width: 318,
            height: 159,
            resizeMode: "contain",
            alignSelf:'center',
            marginLeft:0,
            marginTop:0
          }}
        />
<Image
          source={require("../assets/images/trones3.jpeg")}
          resizeMode="cover"
          style={{
            width: 300,
            height: 168,
            resizeMode: "contain",
            alignSelf:'center',
            marginLeft:0,
            marginTop:10
          }}
        />
<Image
          source={require("../assets/images/trones5.jpeg")}
          resizeMode="cover"
          style={{
            width: 300,
            height: 168,
            resizeMode: "contain",
            alignSelf:'center',
            marginLeft:0,
            marginTop:10
          }}
        />
<Image
          source={require("../assets/images/trones6.jpeg")}
          resizeMode="cover"
          style={{
            width: 275,
            height: 183,
            resizeMode: "contain",
            alignSelf:'center',
            marginLeft:0,
            marginTop:10
          }}
        />
<Image
          source={require("../assets/images/trones11.jpeg")}
          resizeMode="cover"
          style={{
            width: 275,
            height: 183,
            resizeMode: "contain",
            alignSelf:'center',
            marginLeft:0,
            marginTop:10
          }}
        />




</ScrollView>




    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2A2A",
  },
});
