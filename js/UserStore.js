import {observable} from 'mobx';
import {persist} from 'mobx-persist';

class Store {
  @persist("object")
  @observable
  user = {};

  setUser(usr) {
      this.user = usr;
  }
}
var UserStore = new Store;

export default UserStore;