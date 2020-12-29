import React from 'react';
import Proptypes from 'prop-types';

export default function Buttons({ handleClick, timingEvents }) {
  const label = timingEvents.length % 2 === 0 ? 'icon-play' : 'icon-pause';

  return (
    <div>
      <button className={label} type="button" onClick={handleClick}>
      </button>
    </div>
  );
}

Buttons.propTypes = {
  handleClick: Proptypes.func.isRequired,
  timingEvents: Proptypes.arrayOf(Proptypes.object).isRequired,
};
