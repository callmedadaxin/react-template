import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

@connect(state => state.User)
export default class User extends PureComponent {
  static propTypes = {

  }

  render () {
    console.log(this.props)
    return (
      <div>
        User
      </div>
    )
  }
}
