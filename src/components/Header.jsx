import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css'

const cx= classNames.bind(styles);

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='entry-header' className={cx('entry-header')}>
                THIS IS A HEADER SO PLEASE FORGIVE IF SOMETHING IS NOT MENTIONED HERE
            </div>
        );
    }
};

export default Header;
