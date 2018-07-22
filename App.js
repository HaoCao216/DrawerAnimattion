import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {OffCanvas3D} from 'react-native-off-canvas-menu';
import MyScene from './MyScene';
import AnotherScene from './AnotherScene'
export default class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      menuOpen: false
    }
  }
  handleMenu() {
    const { menuOpen } = this.state
    this.setState({
      menuOpen: !menuOpen
    })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <OffCanvas3D
          active={this.state.menuOpen}
          onMenuPress={this.handleMenu.bind(this)}
          backgroundColor={'#222222'}
          menuTextStyles={{ color: 'white' }}
          handleBackPress={true}
          menuItems={[
            {
              title: 'Menu 1',
              icon: <Icon name="camera" size={35} color='#ffffff' />,
              renderScene: <MyScene onMenuPress={this.handleMenu.bind(this)} />
            },
            {
              title: 'Menu 2',
              icon: <Icon name="bell" size={35} color='#ffffff' />,
              renderScene: <AnotherScene />
            },
            {
              title: 'Menu 3',
              icon: <Icon name="bell" size={35} color='#ffffff' />,
              renderScene: <AnotherScene />
            },
            {
              title: 'Menu 4',
              icon: <Icon name="bell" size={35} color='#ffffff' />,
              renderScene: <AnotherScene />
            },
            {
              title: 'Menu 5',
              icon: <Icon name="bell" size={35} color='#ffffff' />,
              renderScene: <AnotherScene />
            }
          ]} />
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
});
