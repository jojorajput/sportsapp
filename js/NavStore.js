import {observable} from 'mobx';

class Store {
  @observable topNav = 0;
  @observable bottonNav = 0;
  matchId = "";
  tourId = "";
  userName="";
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