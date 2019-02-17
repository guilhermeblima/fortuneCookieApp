import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';


class CustomButton extends Component{
  constructor(props){
    super(props);
    this.state = '';

    this.styles = StyleSheet.create({
      button:{
        width: 230, 
        height: 50,
        borderColor: props.color, 
        borderWidth: 2,
        borderRadius: 25
      }, 
      btnArea:{
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center'

      }, 
      btnText:{
        fontSize: 17,
        fontWeight: 'bold',
        color: props.color

      }

    });

  }

  render(){
    return(
      <TouchableOpacity style={this.styles.button} onPress={this.props.onPress}>
        <View style={this.styles.btnArea}>
          <Text style={this.styles.btnText}>{this.props.buttonText}</Text>
        </View>

      </TouchableOpacity>
    );
  }
}

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      message: ''
    };

    this.messages = [
      'A friend asks only for your time not your money.',
      'A smile is your passport into the hearts of others.',
      'Your high-minded principles spell success.',
      'Change can hurt, but it leads a path to something better.',
      'People are naturally attracted to you.',
      'A chance meeting opens new doors to success and friendship.',
      'You learn from your mistakes... You will learn a lot today.',
      'If you have something good in your life, dont let it go!',
      'Your shoes will make you happy today.',
      'A dream you have will come true.',
      'You will become great if you believe in yourself.'
    ];

    this.breakOpen = this.breakOpen.bind(this);
  }

  breakOpen(){
    let randomIndex = Math.floor(Math.random() * this.messages.length);
    this.setState({message: this.messages[randomIndex]});
  }
  render() {
    return (
      
      <View style={styles.container}>
        <Image source={require('./src/biscoito.png')} style={styles.image}/>
        <Text style={styles.message}>{this.state.message}</Text>
        <CustomButton color="#dd7b22" buttonText="break open fortune cookie" onPress={this.breakOpen}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width: 250, 
    height: 250,
  }, 
  message:{
    color:'#dd7b22', 
    margin: 30,
    fontSize: 20, 
    textAlign: 'center'
  }

});
