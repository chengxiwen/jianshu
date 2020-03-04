import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Header from './common/header';
import store from './store';

class App extends Component {
    render() {
        return ( 
			<Provider store = { store }>         
                <BrowserRouter>
                    <div>
                    {/* 使用路由的组件都要包裹在BrowserRouter里面，这里Header首页Logo组件使用了Link，若不包裹在里面则会出错 */}
                        <Header />
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/detail' exact component={Detail}></Route>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}


export default App;