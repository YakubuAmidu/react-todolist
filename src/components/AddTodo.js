import React, { Component } from 'react';

class AddTodo extends Component {
  render() {
    return (
      <form style={{ display: 'flex' }}>
        <input
          type='text'
          name='title'
          style={{ flex: '10', padding: '5px' }}
          placeholder='Add todo...'
        />
        <input type='submit' value='submit' style={{ flex: '1' }} />
      </form>
    );
  }
}

export default AddTodo;
