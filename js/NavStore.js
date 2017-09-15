import {observable} from 'mobx';
import navList from './NavList';
class Store {
  @observable topNav = navList.topNav.CSGO;
  @observable bottonNav = navList.bottomNav.TODAY;
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
}
var NavStore = new Store;

export default  NavStore;