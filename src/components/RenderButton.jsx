import React from 'react';
import PropTypes from 'prop-types';

class RenderButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(event) {
        this.props.getText('');
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

export default RenderButton;
