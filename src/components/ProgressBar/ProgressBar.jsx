import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  ProgressBarContainer,
  progressBarStyles,
} from 'components/ProgressBar/progress-bar.styled';

/**
 * Progress bar that accepts voteAverage as a prop.
 * 
 * @param {Object} props
 * @param {number} props.voteAverage
 * 
 * @return {JSX.Element}
 */
function ProgressBar({ voteAverage }) {
  return (
    <ProgressBarContainer isGreen={voteAverage > 7}>
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
