import React from 'react';
import PropTypes from 'prop-types';

const inputRef = React.createRef();
class RenderInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidUpdate() {
        if(this.props.textToShow === '') {
            inputRef.current.value = '';
        }
    }

    handleInput(event) {
        this.props.getText(event.target.value);
    }

    render() {
        return (
            <input ref={inputRef} onChange={this.handleInput}/>
        );
    }
};

RenderInput.propTypes = {
    getText: PropTypes.func,
};

export default RenderInput;
