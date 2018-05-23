import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from './Header.js'
import Footer from './Footer.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: 'whitesmoke',
  },
})

class App extends Component {
  render() {
    const {items} = this.props

    return (
      <View style={styles.container}>
        <Header>Todo List</Header>
        <Footer onRemoveCompleted={this.removeCompleted} />
      </View>
    )
  }
}

 export default App;
