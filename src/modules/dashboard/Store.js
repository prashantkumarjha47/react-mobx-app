import { observable } from "mobx";
class Store {
  @observable title = "Dashboard";
}
export default new Store();
