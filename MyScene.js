import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
export default class MyScene extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Icon style={styles.btn} name="camera" size={35} color='#000' />
        </View>
        <View>
          <Icon style={styles.btn2} name="camera" size={35} color='#000' />
        </View>
        <Text style={{color:'red'}}>Testdd</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    position: 'absolute',
    top: 25,
  },
  btn2: {
    position: 'absolute',
    top: 50,
  }
});
