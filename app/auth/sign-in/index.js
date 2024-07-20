import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";
const SignIn = () => {
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
        }}
      >
        Lets Sign You In
      </Text>

      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 30,
          color: Colors.GREY,
          marginTop: 20,
        }}
      >
        Welcome Back
      </Text>

      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 30,
          color: Colors.GREY,
          marginTop: 10,
        }}
      >
        You've been missed!
      </Text>

      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text>Email</Text>
        <TextInput style={styles.input} placeholder="Enter Email" />
      </View>

      <View style={{ marginTop: 30 }}>
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter Password"
        />
      </View>

      <View
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 50,
        }}
      >
        <Text style={{ color: Colors.WHITE, textAlign: "center" }}>
          Sign In
        </Text>
      </View>

      <TouchableOpacity
      onPress={()=>router.replace('auth/sign-up')}
        style={{
          padding: 15,
          backgroundColor: Colors.WHITE,
          borderRadius: 15,
          borderWidth: 1,
          marginTop: 20,
        }}
      >
        <Text style={{ color: Colors.PRIMARY, textAlign: "center" }}>
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GREY,
    fontFamily: "outfit",
  },
});

export default SignIn;
