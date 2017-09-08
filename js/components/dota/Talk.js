import React from "react";
import { Content, Fab, Icon } from "native-base";

class DOTATalk extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Content>
        <Fab position="bottomRight" > <Icon name="share" /> </Fab>
      </Content>
    );
  }
}

export default DOTATalk;
