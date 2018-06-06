import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Header from './Header.js'
import Footer from './Footer.js'
// import Input from './Input.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  }
})

class App extends Component {
  render() {
    const {items} = this.props

    return (
      <View style={styles.container}>
        <Header>Todo List</Header>
        <View style={styles.content}>

        </View>
        <Footer onRemoveCompleted={this.removeCompleted} />
      </View>
    )
  }
}

 export default App;
