import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

class Input extends Component {
  render() {
    return (
      <View style={styles.input}>
        <TextInput
          value={this.props.value}
          onChangeText={this.props.onChange}
          onSubmitEditing={this.props.onAddItem}
          placeholder="What needs to be done?"
          blurOnSubmit={false}
          returnKeyType="done"
          style={styles.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  text: {
    flex: 1,
    height: 60
  }
})

export default Input;
