import {observable} from 'mobx';
import navList from './NavList';
import I18n from 'ex-react-native-i18n';
class Store {
  @observable topNav = navList.topNav.DOTA;
  @observable bottonNav = navList.bottomNav.TODAY;
  @observable locale = I18n.currentLocale();
  matchId = "";
  tourId = "";
  threadId="";

  setTopNav(top) {
    this.topNav = top;
  }

  setBottomNav(bottom) {
    this.bottonNav = bottom;
  }

  setMatchId(id) {
    this.matchId = id;
  }

  setTourId(id) {
    this.tourId = id;
  }

  setThreadId(id){
    this.threadId=id;
  }
  setLocale(loc){
    this.locale=loc;
  }
}
var NavStore = new Store;

export default  NavStore;