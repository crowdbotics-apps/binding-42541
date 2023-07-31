import { useSelector } from "react-redux";
import { Pressable } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  const {
    entities: description
  } = useSelector(state => state.description);
  const {
    entities: name
  } = useSelector(state => state.name);
  const [localName, setLocalName] = useState(name.name);
  const [localDescription, setLocalDescription] = useState(description.description);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable><View style={styles.WRByvgbG}></View></Pressable><TextInput style={styles.BphEDnrI} value={localName}></TextInput><TextInput style={styles.sDMzeaVq} value={localDescription}></TextInput></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  WRByvgbG: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 89,
    left: 8
  },
  BphEDnrI: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  sDMzeaVq: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  }
});
export default Untitled4;