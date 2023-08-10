import { StyleSheet } from "react-native";
import React from "react";
import { View, Text } from "react-native";

const HistoryItem = props => {
  return <View style={_styles.aBydFytO}>
        <View style={_styles.uTqpgTWw}>
            <Text style={_styles.fFGcaFfn}>From</Text>
            <Text>{props.title.from}</Text>
        </View>
        <View style={_styles.oOXykjLQ}>
            <Text style={_styles.yNZPyDKT}>To:</Text>
            <Text>{props.title.to}</Text>
        </View>
        <View style={_styles.IJBSgvfc}>
            <Text style={_styles.nKgmaxKr}>Amount</Text>
            <Text>{props.title.value}</Text>
        </View>

    </View>;
};

export default HistoryItem;

const _styles = StyleSheet.create({
  aBydFytO: {
    backgroundColor: "white",
    borderRadius: 2
  },
  uTqpgTWw: {
    display: "flex",
    flexDirection: "row"
  },
  fFGcaFfn: {
    width: "20%"
  },
  oOXykjLQ: {
    display: "flex",
    flexDirection: "row"
  },
  yNZPyDKT: {
    width: "20%"
  },
  IJBSgvfc: {
    display: "flex",
    flexDirection: "row"
  },
  nKgmaxKr: {
    width: "20%"
  }
});