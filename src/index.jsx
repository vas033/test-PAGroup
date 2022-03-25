import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { App } from './App';
import { Comments } from './App/Body/Comments';
import { CommentsPage } from './App/CommentsPage';

const Root = () => {
        return (

                <BrowserRouter>
                        <Normalize />
                        <Routes>
                                <Route path='/' element={<App />} />
                                <Route path='/comments' element={<CommentsPage />} />
                                <Route path='*' element={<App />} />
                        </Routes>
                </BrowserRouter>


        )
};

window.addEventListener('load', () => {
        ReactDOM.render(<Root />, document.getElementById('react-app'));
});
