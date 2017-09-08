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


import Foot from "../Foot/Foot";

import CSGOToday from "../csgo/Daily";
import CSGOSchedule from "../csgo/Schedule";

export default (CSGOScreen = TabNavigator(
  {
    CSGOToday: { screen: CSGOToday },
    CSGOSchedule: { screen: CSGOSchedule }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return <Footer>
          <FooterTab>
            <Button active={props.navigationState.index === 0} onPress={() => props.navigation.navigate("CSGOToday")}>
              <Icon active={props.navigationState.index === 0} name="cog" />
              <Text>Today</Text>
            </Button>
            <Button active={props.navigationState.index === 1} onPress={() => props.navigation.navigate("CSGOSchedule")}>
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
