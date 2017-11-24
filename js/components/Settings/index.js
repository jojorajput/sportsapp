import React from 'react';
import {View ,AsyncStorage} from 'react-native';
import {Container,Header, Left,Right, Body, Button, Title, Icon, Content, H1, Text } from 'native-base';
import Styles from './Styles';
import Db from '../../Db';
import {observer} from 'mobx-react';
import {NavigationActions} from 'react-navigation';
import NavStore from '../../NavStore';
import {create } from 'mobx-persist';
import UserStore from '../../UserStore';
import I18n from 'ex-react-native-i18n';

const hydrate = create({ storage: AsyncStorage });
const userStore = UserStore;
var auth;
@observer
class Settings extends React.Component {
  constructor(props){
    super(props);
    auth=Db.getAuth();
  }
  logout(){
    userStore.setUser({})
    auth.signOut().then(()=>{
      this.props.navigation.dispatch(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: "Login" })
        ]
      }));
    });  
  }
  render(){
    I18n.locale = NavStore.locale;
    return <Container style={Styles.mainContainer}>
        <Header style={Styles.head}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{I18n.t("settings")}</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("Profile")}>
              <Icon name="person" />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <View style={Styles.logo}>
            <H1> SportsBuzz</H1>
          </View>
          <View style={Styles.but}>
            <Button bordered warning onPress={() => {
                this.logout();
              }}>
              <Text> {I18n.t("signOut")} </Text>
            </Button>
          </View>
          <View>
            <View style={{ flex: 1, alignSelf:'center' }}>
              <Button bordered onPress={() => {
                  NavStore.setLocale("en");
                  this.props.navigation.goBack();
                }}>
                <Text> English </Text>
              </Button>
            </View>
            <View style={{ flex: 1, alignSelf:'center' }}>
              <Button bordered onPress={() => {
                  NavStore.setLocale("du");
                  this.props.navigation.goBack();
                }}>
                <Text> Deutch </Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>;
  }
}

export default Settings;