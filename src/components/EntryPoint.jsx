import React from 'react';
import RenderButton from './RenderButton.jsx';
import RenderText from './RenderText.jsx';
import Header from './Header.jsx';
import classNames from 'classnames/bind';
import RenderInput from './RenderInput.jsx';
import styles from './styles.css';

const cx = classNames.bind(styles);

class EntryPoint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: null,
        };
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div id='entryPoint' className={cx('entry-point')}>
                    <RenderButton />
                    <div className={cx('add-padding')} />
                    <RenderInput />
                    <div className={cx('add-padding')} />
                    <RenderText />
                </div>
            </React.Fragment>
        );
    };
};

export default EntryPoint;
