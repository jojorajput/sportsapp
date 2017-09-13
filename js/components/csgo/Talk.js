import React from "react";
import {
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Fab,
  Icon,
  Input,
  Item,
  List,
  ListItem,
  Spinner,
  Text,
  View
} from "native-base";
import NavStore from '../../NavStore';
import Db from "../../Db";
import Styles from './Styles';

var csgo;
var feed;
class CSGOTalk extends React.Component {
  constructor(props) {
    super(props);
    csgo = Db.getDatabase().ref("Talks/csgo/");
    this.state = {
      title: "",
      threads: []
    };
  }

  componentDidMount() {
    csgo.on("value", snapshot => {
      var threads = [];
      //console.log(snapshot);
      snapshot.forEach(thread => {
        threads.push({
          Title: thread.val().Title,
          By: thread.val().By,
          key: thread.key
        });
      });
      this.setState({ threads: threads });
    });
  }

  createThread() {
    var newThread = csgo.push();
    newThread.set({
      Title: this.state.title,
      By: Db.getAuth().currentUser.displayName
    });
    feed=Db.getDatabase().ref('Talks/csgo/'+newThread.key+'/Feeds');
    var newFeed= feed.push();
    newFeed.set({
      By: Db.getAuth().currentUser.displayName,
      Comment: "This is the beginning of this thread "
    });
    NavStore.setThreadId(newThread.key);
    this.props.navigation.navigate('CSGOThread');
  }

  render() {
    if(this.state.threads.length != 0){
    return <Content>
        <Item rounded>
          <Input placeholder="Start New Thread Here: Title " onChangeText={title => {
              this.setState({ title: title });
            }} />
          <Button transparent onPress={() => {
              this.createThread();
            }}>
            <Icon name="paper-plane" />
          </Button>
        </Item>
        <List dataArray={this.state.threads} renderRow={thread => <ListItem onPress={()=>{NavStore.setThreadId(thread.key); this.props.navigation.navigate('CSGOThread');}}  >
              <Text> {thread.Title} </Text>
            </ListItem>} />
      </Content>;
  }
  else {
  return <Content>
    <View style={Styles.dailyLoad}>
      <Text>Loading Discussions</Text>
      <Spinner color="blue" />
    </View>
  </Content>;
  }
  }
}

export default CSGOTalk;
