import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Animated } from 'react-native'

export default class FadeAnimation extends Component {
    constructor(props){
        super(props);
        this.state = {
            fadeValue : new Animated.Value(0),
        }
    }
    _fadeAnimation = () => {
        Animated.timing(this.state.fadeValue,{
          toValue:1,
          duration: 1000
        }).start();
      }
    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.animationView, {opacity: this.state.fadeValue}]}></Animated.View>
                <TouchableOpacity style={styles.button} onPress={this._fadeAnimation}>
                    <Text style={styles.buttonText}>Fade Animation</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    animationView:{
      width:100,
      height:100,
      backgroundColor:'skyblue'
    },
    button: {
      alignSelf:'center',
      height: 45,
      marginTop:20,
      backgroundColor:'steelblue'
    },
    buttonText:{
      color:'white',
      padding:12,
      paddingHorizontal:20,
      fontWeight: 'bold',
      fontSize:18
    }
  
  })