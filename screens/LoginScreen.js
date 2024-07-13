import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import  { useEffect, useState } from "react";
import { firebase_auth } from "../firebase/firebaseinit";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";



function LoginField() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = firebase_auth;
  const navigation = useNavigation();

  const signIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate("MainStack");
      setEmail("");
      setPassword("")
    } catch (error) {
      console.log(error);
      alert("signin failed" + error.message);
    }
  };

  return (
    <View style={{ marginTop: 100 }}>
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
          placeholder="Your Email"
          placeholderTextColor={"#fff"}
          style={{ fontSize: 18, color: "white" }}
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
          secureTextEntry={true}
          style={{ fontSize: 18, color: "white" }}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity
        style={{ alignSelf: "flex-end", marginTop: 10, marginRight: 20 }}
      >
        <Text style={{ color: "#ffffff", fontSize: 14 }}>Forgot Password?</Text>
      </TouchableOpacity>

      <SigninButton signIn={signIn} email={email} password={password}/>
    </View>
  );
}

function SigninButton(props) {
  const navigation = useNavigation();
  const signing = props.signIn;

  const [user, setUser] = useState(null);
  function gotoHome() {
    signing();}

    useEffect(() => {
      onAuthStateChanged(firebase_auth, (user) => {
        console.log("user", user);
        setUser(user);
        // if(user){
        //   navigation.navigate('UserMainTab')
        // }
      });
    }, []);
   
  return (
    <View>
      <TouchableOpacity onPress={gotoHome}>
      {user
          ? navigation.navigate("MainStack") 
          : navigation.navigate("Login")}
        <Image
          source={require("../assets/images/signinbutton.png")}
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

const LoginScreen = () => {
  const navigation = useNavigation();
  function gotoSignUp() {
    navigation.navigate("Signup");
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
            <Text style={sty.signUpText}>Don’t have an account?</Text>
          </View>
          <View style={{ alignItems: "flex-start", flex: 0.5 }}>
            <TouchableOpacity onPress={gotoSignUp}>
              <Text style={sty.signUpLink}>Sign Up</Text>
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

export default LoginScreen;
