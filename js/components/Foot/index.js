import React from "react";
import {
  Text,
  Button,
  Icon,
  Footer,
  FooterTab
} from "native-base";
import {observer} from 'mobx-react';
import NavStore from '../../NavStore';
import NavList from '../../NavList';
import I18n from 'ex-react-native-i18n';
I18n.fallbacks=true;
@observer
class Foot extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    I18n.locale = NavStore.locale;
    return <Footer>
      <FooterTab>
        <Button active={NavStore.bottonNav == NavList.bottomNav.TODAY ? true : false} onPress={() => NavStore.setBottomNav(NavList.bottomNav.TODAY)}>
          <Icon active={NavStore.bottonNav == NavList.bottomNav.TODAY ? true : false} name="cog" />
          <Text>{I18n.t('today')}</Text>
        </Button>
        <Button active={NavStore.bottonNav == NavList.bottomNav.TOURNAMENT ? true : false} onPress={() => NavStore.setBottomNav(NavList.bottomNav.TOURNAMENT)}>
          <Icon active={NavStore.bottonNav == NavList.bottomNav.TOURNAMENT ? true : false} name="grid" />
          <Text>{I18n.t('tournaments')}</Text>
        </Button>
        <Button active={NavStore.bottonNav == NavList.bottomNav.TALKS ? true : false} onPress={() => NavStore.setBottomNav(NavList.bottomNav.TALKS)}>
          <Icon active={NavStore.bottonNav == NavList.bottomNav.TALKS ? true : false} name="chatboxes" />
          <Text>{I18n.t('talks')}</Text>
        </Button>
      </FooterTab>
    </Footer>;
  }
}

export default Foot;