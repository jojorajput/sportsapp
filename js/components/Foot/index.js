import React from "react";
import {
  Text,
  Button,
  Icon,
  Footer,
  FooterTab
} from "native-base";
import NavStore from '../../NavStore';
import NavList from '../../NavList';

class Foot extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return <Footer>
      <FooterTab>
        <Button active={NavStore.bottonNav == NavList.bottomNav.TALKS ? true : false} onPress={() => NavStore.setBottomNav(NavList.bottomNav.TODAY)}>
          <Icon active={NavStore.bottonNav == NavList.bottomNav.TALKS ? true : false} name="cog" />
          <Text>Today</Text>
        </Button>
        <Button active={NavStore.bottonNav == NavList.bottomNav.TOURNAMENT ? true : false} onPress={() => NavStore.setBottomNav(NavList.bottomNav.TOURNAMENT)}>
          <Icon active={NavStore.bottonNav == NavList.bottomNav.TOURNAMENT ? true : false} name="grid" />
          <Text>Tournaments</Text>
        </Button>
        <Button active={NavStore.bottonNav == NavList.bottomNav.TALKS ? true : false} onPress={() => NavStore.setBottomNav(NavList.bottomNav.TALKS)}>
          <Icon active={NavStore.bottonNav == NavList.bottomNav.TALKS ? true : false} name="chatboxes" />
          <Text>Talks</Text>
        </Button>
      </FooterTab>
    </Footer>;
  }
}

export default Foot;