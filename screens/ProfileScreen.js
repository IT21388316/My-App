import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  app,
  db,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  getDoc,
  doc,
} from "../firebase/firebaseinit";
import { firebase_auth } from "../firebase/firebaseinit";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          color: "#FFFFFF",
          fontWeight: "400",
          marginTop: 40,
          alignSelf: "center",
        }}
      >
        My App
      </Text>

      <View
        style={{
          backgroundColor: "#3D3D3D",
          borderRadius: 12,
          height: 64,
          width: 345,
          alignSelf: "center",
          justifyContent: "center",
          paddingLeft: 20,
          marginTop: 60,
        }}
      >
        <Text style={{color:'#C0C0C0',marginTop:3,fontSize:12}}>Email</Text>
        <Text style={{color:'#FFFFFF',marginTop:5,fontSize:14}}>{firebase_auth.currentUser?.email}</Text>




      </View>
      

      <TouchableOpacity
      onPress={() => firebase_auth.signOut()}
        style={{
          width: 345,
          height: 48,
        }}
      >
        <Image
          source={require("../assets/images/logoutbtn.png")}
          resizeMode="cover"
          style={{
            width: 345,
            height: 48,
            resizeMode: "contain",
            marginTop: 280,
            marginLeft: 8,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2A2A",
  },
});
