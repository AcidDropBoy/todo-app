import React from 'react';
import formatDuration from 'format-duration';
import PropTypes from 'prop-types';

function elapsedTime(events) {
  let elapsed = 0;
  for (let i = 0; i < events.length; i += 2) {
    const start = events[i];
    const stop = events[i + 1] || new Date();
    elapsed += stop - start;
  }

  return elapsed;
}
export default function ElapsedTime({ timingEvents }) {
  return <div className="timer-el">{formatDuration(elapsedTime(timingEvents))}</div>;
}
ElapsedTime.propTypes = {
  timingEvents: PropTypes.arrayOf(PropTypes.object).isRequired,
};
