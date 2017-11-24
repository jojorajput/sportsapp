import React from 'react';
import { View, Text, Image, AsyncStorage } from "react-native"; 
import {  Container,  Content,  Form,  Item,  Input,  Label,  Button, H1} from "native-base"; 

import Db from '../../Db';
import {NavigationActions} from 'react-navigation';
import {observer} from 'mobx-react';
import {create} from 'mobx-persist';
import Styles from "./Styles";
import NavStore from '../../NavStore';
import UserStore from '../../UserStore';
import I18n from 'ex-react-native-i18n';

const background = require("../../assets/login.jpeg");
var auth;
const hydrate = create({storage: AsyncStorage});
const userStore = UserStore;

I18n.fallbacks=true;
I18n.translations={
  en:{
    password: 'Password',
    crAccnt:'Create Account'
  },
  du:{
    password: 'Wachtwoord',
    crAccnt: 'Account Aanmaken'
  }
}

@observer
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
      userStore.setUser(this.state);
      this.props.navigation.dispatch(NavigationActions.reset(
          {
            index: 0,
            actions: [NavigationActions.navigate({routeName: "Home"})]
          }
      ));
    } catch(err){
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
    I18n.locale = NavStore.locale;
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
                <Input style={Styles.ip} onChangeText={email => this.setState( { email } )} />
              </Item>
              <Item floatingLabel>
                <Label>{I18n.t('psswrd')}</Label>
                <Input style={Styles.ip} secureTextEntry={true} onChangeText={password => this.setState( { password } )} />
              </Item>
            </Form>
            <Button style={Styles.but} block primary onPress={() => this.login()}>
              <Text style={Styles.ip}>Login</Text>
            </Button>
            <Button transparent style={{ alignSelf: "center", marginTop: 30 }} onPress={() => this.props.navigation.navigate("SignUp")}>
              <Text style={Styles.ip}>{I18n.t('crAccnt')}</Text>
            </Button>
          </View>
        </Content>
      </Image>
    </Container>;
  }
}

export default Login;
