import React from 'react';

import {
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Animated,
  Dimensions,
  Keyboard,
  Platform,
} from 'react-native';

import {Icon, Spinner, Text} from 'native-base';
import {withSafeAreaInsets} from 'react-native-safe-area-context';

import * as Animatable from 'react-native-animatable';

import { UserContext } from '../../contexts/UserContext'

const height = Dimensions.get('window').height;
const image = require('../../../assets/logo.jpeg')

class C extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      preventEvents: false,
      email: '',
      password: '',
      loading: false,
    };
  }
  handleLogIn = async () => {
    if (this.state.email === '') {
      alert('Please Enter Mobile Number');
      return;
    } else if (this.state.password === '') {
      alert('Please Enter Password');
      return;
    } else {
      let a = await this.setState({
        login_type: 'custom_login', 

        loading: true,
      });
    }

    fetch('https://jkpaper-sandbox.herokuapp.com/login/login', {
  
      method: 'POST',
      headers: {
       // Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify( {
    
        mobile: this.state.email,
        password: this.state.password
      })
    ,
    
     // body: JSON.stringify({this.state.phone:this.state.email}),
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (!data.success) {
          this.setState({loading: false});
          alert(data.message);
          console.log('data',JSON.stringify(data))
        } else {
          console.log(data.data.user_details.id)
          this.setState({loading: false});
          this.context.setAuthPayload({
            ...this.context.authPayload,
            isAuthenticated: true,
            token: data.data.token,
            sfid : data.data.user_details.sfid,
            user: {
              name: '',
              id: data.data.user_details.id,
            },
          });
        }
      })
      .catch((err) => {
        alert('Technical Error');
        this.setState({loading: false});
        console.log(err);
       
      });

  };

  componentWillMount() {
    this.loginHeight = new Animated.Value(250);
    this.keyboardWillShowListener = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardWillShow,
    );
    this.keyboardWillHideListener = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardWillHide,
    );
    this.keyboardWillShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardWillShow,
    );
    this.keyboardWillHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardWillHide,
    );
    this.keyboardHeight = new Animated.Value(100);
    this.forwardArrowOpacity = new Animated.Value(0);
    this.borderBottomWidth = new Animated.Value(0);
  }

  keyboardWillShow = (event) => {
    let duration = 0;
    if (Platform.OS == 'android') {
      duration = 100;
    } else {
      duration = event.duration;
    }
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: duration + 100,
        toValue: event.endCoordinates.height - 200,
      }),
      Animated.timing(this.forwardArrowOpacity, {
        duration: duration,
        toValue: 1,
      }),
      Animated.timing(this.borderBottomWidth, {
        duration: duration,
        toValue: 1,
      }),
    ]).start();
  };
  keyboardWillHide = (event) => {
    let duration = 0;
    if (Platform.OS == 'android') {
      duration = 100;
    } else {
      duration = event.duration;
    }
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: duration + 100,
        toValue: 100,
      }),
      Animated.timing(this.borderBottomWidth, {
        duration: duration,
        toValue: 0,
      }),
    ]).start();
  };
  increaseHeightOfLogin = (box) => {
    this.setState({preventEvents: true});
    Animated.timing(this.loginHeight, {
      toValue: height,
      timing: 500,
    }).start(() => {
      if (box == 'email') {
        this.refs.emailInput.focus();
      } else if (box == 'password') {
        this.refs.passwordInput.focus();
      }
    });
  };
  decreaseHeightOfLogin = () => {
    Keyboard.dismiss();
    Animated.timing(this.forwardArrowOpacity, {
      duration: 100,
      toValue: 0,
    }).start();
    this.setState({preventEvents: false});

    Animated.timing(this.loginHeight, {
      toValue: 250,
      timing: 500,
    }).start();
  };
  render() {
    const headerTextOpacity = this.loginHeight.interpolate({
      inputRange: [150, height],
      outputRange: [1, 0],
    });
    const marginTop = this.loginHeight.interpolate({
      inputRange: [150, height],
      outputRange: [25, 60],
    });
    const headerBackArrowOpacity = this.loginHeight.interpolate({
      inputRange: [150, height],
      outputRange: [0, 1],
    });
    const animateHeight = this.loginHeight.interpolate({
      inputRange: [150, height],
      outputRange: [-11.5, 50],
    });
    const animateLogoHeight = this.loginHeight.interpolate({
      inputRange: [150, height],
      outputRange: [150, 0],
    });

    const titleTextOpacity = this.loginHeight.interpolate({
      inputRange: [150, height],
      outputRange: [-1, 1],
    });

    return (
      <View style={{flex: 1}}>
        <Animated.View
          style={{
            height: animateHeight,
            width: 80,
            top: 15 + this.props.insets.top,
            left: 25,
            zIndex: 100,
            opacity: headerBackArrowOpacity,
          }}>
          <TouchableOpacity onPress={() => this.decreaseHeightOfLogin()}>
            <Icon name="md-arrow-back" style={{color: 'black'}} />
          </TouchableOpacity>
        </Animated.View>
        <ImageBackground
         // source={require('../../../asstes/login.jpg')}
          style={{flex: 1,backgroundColor:'#006cb5'}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Animatable.View
              animation="zoomIn"
              iterationCount={1}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 100,
                width: 100,
              }}>
              <Animatable.Image
                style={{height: animateLogoHeight, width: 120}} //borderRadius: 400/ 2
                source = {image}
              />
            </Animatable.View>
          </View>
          {/* Bottom Half */}
          <Animatable.View animation="slideInUp" iterationCount={1}>
            <View>
              <Animated.View
                style={{height: this.loginHeight, backgroundColor: 'white'}}>
                <Animated.View
                  style={{
                    opacity: headerTextOpacity,
                    alignItems: 'flex-start',
                    paddingHorizontal: 25,
                    marginTop: marginTop,
                  }}>
                  <Text
                    style={{fontSize: 24, color: 'black', fontStyle: 'italic'}}>
                    Achieve Success With Us
                  </Text>
                </Animated.View>
                <Animated.View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}>
                  <Animated.View style={{marginBottom: '2%'}}>
                    <Animated.Text
                      style={{
                        fontSize: 24,
                        color: 'gray',
                        opacity: this.state.loading ? 1 : titleTextOpacity,
                      }}>
                      {this.state.loading == true
                        ? 'Logging In ...'
                        : 'Enter Your Credientials'}{' '}
                    </Animated.Text>
                  </Animated.View>
                  {this.state.loading == true ? (
                    <Spinner color="blue" />
                  ) : (
                    <></>
                  )}
                </Animated.View>
                <TouchableOpacity
                  onPress={() => this.increaseHeightOfLogin('email')}>
                  <View
                    style={{
                      marginTop: 0,
                      paddingHorizontal: 25,
                      flexDirection: 'row',
                    }}>
                    <Animated.View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        borderBottomWidth: this.borderBottomWidth,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      pointerEvents={
                        this.state.preventEvents === false ? 'none' : 'auto'
                      }>
                      <Icon name="md-mail" style={{marginRight: '3%'}} />
                      <TextInput
                        ref="emailInput"
                        onChangeText={(text) => this.setState({email: text})}
                        style={{flex: 1, fontSize: 20}}
                        placeholder="Enter Your Mobile Number"
                        underlineColorAndroid="transparent"
                      />
                    </Animated.View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.increaseHeightOfLogin('password')}>
                  <View
                    style={{
                      marginTop: 25,
                      paddingHorizontal: 25,
                      flexDirection: 'row',
                    }}>
                    <Animated.View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        borderBottomWidth: this.borderBottomWidth,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                      pointerEvents={
                        this.state.preventEvents === false ? 'none' : 'auto'
                      }>
                      <Icon name="lock-closed" style={{marginRight: '4%'}} />
                      <TextInput
                        ref="passwordInput"
                        onChangeText={(text) => this.setState({password: text})}
                        style={{flex: 1, fontSize: 20}}
                        placeholder="Enter Your Password"
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                      />
                    </Animated.View>
                  </View>
                </TouchableOpacity>
              </Animated.View>
            </View>
            {/* <View
              style={{
                flexDirection: 'row',
                height: 70,
                backgroundColor: 'white',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTopColor: '#e8e8ec',
                borderTopWidth: 1,
                paddingHorizontal: 25,
              }}> */}
              {/* <TouchableOpacity>
                <Text style={{color: '#5a7fdf', fontWeight: 'bold'}}>
                  Or connect Using Social Account{' '}
                </Text>
              </TouchableOpacity> */}
              {/* <TouchableOpacity>
                <Icon name="logo-facebook" style={{color: '#4267b2'}} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="logo-google" style={{color: '#db3236'}} />
              </TouchableOpacity> */}
            {/* </View> */}
          </Animatable.View>

          <Animated.View
            style={{
              position: 'absolute',
              height: 60,
              width: 60,
              right: 10,
              bottom: this.keyboardHeight,
              opacity: this.forwardArrowOpacity,
              zIndex: 100,
              backgroundColor: '#54575e',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
            }}>
            <TouchableOpacity onPress={this.handleLogIn}>
              <Icon name="md-arrow-forward" style={{color: 'white'}} />
            </TouchableOpacity>
          </Animated.View>
        </ImageBackground>
      </View>
    );
  }
}

C.contextType = UserContext;

export const Login = withSafeAreaInsets(C);
