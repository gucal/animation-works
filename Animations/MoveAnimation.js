import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Animated, Easing, Dimensions } from 'react-native'
var { width, height} = Dimensions.get('window');

export default class MoveAnimation extends Component {
constructor (props){
    super(props);
        this.state = {
        moveValue: new Animated.Value(0),
        }
      }
_moveAnimation = () =>{
    Animated.timing(this.state.moveValue,{
        toValue: 0,
        duration: 1000,
        easing: Easing.linear,
        }).start(() => {
          Animated.timing(this.state.moveValue,{
            toValue: width-100,
            duration: 1000,
            easing: Easing.linear,
           }).start(() => {
            this._moveAnimation();
           });
        });
      }

    render() {
        return (
            <View style={styles.container}>
                  <Animated.View style={[styles.animationView, {left: this.state.moveValue}]}></Animated.View>
                  <TouchableOpacity style={styles.button} onPress={this._moveAnimation}>
                    <Text style={styles.buttonText}>Move Animation</Text>
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
      backgroundColor:'#1DC897'
    },
    button: {
      alignSelf:'center',
      height: 45,
      marginTop:20,
      backgroundColor:'#7DC81D'
    },
    buttonText:{
      color:'white',
      padding:12,
      paddingHorizontal:20,
      fontWeight: 'bold',
      fontSize:18
    }
  
  })