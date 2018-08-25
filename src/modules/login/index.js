import React from "react";
import { observer } from "mobx-react";
import store from "./Store";
@observer
class Login extends React.Component {
  render() {
    return <div>{store.title}</div>;
  }
}
export default Login;
