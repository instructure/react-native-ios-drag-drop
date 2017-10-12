// @flow

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { DragView } from "react-native-ios-drag-drop";

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <DragView style={styles.draggable} dragItems={["Sample", "Two"]}>
          <View>
            <Text style={styles.welcome}>Draggable React Native View</Text>
            <Text style={styles.instructions}>
              On an iPad running iOS 11+ this will be draggable.
            </Text>
            <Text style={styles.instructions}>
              Long press on it to begin dragging and drop it onto another app in
              split screen mode.
            </Text>
          </View>
        </DragView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  draggable: {
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
