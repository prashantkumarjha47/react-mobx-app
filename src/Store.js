import { observable } from "mobx";
class Store {
  @observable
  pfrDetails = "hello";
}
export default new Store();
