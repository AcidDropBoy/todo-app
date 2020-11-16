import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

const NewTaskForm = ({ addTask }) => {
  const [description, setDescription] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addTask(description);
        setDescription('');
      }}
    >
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
      />
    </form>
  );
};

NewTaskForm.defaultProps = {
  addTask: () => {},
};

NewTaskForm.propTypes = {
  addTask: PropTypes.func,
};

export default NewTaskForm;
