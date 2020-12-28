import React from 'react';
import Proptypes from 'prop-types';
import Start from '../start/start';
import Stop from '../stop/stop';

export default function Buttons({ handleClick, timingEvents }) {
  const label = timingEvents.length % 2 === 0 ? <Start /> : <Stop />;
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {label}
      </button>
    </div>
  );
}

Buttons.propTypes = {
  handleClick: Proptypes.func.isRequired,
  timingEvents: Proptypes.arrayOf(Proptypes.object).isRequired,
};
