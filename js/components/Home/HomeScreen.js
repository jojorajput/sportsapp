import React from 'react';
import {TabNavigator} from 'react-navigation';

import Head from '../Head/Head';

import CSGOScreen from './CSGOScreen';
import DOTAScreen from './DOTAScreen';

export default (HomeScreen =TabNavigator(
    {
        CSGOScreen: {screen: CSGOScreen},
        DOTAScreen: {screen: DOTAScreen},

    },
    {
        tabBarPosition: 'top',
        tabBarComponent: props=>{
            return <Head {...props} />;
        }
    }
));
