import { StyleSheet } from "react-native";
import React from "react";
import { View, Text } from "react-native";

const HistoryItem = props => {
  return <View style={_styles.hQlgUMeA}>
        <View style={_styles.kgfEognG}>
            <Text style={_styles.rOzhITfY}>From</Text>
            <Text>{props.title.from}</Text>
        </View>
        <View style={_styles.zFxuMEDV}>
            <Text style={_styles.lGDsaYtl}>To:</Text>
            <Text>{props.title.to}</Text>
        </View>
        <View style={_styles.dEiKwdNe}>
            <Text style={_styles.UzDxmbVI}>Amount</Text>
            <Text>{props.title.value}</Text>
        </View>

    </View>;
};

export default HistoryItem;

const _styles = StyleSheet.create({
  hQlgUMeA: {
    backgroundColor: "white",
    borderRadius: 2
  },
  kgfEognG: {
    display: "flex",
    flexDirection: "row"
  },
  rOzhITfY: {
    width: "20%"
  },
  zFxuMEDV: {
    display: "flex",
    flexDirection: "row"
  },
  lGDsaYtl: {
    width: "20%"
  },
  dEiKwdNe: {
    display: "flex",
    flexDirection: "row"
  },
  UzDxmbVI: {
    width: "20%"
  }
});