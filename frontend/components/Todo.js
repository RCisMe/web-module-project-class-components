import React from 'react';

export default class Todo extends React.Component {
  render() {
    const { id, name, completed, toggleCompletion } = this.props.todo;
    return (
      <div onClick={() => toggleCompletion(id)}>
        {name} {completed && ' √ '}
      </div>
    );
  }
}
