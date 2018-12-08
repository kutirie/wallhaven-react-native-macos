/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUrls: ["тест", "тест1"],
      nameButton: 'Get random picture'
    }
    this.generateUrl = this.generateUrl.bind(this);
  }

  getRandomArbitary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  generateUrl() {
    this.addUrl(this.getRandomArbitary(0, 700000));
  }

  addUrl(newurl) {
    this.setState({
      imageUrls: [...this.state.imageUrls, newurl]
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-' + this.state.imageUrls[this.state.imageUrls.length - 1] + '.jpg',
          }}
          onError={this.generateUrl}
          onLoadStart={() => this.setState({
            nameButton: 'Loading...'
          })}
          onLoadEnd={() => this.setState({
            nameButton: 'Get random picture'
          })}
          style={{width: '100%', height: '85%'}}
          resizeMode="center"
        />
        <Button
          onPress={this.generateUrl}
          title={this.state.nameButton}
          color="#841584"
          style={{width: 250, padding: 20, fontSize: 15}}
        />
        <Text>https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-{this.state.imageUrls[this.state.imageUrls.length - 1]}.jpg</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#f0f0f0',
    marginBottom: 5,
  },
});
