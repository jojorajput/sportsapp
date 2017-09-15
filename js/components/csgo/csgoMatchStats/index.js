import React from 'react';
import {Body,Button,Card, CardItem, Container, Content,Header, Icon,Left, Right, Spinner, Subtitle , Text,Title, View} from 'native-base';
import csgo from '../../../Services/csgo';
import Styles from './Styles';
import NavStore from '../../../NavStore';
import NoStat from './NoStat';
import Stats from './Stats';
class CSGOMatchStats extends React.Component{
  constructor(props){
    super(props);
    this.state={
        body:"",
        avail: false,
    }
  }
  componentDidMount(){
    csgo.getMatch(NavStore.matchId).then(res => {
      this.setState({ body: res });
      Object.keys(res.sport_event_status).map(
        (item, index) => {
          if (item == "period_scores") {
            this.setState({ avail: true });
          }
        }
      );
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
              <Subtitle>Match Statistics</Subtitle>
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
            <View style={Styles.load}>
              <Text>
                Loading Match Stats
              </Text>
              <Spinner color="blue" />
            </View>
          </Content>
        </Container>;
      } else {
        return <Container style={Styles.mainContainer}>
          <Header hasTabs style={Styles.head}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>SportsBuzz</Title>
              <Subtitle>Match Statistics</Subtitle>
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
            <Card>
              <CardItem>
                <View style={Styles.view}>
                  <Text>{ this.state.body.sport_event.competitors[0].name } </Text>
                  <Text> {this.state.body.sport_event.competitors[0].country +" (" + this.state.body.sport_event.competitors[0].country_code +")"} </Text>
                </View>
                <View style={Styles.view}>
                  <Text style={Styles.vs}> Vs</Text>
                </View>
                <View style={Styles.view}>
                  <Text style={ Styles.competitor2}> { this.state.body.sport_event.competitors[1].name} </Text>
                  <Text style={ Styles.competitor2}> {this.state.body.sport_event.competitors[1].country +
                    " (" +
                    this.state.body.sport_event.competitors[1]
                      .country_code +
                    ")"}
                  </Text>
                </View>
              </CardItem>
              <CardItem>
                <View style={Styles.date}>
                  <Text> Date: 
                    {this.state.body.sport_event.scheduled.slice(
                      0,
                      10
                    )}
                  </Text>
                </View>
                <View style={Styles.time}>
                  <Text style={Styles.timeTx}>
                    Time:{" "}
                    {this.state.body.sport_event.scheduled.slice(
                      11,
                      19
                    )}
                  </Text>
                </View>
              </CardItem>
            </Card>
            {this.state.avail ? <Stats stats={this.state.body} /> : <NoStat />}
          </Content>
        </Container>;
      }
  }
}

export default CSGOMatchStats;