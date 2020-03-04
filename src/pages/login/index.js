import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, Loginbox, Input, Button } from './style';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';


class Login extends PureComponent {
	render() {
		const { loginStatus } = this.props;
		if(!loginStatus) {
			return (
			<LoginWrapper>
				<Loginbox>
				{/* styled-components给我们提供了innerRef，可以拿到对应的value */}
					<Input placeholder="账号" ref={(input) => {this.account = input}} />
					<Input placeholder="账号" type='password' ref={(input) => {this.password = input}} />
					<Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
				</Loginbox>
			</LoginWrapper>
			)
		}else {
			// 重定向到首页
			return <Redirect to='/' />
		}
	}

	
}


const mapStateToProps = (state) => ({
	loginStatus: state.getIn(['login','login'])
})



const mapDispatchToProps = (dispatch) => ({
	login(accountElem, passwordElem) {
		dispatch(actionCreators.login(accountElem.value, passwordElem.value))
		// console.log(accountElem.value, passwordElem.value)
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);