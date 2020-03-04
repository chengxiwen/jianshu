import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
// 引入login目录下的actionCreators
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList,
	NavSearch,
	Addition,
	Button
} from './style';



class Header extends Component {
// 聚焦则显示SearchInfo，不聚焦则隐藏
	getListArea () {
		const { focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		// 因为此时list是immutable对象，toJS将其转换成普通的JS对象
		const newList = list.toJS();
		const pageList = [];
		// 不然还没发ajax的时候，newList为空，也会渲染，就会有警告newList[i]为undefined
		if(newList.length){
			for(let i=(page-1)*10;i<page*10;i++){
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}
		if(focused || mouseIn){
			return (
				<SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch 
							onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
						>
							<i ref={(icon) => {this.spinIcon = icon}} className = "iconfont spin">&#xe851;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
					{/* 这里list已经是immutable对象了，immutable中也提供了map方法 */}
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
	}else {
		return null;
	}
}


	render(){
		const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
		return ( 
			<HeaderWrapper>
				<Link to='/'>
					<Logo />
				</Link>
				<Nav>
					<NavItem className = "left active">首页</NavItem> 
					<NavItem className = "left">下载App</NavItem> 
					{
						login ? 
						<NavItem onClick={logout} className = "right">退出</NavItem> : 
						<Link to='/login'><NavItem className = "right">登陆</NavItem></Link>
					} 
					<NavItem className = "right">
					<i className = "iconfont">&#xe636;</i> 
					</NavItem> 
					<SearchWrapper> { /* in是用来控制出场和入场动画的，值为true或false，这里就可以用this.state.focued来作为in的值 */ } 
						{/*因为 mapStateToProps将store里的数据映射到组件的props里，所以this.state.focused可以改为this.props.focused */}
						<CSSTransition 
							in = { focused }
							timeout = { 200 }
							classNames = "slide"
						>
							<NavSearch 
								className = { focused ? 'focused' : '' }
								onFocus = { () => handleInputFocus(list) }
								onBlur = { handleInputBlur }
							>
							</NavSearch> 
						</CSSTransition> 
						<i className = { focused ? 'focused iconfont zoom' : 'iconfont zoom' } >&#xe614;</i>
						{this.getListArea()}
					</SearchWrapper> 
				</Nav>
				<Addition>
					<Button className = "writing">
					<i className = "iconfont">&#xe615;</i>
					写文章 
					</Button> 
					<Button className = "reg">注册</Button> 
				</Addition> 
			</HeaderWrapper>
	)
	}
}

// // 因为Header组件里面只有render函数了，将其变成无状态组件，所以原本的this.props.focused变成props.focused
// const Header = (props) => {
	
// }

const mapStateToProps = (state) => {
	// 将store里的数据映射到组件的props里，前面的this.state.focused可以改为this.props.focused
	// 因为现在数据在header底下，所以是state.header.focused
	return {
		// immutable类型的数据调用对象的属性要通过get
		// 这里的state是在最外层的大的store文件夹下创建的，所以他还是一个js对象，
		// 而state.header是immutable对象，所以不太统一
		// 如果将state变成一个immutable对象，需要一个第三方的模块叫redux-immutable
		// 通过在最外层的store文件夹下的reducer文件的修改，state变成了immutable对象，所以获取属性方式也变成get
		// focused: state.get('header').get('focused')
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		login: state.getIn(['login','login'])
	}
}

const mapDispatchToProps = (disptch) => {
	return {
		handleInputFocus(list){
			// 这样写避免点击一次搜索框，发送一次ajax请求
			if(list.size===0){
				disptch(actionCreators.getList());
			}
			// 发送异步请求
			// disptch(actionCreators.getList());
			disptch(actionCreators.searchFocus());
		},
		handleInputBlur(){
			disptch(actionCreators.searchBlur());
		},
		handleMouseEnter(){
			disptch(actionCreators.mouseEnter());
		},
		handleMouseLeave(){
			disptch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spin){
			// 每点击换一批，前面的小图标旋转360度，用的ref获取DOM节点做的
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else{
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
			if(page<totalPage){
				disptch(actionCreators.changePage(page+1));
			}else{
				disptch(actionCreators.changePage(1));
			}	
		},
		logout() {
			disptch(loginActionCreators.logout())
		}
	}
}

// 让Header组件和store连接起来
export default connect(mapStateToProps,mapDispatchToProps)(Header);