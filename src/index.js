import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyled } from './style.js';
import { GlobalStyleIcon } from './statics/iconfont/iconfont';
import App from './App';

ReactDOM.render( <Fragment> <GlobalStyled /> <GlobalStyleIcon /><App /> </Fragment> , document.getElementById('root'));