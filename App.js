import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
// import { connect } from 'react-redux'

// import { actionCreators } from '../redux/todoRedux'
import Title from './app/components/Title.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {

  // static propTypes = {
  //   items: PropTypes.array.isRequired,
  //   dispatch: PropTypes.func.isRequired,
  // }

  render() {
    return (
      <View style={styles.container}>
        <Title> Todo List </Title>
      </View>
    )
  }
}

 export default App;