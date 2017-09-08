import React, { Component  } from "react";

import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body
} from "native-base";
import {BackHandler} from 'react-native';
// import Home from '../Home/Home';
import Head from '../Head/Head';
import Foot from '../Foot/Foot';
import Styles from "./Styles";

class Test extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return <Container style={Styles.mainContainer}>
        <Head {...this.props} />
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  This is just a basic card with some text to boot.
                </Text>

                <Text>Like it? Keep Scrolling...</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <Foot />
      </Container>;
  }
}

export default Test;
