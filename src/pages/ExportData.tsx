/* Library Imports */
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: `#333`,
    justifyContent: `center`,
    padding: 16
  }
});

const ExportDataScreen = () => (
  <View style={styles.body}>
    <Text>ExportDataScreen</Text>
  </View>
);

export default ExportDataScreen;
