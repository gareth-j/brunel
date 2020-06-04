import PropTypes from "prop-types";
import React from "react";

import TextButton from "./TextButton";
import styles from "./AnalysisPanel.module.css";

class AnalysisPanel extends React.Component {
  render() {
    const buttonPadding = "1vh 1vw 1vh 1vw";

    return (
      <div className={styles.wholePanel}>
        <div className={styles.verticalSpaceTitle}></div>
        <div className={styles.titleText}>Analysis</div>
        <div className={styles.verticalSpace}></div>

        <TextButton
          padding={buttonPadding}
          onClick={() => {
            this.props.toggleSearchOverlay();
            this.props.togglePanel();
          }}
        >
          Search
        </TextButton>
        <TextButton
          padding={buttonPadding}
          onClick={() => {
            this.props.toggleFilterPanel();
            this.props.togglePanel();
          }}
        >
          Filters
        </TextButton>

        <TextButton
          padding={buttonPadding}
          onClick={() => {
            this.props.toggleTimeLinePanel();
            this.props.togglePanel();
          }}
        >
          Timeline
        </TextButton>

        <TextButton
          padding={buttonPadding}
          className={styles.button}
          onClick={() => {
            this.props.toggleOptionsOverlay();
            this.props.togglePanel();
          }}
        >
          Options
        </TextButton>

        <div className={styles.verticalSpace}></div>
        <TextButton
          padding={buttonPadding}
          onClick={() => {
            this.props.togglePanel();
          }}
        >
          Close
        </TextButton>
      </div>
    );
  }
}

AnalysisPanel.propTypes = {
  toggleSearchOverlay: PropTypes.func.isRequired,
  toggleFilterPanel: PropTypes.func.isRequired,
  toggleTimeLinePanel: PropTypes.func.isRequired,
  togglePanel: PropTypes.func.isRequired,
  toggleOptionsOverlay: PropTypes.func.isRequired,
};

export default AnalysisPanel;