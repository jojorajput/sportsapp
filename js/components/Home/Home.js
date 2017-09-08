import React, { Component } from "react";

import { Container, Content, Card, CardItem, Text, Body } from "native-base";
import { BackHandler } from "react-native";
import {observer} from 'mobx-react';
import Head from "../Head/Head";
import Foot from "../Foot/Foot";
import Styles from "./Styles";
import CSGOSchedule from '../csgo/Schedule';
import DOTASchedule from '../dota/schedule';
import LOLSchedule from '../lol/Schedule';
import CSGOToday from '../csgo/Daily';
import DOTAToday from '../dota/Daily';
import LOLToday from '../lol/Daily';
import NavStore from '../../NavStore';
@observer
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Container style={Styles.mainContainer}>
        <Head {...this.props}  />
        <Content padder>
          {NavStore.topNav == 0 && NavStore.bottonNav == 0 ? <CSGOToday {...this.props} /> : null}
          {NavStore.topNav == 0 && NavStore.bottonNav == 1 ? <CSGOSchedule {...this.props} /> : null}
          {NavStore.topNav == 0 && NavStore.bottonNav == 2 ? <CSGOToday {...this.props} /> : null}

          {NavStore.topNav == 1 && NavStore.bottonNav == 0 ? <DOTAToday {...this.props} /> : null}
          {NavStore.topNav == 1 && NavStore.bottonNav == 1 ? <DOTASchedule {...this.props} /> : null}
          {NavStore.topNav == 1 && NavStore.bottonNav == 2 ? <DOTAToday {...this.props} /> : null}

          {NavStore.topNav == 2 && NavStore.bottonNav == 0 ? <LOLToday {...this.props} /> : null}
          {NavStore.topNav == 2 && NavStore.bottonNav == 1 ? <LOLSchedule {...this.props} /> : null}
          {NavStore.topNav == 2 && NavStore.bottonNav == 2 ? <LOLToday {...this.props} /> : null}
        </Content>
        <Foot  />
      </Container>;
  }
}

export default Home;
