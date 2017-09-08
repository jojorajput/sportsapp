import React from 'react';
import {Button, Content, Fab, Icon} from 'native-base';

class CSGOTalk extends React.Component{
    constructor(props){
        super(props);
        this.state={
            active: true
        }
    }
    render(){
        return <Content>
            <Fab position="topRight" direction="up" active={this.state.active} containerStyle={{}} style={{ backgroundColor: "#5067FF" }} onPress={() => {
                alert("Add Comment");
              }}>
              <Icon name="share" />
              <Button style={{ backgroundColor: "#34A34F" }}>
                <Icon name="person" />
              </Button>
            </Fab>
          </Content>;
    }
}

export default CSGOTalk;