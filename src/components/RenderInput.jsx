import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { enterTextAction } from '../actions.js';

const inputRef = React.createRef();
class RenderInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidUpdate() {
        if(this.props.inputText === '') {
            inputRef.current.value = '';
        }
    }

    handleInput(event) {
        this.props.enterText(event.target.value);
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

/* Access the state from the redux store and give them an alias to be used in the component
*/
const mapStateToProps = state => ({
  inputText: state.text,
});

/* Provides dispatch function in this.props
*/
const mapDispatchToProps = dispatch => ({
  enterText: text => dispatch(enterTextAction(text)),
});


export default connect(mapStateToProps, mapDispatchToProps)(RenderInput);
