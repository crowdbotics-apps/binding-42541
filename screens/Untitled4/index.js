import { advertisementadbutler_post_publishers_create } from "../../store/advertisementAdButler/advertisementadbutler_response_post_CreatePublishers.slice.js";
import { Text } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Pressable } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  const {
    entities: name
  } = useSelector(state => state.name);
  const dispatch = useDispatch();
  const [localName, setLocalName] = useState(name.name);

  const onSubmit = () => {
    dispatch(advertisementadbutler_post_publishers_create({}));
  };

  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={onSubmit}><View style={styles.WRByvgbG}><Text style={styles.yLGDNLWm}>{"SUBMIT"}</Text></View></Pressable><TextInput style={styles.YOHDkZqw} value={localName}></TextInput></ScrollView>
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
  yLGDNLWm: {
    width: 79,
    height: 18,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center",
    position: "absolute",
    top: 21,
    left: 28
  },
  YOHDkZqw: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  }
});
export default Untitled4;