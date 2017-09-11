import React from "react";
import { View, Text, Image } from "react-native";// eslint-disable-line no-unused-vars
import {  Container,  Content,  Form,  Item,  Input,  Label,  Button,  Title,  Body,  H1} from "native-base"; // eslint-disable-line no-unused-vars


import Db from '../../Db';
import Styles from "./Styles";
import NavStore from '../../NavStore';

const background = require("../../assets/login.jpeg");
var auth;

class SignUp extends React.Component {
  constructor(props){
    super(props);
    auth=Db.getAuth(); 
    this.state={
      username: "",
      Password: "",
      cnfPass: "",
      Email: ""
    }
    auth.signOut();
  }
  addUser(){    
    if(this.state.Password==this.state.cnfPass){
          auth.createUserWithEmailAndPassword(this.state.Email, this.state.Password).catch((error)=>{
            var errMessage = error.message;
            alert(errMessage);
          });
          NavStore.userName = this.state.username;
          this.props.navigation.navigate("Login");
    }
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
                  <Label>Username</Label>
                  <Input style={{ color: "#fff", textAlign: "center" }} onChangeText={username => this.setState(
                        { username }
                      )} />
                </Item>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input style={{ color: "#fff", textAlign: "center" }} onChangeText={Email => this.setState(
                        { Email }
                      )} />
                </Item>

                <Item floatingLabel>
                  <Label>Password</Label>
                  <Input style={{ color: "#fff", textAlign: "center" }} secureTextEntry={true} onChangeText={Password => this.setState(
                        { Password }
                      )} />
                </Item>
                <Item floatingLabel>
                  <Label>Confirm Password</Label>
                  <Input style={{ color: "#fff", textAlign: "center" }} secureTextEntry={true} onChangeText={cnfPass => this.setState(
                        { cnfPass }
                      )} />
                </Item>
              </Form>
              <Button style={Styles.but} block primary onPress={() => this.addUser()}>
                <Text style={{ color: "#fff" }}>Sign Up</Text>
              </Button>
            </View>
          </Content>
        </Image>
      </Container>;
  }
}

export default SignUp;
