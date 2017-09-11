import React from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import SignUp from './components/Signup/SignUp';
import Head from './components/Head/Head';
import Splash from './components/Splash/Splash';
import Settings from './components/Settings/Settings';
import CSGOMatchStats from './components/csgo/csgoMatchStats/CSGOMatchStats';
import CSGOTourSchedule from './components/csgo/csgoTourSchedule/CSGOTourSchedule';
import DOTAMatchStats from './components/dota/dotaMatchStats/DOTAMatchStats';
import DOTATourSchedule from './components/dota/dotaTourSchedule/DOTATourSchedule';
import LOLMatchStats from "./components/lol/lolMatchStats/LOLMatchStats";
import LOLTourSchedule from "./components/lol/lolTourSchedule/LOLTourSchedule";
import CSGOThread from './components/csgo/csgoTalk/thread';
import DOTAThread from './components/dota/dotaTalk/thread';
import LOLThread from './components/lol/lolTalk/thread';
console.ignoredYellowBox = ["Setting a timer"];

const AppNavigator = StackNavigator({
    Splash: {screen: Splash},
    Login: {screen: Login},
    Home: {screen: Home},
    Settings: {screen: Settings},
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