import React from "react";
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Grid,
  Header,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  Row,
  Spinner,
  Subtitle,
  Text,
  Title,
  View
} from "native-base";
import dota from "../../../Services/dota";
import Styles from "./Styles";
import NavStore from "../../../NavStore";
class DOTATourSchedule extends React.Component{
  constructor(props){
    super(props);
    this.state={
        body:''
    }
  }
  componentWillMount(){
    dota.getTourSchedule(NavStore.tourId).then(res => {
      this.setState({ body: res });
    }, err => {
      console.log(err);
    });
  }
  render(){
    if (this.state.body === "") {
      return <Container style={Styles.mainContainer}>
        <Header hasTabs style={Styles.head}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>SportsBuzz</Title>
            <Subtitle >Tour Schedule</Subtitle>
          </Body>
          <Right>
            <Button transparent onPress={() => {
                this.props.navigation.navigate("Settings");
              }}>
              <Icon name="settings" />
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={{ alignSelf: "center", marginTop: 200 }}>
            <Text>
              Loading Tournament Schedule
            </Text>
            <Spinner color="blue" />
          </View>
        </Content>
      </Container>;
    } else {
    return <Container>
      <Header hasTabs style={Styles.head}>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>SportsBuzz</Title>
          <Subtitle>Tour Schedule</Subtitle>
        </Body>
        <Right>
          <Button transparent onPress={() => {
              this.props.navigation.navigate("Settings");
            }}>
            <Icon name="settings" />
          </Button>
        </Right>
      </Header>
      <Content>
        <Grid>
          <Row>
            <Card>
              <CardItem style={Styles.flxCenter}>
                <Text style={Styles.centerTx30}>
                  {this.state.body.tournament.name}
                </Text>
              </CardItem>
            </Card>
          </Row>
          <Row>
            <List dataArray={this.state.body.sport_events} renderRow={event => <ListItem onPress={() => {
                NavStore.setMatchId(event.id);
                this.props.navigation.navigate("DOTAMatchStats");
              }}>
              <View style={Styles.flxStart}>
                <Text>{event.competitors[0].name}</Text>
              </View>
              <View style={Styles.flxCenter}>
                <Text
                  style={Styles.centerTx20}
                >
                  Vs
                </Text>
              </View>
              <View style={Styles.flxEnd}>
                <Text style={Styles.rightTx}>
                  {event.competitors[1].name}
                </Text>
              </View>
            </ListItem>} />
          </Row>
        </Grid>
      </Content>
    </Container>;
    }
  }
}

export default DOTATourSchedule;