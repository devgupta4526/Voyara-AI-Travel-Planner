import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {Ionicons} from '@expo/vector-icons'

export default function mytrip() {

  const [useTrips, setUseTrips] = useState();
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.backgroundColor,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 35,
          }}
        >
          mytrip
        </Text>
        <Ionicons name='add-circle' size = {24} color ="black"/>
      </View>

      {useTrips?.length == 0
      
      }
    </View>
  );
}

const styles = StyleSheet.create({});
