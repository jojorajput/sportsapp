import React from 'react';
import { View, Text, Image, AsyncStorage, BackHandler } from "react-native"; // eslint-disable-line no-unused-vars
import {Container, H1, Spinner} from 'native-base'; // eslint-disable-line no-unused-vars
const background = require("../../assets/bck.jpg");
import Styles from './Styles';
import Db from '../../Db';
import {NavigationActions} from 'react-navigation';
import {observer} from 'mobx-react';
import {create} from 'mobx-persist';
import UserStore from '../../UserStore';

var value;
const hydrate = create({storage: AsyncStorage});
const userStore = UserStore;


class Splash extends React.Component {
    constructor(props){
        super(props);
        Db.initDb();        
    }
    
    componentWillMount(){
        var auth = Db.getAuth();
        hydrate("user", userStore)
        .then(usr => {
            var user= usr.user;
            auth.onAuthStateChanged((user)=>{                    
                if(user){
                    this.props.navigation.dispatch(NavigationActions.reset(
                        {
                            index: 0,
                            actions: [
                            NavigationActions.navigate(
                                {
                                routeName: "Home"
                                }
                            )
                            ]
                        }
                        ));
                } else {
                    this.props.navigation.dispatch(NavigationActions.reset(
                    {
                        index: 0,
                        actions: [
                        NavigationActions.navigate(
                            { routeName: "Login" }
                        )
                        ]
                    }
                    ));
                }
            });
        });
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