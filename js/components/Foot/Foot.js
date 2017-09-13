import React from "react";
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
import NavStore from '../../NavStore';

class Foot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false
    };
  }

  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
    });
    NavStore.setBottomNav(0);
  }

  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
    });
    NavStore.setBottomNav(1);
  }

  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
    });
    NavStore.setBottomNav(2);
  }

  render(){
      return (
        <Footer>
            <FooterTab>
                <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
                <Icon active={this.state.tab1} name="cog" />
                <Text>Today</Text>
                </Button>
                <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
                <Icon active={this.state.tab2} name="grid" />
                <Text>Tournaments</Text>
                </Button>
                <Button active={this.state.tab3} onPress={() => this.toggleTab3()}>
                <Icon active={this.state.tab3} name="chatboxes" />
                <Text>Talks</Text>
                </Button>
            </FooterTab>
            </Footer>
        );
  }
}

export default Foot;