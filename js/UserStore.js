import {observable} from 'mobx';
import {persist} from 'mobx-persist';

class Store {
  @persist("object")
  @observable
  user = {};

  setUser(usr) {
    return new Promise((resolve, reject) => {
      this.user = usr;
      resolve(this.user);
      reject("Error !!!");
    });
  }

//   getUser() {
//     return new Promise((resolve, reject) => {
//       console.log(this.user);
//       resolve(this.user);
//       reject("Errrrr");
//     });
//   }
}
var UserStore = new Store;

export default UserStore;