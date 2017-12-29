/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Switch,
  Alert,
  Dimensions
} from 'react-native';



var UIScreen = {
  height,
  width
} = Dimensions.get('window');

export default class App extends Component  {

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {

      value: false

    };
  }



  render() {
    console.log('OK Pressed')
    return (

      <View style={styles.container}>
            <View style={styles.nav}>
                <Text style={styles.navTitle}>title</Text>
            </View>
         </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'red',
  },

  nav: {
    // marginTop:100,
    // marginLeft:100,

    // width: 50, 
    flexDirection: 'row',
    justifyContent: 'center',

    flex: 1,
    height: 64,
    backgroundColor: 'white'
  },

  navTitle: {


    // width: UIScreen.width,

    width: 100,
    color: 'red',
    backgroundColor: 'black'

  },


});