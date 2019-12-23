import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './styles.css';

const cx= classNames.bind(styles);


class RenderText extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='render-text' className={cx('render-text')} aria-label='text'>
                {this.props.textToShow}
            </div>
        );
    }
};

RenderText.propTypes = {
    textToShow: PropTypes.string,
};

export default RenderText;
