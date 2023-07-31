import { Text } from "react-native";
import { jotformsapiintegration_post_register_create } from "../../store/jotformsAPIIntegration/jotformsapiintegration_response_post_CreateOrSignupUsers.slice.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Pressable } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  const {
    entities: username
  } = useSelector(state => state.username);
  const {
    entities: email
  } = useSelector(state => state.email);
  const dispatch = useDispatch();
  const {
    entities: password
  } = useSelector(state => state.password);
  const [localPassword, setLocalPassword] = useState(password.password);

  const onSubmit = () => {
    dispatch(jotformsapiintegration_post_register_create({}));
  };

  const [localEmail, setLocalEmail] = useState(email.email);
  const [localUsername, setLocalUsername] = useState(username.username);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={onSubmit}><View style={styles.WRByvgbG}><Text style={styles.yLGDNLWm}>{"SUBMIT"}</Text></View></Pressable><TextInput style={styles.HuZrdYDs} value={localPassword}></TextInput><TextInput style={styles.uFSXDYQB} value={localEmail}></TextInput><TextInput style={styles.raqNlAma} value={localUsername}></TextInput></ScrollView>
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
  HuZrdYDs: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
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
  uFSXDYQB: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  raqNlAma: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  }
});
export default Untitled4;