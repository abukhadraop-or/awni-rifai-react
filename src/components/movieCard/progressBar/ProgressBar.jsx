import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  ProgressBarContainer,
  progressBarStyles,
} from 'components/movieCard/progressBar/progress-bar.styled';

/**
 * Progress bar that accepts voteAverage as a prop.
 * @param {object} props
 * @param {number} props.voteAverage
 * @return {JSX.Element}
 */
function ProgressBar({ voteAverage }) {
  return (
    <ProgressBarContainer green={voteAverage > 7 ? 'true' : 'false'}>
      <CircularProgressbar
        value={voteAverage}
        maxValue={10}
        background="true"
        text={`${voteAverage * 10}%`}
        styles={progressBarStyles}
      />
    </ProgressBarContainer>
  );
}

ProgressBar.propTypes = {
  voteAverage: PropTypes.number,
};
ProgressBar.defaultProps = {
  voteAverage: 0,
};
export default ProgressBar;
