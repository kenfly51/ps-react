import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './progressBar.css';

class ProgressBarCSSModules extends PureComponent {
  getColor = (percent) => {
    if (percent === 100) {
      return 'green';
    } else if (percent > 50) {
      return 'lightgreen';
    } else {
      return 'red';
    }
  }

  getWidthAsPercentOfTotalWidth = () => {
    return parseInt(this.props.width * (this.props.percent / 100), 10);
  }

  render() {
    const { percent, width, height } = this.props;
    return (
      <div className={styles.bar} style={{width: width}}>
        <div style={{
            width: this.getWidthAsPercentOfTotalWidth(),
            height,
            backgroundColor: this.getColor(percent)
          }}
        />
      </div>
    );
  }
}

ProgressBarCSSModules.propTypes = {
  /** Percent of progress completed */
  percent: PropTypes.number.isRequired,
  /** Bar width */
  width: PropTypes.number.isRequired,
  /** Bar height */
  height: PropTypes.number,
};

ProgressBarCSSModules.defaultProps = {
  height: 5
};

export default ProgressBarCSSModules;