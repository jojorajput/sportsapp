import React from 'react';
import { View, Text, Image, AsyncStorage, BackHandler } from "react-native"; // eslint-disable-line no-unused-vars
import {Container, H1, Spinner} from 'native-base'; // eslint-disable-line no-unused-vars
const background = require("../../assets/login.jpeg");
import Styles from './Styles';
import Db from '../../Db';
import {NavigationActions} from 'react-navigation';
var value;
class Splash extends React.Component {
    constructor(props){
        super(props);
        Db.initDb();        
    }
    
    componentWillMount(){
        try{
            var auth = Db.getAuth();
            AsyncStorage.getItem('@user', (err, result)=>{value=result;}).then(()=>{
            var user = JSON.parse(value);

            auth.signInWithEmailAndPassword(user.email.toString(), user.password.toString())
            .then(()=>{
                 this.props.navigation.dispatch(NavigationActions.reset({
                    index: 0,
                    actions: [
                    NavigationActions.navigate({routeName:"Home"})]}
                ));})
            .catch((err)=>{alert(err)});
            }).catch(()=>{ this.props.navigation.dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName:"Login"})]
            }
            ));});
        } catch(err) {
            //alert(err);            
            this.props.navigation.dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: "Login" })]
              }));
        }
    }

    render() {
        return <Container>
            <Image source={background} style={Styles.mainContainer}>
              <View style={Styles.logoBox}>
                <H1 style={Styles.logo}>SportsBuzz</H1>
                <Spinner color='white' />
              </View>
            </Image>
          </Container>;
    }

}
export default Splash;