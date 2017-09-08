import React from 'react';
import { View, Text, Image, AsyncStorage } from "react-native"; // eslint-disable-line no-unused-vars
import {  Container,  Content,  Form,  Item,  Input,  Label,  Button,  Title,  Body,  H1} from "native-base"; // eslint-disable-line no-unused-vars

import Db from '../../Db';
import {NavigationActions} from 'react-navigation';

const background = require("../../assets/login.jpeg");
var auth;
import Styles from './Styles';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      email:"",
      password:""
    }
    auth=Db.getAuth();   
  }

store(){
    try{
           AsyncStorage.setItem('@user', JSON.stringify(this.state)).then(()=>{
             this.props.navigation.dispatch(NavigationActions.reset(
                 {
                   index: 0,
                   actions: [NavigationActions.navigate({routeName: "Home"})]
                 }
               ));
          });
        } catch(err){
          //handle errors here
          alert(err);
        }
  }

  login(){
    
    if(auth.currentUser){
      auth.signOut();
    }
      auth
        .signInWithEmailAndPassword(
          this.state.email,
          this.state.password
        ).then(() =>{
          this.store();
       })
        .catch(error => {
          var errMessage = error.message;
          alert(errMessage);
        });
  }

  render() {
    return <Container>
        <Image source={background} style={Styles.mainContainer}>
          <Content>
            <View style={Styles.logo}>
              <H1 style={{ color: "#fff" }}> SportsBuzz</H1>
            </View>
            <View style={Styles.formContainer}>
              <Form>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input style={{ color: "#fff", textAlign: "center" }} onChangeText={email => this.setState(
                        { email }
                      )} />
                </Item>
                <Item floatingLabel>
                  <Label>Password</Label>
                  <Input style={{ color: "#fff", textAlign: "center" }} secureTextEntry={true} onChangeText={password => this.setState(
                        { password }
                      )} />
                </Item>
              </Form>
              <Button style={Styles.but} block primary onPress={() => this.login()}>
                <Text style={{ color: "#fff" }}>Login</Text>
              </Button>
              <Button transparent style={{ alignSelf: "center", marginTop: 30 }} onPress={() => this.props.navigation.navigate("SignUp")}>
                <Text style={{ color: "#fff" }}>Create Account</Text>
              </Button>
            </View>
          </Content>
        </Image>
      </Container>;
  }
}

export default Login;
