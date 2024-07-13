import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React , { useState }from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebase_auth } from "../firebase/firebaseinit";
import {
  app,
  db,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "../firebase/firebaseinit";




function LoginField() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = firebase_auth;


  const addUser = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        fullName: name,
        userEmail: email,
        phoneNo: "",
        userName: '',
        userImage: null,
      });
      console.log("Document written with ID: ", docRef.id);
      // setTitle("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };


  const signUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
        
      );
      console.log(response);
      alert("Welcome");
      addUser();
    } catch (error) {
      console.log(error);
      alert("signup failed" + error.message);
    }
  };




  return (
    <View style={{ marginTop: 50 }}>
      <View
        style={{
          backgroundColor: "#3D3D3D",
          borderRadius: 12,
          height: 64,
          width: 345,
          alignSelf: "center",
          justifyContent: "center",
          paddingLeft: 20,
        }}
      >
        <TextInput
          placeholder="Name"
          placeholderTextColor={"#fff"}
          style={{ fontSize: 18, color: "white" }}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View
        style={{
          backgroundColor: "#3D3D3D",
          borderRadius: 12,
          height: 64,
          width: 345,
          alignSelf: "center",
          justifyContent: "center",
          paddingLeft: 20,
          marginTop: 10,
        }}
      >
        <TextInput
          placeholder="Email Address"
          placeholderTextColor={"#fff"}
          style={{  fontSize: 18, color: "white" }}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View
        style={{
          backgroundColor: "#3D3D3D",
          borderRadius: 12,
          height: 64,
          width: 345,
          alignSelf: "center",
          justifyContent: "center",
          paddingLeft: 20,
          marginTop: 10,
        }}
      >
        <TextInput
          placeholder="Password"
          placeholderTextColor={"#fff"}
          style={{  fontSize: 18, color: "white" }}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
    

      <SigninButton signUp={signUp}/>
    </View>
  );
}

function SigninButton(props) {
  return (
    <View>
      <TouchableOpacity onPress={props.signUp}>
        <Image
          source={require("../assets/images/signupbtn.png")}
          resizeMode="cover"
          style={{
            width: 345,
            height: 48,
            resizeMode: "contain",
            marginTop: 65,
            alignSelf: "center",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const SignupScreen = () => {
  const navigation = useNavigation();
  function gotoSignIn() {
    navigation.navigate('Login');
  }

  return (
    <View style={sty.container}>
      <Text
        style={{
          fontSize: 24,
          color: "#FFFFFF",
          fontWeight: "400",
          marginTop: 60,
          alignSelf: "center",
        }}
      >
        My App
      </Text>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="never">
        <LoginField /> 
        <View
          style={{
            marginTop: 50,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View style={{ alignItems: "flex-end", flex: 1 }}>
            <Text style={sty.signUpText}>Have an account?</Text>
          </View>
          <View style={{ alignItems: "flex-start", flex: 0.5 }}>
            <TouchableOpacity onPress={gotoSignIn}>
              <Text style={sty.signUpLink}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const sty = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2A2A",
  },
  signUpText: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  signUpLink: {
    color: "#FFD482",
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 15,
    marginLeft: 3,
  },
});

export default SignupScreen;
