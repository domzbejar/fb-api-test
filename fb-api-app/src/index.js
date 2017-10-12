import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link} from 'react-router-dom';

import './index.css';
import MyApp from './components/MyApp';
import FbLogin from './components/FbLogin';
import Layout from './components/Layout';
import LoginComponentDev from './components/LoginComponentDev';
import Login from './components/Login';
import FacebookApi from './components/FacebookApi';


ReactDOM.render(
<BrowserRouter>
<FacebookApi/>
</BrowserRouter>

,document.getElementById('root'));

