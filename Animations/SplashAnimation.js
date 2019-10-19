import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Animated} from 'react-native'

export default class SplashAnimation extends Component {
  constructor (props){
    super(props);
    this.state = {
      splashValue: new Animated.Value(0.5),
      }
  }
 
  _splasAnimation = () => {
    Animated.spring(this.state.splashValue, {
      toValue: 1.3,
      friction: 1,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.animationView,{transform: [{scale: this.state.splashValue}],alignSelf:'center'}]}></Animated.View>
        <TouchableOpacity style={styles.button}
          onPress={this._splasAnimation}>
          <Text style={styles.buttonText}>Splash Animation</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
    },
    animationView:{
      width:100,
      height:100,
      backgroundColor:'#C51DC8'
    },
    button: {
      alignSelf:'center',
      height: 45,
      marginTop:20,
      backgroundColor:'#C81D6D'
    },
    buttonText:{
      color:'white',
      padding:12,
      paddingHorizontal:20,
      fontWeight: 'bold',
      fontSize:18
    }
  
  })
  