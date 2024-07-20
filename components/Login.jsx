import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("./../assets/images/3814.jpg")}
        style={{
          width: "100%",
          height: 400,
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 28,
            fontFamily: "outfit",
            textAlign: "center",
          }}
        >
          Voyara:Your Travel Buddy
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 16,
            textAlign: "center",
            color: Colors.GREY,
            marginTop: 15,
          }}
        >
          Discover your next adventure effortlessly. Personalized itineraries at
          your fingertips. Travel smarter with AI-driven insights.
        </Text>
        <TouchableOpacity style={styles.button}
        onPress={()=>router.push('auth/sign-in')}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: 17,
            }}
          >
            Sign In With Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: "15%",
  },
});
