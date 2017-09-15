import React from "react";
import {
  Card,
  CardItem,
  Content,
  List,
  ListItem,
  Spinner,
  Text,
  View,
} from "native-base";
import csgo from "../../Services/csgo";
import NavStore from "../../NavStore";
import Styles from './Styles';

class CSGOToday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };
  }
  componentWillMount() {
    csgo.getToday().then(res => {
      this.setState({ body: res });
      }, err => {
        console.log(err);
        console.log(err.status);
      }
    );
  }

  render() {
    if (this.state.body === "") {
      return (
        <Content>
          <View style={Styles.dailyLoad}>
            <Text>Loading Today's Matches</Text>
            <Spinner color="blue" />
          </View>
        </Content>
      );
    }else if (this.state.body.sport_events.length==0) {
      return <Content>
        <View style={Styles.dailyLoad}>
          <Text>No Matches Today</Text>
        </View>
      </Content>;
    } 
    else {
      return <Content>
        <List dataArray={this.state.body.sport_events} renderRow={event => <ListItem {...this.props} onPress={()=>{NavStore.setMatchId(event.id); this.props.navigation.navigate('CSGOMatchStats');}}>
          <Card>
            <CardItem>
              <View style={Styles.dailyView}>
                <Text> {event.competitors[0].name}</Text>
              </View>
              <View style={Styles.dailyView}>
                <Text style={{ fontSize: 40 }}> Vs</Text>
              </View>
              <View style={Styles.dailyView}>
                <Text> {event.competitors[1].name}</Text>
              </View>
            </CardItem>
            <CardItem>
              <View style={Styles.dailyView}>
                <Text>At: {event.scheduled.slice(11, 19)}</Text>
                <Text>Tournament: {event.tournament.name}</Text>
                <Text> Category: {event.tournament.category.name} </Text>
                <Text>Event {event.status}</Text>
              </View>
            </CardItem>
          </Card>
        </ListItem>} />
      </Content>;
    }
  }
}

export default CSGOToday;
