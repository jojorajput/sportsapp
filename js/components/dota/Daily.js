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
  View,
} from "native-base";
import dota from "../../Services/dota";

class DOTAToday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };
  }
  componentWillMount() {
    dota.getToday().then(res => {
        this.setState({ body: res });
      }, err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.body === "") {
      return (
        <Content>
          <View style={{ alignSelf: "center", marginTop: 200 }}>
            <Text>Loading Today's Matches</Text>
            <Spinner color="blue" />
          </View>
        </Content>
      );
    }else if (this.state.body.sport_events.length==0) {
      return <Content>
          <View style={{ alignSelf: "center", marginTop: 200 }}>
            <Text>No Matches Today</Text>
          </View>
        </Content>;
    } else {
        return <Content>
            <List dataArray={this.state.body.sport_events} renderRow={event => <ListItem>
                  <Card {...this.props} id={event.id}>
                    <CardItem>
                      <View style={{ flex: 1 }}>
                        <Text> {event.competitors[0].name}</Text>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 40 }}> Vs</Text>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text> {event.competitors[1].name}</Text>
                      </View>
                    </CardItem>
                    <CardItem>
                      <View style={{ flex: 1, alignContent: "center" }}>
                        <Text>
                          At: {event.scheduled.slice(11, 19)}
                        </Text>
                        <Text>
                          Tournament: {event.tournament.name}
                        </Text>
                        <Text>
                          Category:{" "}
                          {event.tournament.category.name}
                        </Text>
                        <Text>Event: {event.status}</Text>
                      </View>
                    </CardItem>
                  </Card>
                </ListItem>} />
          </Content>;
      }
  }
}

export default DOTAToday;
