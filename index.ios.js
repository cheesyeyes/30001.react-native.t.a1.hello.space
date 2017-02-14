/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

const images = [
  {
    url: "https://c1.staticflickr.com/6/5538/9196075004_9d210244db_b.jpg",
    caption: "A Good Day For Space"
  },
  {
    url: "https://c1.staticflickr.com/2/1508/25134407566_450cc45921_b.jpg",
    caption: "A First Look Into Space"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Project_Mercury_Astronauts_-_GPN-2000-000651.jpg",
    caption: "We Are The People From Space"
  }
];

export default class a1 extends Component {
  state = {
      index: 0,
      imageWidth: null,
      position: 0
  }

  onLayout(event){
    this.setState({
      imageWidth: event.nativeEvent.layout.width
    })
  }

  next(event){
    const { index, imageWidth } = this.state,
          X = event.nativeEvent.locationX,
          delta = (X < imageWidth/2) ? -1 : 1;

          let newIndex = (index + delta) % images.length;

          if(newIndex < 0){
            newIndex = images.length - Math.abs(newIndex);
          }

          this.setState({
            index: newIndex,
            position: event.nativeEvent.locationX
          });
  }

  render() {
    const image = images[this.state.index];
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.next.bind(this)}>
          <Image  source={{url: image.url}}
                  style={styles.image}
                  onLayout={this.onLayout.bind(this)}>
            <Text style={styles.label}>{image.caption}</Text>
            <Text style={styles.counter}>{this.state.position}</Text>
          </Image>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    flex: 2,
    width: 555,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  label: {
    flex: 0,
    textAlign: 'center',
    color: 'white',
    width: 555,
    fontSize: 25
  },
  counter: {
    flex: 0,
    textAlign: 'center',
    color: 'red',
    width: 555,
    fontSize: 25
  }
});

AppRegistry.registerComponent('a1', () => a1);
