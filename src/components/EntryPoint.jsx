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
        this.getText = this.getText.bind(this);
    }

    getText(value) {
        this.setState({ inputText: value })
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div id='entryPoint' className={cx('entry-point')}>
                    <RenderButton getText={this.getText} />
                    <div className={cx('add-padding')} />
                    <RenderInput getText={this.getText} textToShow={this.state.inputText} />
                    <div className={cx('add-padding')} />
                    <RenderText textToShow={this.state.inputText}/>
                </div>
            </React.Fragment>
        );
    };
};

export default EntryPoint;
