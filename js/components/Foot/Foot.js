import React from "react";
import {
  Text,
  Button,
  Icon,
  Footer,
  FooterTab
} from "native-base";
import NavStore from '../../NavStore';

class Foot extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return <Footer>
        <FooterTab>
          <Button active={NavStore.bottonNav == 0 ? true : false} onPress={() => NavStore.setBottomNav(0)}>
            <Icon active={NavStore.bottonNav == 0 ? true : false} name="cog" />
            <Text>Today</Text>
          </Button>
          <Button active={NavStore.bottonNav == 1 ? true : false} onPress={() => NavStore.setBottomNav(1)}>
            <Icon active={NavStore.bottonNav == 1 ? true : false} name="grid" />
            <Text>Tournaments</Text>
          </Button>
          <Button active={NavStore.bottonNav == 2 ? true : false} onPress={() => NavStore.setBottomNav(2)}>
            <Icon active={NavStore.bottonNav == 2 ? true : false} name="chatboxes" />
            <Text>Talks</Text>
          </Button>
        </FooterTab>
      </Footer>;
  }
}

export default Foot;