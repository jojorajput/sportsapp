import React from 'react';
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/Signup';
import Splash from './components/Splash';
import Settings from './components/Settings';
import Profile from './components/Profile';
import CSGOMatchStats from './components/csgo/csgoMatchStats';
import CSGOTourSchedule from './components/csgo/csgoTourSchedule';
import DOTAMatchStats from './components/dota/dotaMatchStats';
import DOTATourSchedule from './components/dota/dotaTourSchedule';
import LOLMatchStats from "./components/lol/lolMatchStats";
import LOLTourSchedule from "./components/lol/lolTourSchedule";
import CSGOThread from './components/csgo/csgoTalk';
import DOTAThread from './components/dota/dotaTalk';
import LOLThread from './components/lol/lolTalk';
console.ignoredYellowBox = ["Setting a timer"];

const AppNavigator = StackNavigator({
    Splash: {screen: Splash},
    Login: {screen: Login},
    Home: {screen: Home},
    Settings: {screen: Settings},
    Profile: {screen: Profile},
    SignUp: {screen: SignUp},
    CSGOMatchStats: {screen: CSGOMatchStats},
    CSGOTourSchedule: {screen: CSGOTourSchedule},
    DOTAMatchStats: {screen: DOTAMatchStats},
    DOTATourSchedule: {screen: DOTATourSchedule},
    LOLMatchStats: {screen: LOLMatchStats},
    LOLTourSchedule: {screen: LOLTourSchedule},
    CSGOThread: {screen: CSGOThread},
    DOTAThread: {screen: DOTAThread},
    LOLThread: {screen: LOLThread}
    
},
{
    initialRouteName: "Splash",
    headerMode: "none"
}
);
export default () => (
  <Root>
    <AppNavigator />
  </Root>
);