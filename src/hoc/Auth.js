import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

export default ProtectedRoute => {
  class AuthHOC extends Component {
    componentWillMount() {
      if (!localStorage.getItem("token")) {
        this.props.history.push('/login')
      }
    }
    componentWillUpdate(nextProps) {
      if (!localStorage.getItem("token")) {
        this.props.history.push('/login')
      }
    }
    render() {
        return <ProtectedRoute {...this.props} />
    }
  }
  return withRouter(AuthHOC)
}
