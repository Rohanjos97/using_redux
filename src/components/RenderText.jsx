import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles.css';

const cx= classNames.bind(styles);


class RenderText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='render-text' className={cx('render-text')} aria-label='text'>
                {this.props.inputText}
            </div>
        );
    }
};

RenderText.propTypes = {
    textToShow: PropTypes.string,
};

/* Access the state from the redux store and give them an alias to be used in the component
*/
const mapStateToProps = state => ({
  inputText: state.text,
});


export default connect(mapStateToProps)(RenderText);
