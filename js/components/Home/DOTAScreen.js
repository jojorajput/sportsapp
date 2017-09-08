import React from "react";
import { TabNavigator } from "react-navigation";
import {
  Text,
  H3,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body
} from "native-base";

import Head from "../Head/Head";
import Foot from "../Foot/Foot";

import DOTAToday from "../dota/Daily";
import DOTASchedule from "../dota/schedule";

export default (DOTAScreen = TabNavigator(
  {
    DOTAToday: { screen: DOTAToday },
    DOTASchedule: { screen: DOTASchedule }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return <Footer>
          <FooterTab>
            <Button active={props.navigationState.index === 0} onPress={() => props.navigation.navigate("DOTAToday")}>
              <Icon active={props.navigationState.index === 0} name="cog" />
              <Text>Today</Text>
            </Button>
            <Button active={props.navigationState.index === 1} onPress={() => props.navigation.navigate("DOTASchedule")}>
              <Icon active={props.navigationState.index === 1} name="grid" />
              <Text>Schedule</Text>
            </Button>
            <Button active={props.navigationState.index === 2} onPress={() => this.toggleTab3()}>
              <Icon active={props.navigationState.index === 2} name="chatboxes" />
              <Text>Talks</Text>
            </Button>
          </FooterTab>
        </Footer>;
    }
  }
));
