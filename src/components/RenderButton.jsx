import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { buttonPressedAction } from '../actions.js';

class RenderButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(event) {
        this.props.buttonPress();
    }

    render() {
        return (
            <button onClick={this.handleButtonClick}>
                Clear Text
            </button>
        );
    }
};

RenderButton.propTypes = {
    getText: PropTypes.func,
};

/* Provides dispatch function in this.props
*/
const mapDispatchToProps = dispatch => ({
  buttonPress: () => dispatch(buttonPressedAction())
});

export default connect(null, mapDispatchToProps)(RenderButton);
