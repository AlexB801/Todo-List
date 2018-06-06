import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Header from './Header'
import Footer from './Footer'
import Input from './Input'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: 'lightgrey',
  }
})

class App extends Component {
  render() {
    const {items} = this.props

    return (
      <View style={styles.container}>
        <Header>Todo List</Header>
        <View style={styles.content}>
        <Input />
        </View>
        <View style={styles.divider} />
        <Footer onRemoveCompleted={this.removeCompleted} />
      </View>
    )
  }
}

export default App;
