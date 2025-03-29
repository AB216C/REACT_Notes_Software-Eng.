//This is class-based react example

import {Component} from 'react';

class ClassGreetingPro extends Component {

  constructor() {
    super()
    this.state = {
      name: "John Bosco"
    }

    this.changeName = this.changeName.bind(this)
  }


  changeName() {
    this.setState({name:"John Gakuba"})
  }

  render () {
    const name = this.state.name;

    return (
      <div>
        <p>Hello, {name}, this is a class-based greeting</p>
        <button onClick={this.changeName}>Chage Name</button>
      </div>
    )
  }
}

export default ClassGreetingPro;