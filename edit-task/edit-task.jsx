import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditTask = ({ id, onEditTask, description, editTask, enableEditTask  }) => {

	const [newDescription, valueForm] = useState(description);

	return (
      <div>
        {onEditTask ? (
          <li className="editing">
            <form
              onSubmit={(event) => {
						event.preventDefault();
						editTask(id, newDescription);
						enableEditTask();
					}}
            >
              <input
                type="text"
                className="edit"
                value={newDescription}
                onChange={(event) => valueForm(event.target.value)}
              />
            </form>
          </li>
        ) : null}
      </div>
   );
};

EditTask.defaultProps = {
	description: '',
    editTask: () => {},
    enableEditTask: () => {},
  };

  EditTask.propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string,
    onEditTask: PropTypes.bool.isRequired,
    editTask: PropTypes.func,
    enableEditTask: PropTypes.func,
  };

  export default EditTask;