import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'steelblue',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    paddingTop: 8,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },
})

export default class Title extends Component {

  render() {
    const {children} = this.props

    return (
      <View style={styles.header}>
        <Text style={styles.title}>{children}</Text>
      </View>
    )
  }
}