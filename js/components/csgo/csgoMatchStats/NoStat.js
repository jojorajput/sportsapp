import React from 'react';
import {Card, CardItem, H3, Text} from 'native-base';
class NoStat extends React.Component{
    render(){
        return(
        <Card >
            <CardItem>
                <H3>Match Statistics Not Available</H3>
            </CardItem>
            <CardItem>
                <Text >Try Again Later</Text>
            </CardItem>
        </Card>
        );
    }
}

export default NoStat;