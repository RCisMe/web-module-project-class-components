import React from 'react';

export default class Form extends React.Component {
  state = {
    name: '',
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.addTodo(this.state.name);
    this.setState({
      name: '', // Directly updating the name state
    });
  };

  onChange = (evt) => {
    const { value } = evt.target;
    this.setState({
      name: value, // Correctly updating the name state
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.name}
          onChange={this.onChange} // Corrected method name case
        />
        <input type="submit" />
      </form>
    );
  }
}
