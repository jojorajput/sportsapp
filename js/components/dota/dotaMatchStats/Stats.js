import React from "react";
import { Card, CardItem,Grid,List,ListItem,Row,Text, View} from "native-base";
import Styles from './Styles';

class Stats extends React.Component {
  constructor(props){
    super(props);
    this.state={
        maps: false,
        players: false,
        sta: false,
        rounds: false            
    }
  }
  componentDidMount(){
    Object.keys(this.props.stats).map((item, index) => {
      if (item == "statistics") {
        this.setState({ sta: true}, ()=> {
          if (this.state.sta) {
            Object.keys(this.props.stats.statistics.teams).map(
              (item, index) => {
                if (item == "players") {
                  this.setState({ players: true });
                }
              }
            );
            Object.keys(this.props.stats.statistics.totals).map(
              (item, index) => {
                if (item == "rounds") {
                  this.setState({ rounds: true });
                }
              }
            );
          }
        });
      }
    });
    Object.keys(this.props.stats.sport_event_status).map((item, index) => {
      if (item == "period_scores") {
        this.setState({ maps: true });
      }
    });
  }
  render() {
    return <Card>
      <CardItem style={Styles.flx1}>
        <View style={Styles.flxStart}>
          <Text>
            Event status :{" "}
            {this.state.maps ? (
              this.props.stats.sport_event_status.status
            ) : (
              "N/A"
            )}
          </Text>
        </View>
        <View style={Styles.flxStart}>
          <Text style={Styles.rightTx}>
            Rounds:{this.state.rounds ? (
              this.props.stats.statistics.totals.rounds
            ) : (
              "N/A"
            )}
          </Text>
        </View>
      </CardItem>
      {this.state.maps ?( <CardItem style={{ padding: 0 }}>
        <Grid>
          <Row>
            <View style={Styles.flxStart}>
              <Text style={Styles.leftTx20Bold}>
                {this.props.stats.sport_event.competitors[0].name}
              </Text>
            </View>
            <View style={Styles.flxEnd}>
              <Text style={Styles.rightTx20Bold}>
                {this.props.stats.sport_event.competitors[1].name}
              </Text>
            </View>
          </Row>
          <Row>
            <View style={Styles.flxStart}>
              <Text style={Styles.leftTx20}>
                {this.props.stats.sport_event_status.home_score}
              </Text>
            </View>
            <View style={Styles.flxEnd}>
              <Text style={Styles.rightTx20}>
                {this.props.stats.sport_event_status.away_score}
              </Text>
            </View>
          </Row>
          <Row>
            <List dataArray={this.props.stats.sport_event_status.period_scores} renderRow={score => <ListItem>
              <Grid>
                <Row>
                  <View style={Styles.flxCenter}>
                    <Text style={Styles.centerTx}>
                      Map: {score.number} Map Name: {score.map_name}{" "}
                    </Text>
                  </View>
                </Row>
                <Row>
                  <View style={Styles.flxStart}>
                    <Text >
                      {score.home_score}
                    </Text>
                  </View>
                  <View style={Styles.flxEnd}>
                    <Text style={Styles.rightTx}>
                      {score.away_score}
                    </Text>
                  </View>
                </Row>
              </Grid>
            </ListItem>} />
          </Row>
        </Grid>
      </CardItem> ): null}
      <CardItem>
        {this.state.players ?( <View>
          <View style={Styles.flx1}>
            <List dataArray={this.props.stats.statistics.teams[0].players} renderRow={player => <ListItem>
              <Card>
                <CardItem>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "bold"
                    }}
                  >
                    {player.nickname}
                  </Text>
                  <Text style={{textAlign:"center"}} >{player.name}</Text>
                </CardItem>
                <CardItem>
                  <Text>Kills: {player.kills}</Text>
                  <Text>Headshots: {player.headshots} </Text>
                  <Text>
                    Headshot %: {player.headshot_percent}{" "}
                  </Text>
                  <Text>Assists: {player.assists}</Text>
                  <Text>Deaths: {player.deaths}</Text>
                  <Text>Kill/Death: {player.kd_ratio}</Text>
                </CardItem>
              </Card>
            </ListItem>} />
          </View>
          <View style={Styles.flx1}>
            <List dataArray={this.props.stats.statistics.teams[1].players} renderRow={player => <ListItem>
                  <Card>
                    <CardItem>
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 20,
                          fontWeight: "bold"
                        }}
                      >
                        {player.nickname}
                      </Text>
                      <Text style={{textAlign:"center"}} >{player.name}</Text>
                    </CardItem>
                    <CardItem>
                      <Text>Kills: {player.kills}</Text>
                      <Text>Headshots: {player.headshots} </Text>
                      <Text>
                        Headshot %: {player.headshot_percent}{" "}
                      </Text>
                      <Text>Assists: {player.assists}</Text>
                      <Text>Deaths: {player.deaths}</Text>
                      <Text>Kill/Death: {player.kd_ratio}</Text>
                    </CardItem>
                  </Card>
                </ListItem>} />
          </View>
        </View> ): <Text>No Further Info Available</Text>}
      </CardItem>
    </Card>;
  }
}

export default Stats;
