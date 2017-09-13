import React from "react";
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  H3,
  Header,
  Icon,
  Input,
  Item,
  Left,
  List,
  ListItem,
  Right,
  Spinner,
  Subtitle,
  Text,
  Title,
  View
} from "native-base";
import Styles from './Styles';
import NavStore from "../../../NavStore";
import Db from '../../../Db';

var dota;
class DOTAThread extends React.Component{
    constructor(props){
        super(props);
        dota = Db.getDatabase().ref("Talks/dota/"+NavStore.threadId);
        this.state = {
            cmnt: '',
            title: "",
            feeds: []
        };
    }

    componentDidMount(){
        dota.once('value').then((snapshot)=>{
            var title=snapshot.val().Title;
            this.setState({title: title});
        });

        dota.on("value", (snapshot) => {
          var feeds = [];
          snapshot.child('Feeds').forEach((feed) => {
            feeds.push({
              Comment: feed.val().Comment,
              By: feed.val().By,
              key: feed.key
            });
          });
          this.setState({ feeds: feeds });
        });
    }

    createFeed(){
        var feed = Db.getDatabase().ref("Talks/dota/" + NavStore.threadId + "/Feeds");
        var newFeed = feed.push();
        newFeed.set({
          By: Db.getAuth().currentUser.displayName,
          Comment: this.state.cmnt
        });
    }

    render(){
        if (this.state.feeds.length==0) {
            return <Container style={Styles.mainContainer}>
                <Header hasTabs style={Styles.head}>
                  <Left>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                      <Icon name="arrow-back" />
                    </Button>
                  </Left>
                  <Body>
                    <Title>SportsBuzz</Title>
                    <Subtitle>Discussions</Subtitle>
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
                      Loading Discussion
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
                    <Subtitle>
                      Discussion: {this.state.title}
                    </Subtitle>
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
                  <Item rounded style={Styles.item}>
                    <Input placeholder="Type Your Comment Here" onChangeText={cmnt => {
                        this.setState({ cmnt: cmnt });
                      }} />
                    <Button transparent onPress={() => {
                        this.createFeed();
                      }}>
                      <Icon name="paper-plane" />
                    </Button>
                  </Item>
                  <List dataArray={this.state.feeds} renderRow={feed => <ListItem>
                        <Card>
                          <CardItem>
                            <Text style={Styles.bold}>
                              {feed.By}
                            </Text>
                            <Text> {feed.Comment} </Text>
                          </CardItem>
                        </Card>
                      </ListItem>} />
                </Content>
              </Container>;
        }
    }
}

export default DOTAThread;