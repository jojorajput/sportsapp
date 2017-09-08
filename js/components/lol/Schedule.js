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
          <View style={{ alignSelf: "center", marginTop: 200 }}>
            <Text>Loading Tournament List</Text>
            <Spinner color="blue" />
          </View>
        </Content>
      );
    } else {
      return (
        <Content>
          <List
            dataArray={this.state.tournaments}
            renderRow={tournament => (
              <ListItem>
                <Text>{tournament.name}</Text>
                {/* <Right style={{alignSelf:"flex-end"}}>
                      <Icon name="arrow-forward" />
                    </Right> */}
              </ListItem>
            )}
          />
        </Content>
      );
    }
  }
}

export default LOLSchedule;
