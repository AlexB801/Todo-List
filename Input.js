import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class Input extends Component {
  render() {
    return (
      <View>
        <TextInput
          placeholder="What needs to be done?"
          blurOnSubmit={false}
          returnKeyType="done"
        />
      </View>
    );
  }
}
