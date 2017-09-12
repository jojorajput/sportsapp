import React from 'react';
import {View ,AsyncStorage} from 'react-native';
import {Container,Header, Left,Right, Body, Button, Title, Icon, Content, H1, Text } from 'native-base';
import Styles from './Styles';
import Db from '../../Db';
import {NavigationActions} from 'react-navigation';
import NavStore from '../../NavStore';

import {observer} from 'mobx-react';
import {create } from 'mobx-persist';
import UserStore from '../../UserStore';

const hydrate = create({ storage: AsyncStorage });
const userStore = UserStore;
var auth;
class Settings extends React.Component {
    constructor(props){
        super(props);
        auth=Db.getAuth();
    }
    logout(){
            //AsyncStorage.removeItem('@user')
            userStore.setUser({})
            .then(()=>{NavStore.userName=''; auth.signOut(); 
            this.props.navigation.dispatch(NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: "Login" })]
              }));
            });
    }

render(){
    return <Container style={Styles.mainContainer}>
        <Header style={Styles.head}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Settings</Title>
          </Body>
        </Header>
        <Content padder>
          <View style={Styles.logo}>
            <H1> SportsBuzz</H1>
          </View>
          <View style={Styles.but}>
            <Button bordered warning onPress={() => {
                this.logout();
              }}>
              <Text> Sign Out </Text>
            </Button>
          </View>
        </Content>
      </Container>;
}
}

export default Settings;