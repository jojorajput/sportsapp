import React from "react";
import {View} from 'react-native'; 
import {Header,  Title, Text,  Button,  Icon,  Left,  Right,  Body,  Segment} from "native-base"; 
import NavStore from '../../NavStore';
import Styles from "./Styles";
import NavList from '../../NavList';
class Head extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View>
      <Header hasTabs style={Styles.head}>
        <Left />
        <Body>
          <Title>SportsBuzz</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => {
              this.props.navigation.navigate("Settings");
            }}>
            <Icon name="settings" />
          </Button>
        </Right>
      </Header>
      <Segment>
        <Button first active={NavStore.topNav == NavList.topNav.CSGO ? true : false} onPress={() => NavStore.setTopNav(NavList.topNav.CSGO)}>
          <Text>CS:GO</Text>
        </Button>
        <Button active={NavStore.topNav == NavList.topNav.DOTA ? true : false} onPress={() => NavStore.setTopNav(NavList.topNav.DOTA)}>
          <Text>Dota 2</Text>
        </Button>
        <Button last active={NavStore.topNav == NavList.topNav.LOL ? true : false} onPress={() => NavStore.setTopNav(NavList.topNav.LOL)}>
          <Text>League Of Ledgends</Text>
        </Button>
      </Segment>
    </View>;
  }
}

export default Head;