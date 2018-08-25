import { observable } from "mobx";
class Store {
  @observable title = "Login";
}
export default new Store();
