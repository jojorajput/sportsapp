import React from "react";
import { Modal } from "react-native";
import {
  Card,
  CardItem,
  Content,
  Icon,
  List,
  ListItem,
  Right,
  Separator,
  Spinner,
  Text,
  View
} from "native-base";
import schedule from "../../Services/lol";
import NavStore from "../../NavStore";
import Styles from './Styles';

class LOLSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tournaments: ""
    };
  }
  componentWillMount() {
    schedule.getTournaments().then(res => {
        this.setState({ tournaments: res });
      }, err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.tournaments === "") {
      return (
        <Content>
          <View style={Styles.load}>
            <Text>Loading Tournament List</Text>
            <Spinner color="blue" />
          </View>
        </Content>
      );
    } else {
      return <Content>
          <List dataArray={this.state.tournaments} renderRow={tournament => <ListItem onPress={() => {
                  NavStore.setTourId(tournament.id);
                  this.props.navigation.navigate("LOLTourSchedule");
                }}>
                <Text>{tournament.name}</Text>
              </ListItem>} />
        </Content>;
    }
  }
}

export default LOLSchedule;
