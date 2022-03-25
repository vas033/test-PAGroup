import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import { App } from './App';

const Root = () => {
        return (
                <React.Fragment>
                        <Normalize />
                        <App />
                </React.Fragment>
        )
};

window.addEventListener('load', () => {
        ReactDOM.render(<Root />, document.getElementById('react-app'));
});
