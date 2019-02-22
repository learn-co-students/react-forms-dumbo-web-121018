import React, { Component } from 'react';

export default class ControlledInput extends Component {
  state ={
    value: 'tacos'
  }

  doAThing(banana){
    console.log(banana.value)
  }

  handleSubmit(e, banana) {
    e.preventDefault();
    this.doAThing(banana)
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e, this.state)}>
        <input
            type="text"
            value={this.state.value}
            onChange={e => this.handleChange(e)}
          />
      </form>
    )
  }
}
