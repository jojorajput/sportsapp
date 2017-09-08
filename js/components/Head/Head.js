import React from "react";
import {View} from 'react-native'; // eslint-disable-line no-unused-vars
import {  Container,  Header,  Title,  Content,  Text,  Button,  Icon,  Left,  Right,  Body,  Segment} from "native-base"; // eslint-disable-line no-unused-vars
import NavStore from '../../NavStore';
import Styles from "./Styles";
//var NavStore;
class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seg: 1
    };
   // NavStore= this.props.NavStore;
  }

  csgo(){
    this.setState({ seg: 1 });
    
    NavStore.setTopNav(0);
  }

  dota(){
    this.setState({ seg: 2 });
    NavStore.setTopNav(1);
  }

  lol(){
    this.setState({ seg: 3 })
    NavStore.setTopNav(2);
  }

  render() {
    return (
      <View >
        <Header hasTabs style={Styles.head}>
          <Left>
          </Left>
          <Body>
            <Title>SportsBuzz</Title>
          </Body>
          <Right>
            <Button transparent onPress={()=>{this.props.navigation.navigate("Settings");}}>
              <Icon name="settings" />
            </Button>
          </Right>
        </Header>
        <Segment>
          <Button
            first
            active={this.state.seg === 1 ? true : false}
            onPress={() => this.csgo()}
          >
            <Text>CS:GO</Text>
          </Button>
          <Button
            active={this.state.seg === 2 ? true : false}
            onPress={() => this.dota()}
          >
            <Text>Dota 2</Text>
          </Button>
          <Button
            last
            active={this.state.seg === 3 ? true : false}
            onPress={() => this.lol()}
          >
            <Text>League Of Ledgends</Text>
          </Button>
        </Segment>
      </View>
    );
  }
}

export default Head;