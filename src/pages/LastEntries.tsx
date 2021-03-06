/* Library Imports */
import React from "react";
import { StyleSheet, View } from "react-native";

// pull in header with DrawerTrigger
import { RedText } from "../components/coloredTexts";

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: `#333`,
    justifyContent: `center`,
    padding: 16
  }
});

function LastEntriesScreen() {
  return (
    <View style={styles.body}>
      <RedText text={`LastEntriesScreen`} />
    </View>
  );
}

export default LastEntriesScreen;
