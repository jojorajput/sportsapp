import React, { Component } from "react";

import { Container, Content } from "native-base";
import {observer} from 'mobx-react';
import Head from "../Head";
import Foot from "../Foot";
import Styles from "./Styles";
import CSGOSchedule from '../csgo/Schedule';
import DOTASchedule from '../dota/schedule';
import LOLSchedule from '../lol/Schedule';
import CSGOToday from '../csgo/Daily';
import DOTAToday from '../dota/Daily';
import LOLToday from '../lol/Daily';
import CSGOTalk from '../csgo/Talk';
import DOTATalk from '../dota/Talk';
import LOLTalk from '../lol/Talk';
import NavStore from '../../NavStore';
import NavList from '../../NavList';

@observer
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Container style={Styles.mainContainer}>
      <Head {...this.props} />
      <Content padder>
        {NavStore.topNav == NavList.topNav.CSGO && NavStore.bottonNav == NavList.bottomNav.TODAY ? <CSGOToday {...this.props} /> : null}
        {NavStore.topNav == NavList.topNav.CSGO && NavStore.bottonNav == NavList.bottomNav.TOURNAMENT ? <CSGOSchedule {...this.props} /> : null}
        {NavStore.topNav == NavList.topNav.CSGO && NavStore.bottonNav == NavList.bottomNav.TALKS ? <CSGOTalk {...this.props} /> : null}

        {NavStore.topNav == NavList.topNav.DOTA && NavStore.bottonNav == NavList.bottomNav.TODAY ? <DOTAToday {...this.props} /> : null}
        {NavStore.topNav == NavList.topNav.DOTA && NavStore.bottonNav == NavList.bottomNav.TOURNAMENT ? <DOTASchedule {...this.props} /> : null}
        {NavStore.topNav == NavList.topNav.DOTA && NavStore.bottonNav == NavList.bottomNav.TALKS ? <DOTATalk {...this.props} /> : null}

        {NavStore.topNav == NavList.topNav.LOL && NavStore.bottonNav == NavList.bottomNav.TODAY ? <LOLToday {...this.props} /> : null}
        {NavStore.topNav == NavList.topNav.LOL && NavStore.bottonNav == NavList.bottomNav.TOURNAMENT ? <LOLSchedule {...this.props} /> : null}
        {NavStore.topNav == NavList.topNav.LOL && NavStore.bottonNav == NavList.bottomNav.TALKS ? <LOLTalk {...this.props} /> : null}
      </Content>
      <Foot />
    </Container>;
  }
}

export default Home;
