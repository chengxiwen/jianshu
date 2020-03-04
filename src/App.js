import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Header from './common/header';
import store from './store';

class App extends Component {
	render() {
		return ( 
			<Provider store = { store }>         
				<BrowserRouter>
					<div>
					{/* 使用路由的组件都要包裹在BrowserRouter里面，这里Header首页Logo组件使用了Link，若不包裹在里面则会出错 */}
						{/* Header组件放在这儿使得每个页面都显示头部部分，即common文件夹中的Header*/}
						<Header />
						<Route path='/' exact component={Home}></Route>
						<Route path='/login' exact component={Login}></Route>
						<Route path='/detail/:id' exact component={Detail}></Route>
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}


export default App;