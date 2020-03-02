import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	Addition,
	Button
} from './style';

// 因为Header组件里面只有render函数了，将其变成无状态组件，所以原本的this.props.focused变成props.focused
const Header = (props) => {
	return ( 
		<HeaderWrapper>
			<Logo />
			<Nav>
				<NavItem className = "left active">首页</NavItem> 
				<NavItem className = "left">下载App</NavItem> 
				<NavItem className = "right">登陆</NavItem> 
				<NavItem className = "right">
				<i className = "iconfont">&#xe636;</i> 
				</NavItem> 
				<SearchWrapper> { /* in是用来控制出场和入场动画的，值为true或false，这里就可以用this.state.focued来作为in的值 */ } 
					{/*因为 mapStateToProps将store里的数据映射到组件的props里，所以this.state.focused可以改为this.props.focused */}
					<CSSTransition 
						in = { props.focused }
						timeout = { 200 }
						classNames = "slide"
					>
						<NavSearch 
							className = { props.focused ? 'focused' : '' }
							onFocus = { props.handleInputFocus }
							onBlur = { props.handleInputBlur }
						>
						</NavSearch> 
					</CSSTransition> 
					<i className = { props.focused ? 'focused iconfont' : 'iconfont' } >&#xe614;</i>
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

const mapStateToProps = (state) => {
	// 将store里的数据映射到组件的props里，前面的this.state.focused可以改为this.props.focused
	// 因为现在数据在header底下，所以是state.header.focused
	return {
		focused: state.header.focused
	}
}

const mapDispatchToProps = (disptch) => {
	return {
		handleInputFocus(){
			const action = {
				type: 'search_focus'
			};
			disptch(action);
		},
		handleInputBlur(){
			const action = {
				type: 'search_blur'
			};
			disptch(action);
		}
	}
}

// 让Header组件和store连接起来
export default connect(mapStateToProps,mapDispatchToProps)(Header);